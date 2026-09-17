<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const DEFAULT_CHAT_ID = '-5029569207';
const FORM_PAGE = '/promo.proginsky';

function answer(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function clean_text(string $value, int $max = 200): string
{
    $value = trim(preg_replace('/[\x00-\x1F\x7F]/u', ' ', $value) ?? '');
    return function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
}

function tg_escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function normalize_phone(string $raw): array
{
    $digits = preg_replace('/\D+/', '', $raw) ?? '';
    if (strlen($digits) === 11 && $digits[0] === '8') {
        $digits = '7' . substr($digits, 1);
    }
    if (strlen($digits) === 10) {
        $digits = '7' . $digits;
    }

    $valid = (bool) preg_match('/^7\d{10}$/', $digits);
    if (!$valid) {
        return ['valid' => false, 'digits' => $digits, 'pretty' => clean_text($raw, 32), 'tel' => ''];
    }

    $pretty = sprintf(
        '+7 (%s) %s-%s-%s',
        substr($digits, 1, 3),
        substr($digits, 4, 3),
        substr($digits, 7, 2),
        substr($digits, 9, 2)
    );

    return ['valid' => true, 'digits' => $digits, 'pretty' => $pretty, 'tel' => '+' . $digits];
}

function telegram_send(string $token, string $chatId, string $message): array
{
    if (!function_exists('curl_init')) {
        return ['ok' => false, 'error' => 'PHP cURL extension is not enabled'];
    }

    if (!preg_match('/^\d+:[A-Za-z0-9_-]+$/', $token)) {
        return ['ok' => false, 'error' => 'Invalid Telegram bot token format'];
    }

    $ch = curl_init('https://api.telegram.org/bot' . $token . '/sendMessage');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_POSTFIELDS => json_encode([
            'chat_id' => $chatId,
            'text' => $message,
            'parse_mode' => 'HTML',
            'disable_web_page_preview' => true,
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    ]);

    $body = curl_exec($ch);
    $curlError = curl_error($ch);
    $httpCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    if ($body === false) {
        return ['ok' => false, 'error' => $curlError ?: 'Telegram request failed'];
    }

    $decoded = json_decode($body, true);
    if ($httpCode < 200 || $httpCode >= 300 || !is_array($decoded) || empty($decoded['ok'])) {
        $description = is_array($decoded) ? (string)($decoded['description'] ?? '') : '';
        return ['ok' => false, 'error' => $description ?: ('Telegram HTTP ' . $httpCode)];
    }

    return ['ok' => true];
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && ($_GET['action'] ?? '') === 'start') {
    $nonce = bin2hex(random_bytes(16));
    $_SESSION['lead_form'][$nonce] = [
        'started_at' => microtime(true),
        'ua' => hash('sha256', (string)($_SERVER['HTTP_USER_AGENT'] ?? '')),
    ];

    // Keep the session small.
    if (count($_SESSION['lead_form']) > 10) {
        $_SESSION['lead_form'] = array_slice($_SESSION['lead_form'], -10, null, true);
    }

    answer(200, ['ok' => true, 'nonce' => $nonce]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    answer(405, ['ok' => false, 'message' => 'Method not allowed']);
}

$name = clean_text((string)($_POST['name'] ?? ''), 100);
$phone = normalize_phone((string)($_POST['phone'] ?? ''));
$page = FORM_PAGE;
$website = clean_text((string)($_POST['website'] ?? ''), 200);
$humanCheck = (string)($_POST['human_check'] ?? '') === '1';
$clicks = max(0, min(9999, (int)($_POST['mouse_clicks'] ?? 0)));
$nonce = preg_replace('/[^a-f0-9]/', '', (string)($_POST['form_nonce'] ?? '')) ?? '';

if ((function_exists('mb_strlen') ? mb_strlen($name) : strlen($name)) < 2) {
    answer(422, ['ok' => false, 'message' => 'Укажите имя.']);
}
if (!$phone['valid']) {
    answer(422, ['ok' => false, 'message' => 'Введите корректный российский номер телефона.']);
}

$duration = 0.0;
$sessionOk = false;
if ($nonce !== '' && isset($_SESSION['lead_form'][$nonce])) {
    $started = (float)($_SESSION['lead_form'][$nonce]['started_at'] ?? 0.0);
    $storedUa = (string)($_SESSION['lead_form'][$nonce]['ua'] ?? '');
    $currentUa = hash('sha256', (string)($_SERVER['HTTP_USER_AGENT'] ?? ''));
    if ($started > 0 && hash_equals($storedUa, $currentUa)) {
        $duration = max(0.0, microtime(true) - $started);
        $sessionOk = true;
    }
    unset($_SESSION['lead_form'][$nonce]);
}

// Three simple anti-bot signals. This is not Google reCAPTCHA.
$score = 0;
if (!$humanCheck) $score++;
if (!$sessionOk || $duration < 3.0 || $duration > 1800.0) $score++;
if ($clicks < 1) $score++;

// Honeypot: answer success to automated spam, but do not send it to Telegram.
if ($website !== '') {
    usleep(random_int(150000, 450000));
    answer(200, ['ok' => true]);
}

$humanVerdict = $score <= 1 ? '✅ Человек!' : '⚠️ Подозрительная активность';
$validPhoneText = $phone['valid'] ? 'Номер валидный' : 'Номер невалидный';
$secondsText = number_format($duration, 2, '.', '');

$message = '<b>📞 Новая заявка для обратной связи</b>' . "\n"
    . 'Name: ' . tg_escape($name) . "\n"
    . 'Phone: <a href="tel:' . tg_escape($phone['tel']) . '">' . tg_escape($phone['pretty']) . '</a>' . "\n"
    . 'Page: ' . tg_escape($page) . "\n\n"

    . '--- UTM МЕТКИ ---' . "\n"
    . 'promo_tatplus' . "\n"
    . $validPhoneText . "\n\n"

    . 'Проверка на бота' . "\n"
    . 'Форма закрыта за ' . $secondsText . 'сек' . "\n"
    . 'Кликов сделано: ' . $clicks . "\n"
    . 'Набрано очков: ' . $score . '/3' . "\n"
    . $humanVerdict;

$token = '8157832342:AAEsnJlzurRRzueCE_RBs9W8cq0iRY4PplA';
$chatId = trim((string)getenv('TELEGRAM_CHAT_ID')) ?: DEFAULT_CHAT_ID;

if ($token === '') {
    error_log('Lead form: TELEGRAM_BOT_TOKEN is not configured');
    answer(500, ['ok' => false, 'message' => 'Отправка временно не настроена.']);
}

$result = telegram_send($token, $chatId, $message);
if (!$result['ok']) {
    error_log('Lead form Telegram error: ' . ($result['error'] ?? 'unknown error'));
    answer(502, ['ok' => false, 'message' => 'Не удалось отправить заявку. Попробуйте ещё раз.']);
}

answer(200, ['ok' => true]);
