<?php
/**
 * @package ditsformsaver
 * @subpackage controllers
 */
require_once dirname(dirname(__FILE__)) . '/model/ditsformsaver/ditsformsaver.class.php';
$ditsformsaver = new Ditsformsaver($modx);

$modx->getCollection('dfsForm');
$modx->getCollection('dfsResult');
$modx->getCollection('dfsValue');

return $ditsformsaver->initialize('mgr');