<?php
/**
 * WebinarSuccessEmailHook
 *
 * FormIt-hook отправки письма после регистрации на вебинар.
 *
 * В FormIt должен запускаться после CRMHook:
 *
 * &hooks=`CRMHook,WebinarSuccessEmailHook`
 *
 * SMTP берётся из системных настроек MODX:
 *
 * mail_use_smtp     = Да
 * mail_smtp_auth    = Да
 * mail_smtp_hosts   = smtp.yandex.ru
 * mail_smtp_port    = 465
 * mail_smtp_secure  = ssl
 * mail_smtp_autotls = Нет
 * mail_smtp_user    = tech@proginsky.ru
 * mail_smtp_pass    = пароль приложения
 * emailsender       = tech@proginsky.ru
 */

/**
 * Получение значения из FormIt или плейсхолдеров.
 */
if (!function_exists('webinar_email_get_value')) {
    function webinar_email_get_value($hook, $modx, $key, $default = '')
    {
        $value = '';

        if ($hook && method_exists($hook, 'getValue')) {
            $value = $hook->getValue($key);
        }

        if ($value === null || $value === '') {
            $value = $modx->getPlaceholder($key);
        }

        if ($value === null || $value === '') {
            $value = $modx->getPlaceholder('fi.' . $key);
        }

        if ($value === null || $value === '') {
            $value = $default;
        }

        return trim((string)$value);
    }
}

/**
 * Экранирование HTML.
 */
if (!function_exists('webinar_email_escape')) {
    function webinar_email_escape($value)
    {
        return htmlspecialchars(
            (string)$value,
            ENT_QUOTES | ENT_SUBSTITUTE,
            'UTF-8'
        );
    }
}

/**
 * Преобразование системной настройки MODX в boolean.
 */
if (!function_exists('webinar_email_bool')) {
    function webinar_email_bool($value, $default = false)
    {
        if ($value === null || $value === '') {
            return (bool)$default;
        }

        if (is_bool($value)) {
            return $value;
        }

        if (is_int($value) || is_float($value)) {
            return ((int)$value) === 1;
        }

        $value = strtolower(trim((string)$value));

        return in_array(
            $value,
            array('1', 'true', 'yes', 'on', 'да'),
            true
        );
    }
}

/**
 * Получение текста ошибки PHPMailer.
 */
if (!function_exists('webinar_email_get_mailer_error')) {
    function webinar_email_get_mailer_error($mail)
    {
        if (
            isset($mail->mailer)
            && is_object($mail->mailer)
            && isset($mail->mailer->ErrorInfo)
        ) {
            return trim((string)$mail->mailer->ErrorInfo);
        }

        return '';
    }
}

/**
 * Безопасное получение текущего транспорта PHPMailer.
 */
if (!function_exists('webinar_email_get_transport')) {
    function webinar_email_get_transport($mail)
    {
        if (
            isset($mail->mailer)
            && is_object($mail->mailer)
            && isset($mail->mailer->Mailer)
        ) {
            return trim((string)$mail->mailer->Mailer);
        }

        return 'unknown';
    }
}

/**
 * Нормализация SMTP-хоста.
 *
 * Если в настройке случайно указано:
 * smtp.yandex.ru:465
 *
 * функция отделит порт от хоста.
 */
if (!function_exists('webinar_email_normalize_host')) {
    function webinar_email_normalize_host($host, $defaultPort = 465)
    {
        $host = trim((string)$host);
        $port = (int)$defaultPort;

        $host = preg_replace('#^ssl://#i', '', $host);
        $host = preg_replace('#^tls://#i', '', $host);
        $host = preg_replace('#^smtp://#i', '', $host);

        /*
         * Разбираем host:port.
         * Для обычного SMTP-хоста без IPv6.
         */
        if (preg_match('/^([^:]+):(\d+)$/', $host, $matches)) {
            $host = trim($matches[1]);
            $port = (int)$matches[2];
        }

        return array(
            'host' => $host,
            'port' => $port
        );
    }
}

/*
|--------------------------------------------------------------------------
| Получаем данные регистрации
|--------------------------------------------------------------------------
*/

$email = webinar_email_get_value($hook, $modx, 'email');
$name = webinar_email_get_value($hook, $modx, 'name');
$webinarBotUrl = webinar_email_get_value(
    $hook,
    $modx,
    'webinar_bot_url'
);

$webinarToken = webinar_email_get_value(
    $hook,
    $modx,
    'webinar_token'
);

$moyklassUserId = webinar_email_get_value(
    $hook,
    $modx,
    'moyklass_user_id'
);

$courseName = webinar_email_get_value(
    $hook,
    $modx,
    'course_name',
    'Вебинар'
);

