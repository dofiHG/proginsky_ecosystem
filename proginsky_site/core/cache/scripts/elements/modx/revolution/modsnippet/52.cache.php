<?php  return '// Получаем родительский ресурс
$parent = $modx->resource;

// Получаем имя чанка из параметров сниппета для отображения страницы курса
$tpl = $scriptProperties[\'tpl\'] ?? \'\';

// Получаем имя TV параметра из параметров сниппета
$tvName = $scriptProperties[\'includeTVs\'] ?? \'\';

// Получаем дочерние ресурсы
$children = $modx->getChildIds($parent->get(\'id\'));

// Получаем постфикс, для хранения фильтрируемого поля
$filterPostfix = $scriptProperties[\'filter-postfix\'] ?? \'\';

// Задаем порядок сортировки (вытаскиваем из свойств порядок отображения категорий)
$sortingOrder = array_flip(explode(\',\', $scriptProperties[\'sortingOrder\'] ?? \'\'));

// ЗАПРЕЩЕННЫЕ КАТЕГОРИИ - временно исключаем Дубравную, ТРК и Гагарину
$excludedCategories = [\'vgDubrava\', \'vgShopCenter\', \'vgSabantui\'];

// УДАЛЯЕМ ЗАПРЕЩЕННЫЕ КАТЕГОРИИ ИЗ ПОРЯДКА СОРТИРОВКИ
foreach ($excludedCategories as $excluded) {
    if (isset($sortingOrder[$excluded])) {
        unset($sortingOrder[$excluded]);
    }
}

// Создаем массив для проверки, были ли уже обработаны курсы
$processedCategories = [];
$data = [];

// Проходим по дочерним ресурсам
foreach ($children as $childId) {
    // Получаем дочерний ресурс
    $child = $modx->getObject(\'modResource\', $childId);

    // Получаем и декодируем TV параметр один раз
    $tvValue = json_decode($child->getTVValue($tvName), true)[0];
    $category = $tvValue["resource-category"];
    $subcategory = $tvValue["resource-sub-category"];

    // ПРОПУСКАЕМ ЗАПРЕЩЕННЫЕ КАТЕГОРИИ
    if (in_array($category, $excludedCategories)) {
        continue;
    }

    // Проверяем, был ли уже обработан эта категория среди всех ресурсов
    if (isset($processedCategories[$category.$subcategory])) {
        continue;
    }
    
    // Если категория еще не обрабатывалась, добавляем ее в массив обработанных курсов
    $processedCategories[$category.$subcategory] = true;
    
    // Получаем название и возраст курса
    $name = $scriptProperties[$category.\'-name\'] ?? \'Resource name not found\';
    $filter = $scriptProperties[$category.$filterPostfix] ?? \'Resource filter not found\';
    $subname = $scriptProperties[$subcategory == "none" ? \'\' : $subcategory.\'-subname\'] ?? \'\';
    
    // Добавляем данные о курсе в массив
    $data[] = [
        \'category\' => [ // для отображения заголовка и подзаголовка (для терабайта) на странице с курсами
            "name" => $name,
            "subname" => $subname
        ],
        \'headerFilterValue\' => $filter, // Для отображения возраста, подходящего под выбранный курс
        \'categoryValue\' => $category,
        \'resourceFilters\' => "[{\\"resource-category\\":\\"$category\\",\\"resource-sub-category\\":\\"$subcategory\\"}]"
    ];
}

// Сортируем данные по нужному порядку
usort($data, function($a, $b) use ($sortingOrder) {
    $posA = isset($sortingOrder[$a[\'categoryValue\']]) ? $sortingOrder[$a[\'categoryValue\']] : 999;
    $posB = isset($sortingOrder[$b[\'categoryValue\']]) ? $sortingOrder[$b[\'categoryValue\']] : 999;
    return $posA - $posB;
});

// Генерируем вывод
$output = \'\';
foreach ($data as $item) {
    $output .= $modx->getChunk($tpl, $item);
}

return $output;
return;
';