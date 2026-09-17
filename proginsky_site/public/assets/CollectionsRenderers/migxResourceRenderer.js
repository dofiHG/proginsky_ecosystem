Collections.renderer.migxImgRenderer = function (value, metaData, record, rowIndex, colIndex, store) {
    // Преобразуем в объект для упрощенной работы
    var obj;
    try {
        obj = JSON.parse(value);
    } catch (error) {
        // Если происходит ошибка при преобразовании, возвращаем пустую строку
        return 'Нет изображения';
    }

    // Назначаем название нужного нам ключа
    var image_source = 'resource-image';

    // Обработка возможных ошибок и пропущенных значений
    if (!obj || !obj[0] || !obj[0][image_source] || !record.data.id) {
        // Возвращаем пустую строку или другую обработку, если не найдены все необходимые данные
        return '';
    }

    // Получаем название директории
    var dir = 'resourceimages';

    // Создаем HTML для изображения, используя найденные данные
    var imgUrl = "/assets/" + dir + "/" + record.data.id + "/" + obj[0][image_source];
    return "<img class=\"res-img\" width=\"100%\" src=\"" + imgUrl + "\" />";
}

Collections.renderer.categoryRenderer = function (value, metaData, record, rowIndex, colIndex, store) {
    // Преобразуем в объект для упрощенной работы
    var obj = JSON.parse(value);

    // Назначаем название нужного нам ключа
    var category_key = 'resource-category';

    // Обработка возможных ошибок и пропущенных значений
    if (!obj[0][category_key] || !record.data.id) {
        // Возвращаем пустую строку или другую обработку, если не найдены все необходимые данные
        return '';
    }

    // Возвращаем значение категории
    return obj[0][category_key];
}

Collections.renderer.pagetitleLongtitleWithButtons = function(value, metaData, record, rowIndex, colIndex, store) {
    var tpl = new Ext.XTemplate('<tpl for="."><div class="collections-title-column">'
        +'<span class="collections-children-icon x-tree-node-collapsed"><i class="{icons}"></i></span><h3 class="main-column buttons"><a href="{[ parent.self.getEditChildUrl(parent) ]}" title="Edit {pagetitle}">{pagetitle}</a></h3>'
        +'<p>{longtitle}</p>'
        +'<ul class="actions">'
        +'<tpl for="actions">'
        +'<tpl if="values.urlFunction">'
        +'<li><a href="{[ parent.self[values.urlFunction](parent) ]}" class="{className}">{text}</a></li>'
        +'</tpl>'
        +'<tpl if="!values.urlFunction">'
        +'<li><a href="javascript:void(0);" class="controlBtn {className}">{text}</a></li>'
        +'</tpl>'
        +'</tpl>'
        +'</ul>'
        +'</div></tpl>',{
        compiled: true
    });

    // Объединить record.data и record.json в один объект
    var combinedData = Object.assign({}, record.data, record.json);

    // Добавить ссылку на текущий контекст
    combinedData.self = this;

    return tpl.apply(combinedData);
};


