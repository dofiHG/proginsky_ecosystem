<?php
$path = $modx->getOption('csrfhelper.core_path', null, MODX_CORE_PATH . 'components/csrfhelper/');
$path .= 'vendor/autoload.php';
require_once $path;

use modmore\CSRFHelper\Csrf;
use modmore\CSRFHelper\Storage\SessionStorage;

$key = $modx->getOption('key', $scriptProperties, 'default');

// Получаем значение параметра singleUseCsrf из настроек сниппета
$singleUse = $modx->getOption('singleUseCsrf', $scriptProperties, 0);

$storage = new SessionStorage();
$csrf = new Csrf($storage, $modx->getUser());

try {
    if ($singleUse) {
        return $csrf->generate($key);
    }

    return $csrf->get($key);
}
catch (Error $e) {
    throw $e;
}
catch (Exception $e) {
    $modx->log(modX::LOG_LEVEL_ERROR, '[csrfhelper] Could not safely generate the CSRF token: ' . $e->getMessage());
}
return '';
return;
