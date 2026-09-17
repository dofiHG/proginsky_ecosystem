<?php
// Плагин utmSaver - сохраняет UTM метки в сессию и плейсхолдеры
$utmMarks = $modx->getOption('utmmark_marks', $scriptProperties, 'utm_source,utm_medium,utm_campaign,utm_term,utm_content,original_ref,start_page,ip,url,roistat,roistat_referrer,roistat_pos,yclid');
$utmMarks = explode(',', $utmMarks);

$console_logs = [];

// Обрабатываем UTM метки из запроса
foreach ($utmMarks as $mark) {
    $mark = trim($mark);
    
    if (!empty($_GET[$mark])) {
        $value = $_GET[$mark];
        $modx->setPlaceholder($mark, $value);
        $_SESSION[$mark] = $value;
        $console_logs[] = "UTM Saver: SET from GET - $mark = $value";
    } elseif (isset($_SESSION[$mark])) {
        $modx->setPlaceholder($mark, $_SESSION[$mark]);
        $console_logs[] = "UTM Saver: SET from SESSION - $mark = " . $_SESSION[$mark];
    }
}

// Если нет UTM source, устанавливаем "сайт" по умолчанию
if (empty($_SESSION['utm_source'])) {
    $modx->setPlaceholder('utm_source', 'сайт');
    $_SESSION['utm_source'] = 'сайт';
    $console_logs[] = "UTM Saver: SET default - utm_source = сайт";
}

// Выводим console.log
if (!empty($console_logs)) {
    $output = '<script>';
    foreach ($console_logs as $log) {
        $output .= 'console.log("' . addslashes($log) . '");';
    }
    $output .= '</script>';
    $modx->regClientHTMLBlock($output);
}

return '';
return;
