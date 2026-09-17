<?php
/**
 *  MODX Configuration file
 */
$database_type = 'mysql';
$database_server = 'localhost';
$database_user = 'glimake_pgin';
$database_password = 'HXszUd!hf2b$';
$database_connection_charset = 'utf8';
$dbase = 'glimake_pgin';
$table_prefix = 'pgin_';
$database_dsn = 'mysql:host=localhost;dbname=glimake_pgin;charset=utf8';
$config_options = array (
);
$driver_options = array (
);

$lastInstallTime = 1689605910;

$site_id = 'modx64b55716e57533.14563800';
$site_sessionname = 'SN64b556b9973fe';
$https_port = '443';
$uuid = '753b1562-aeec-4381-9cd6-12687074a092';

if (!defined('MODX_CORE_PATH')) {
    $modx_core_path= '/opt/Main_Site/new/core/';
    define('MODX_CORE_PATH', $modx_core_path);
}
if (!defined('MODX_PROCESSORS_PATH')) {
    $modx_processors_path= '/opt/Main_Site/new/core/src/Revolution/Processors/';
    define('MODX_PROCESSORS_PATH', $modx_processors_path);
}
if (!defined('MODX_CONNECTORS_PATH')) {
    $modx_connectors_path= '/opt/Main_Site/new/connectors/';
    $modx_connectors_url= '/new/connectors/';
    define('MODX_CONNECTORS_PATH', $modx_connectors_path);
    define('MODX_CONNECTORS_URL', $modx_connectors_url);
}
if (!defined('MODX_MANAGER_PATH')) {
    $modx_manager_path= '/opt/Main_Site/new/manager/';
    $modx_manager_url= '/new/manager/';
    define('MODX_MANAGER_PATH', $modx_manager_path);
    define('MODX_MANAGER_URL', $modx_manager_url);
}
if (!defined('MODX_BASE_PATH')) {
    $modx_base_path= '/opt/Main_Site/new/';
    $modx_base_url= '/new/';
    define('MODX_BASE_PATH', $modx_base_path);
    define('MODX_BASE_URL', $modx_base_url);
}
if(defined('PHP_SAPI') && (PHP_SAPI == "cli" || PHP_SAPI == "embed")) {
    $isSecureRequest = false;
} else {
    $isSecureRequest = ((isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) !== 'off') || $_SERVER['SERVER_PORT'] == $https_port);
}
if (!defined('MODX_URL_SCHEME')) {
    $url_scheme=  $isSecureRequest ? 'https://' : 'http://';
    define('MODX_URL_SCHEME', $url_scheme);
}
if (!defined('MODX_HTTP_HOST')) {
    if(defined('PHP_SAPI') && (PHP_SAPI == "cli" || PHP_SAPI == "embed")) {
        $http_host='new.progin.tech';
        define('MODX_HTTP_HOST', $http_host);
    } else {
        $http_host= array_key_exists('HTTP_HOST', $_SERVER) ? htmlspecialchars($_SERVER['HTTP_HOST'], ENT_QUOTES) : 'new.progin.tech';
        if ($_SERVER['SERVER_PORT'] != 80) {
            $http_host = str_replace(':' . $_SERVER['SERVER_PORT'], '', $http_host); // remove port from HTTP_HOST
        }
        $http_host .= in_array($_SERVER['SERVER_PORT'], [80, 443]) ? '' : ':' . $_SERVER['SERVER_PORT'];
        define('MODX_HTTP_HOST', $http_host);
    }
}
if (!defined('MODX_SITE_URL')) {
    $site_url= $url_scheme . $http_host . MODX_BASE_URL;
    define('MODX_SITE_URL', $site_url);
}
if (!defined('MODX_ASSETS_PATH')) {
    $modx_assets_path= '/opt/Main_Site/new/assets/';
    $modx_assets_url= '/new/assets/';
    define('MODX_ASSETS_PATH', $modx_assets_path);
    define('MODX_ASSETS_URL', $modx_assets_url);
}
if (!defined('MODX_LOG_LEVEL_FATAL')) {
    define('MODX_LOG_LEVEL_FATAL', 0);
    define('MODX_LOG_LEVEL_ERROR', 1);
    define('MODX_LOG_LEVEL_WARN', 2);
    define('MODX_LOG_LEVEL_INFO', 3);
    define('MODX_LOG_LEVEL_DEBUG', 4);
}
