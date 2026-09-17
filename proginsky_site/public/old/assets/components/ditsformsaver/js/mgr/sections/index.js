Ext.onReady(function() {
    MODx.load({ xtype: 'ditsformsaver-page-home'});
});

Ditsformsaver.page.Home = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        components: [{
            xtype: 'ditsformsaver-panel-home'
            ,renderTo: 'ditsformsaver-panel-home-div'
        }]
    });
    Ditsformsaver.page.Home.superclass.constructor.call(this,config);
};
Ext.extend(Ditsformsaver.page.Home,MODx.Component);
Ext.reg('ditsformsaver-page-home',Ditsformsaver.page.Home);