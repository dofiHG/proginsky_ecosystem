<?php
// Получаем родительский ресурс
$parent = $modx->resource;

// Получаем имя чанка из параметров сниппета для отображения фильтра
$tpl = $scriptProperties['tpl'] ?? '';

// Получаем класс, до куда нужно скроллить пользователя после клика
$targetScrollClass = $scriptProperties['targetScrollClass'] ?? '';

$activeClass = $scriptProperties['activeClass'] ?? '';

// Получаем имя чанка из параметров сниппета для отображения обертки всех фильтров
$tplWrapper = $scriptProperties['tplWrapper'] ?? '';

// Получаем имя TV параметра из параметров сниппета. Данный ТВ параметр определяет по какой категории отображаются фильтры
$tvName = $scriptProperties['filterTV'] ?? '';

// Получаем постфикс, для хранения фильтрируемого поля
$filterPostfix = $scriptProperties['filter-postfix'] ?? '';

// Получаем дочерние ресурсы
$children = $modx->getChildIds($parent->get('id'));

// Получаем параметр, по которому понимаем - нужно ли отображать фильтр "Все"
$showAll = (bool)$scriptProperties['showAll'] ?? '';

// Создаем массив для проверки, были ли уже обработаны курсы
$processedCategories = [];
$data = [];

// ЗАПРЕЩЕННЫЕ КАТЕГОРИИ - временно исключаем Дубравную, ТРК и Гагарину
$excludedCategories = ['vgDubrava','vgShopCenter', 'vgSabantui'];

// Задаем порядок сортировки (вытаскиваем из свойств порядок отображения категорий)
$sortingOrder = array_flip(explode(',', $scriptProperties['sortingOrder'] ?? ''));

// УДАЛЯЕМ ЗАПРЕЩЕННЫЕ КАТЕГОРИИ ИЗ ПОРЯДКА СОРТИРОВКИ
foreach ($excludedCategories as $excluded) {
    if (isset($sortingOrder[$excluded])) {
        unset($sortingOrder[$excluded]);
    }
}

// Проходим по дочерним ресурсам
foreach ($children as $childId) {
    // Получаем дочерний ресурс
    $child = $modx->getObject('modResource', $childId);

    $tvValue = json_decode($child->getTVValue($tvName), true)[0];
    $category = $tvValue["resource-category"];
    $subcategory = $tvValue["resource-sub-category"];

    // ПРОПУСКАЕМ ЗАПРЕЩЕННЫЕ КАТЕГОРИИ
    if (in_array($category, $excludedCategories)) {
        continue;
    }

    // Проверяем, был ли уже обработан эта категория среди всех ресурсов
    if (isset($processedCategories[$category])) {
        continue;
    }
    // Если категория еще не обрабатывалась, добавляем ее в массив обработанных курсов
    $processedCategories[$category] = true;

    // Если не содержит, устанавливаем $name и $filter как обычно
    $name = $scriptProperties[$category.'-name'] ?? 'Resource name not found';
    $filter = $scriptProperties[$category.$filterPostfix] ?? 'Resource filter not found';

    // Добавляем данные о курсе в массив
    $data[] = [
        'filter_title' => $filter, // Для отображения текста фильтра
        'filter_target' => '.'.$category, // Для реализации JS фильтров в верхнем меню по курсам
        'filter_target_scroll_class' => $targetScrollClass, // указывает класс контейнера, к которому происходит скролл
        'category' => $category
    ];
}

// Сортируем данные по нужному порядку
usort($data, function($a, $b) use ($sortingOrder) {
    $posA = isset($sortingOrder[$a['category']]) ? $sortingOrder[$a['category']] : 999;
    $posB = isset($sortingOrder[$b['category']]) ? $sortingOrder[$b['category']] : 999;
    return $posA - $posB;
});

// Если showAll == true и есть дочерние элементы, то добавляем элемент "Все" с active_class в начало массива
if ($showAll && !empty($data)){
    array_unshift($data, [
        'filter_title' => 'Все', // Для отображения текста фильтра
        'filter_target' => 'all', // Для реализации JS фильтров в верхнем меню по курсам
        'filter_target_scroll_class' => $targetScrollClass
    ]);
}

// Для первого элемента устанавливаем класс active
if (!empty($data)) {
    $data[0]['active_class'] = $activeClass;
}
    
// Генерируем вывод
$output = '';
foreach ($data as $item) {
    $output .= $modx->getChunk($tpl, $item);
}

$output = $modx -> getChunk($tplWrapper, ['filter_wrapper' => $output]);

return $output;
return;
