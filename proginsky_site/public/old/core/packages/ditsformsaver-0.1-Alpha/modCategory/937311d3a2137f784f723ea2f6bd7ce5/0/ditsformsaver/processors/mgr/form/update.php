<?php
/**
 * @package ditsformsaver
 * @subpackage processors
 */

/* get obj */
if (empty($scriptProperties['id'])) return $modx->error->failure($modx->lexicon('ditsformsaver.form_err_ns'));
$form = $modx->getObject('dfsForm',$scriptProperties['id']);
if (empty($form)) return $modx->error->failure($modx->lexicon('ditsformsaver.form_err_nf'));

/* set fields */
$form->fromArray($scriptProperties);

/* save */
if ($form->save() == false) {
    return $modx->error->failure($modx->lexicon('ditsformsaver.form_err_save'));
}


return $modx->error->success('',$form);