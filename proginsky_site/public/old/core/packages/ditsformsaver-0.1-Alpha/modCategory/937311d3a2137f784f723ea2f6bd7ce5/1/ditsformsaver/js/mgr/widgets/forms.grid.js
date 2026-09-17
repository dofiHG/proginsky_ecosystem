Ditsformsaver.grid.Forms = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'ditsformsaver-grid-forms'
        ,url: Ditsformsaver.config.connectorUrl
        ,baseParams: { action: 'mgr/form/getlist' }
        ,save_action: 'mgr/form/updateFromGrid'
        ,fields: ['id','name', 'fields', 'total']
        ,paging: true
        ,autosave: true
        ,remoteSort: true
        ,anchor: '97%'
        ,autoExpandColumn: 'name'
        ,columns: [{
            header: _('id')
            ,dataIndex: 'id'
            ,sortable: true
            ,width: 10
        },{
            header: _('ditsformsaver.form.name')
            ,dataIndex: 'name'
            ,sortable: true
            ,editor: { xtype: 'textfield' }
        },{
            header: _('ditsformsaver.form.fields')
            ,dataIndex: 'fields'
            ,sortable: false
            ,editor: { xtype: 'textfield' }
        },{
            header: _('ditsformsaver.form.results')
            ,dataIndex: 'total'
            ,sortable: false
        }]
        ,tbar: [{
            xtype: 'textfield'
            ,id: 'ditsformsaver-search-filter'
            ,emptyText: _('ditsformsaver.search...')
            ,listeners: {
                'change': {fn:this.search,scope:this}
                ,'render': {fn: function(cmp) {
                    new Ext.KeyMap(cmp.getEl(), {
                        key: Ext.EventObject.ENTER
                        ,fn: function() {
                            this.fireEvent('change',this);
                            this.blur();
                            return true;
                        }
                        ,scope: cmp
                    });
                },scope:this}
            }
        },{
            text: _('ditsformsaver.form.create')
            ,handler: { xtype: 'ditsformsaver-window-form-create' ,blankValues: true }
        }]
    });
    Ditsformsaver.grid.Forms.superclass.constructor.call(this,config)
};
Ext.extend(Ditsformsaver.grid.Forms,MODx.grid.Grid,{
    search: function(tf,nv,ov) {
        var s = this.getStore();
        s.baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
        this.refresh();
    }
    ,getMenu: function() {
        var m = [{
            text: _('ditsformsaver.form.update')
            ,handler: this.updateForm
        },'-',{
            text: _('ditsformsaver.form.remove')
            ,handler: this.removeForm
        },'-',{
            text: _('ditsformsaver.form.clear')
            ,handler: this.clearForm
        },'-',{
            text: _('ditsformsaver.form.export.xls')
            ,handler: this.exportXLS
        },'-',{
            text: _('ditsformsaver.form.export.csv')
            ,handler: this.exportCSV
        }];
        this.addContextMenuItem(m);
        return true;
    }
    ,updateForm: function(btn,e) {
        if (!this.updateFormWindow) {
            this.updateFormWindow = MODx.load({
                xtype: 'ditsformsaver-window-form-update'
                ,record: this.menu.record
                ,listeners: {
                    'success': {fn:this.refresh,scope:this}
                }
            });
        } else {
            this.updateFormWindow.setValues(this.menu.record);
        }
        this.updateFormWindow.show(e.target);
    }

    ,removeForm: function() {
        MODx.msg.confirm({
            title: _('ditsformsaver.form.remove')
            ,text: _('ditsformsaver.form.remove.confirm')
            ,url: this.config.url
            ,params: {
                action: 'mgr/form/remove'
                ,id: this.menu.record.id
            }
            ,listeners: {
                'success': {fn:this.refresh,scope:this}
            }
        });
    }

    ,clearForm: function() {
        MODx.msg.confirm({
            title: _('ditsformsaver.form.clear')
            ,text: _('ditsformsaver.form.clear.confirm')
            ,url: this.config.url
            ,params: {
                action: 'mgr/form/clear'
                ,id: this.menu.record.id
            }
            ,listeners: {
                'success': {fn:this.refresh,scope:this}
            }
        });
    }

    ,exportXLS: function() {
        window.location.href = this.config.url+'?HTTP_MODAUTH='+MODx.siteId+'&action=mgr/form/xls&id='+this.menu.record.id;
    }

    ,exportCSV: function() {
        window.location.href = this.config.url+'?HTTP_MODAUTH='+MODx.siteId+'&action=mgr/form/csv&id='+this.menu.record.id;
    }    
});
Ext.reg('ditsformsaver-grid-forms',Ditsformsaver.grid.Forms);


Ditsformsaver.window.CreateForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('ditsformsaver.form.create')
        ,url: Ditsformsaver.config.connectorUrl
        ,baseParams: {
            action: 'mgr/form/create'
        }
        ,fields: [{
            xtype: 'textfield'
            ,fieldLabel: _('ditsformsaver.form.name')
            ,name: 'name'
            ,width: 300
        },
        {
            xtype: 'textarea'
            ,fieldLabel: _('ditsformsaver.form.fields')
            ,name: 'fields'
            ,width: 300
        }]
    });
    Ditsformsaver.window.CreateForm.superclass.constructor.call(this,config);
};
Ext.extend(Ditsformsaver.window.CreateForm,MODx.Window);
Ext.reg('ditsformsaver-window-form-create',Ditsformsaver.window.CreateForm);

Ditsformsaver.window.UpdateForm = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('ditsformsaver.form.update')
        ,url: Ditsformsaver.config.connectorUrl
        ,baseParams: {
            action: 'mgr/form/update'
        }
        ,fields: [{
            xtype: 'hidden'
            ,name: 'id'
        },{
            xtype: 'textfield'
            ,fieldLabel: _('ditsformsaver.form.name')
            ,name: 'name'
            ,width: 300
        },{
            xtype: 'textarea'
            ,fieldLabel: _('ditsformsaver.form.fields')
            ,name: 'fields'
            ,width: 300,
            multiline: true
        }]
    });
    Ditsformsaver.window.UpdateForm.superclass.constructor.call(this,config);
};
Ext.extend(Ditsformsaver.window.UpdateForm,MODx.Window);
Ext.reg('ditsformsaver-window-form-update',Ditsformsaver.window.UpdateForm);
Ext.reg('ditsformsaver-window-form-update',Ditsformsaver.window.UpdateForm);