$pageUrl = webinar_email_get_value(
    $hook,
    $modx,
    'page_url'
);

/*
|--------------------------------------------------------------------------
| Нормализация и проверка данных
|--------------------------------------------------------------------------
*/

$name = preg_replace('/\s+/u', ' ', trim($name));

if ($name === '') {
    $name = 'участник';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook STOP: invalid email=' . $email
    );

    /*
     * Не ломаем регистрацию в FormIt.
     */
    return true;
}

if ($webinarBotUrl === '') {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook STOP: empty webinar_bot_url; ' .
        'email=' . $email .
        '; moyklass_user_id=' . $moyklassUserId .
        '; webinar_token=' . $webinarToken
    );

    return true;
}

if (
    $webinarToken === ''
    || !preg_match('/^[A-Za-z0-9_-]{16,128}$/', $webinarToken)
) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook STOP: invalid webinar_token; ' .
        'email=' . $email
    );

    return true;
}

$expectedBotUrl =
    'https://t.me/proginsky_aibot?start=' .
    rawurlencode($webinarToken);

if (!hash_equals($expectedBotUrl, $webinarBotUrl)) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook STOP: suspicious webinar_bot_url; ' .
        'email=' . $email .
        '; bot_url=' . $webinarBotUrl
    );

    return true;
}

/*
|--------------------------------------------------------------------------
| Настройки отправителя
|--------------------------------------------------------------------------
*/

$siteName = trim((string)$modx->getOption('site_name'));

if ($siteName === '') {
    $siteName = 'Прогинский';
}

$emailSender = trim((string)$modx->getOption('emailsender'));

if ($emailSender === '') {
    $emailSender = trim(
        (string)$modx->getOption('mail_smtp_user')
    );
}

if ($emailSender === '') {
    $emailSender = 'tech@proginsky.ru';
}

$fromName = $siteName;

$subject = 'Спасибо за заявку — материалы в Telegram';

/*
|--------------------------------------------------------------------------
| Безопасные значения для HTML
|--------------------------------------------------------------------------
*/

$safeName = webinar_email_escape(
    $name
);

$safeEmail = webinar_email_escape(
    $email
);

$safeBotUrl = webinar_email_escape(
    $webinarBotUrl
);

$safeSubject = webinar_email_escape(
    $subject
);

/*
|--------------------------------------------------------------------------
| Текстовая версия письма
|--------------------------------------------------------------------------
*/

$textBody =
    "Здравствуйте, {$name}!\n\n" .
    "Спасибо! Ваша заявка успешно отправлена.\n\n" .
    "Перейдите в Telegram, чтобы завершить регистрацию " .
    "и получить материалы:\n" .
    $webinarBotUrl . "\n\n" .
    "Email заявки: {$email}\n\n" .
    "Если вы уже зарегистрированы в Telegram-боте, " .
    "бот сообщит об этом и не создаст повторную регистрацию.\n\n" .
    "Команда «Прогинский»";

/*
|--------------------------------------------------------------------------
| HTML-версия письма
|--------------------------------------------------------------------------
*/

$htmlBody = <<<HTML
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >
    <title>{$safeSubject}</title>
</head>

