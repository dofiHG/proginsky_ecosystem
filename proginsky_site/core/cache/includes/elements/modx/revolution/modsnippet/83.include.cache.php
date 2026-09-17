<?php
if (($_POST['action'] ?? '') !== 'save_record') {
    return '';
}

$lang = trim($_POST['lang'] ?? '');
$level = trim($_POST['level'] ?? '');
$name = trim($_POST['name'] ?? '');
$time = trim($_POST['time'] ?? '');

if ($lang === '' || $level === '' || $name === '' || $time === '') {
    return '###RECORD_EMPTY###';
}

if (strpos($name, ';') !== false || strpos($time, ';') !== false) {
    return '###RECORD_BAD_SYMBOL###';
}

if (!in_array($lang, ['0', '1'], true)) {
    return '###RECORD_BAD_LANG###';
}

if (!in_array($level, ['0', '1', '2', '3', '4'], true)) {
    return '###RECORD_BAD_LEVEL###';
}

function gameRecordNorm($value) {
    $value = trim($value);

    $upper = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
    $lower = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];

    $value = str_replace($upper, $lower, $value);
    $value = strtolower($value);

    return $value;
}

function gameRecordTimeValue($value) {
    return (float) str_replace(',', '.', trim($value));
}

$file = MODX_BASE_PATH . 'assets/files/Records.txt';

if (!file_exists($file)) {
    file_put_contents($file, '');
}

$newLine = $lang . ';' . $level . ';' . $name . ';' . $time;
$newNameNorm = gameRecordNorm($name);
$newTimeValue = gameRecordTimeValue($time);

$lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

$otherLines = [];
$currentGroup = [];
$userRecordWasFound = false;

foreach ($lines as $line) {
    $parts = explode(';', trim($line));

    if (count($parts) < 4) {
        continue;
    }

    $recordLang = trim($parts[0]);
    $recordLevel = trim($parts[1]);
    $recordName = trim($parts[2]);
    $recordTime = trim($parts[3]);

    if ($recordLang === $lang && $recordLevel === $level) {
        if (gameRecordNorm($recordName) === $newNameNorm) {
            $userRecordWasFound = true;

            $oldTimeValue = gameRecordTimeValue($recordTime);

            if ($newTimeValue < $oldTimeValue) {
                $currentGroup[] = $newLine;
            } else {
                $currentGroup[] = $line;
            }
        } else {
            $currentGroup[] = $line;
        }
    } else {
        $otherLines[] = $line;
    }
}

if (!$userRecordWasFound) {
    $currentGroup[] = $newLine;
}

usort($currentGroup, function ($a, $b) {
    $aParts = explode(';', trim($a));
    $bParts = explode(';', trim($b));

    $aTime = isset($aParts[3]) ? gameRecordTimeValue($aParts[3]) : 999999;
    $bTime = isset($bParts[3]) ? gameRecordTimeValue($bParts[3]) : 999999;

    if ($aTime == $bTime) {
        return 0;
    }

    return ($aTime < $bTime) ? -1 : 1;
});

$currentGroup = array_slice($currentGroup, 0, 4);

$finalLines = array_merge($otherLines, $currentGroup);

file_put_contents($file, implode(PHP_EOL, $finalLines) . PHP_EOL, LOCK_EX);

return '###RECORD_OK###';
return;
