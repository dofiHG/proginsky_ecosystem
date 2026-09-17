<?php  return '// Получаем параметры из системных настроек MODX
$token = $modx->getOption(\'token\', $scriptProperties);
$admin_chat_id =  $modx->getOption(\'ProginLeedsChat\', $scriptProperties);
$teacher_chat_id = $modx->getOption(\'ProginProgsOrder\', $scriptProperties);
$numverify_key = $modx->getOption(\'TokenNumVerify\', $scriptProperties);

function checkBot($honeyPotValue, $mouseClicks, $activeTimePopup)
{
    $botScore = 0;
    $botStatus = "\\xE2\\x9C\\x85 Человек!";
    $botReasons = \'\';
    $message = \'\';

    if (!empty($honeyPotValue))
    {
        $botScore++;
        $botReasons .= "\\xF0\\x9F\\x9A\\xAB Заполнена ловушка!\\n";
    }
    
    if ($mouseClicks < 2)
    {
        $botScore++;
        $botReasons .= "\\xF0\\x9F\\x96\\xB1 Мало кликов!\\n";
    }
    
    if ($activeTimePopup <= 15)
    {
        $botScore++;
        $botReasons .= "\\xE2\\x9A\\xA1 Попап быстро заполнен!\\n";
    }
    
    if ($botScore == 1)
    {$botStatus = "\\n\\xF0\\x9F\\xA4\\x94 Возможно, человек!";}
    
    if ($botScore == 2)
    {$botStatus = "\\n\\xF0\\x9F\\xA7\\x90 Возможно Бот!";}
    
    if ($botScore == 3)
    {$botStatus = "\\n\\xF0\\x9F\\xA4\\x96 Бот!";}
    
    if ($botScore == 0)
    {
        $message .= "Форма закрыта за " . $activeTimePopup . "сек\\n";
        $message .= "Кликов сделано: " . $mouseClicks . "\\n";
    }
    else 
    {
        $message .= "Форма закрыта за " . " (" . $activeTimePopup . "сек)\\n";
        $message .= "Кликов сделано: " . $mouseClicks . "\\n";
    }
    
    $message .= "Набрано очков: " . $botScore . "/3\\n";
    $message .= $botReasons;
    $message .= $botStatus;
    
    return $message;
}

function checkPhoneWithNumVerify($phone, $api_key) {
    if (empty($phone)) return "";
    
    // Очищаем номер
    $clean_phone = urlencode(trim($phone));
    
    // Запрос к API
    $url = "http://apilayer.net/api/validate?access_key={$api_key}&number={$clean_phone}&format=1";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($response === false || $http_code !== 200) {
        return "Возможно бот (ошибка проверки)";
    }
    
    $data = json_decode($response, true);
    
    // Проверяем валидность номера
    if (!$data || !isset($data[\'valid\'])) {
        return "Возможно бот (ошибка данных)";
    }
    
    // Если номер невалидный
    if ($data[\'valid\'] !== true) {
        return "Возможно бот (невалидный номер)";
    }
    
    // Проверяем тип линии - виртуальные номера = подозрительные
    if (isset($data[\'line_type\']) && $data[\'line_type\'] === \'voip\') {
        return "Возможно бот (виртуальный номер)";
    }
    
    // Если номер мобильный или другой валидный тип
    return "Номер валидный";
}

// Проверяем наличие обязательных параметров
if (empty($token) || empty($admin_chat_id) || empty($teacher_chat_id)) {
    $modx->log(modX::LOG_LEVEL_ERROR, \'Необходимо указать токен бота и ID чатов в системных настройках MODX.\');
    return false;
}

try {
    // Получаем данные из POST-запроса
    $fields = $_POST;
    if (empty($fields)) {
        $modx->log(modX::LOG_LEVEL_ERROR, \'Данные формы отсутствуют.\');
        return false;
    }

    // Определяем тип заявки
    $is_shop_order = isset($fields[\'product_name\']);
    
    // Базовые поля для всех типов заявок
    $base_fields = [\'name\', \'email\', \'phone\', \'page\'];
    
    // Поля для магазина (PROG)
    $shop_fields = [
        \'group\' => \'Группа\',
        \'product_id\' => \'ID товара\',
        \'product_name\' => \'Название товара\',
        \'product_category\' => \'Категория товара\',
        \'product_price\' => \'Цена товара\'
    ];
    
    // Поля для курсов (старый формат)
    $course_fields = [
        \'course_name\' => \'Название курса\',
        \'course_age\' => \'Возраст курса\'
    ];

    // Формируем заголовок
    if ($is_shop_order) 
    {
        $chat_id = $teacher_chat_id;
        $message = "<b>\\xF0\\x9F\\x9B\\x92 Заявка товара в магазине PROG</b>\\n";
        foreach ($shop_fields as $field => $label) {
            if (!empty($fields[$field])) {
                $value = $fields[$field];
                if ($field === \'product_price\') {
                    $value .= \' ProG\';
                }
                $message .= "{$label}: {$value}\\n";
            }
        }
    } 

    else 
    {
        $chat_id = $admin_chat_id;
        $message = "<b>\\xF0\\x9F\\x93\\x9E Новая заявка для обратной связи</b>\\n";
        
        foreach ($base_fields as $field) 
        {
            if (!empty($fields[$field])) 
            {
                $message .= ucfirst($field) . ": {$fields[$field]}\\n";
            }
        }
        
        foreach ($course_fields as $field => $label) 
        {
            if (!empty($fields[$field])) 
            {
                $message .= "{$label}: {$fields[$field]}\\n";
            }
        }
        
        $utm_labels = [
            \'utm_source\' => \'Источник\',
            \'utm_medium\' => \'Канал\', 
            \'utm_campaign\' => \'Компания\',
            \'utm_term\' => \'Ключевое слово\',
            \'utm_content\' => \'Контент\'
        ];
        
        $has_any_utm = false;
        $utm_text = "\\n--- UTM МЕТКИ ---\\n";
        
        foreach ($utm_labels as $key => $label) {
            $value = \'\';
            
            if (!empty($fields[$key])) 
            {
                $value = $fields[$key];
            } elseif (!empty($_GET[$key])) 
            {
                $value = $_GET[$key];
                $_SESSION[$key] = $value;
            } elseif (!empty($_SESSION[$key])) 
            {
                $value = $_SESSION[$key];
            }
            
            if (!empty($value)) {
                $utm_text .= "{$label}: {$value}\\n";
                $has_any_utm = true;
            }
        }
        
        if (!$has_any_utm) 
        {
            $utm_text .= "не обнаружены\\n";
        }
        
        $message .= $utm_text;
        
        if (!empty($fields[\'phone\'])) 
        {
            $phone_check = checkPhoneWithNumVerify($fields[\'phone\'], $numverify_key);
            $message .= $phone_check;
        }
        
        $botStatus = checkBot($fields[\'website\'], $fields[\'mouse_clicks\'], $fields[\'form_load_time\']);
        $message .= "\\n\\nПроверка на бота\\n";
        $message .= $botStatus;
    }

    $telegram_url = "https://api.telegram.org/bot$token/sendMessage";
    
    $post_fields = [
        \'chat_id\' => $chat_id,
        \'text\' => $message,
        \'parse_mode\' => \'HTML\'
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $telegram_url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    $response = curl_exec($ch);

    if ($response === false) {
        $error = curl_error($ch);
        curl_close($ch);
        $modx->log(modX::LOG_LEVEL_ERROR, \'Ошибка при отправке сообщения в Telegram: \' . $error);
        return false;
    }

    curl_close($ch);
    $modx->log(modX::LOG_LEVEL_INFO, "Сообщение успешно отправлено в Telegram");
    
    return true;
    
} catch (Exception $e) {
    $modx->log(modX::LOG_LEVEL_ERROR, \'Ошибка в сниппете: \' . $e->getMessage());
    return false;
}
return;
';