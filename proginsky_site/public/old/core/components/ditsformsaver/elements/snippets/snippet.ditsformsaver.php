<?php
/**
 * @package ditsformsaver
 */
if (!isset($modx->ditsformsaver)) {
    $modx->addPackage('ditsformsaver', $modx->getOption('core_path').'components/ditsformsaver/model/');
    $modx->ditsformsaver = $modx->getService('ditsformsaver', 'Ditsformsaver', $modx->getOption('core_path').'components/ditsformsaver/model/ditsformsaver/');
}

$allFormFields = $hook->getValues();

if($allFormFields['dfsForm'] && $form = $modx->getObject('dfsForm', $allFormFields['dfsForm'])){
    //form found, save selected fields
    $fields = str_replace(', ', ',', $form->get('fields'));
    $fields = trim($fields);
    $fields = explode(',', $fields);
    $form = $form->get('id');

    $formResult = $modx->newObject('dfsResult');
    $formResult->fromArray(array(
        'form_id' => $form,
        'ip' => $_SERVER['REMOTE_ADDR']
    ));
    $formResult->save();
    $formResult = $formResult->get('id');

    foreach($fields as $field) {
        if(!empty($_POST[$field])) {
            $value = $modx->newObject('dfsValue');
            $value->fromArray(array(
                'result_id' => $formResult,
                'fieldname' => $field,
                'fieldvalue' => (is_array($_POST[$field]) ? implode(', ', $_POST[$field]) : $_POST[$field]),
            ));
            $value->save();
        }
    }
    return true;
}
else
{
    //form not found, show FormIt error
    $hook->addError('error_msg', 'DitsFormSaver: '.$modx->lexicon('ditsformsaver.form.err_nf') );
    return false;
}