<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;color:#313849;">
    <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="width:100%;background:#f4f5f7;"
    >
        <tr>
            <td
                align="center"
                style="padding:24px 12px;"
            >
                <table
                    role="presentation"
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="width:100%;max-width:620px;background:#ffffff;border:1px solid #e7e9ef;border-radius:18px;"
                >
                    <tr>
                        <td
                            style="padding:28px;background:#313849;border-radius:18px 18px 0 0;"
                        >
                            <div
                                style="font-size:24px;line-height:1.3;font-weight:700;color:#ffffff;"
                            >
                                Спасибо за заявку!
                            </div>

                            <div
                                style="margin-top:8px;font-size:15px;line-height:1.5;color:#e5e7eb;"
                            >
                                Школа программирования и ИИ «Прогинский»
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:28px;">
                            <p
                                style="margin:0 0 16px;font-size:17px;line-height:1.6;color:#313849;"
                            >
                                Здравствуйте,
                                <strong>{$safeName}</strong>!
                            </p>

                            <p
                                style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#313849;"
                            >
                                Ваша заявка успешно отправлена.
                            </p>

                            <p
                                style="margin:0 0 22px;font-size:16px;line-height:1.6;color:#313849;"
                            >
                                Перейдите в Telegram, чтобы
                                завершить регистрацию и получить
                                материалы.
                            </p>

                            <table
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="margin:0 0 24px;"
                            >
                                <tr>
                                    <td
                                        align="center"
                                        style="background:#d37518;border-radius:999px;"
                                    >
                                        <a
                                            href="{$safeBotUrl}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style="display:inline-block;padding:14px 24px;font-size:16px;line-height:1.2;font-weight:700;color:#ffffff;text-decoration:none;border-radius:999px;"
                                        >
                                            Перейти в Telegram
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <div
                                style="margin:0 0 22px;padding:16px 18px;background:#f7f8fb;border:1px solid #e7e9ef;border-radius:14px;"
                            >
                                <div
                                    style="margin-bottom:4px;font-size:14px;line-height:1.5;color:#6b7280;"
                                >
                                    Email заявки:
                                </div>

                                <div
                                    style="font-size:16px;line-height:1.5;font-weight:700;color:#313849;"
                                >
                                    {$safeEmail}
                                </div>
                            </div>

                            <p
                                style="margin:0 0 10px;font-size:14px;line-height:1.6;color:#6b7280;"
                            >
                                Если кнопка не открывается,
                                скопируйте ссылку и вставьте её
                                в браузер:
                            </p>

                            <p
                                style="margin:0 0 22px;font-size:13px;line-height:1.6;word-break:break-all;"
                            >
                                <a
                                    href="{$safeBotUrl}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style="color:#d37518;text-decoration:underline;"
                                >
                                    {$safeBotUrl}
                                </a>
                            </p>

                            <p
                                style="margin:0;font-size:16px;line-height:1.6;color:#313849;"
                            >
                                Команда «Прогинский»
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding:18px 28px;background:#f7f8fb;border-top:1px solid #e7e9ef;border-radius:0 0 18px 18px;"
                        >
                            <p
                                style="margin:0;font-size:12px;line-height:1.5;color:#8a91a3;"
                            >
                                Вы получили это письмо, потому
                                что оставили заявку на сайте
                                «Прогинский».
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
HTML;

/*
|--------------------------------------------------------------------------
| Получаем SMTP-настройки MODX
|--------------------------------------------------------------------------
*/

$smtpHostSetting = trim(
    (string)$modx->getOption(
        'mail_smtp_hosts',
        null,
        'smtp.yandex.ru'
    )
);

$smtpPortSetting = (int)$modx->getOption(
    'mail_smtp_port',
    null,
    465
);

$smtpHostData = webinar_email_normalize_host(
    $smtpHostSetting,
    $smtpPortSetting
);

$smtpHost = $smtpHostData['host'];
$smtpPort = $smtpHostData['port'];

if ($smtpHost === '') {
    $smtpHost = 'smtp.yandex.ru';
}

if ($smtpPort <= 0) {
    $smtpPort = 465;
}

$smtpUser = trim(
    (string)$modx->getOption('mail_smtp_user')
);

$smtpPassword = (string)$modx->getOption(
    'mail_smtp_pass'
);

$smtpSecure = strtolower(
    trim(
        (string)$modx->getOption(
            'mail_smtp_secure',
            null,
            'ssl'
        )
    )
);

$smtpAuth = webinar_email_bool(
    $modx->getOption('mail_smtp_auth'),
    true
);

$smtpAutoTls = webinar_email_bool(
    $modx->getOption('mail_smtp_autotls'),
    false
);

$smtpKeepAlive = webinar_email_bool(
    $modx->getOption('mail_smtp_keepalive'),
    false
);

$smtpTimeout = (int)$modx->getOption(
    'mail_smtp_timeout',
    null,
    15
);

if ($smtpTimeout <= 0) {
    $smtpTimeout = 15;
}

/*
 * Допустимые варианты PHPMailer.
 */
if (!in_array($smtpSecure, array('ssl', 'tls', ''), true)) {
    $smtpSecure = $smtpPort === 465 ? 'ssl' : 'tls';
}

/*
 * Для порта 465 обычно используется ssl.
 * Для порта 587 — tls.
 */
if ($smtpPort === 465 && $smtpSecure === '') {
    $smtpSecure = 'ssl';
}

if ($smtpPort === 587 && $smtpSecure === '') {
    $smtpSecure = 'tls';
}

/*
|--------------------------------------------------------------------------
| Проверяем SMTP-настройки до отправки
|--------------------------------------------------------------------------
*/

if ($smtpAuth && $smtpUser === '') {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook STOP: empty mail_smtp_user'
    );

    return true;
}

if ($smtpAuth && $smtpPassword === '') {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook STOP: empty mail_smtp_pass'
    );

    return true;
}

/*
|--------------------------------------------------------------------------
| Загружаем почтовый сервис MODX
|--------------------------------------------------------------------------
*/

$mail = $modx->getService(
    'mail',
    'mail.modPHPMailer'
);

