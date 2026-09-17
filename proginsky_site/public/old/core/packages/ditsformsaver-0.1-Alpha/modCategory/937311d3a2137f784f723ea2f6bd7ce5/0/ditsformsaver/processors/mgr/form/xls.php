<?php
/**
 * Export form results to XLS
 *
 * @package ditsformsaver
 * @subpackage processors
 */

require_once($modx->getOption('core_path').'components/ditsformsaver/model/excelwriterxml/ExcelWriterXML.php');

if($_REQUEST['id'] && $form = $modx->getObject('dfsForm', array('id' => $_REQUEST['id']))) {

    //get columns
    $fields = str_replace(', ', ',', $form->get('fields'));
    $fields = trim($fields);
    $fields = explode(',', $fields);
    array_unshift($fields, 'ip'); //first element is Remote IP

    $col = 0;
    $row = 0;

    $xml = new ExcelWriterXML;

    $format = $xml->addStyle('StyleHeader');
    $format->fontBold();

    $sheet = $xml->addSheet('Form Results');
    
    foreach($fields as $field) {
        $sheet->writeString($row, $col, $field, 'StyleHeader');
        $col++;
    }
    $row++;
    $col = 0;

    $formresults = $modx->getCollection('dfsResult', array('form_id' => $form->get('id')));
    foreach($formresults as $formresult) {

        $sheet->writeString($row, 0, $formresult->get('ip'));

        $values = $formresult->getMany('Values');
        foreach($values as $value) {
            if($col = array_search( $value->get('fieldname'), $fields)) {
                $sheet->writeString($row, $col, $value->get('fieldvalue'));
            }
        }
        $row++;
    }

    $xml->sendHeaders();
    $xml->writeData();
    exit;
}