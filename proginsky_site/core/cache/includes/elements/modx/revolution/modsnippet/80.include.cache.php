<?php
// Сниппет getUTMFields - добавляет скрытые UTM поля в форму
$output = '';
$utm_marks = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

foreach ($utm_marks as $mark) {
    $value = '';
    
    // Приоритет: текущий URL (GET)
    if (!empty($_GET[$mark])) {
        $value = $_GET[$mark];
        // ОБНОВЛЯЕМ сессию
        $_SESSION[$mark] = $value;
    }
    // Запасной вариант: из сессии
    elseif (!empty($_SESSION[$mark])) {
        $value = $_SESSION[$mark];
    }
    
    if (!empty($value)) {
        $output .= '<input type="hidden" name="' . $mark . '" value="' . htmlspecialchars($value) . '">';
    }
}

return $output;
return;