if (!$mail) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook STOP: cannot load modPHPMailer'
    );

    return true;
}

/*
|--------------------------------------------------------------------------
| Отправка письма
|--------------------------------------------------------------------------
*/

try {
    $mail->reset();

    if (
        !isset($mail->mailer)
        || !is_object($mail->mailer)
    ) {
        throw new RuntimeException(
            'PHPMailer instance is unavailable'
        );
    }

    /*
     * Принудительно переключаем транспорт на SMTP.
     */
    if (method_exists($mail->mailer, 'isSMTP')) {
        $mail->mailer->isSMTP();
    } elseif (method_exists($mail->mailer, 'IsSMTP')) {
        $mail->mailer->IsSMTP();
    } else {
        $mail->mailer->Mailer = 'smtp';
    }

    /*
     * Настройки SMTP.
     */
    $mail->mailer->Host = $smtpHost;
    $mail->mailer->Port = $smtpPort;
    $mail->mailer->SMTPAuth = $smtpAuth;
    $mail->mailer->Username = $smtpUser;
    $mail->mailer->Password = $smtpPassword;
    $mail->mailer->SMTPSecure = $smtpSecure;
    $mail->mailer->SMTPAutoTLS = $smtpAutoTls;
    $mail->mailer->SMTPKeepAlive = $smtpKeepAlive;
    $mail->mailer->Timeout = $smtpTimeout;

    /*
     * Кодировка письма.
     */
    $mail->mailer->CharSet = 'UTF-8';
    $mail->mailer->Encoding = 'base64';
    $mail->mailer->AltBody = $textBody;

    /*
     * SMTP debug.
     *
     * Оставляем уровень 2 на время проверки.
     * После успешной настройки замените 2 на 0.
     */
    $mail->mailer->SMTPDebug = 0;

    $mail->mailer->Debugoutput = function ($message, $level) use ($modx) {
        /*
         * Не записываем потенциально чувствительные команды AUTH.
         */
        $safeMessage = preg_replace(
            '/(AUTH\s+[A-Z]+\s+).*/i',
            '$1[hidden]',
            (string)$message
        );

        $modx->log(
            modX::LOG_LEVEL_ERROR,
            'Webinar SMTP DEBUG [' . (int)$level . ']: ' .
            $safeMessage
        );
    };

    /*
     * Данные письма через обертку MODX.
     */
    $mail->set(
        modMail::MAIL_FROM,
        $emailSender
    );

    $mail->set(
        modMail::MAIL_FROM_NAME,
        $fromName
    );

    $mail->set(
        modMail::MAIL_SUBJECT,
        $subject
    );

    $mail->set(
        modMail::MAIL_BODY,
        $htmlBody
    );

    $mail->setHTML(true);

    /*
     * Получатель.
     */
    $mail->address(
        'to',
        $email,
        $name
    );

    /*
     * Диагностика без пароля.
     */
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook SMTP CONFIG: ' .
        'transport=' . webinar_email_get_transport($mail) .
        '; host=' . $smtpHost .
        '; port=' . $smtpPort .
        '; secure=' . $smtpSecure .
        '; auth=' . ($smtpAuth ? '1' : '0') .
        '; autotls=' . ($smtpAutoTls ? '1' : '0') .
        '; user=' . $smtpUser .
        '; from=' . $emailSender .
        '; to=' . $email
    );

    $sent = $mail->send();

    if (!$sent) {
        $mailerError = webinar_email_get_mailer_error($mail);

        $modx->log(
            modX::LOG_LEVEL_ERROR,
            'WebinarSuccessEmailHook SEND FAILED: ' .
            'email=' . $email .
            '; transport=' . webinar_email_get_transport($mail) .
            '; error=' . $mailerError
        );

        $mail->reset();

        /*
         * Не ломаем регистрацию FormIt.
         */
        return true;
    }

    $modx->log(
        modX::LOG_LEVEL_INFO,
        'WebinarSuccessEmailHook SEND SUCCESS: ' .
        'email=' . $email .
        '; transport=' . webinar_email_get_transport($mail) .
        '; bot_url=' . $webinarBotUrl
    );

    $mail->reset();
} catch (Throwable $e) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'WebinarSuccessEmailHook EXCEPTION: ' .
        get_class($e) .
        '; message=' . $e->getMessage() .
        '; file=' . $e->getFile() .
        '; line=' . $e->getLine()
    );

    try {
        $mail->reset();
    } catch (Throwable $ignored) {
        /*
         * Ничего не делаем.
         */
    }

    /*
     * Регистрация уже создана CRMHook-ом.
     */
    return true;
}

return true;
return;
