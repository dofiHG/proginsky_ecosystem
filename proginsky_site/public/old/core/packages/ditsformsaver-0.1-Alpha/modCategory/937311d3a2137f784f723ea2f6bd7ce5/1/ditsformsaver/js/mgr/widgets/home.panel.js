Ditsformsaver.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config,{
        border: false
        ,baseCls: 'modx-formpanel'
        ,items: [{
            html: '<h2>'+_('ditsformsaver.desc')+'</h2>'
            ,border: false
            ,cls: 'modx-page-header'
        },{
            xtype: 'modx-tabs'
            ,bodyStyle: 'padding: 10px'
            ,defaults: { border: false ,autoHeight: true }
            ,border: true
            ,items: [{
                title: _('ditsformsaver')
                ,defaults: { autoHeight: true }
                ,items: [{
                    html: '<p>'+_('ditsformsaver.desc')+'</p><br />'
                    ,border: false
                },{
                    xtype: 'ditsformsaver-grid-forms'
                    ,preventRender: true
                }]
            }]
        }]
    });
    Ditsformsaver.panel.Home.superclass.constructor.call(this,config);
};
Ext.extend(Ditsformsaver.panel.Home,MODx.Panel);
Ext.reg('ditsformsaver-panel-home',Ditsformsaver.panel.Home);
