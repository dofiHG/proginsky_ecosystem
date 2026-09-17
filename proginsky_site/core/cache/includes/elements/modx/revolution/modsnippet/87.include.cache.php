<?php
$fields = $hook->getValues();

$apiUrl = 'http://127.0.0.1:8888/register_lead_site';
$telegramBotUsername = 'proginsky_aibot';

if (!function_exists('ecosystem_register_set_value')) {
    function ecosystem_register_set_value($hook, $modx, $key, $value)
    {
        $value = (string)$value;

        if ($hook && method_exists($hook, 'setValue')) {
            $hook->setValue($key, $value);
        }

        $modx->setPlaceholder($key, $value);
        $modx->setPlaceholder('fi.' . $key, $value);
    }
}

if (!function_exists('ecosystem_register_add_error')) {
    function ecosystem_register_add_error($hook, $field, $message)
    {
        if ($hook && method_exists($hook, 'addError')) {
            $hook->addError($field, $message);
        }
    }
}

$name = trim((string)($fields['name'] ?? ''));
$email = trim((string)($fields['email'] ?? ''));
$phone = trim((string)($fields['phone'] ?? ''));

if (function_exists('mb_strtolower')) {
    $email = mb_strtolower($email, 'UTF-8');
} else {
    $email = strtolower($email);
}

if ($name === '' || $phone === '') {
    $modx->log(modX::LOG_LEVEL_ERROR, 'EcosystemRegiserHook STOP: empty name or phone');
    return true;
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $modx->log(modX::LOG_LEVEL_ERROR, 'EcosystemRegiserHook STOP: invalid email=' . $email);
    return true;
}

$payload = array(
    'name' => $name,
    'email' => $email,
    'phone' => $phone
);

$ch = curl_init();

curl_setopt_array($ch, array(
    CURLOPT_URL => $apiUrl,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 3,
    CURLOPT_TIMEOUT => 8,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'Accept: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode(
        $payload,
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    )
));

$response = curl_exec($ch);
$curlError = curl_error($ch);
$httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

$modx->log(
    modX::LOG_LEVEL_ERROR,
    'EcosystemRegiserHook API: http=' . $httpCode .
    '; curl_error=' . $curlError .
    '; response=' . (string)$response
);

if ($curlError !== '') {
    ecosystem_register_add_error(
        $hook,
        'email',
        'Не удалось завершить регистрацию. Попробуйте ещё раз.'
    );

    return false;
}

$responseData = json_decode((string)$response, true);

if (!is_array($responseData)) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'EcosystemRegiserHook STOP: invalid JSON response'
    );

    ecosystem_register_add_error(
        $hook,
        'email',
        'Не удалось завершить регистрацию. Попробуйте ещё раз.'
    );

    return false;
}

if ($httpCode === 409) {
    $detail = !empty($responseData['detail'])
        ? (string)$responseData['detail']
        : 'Email или телефон уже используется другим пользователем';

    ecosystem_register_add_error(
        $hook,
        'email',
        $detail
    );

    return false;
}

if ($httpCode < 200 || $httpCode >= 300) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'EcosystemRegiserHook STOP: bad HTTP=' . $httpCode
    );

    ecosystem_register_add_error(
        $hook,
        'email',
        'Не удалось завершить регистрацию. Попробуйте ещё раз.'
    );

    return false;
}

$userId = !empty($responseData['id'])
    ? (int)$responseData['id']
    : 0;

$telegramLinked = !empty($responseData['telegram_linked']);

ecosystem_register_set_value(
    $hook,
    $modx,
    'ecosystem_user_id',
    $userId
);

ecosystem_register_set_value(
    $hook,
    $modx,
    'ecosystem_telegram_linked',
    $telegramLinked ? '1' : '0'
);

if ($telegramLinked) {
    ecosystem_register_set_value($hook, $modx, 'proginsky_token', '');
    ecosystem_register_set_value($hook, $modx, 'webinar_token', '');
    ecosystem_register_set_value($hook, $modx, 'webinar_bot_payload', '');
    ecosystem_register_set_value($hook, $modx, 'webinar_bot_url', '');

    $modx->log(
        modX::LOG_LEVEL_INFO,
        'EcosystemRegiserHook SUCCESS: userId=' . $userId .
        '; telegram_linked=1'
    );

    return true;
}

$token = !empty($responseData['token'])
    ? trim((string)$responseData['token'])
    : '';

if (
    $token === ''
    || !preg_match('/^[A-Za-z0-9_-]{16,128}$/', $token)
) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'EcosystemRegiserHook STOP: token missing or invalid'
    );

    ecosystem_register_add_error(
        $hook,
        'email',
        'Не удалось получить ссылку Telegram. Попробуйте ещё раз.'
    );

    return false;
}

$telegramUrl =
    'https://t.me/' .
    $telegramBotUsername .
    '?start=' .
    rawurlencode($token);

ecosystem_register_set_value(
    $hook,
    $modx,
    'proginsky_token',
    $token
);

ecosystem_register_set_value(
    $hook,
    $modx,
    'webinar_token',
    $token
);

ecosystem_register_set_value(
    $hook,
    $modx,
    'webinar_bot_payload',
    $token
);

ecosystem_register_set_value(
    $hook,
    $modx,
    'webinar_bot_url',
    $telegramUrl
);

$modx->log(
    modX::LOG_LEVEL_INFO,
    'EcosystemRegiserHook SUCCESS: userId=' . $userId .
    '; telegram_linked=0' .
    '; bot_url=' . $telegramUrl
);

return true;
return;
