<?php
/**
 * @package ditsformsaver
 * @subpackage processors
 */

if (empty($scriptProperties['name'])) {
    $modx->error->addField('name',$modx->lexicon('ditsformsaver.form.err_ns_name'));
} else {
    $alreadyExists = $modx->getObject('dfsForm',array('name' => $scriptProperties['name']));
    if ($alreadyExists) {
        $modx->error->addField('name',$modx->lexicon('ditsformsaver.form.err_ae'));
    }
}


if ($modx->error->hasError()) {
    return $modx->error->failure();
}

$form = $modx->newObject('dfsForm');
$form->fromArray($scriptProperties);

/* save */
if ($form->save() == false) {
    return $modx->error->failure($modx->lexicon('ditsformsaver.form.err_save'));
}

return $modx->error->success('',$form);