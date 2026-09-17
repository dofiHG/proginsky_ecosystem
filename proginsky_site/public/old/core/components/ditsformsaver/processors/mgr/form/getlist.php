<?php
/**
 * Get a list of Forms
 *
 * @package ditsformsaver
 * @subpackage processors
 */
/* setup default properties */
$isLimit = !empty($scriptProperties['limit']);
$start = $modx->getOption('start',$scriptProperties,0);
$limit = $modx->getOption('limit',$scriptProperties,20);
$sort = $modx->getOption('sort',$scriptProperties,'id');
$dir = $modx->getOption('dir',$scriptProperties,'ASC');
$query = $modx->getOption('query',$scriptProperties,'');

/* build query */
$c = $modx->newQuery('dfsForm');

if (!empty($query)) {
    $c->where(array(
        'name:LIKE' => '%'.$query.'%'
    ));
}

$count = $modx->getCount('dfsForm',$c);
$c->sortby($sort,$dir);
if ($isLimit) $c->limit($limit,$start);
$forms = $modx->getIterator('dfsForm', $c);

/* iterate */
$list = array();
foreach ($forms as $form) {
    $formArray = $form->toArray();
    $formArray['total'] = (int)$modx->getCount('dfsResult', array('form_id' => $formArray['id']));
    $modx->log(MODX_LOG_LEVEL_ERROR, var_export($formArray, true));
    $list[]= $formArray;
}
return $this->outputArray($list,$count);