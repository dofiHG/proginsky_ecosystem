<?php
// Название MIGX TV параметра
$tvName = $modx->getOption('migxTV', $scriptProperties, '');

// Значение для поиска
$filterValue = $modx->getOption('filterValue', $scriptProperties, '');
$filterArray = json_decode($filterValue, true);

// Получаем объект modTemplateVar
$tvObj = $modx->getObject('modTemplateVar', ['name' => $tvName]);
if ($tvObj === null) {
    $modx->log(modX::LOG_LEVEL_ERROR, "Cannot find TV with name: {$tvName}");
    return '';
}

// Получить все ресурсы
$query = $modx->newQuery('modResource');
$query->innerJoin('modTemplateVarResource', 'TV', [
    'TV.contentid = modResource.id',
    'TV.tmplvarid' => $tvObj->get('id'),
]);

$query->select(['modResource.id', 'TV.value']);

if ($query->prepare() && $query->stmt->execute()) {
    $results = $query->stmt->fetchAll(PDO::FETCH_ASSOC);
} else {
    $modx->log(modX::LOG_LEVEL_ERROR, "Query failed: " . $query->stmt->errorInfo()[2]);
    return '';
}

$resourceIds = [];
foreach ($results as $result) {
    $tvValueArray = json_decode($result['value'], true);
    
    // Ignore MIGX_id when comparing arrays
    foreach ($tvValueArray as &$row) {
        unset($row['MIGX_id']);
    }
    
    if ($tvValueArray == $filterArray) {
        $resourceIds[] = $result['id'];
    }
}

// Устанавливаем значение плейсхолдера
$modx->setPlaceholder('getCorrectFilters_value', implode(',', $resourceIds));

// Ничего не возвращаем
return '';
return;
