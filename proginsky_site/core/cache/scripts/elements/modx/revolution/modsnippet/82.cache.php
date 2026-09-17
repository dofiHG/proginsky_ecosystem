<?php  return 'if (($_POST[\'action\'] ?? \'\') !== \'login\') {
    return \'\';
}

$name = trim($_POST[\'name\'] ?? \'\');
$password = trim($_POST[\'password\'] ?? \'\');

if ($name === \'\' || $password === \'\') {
    return \'###EMPTY###\';
}

function gameLoginNorm($value) {
    $value = trim($value);

    $upper = [\'А\',\'Б\',\'В\',\'Г\',\'Д\',\'Е\',\'Ё\',\'Ж\',\'З\',\'И\',\'Й\',\'К\',\'Л\',\'М\',\'Н\',\'О\',\'П\',\'Р\',\'С\',\'Т\',\'У\',\'Ф\',\'Х\',\'Ц\',\'Ч\',\'Ш\',\'Щ\',\'Ъ\',\'Ы\',\'Ь\',\'Э\',\'Ю\',\'Я\'];
    $lower = [\'а\',\'б\',\'в\',\'г\',\'д\',\'е\',\'ё\',\'ж\',\'з\',\'и\',\'й\',\'к\',\'л\',\'м\',\'н\',\'о\',\'п\',\'р\',\'с\',\'т\',\'у\',\'ф\',\'х\',\'ц\',\'ч\',\'ш\',\'щ\',\'ъ\',\'ы\',\'ь\',\'э\',\'ю\',\'я\'];

    $value = str_replace($upper, $lower, $value);
    $value = strtolower($value);

    return $value;
}

$file = MODX_BASE_PATH . \'assets/files/Accounts.txt\';

if (!file_exists($file)) {
    return \'###NO_FILE###\';
}

$lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

$nameNorm = gameLoginNorm($name);
$passwordNorm = gameLoginNorm($password);

foreach ($lines as $line) {
    $account = explode(\';\', trim($line));

    if (count($account) < 2) {
        continue;
    }

    $savedNameNorm = gameLoginNorm($account[0]);
    $savedPasswordNorm = gameLoginNorm($account[1]);

    if ($savedNameNorm === $nameNorm && $savedPasswordNorm === $passwordNorm) {
        return \'###LOGIN_OK###\';
    }
}

return \'###LOGIN_ERROR###\';
return;
';