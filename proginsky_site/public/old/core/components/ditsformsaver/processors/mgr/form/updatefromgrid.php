<?php
/**
 * @package ditsformsaver
 * @subpackage processors
 */
/* parse JSON */
if (empty($scriptProperties['data'])) return $modx->error->failure('Invalid data.');
$_DATA = $modx->fromJSON($scriptProperties['data']);
if (!is_array($_DATA)) return $modx->error->failure('Invalid data.');

/* get obj */
if (empty($_DATA['id'])) return $modx->error->failure($modx->lexicon('ditsformsaver.form_err_ns'));
$form = $modx->getObject('dfsForm',$_DATA['id']);
if (empty($form)) return $modx->error->failure($modx->lexicon('ditsformsaver.form_err_nf'));

$form->fromArray($_DATA);

/* save */
if ($form->save() == false) {
    return $modx->error->failure($modx->lexicon('ditsformsaver.form_err_save'));
}

return $modx->error->success('',$form);