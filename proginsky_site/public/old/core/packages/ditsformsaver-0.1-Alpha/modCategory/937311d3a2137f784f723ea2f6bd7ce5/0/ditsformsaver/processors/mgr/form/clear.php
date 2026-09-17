<?php
/**
 * @package ditsformsaver
 * @subpackage processors
 */

/* get obj */
if (empty($scriptProperties['id'])) return $modx->error->failure($modx->lexicon('ditsformsaver.form_err_ns'));

/* clear form results */
$results = $modx->getCollection( 'dfsResult', array('form_id' => (int)$scriptProperties['id']) );
foreach($results as $result) {
    $modx->removeCollection('dfsValue', array('result_id' => $result->get('id')));
    $result->remove();
}

return $modx->error->success('',$form);