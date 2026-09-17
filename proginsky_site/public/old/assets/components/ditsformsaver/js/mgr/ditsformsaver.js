var Ditsformsaver = function(config) {
    config = config || {};
    Ditsformsaver.superclass.constructor.call(this,config);
};
Ext.extend(Ditsformsaver,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {}
});
Ext.reg('ditsformsaver',Ditsformsaver);

Ditsformsaver = new Ditsformsaver();