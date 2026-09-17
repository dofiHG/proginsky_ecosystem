<?php
if (($_POST['action'] ?? '') !== 'get_records') {
    return '';
}

$file = MODX_BASE_PATH . 'assets/files/Records.txt';

if (!file_exists($file)) {
    return '###RECORDS_START###' . PHP_EOL . '###RECORDS_END###';
}

$content = file_get_contents($file);

return '###RECORDS_START###' . PHP_EOL . $content . PHP_EOL . '###RECORDS_END###';
return;
