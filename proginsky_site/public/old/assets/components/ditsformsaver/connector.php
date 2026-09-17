<?php
/**
 * DitsFormSaver Connector
 *
 * @package ditsformsaver
 */
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/config.core.php';
require_once MODX_CORE_PATH.'config/'.MODX_CONFIG_KEY.'.inc.php';
require_once MODX_CONNECTORS_PATH.'index.php';

$corePath = $modx->getOption('ditsformsaver.core_path',null,$modx->getOption('core_path').'components/ditsformsaver/');
require_once $corePath.'model/ditsformsaver/ditsformsaver.class.php';
$modx->ditsformsaver = new Ditsformsaver($modx);

$modx->lexicon->load('ditsformsaver:default');

/* handle request */
$path = $modx->getOption('processorsPath',$modx->ditsformsaver->config,$corePath.'processors/');
$modx->request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));