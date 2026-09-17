<?php
/**
 * Export form results to CSV
 *
 * @package ditsformsaver
 * @subpackage processors
 */

if($_REQUEST['id'] && $form = $modx->getObject('dfsForm', array('id' => $_REQUEST['id']))) {

    //get columns
    $fields = str_replace(', ', ',', $form->get('fields'));
    $fields = trim($fields);
    $fields = explode(',', $fields);
    array_unshift($fields, 'ip'); //first element is Remote IP

    //download headers
    header('Content-Type: application/csv');
    header('Content-Disposition: attachment; filename="'.$form->get('name').'.csv"');

    $outstream = fopen("php://output", 'w');

    //column headers
    fputcsv($outstream, $fields, ';', '"');

    //results
    $formresults = $modx->getCollection('dfsResult', array('form_id' => $form->get('id')));
    foreach($formresults as $formresult) {
        $values = $formresult->getMany('Values');
        $formresult = $formresult->toArray();

        foreach($values as $value) {
            if(array_search( $value->get('fieldname'), $fields)) {
               $formresult[$value->get('fieldname')] = $value->get('fieldvalue');
            }
        }

        $outputArr = array();
        foreach($fields as $field) {
            $outputArr[] = isset($formresult[$field]) ? $formresult[$field] : '';
        }
        fputcsv($outstream, $outputArr, ';', '"');
        unset($outputArr);
    }

    fclose($outstream);
    exit;
}