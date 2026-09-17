<?php
/* Smarty version 4.3.0, created on 2023-07-17 23:04:56
  from '/opt/Main_Site/new/core/components/migx/elements/tv/migx.inputproperties.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.0',
  'unifunc' => 'content_64b59ee8c15780_08569593',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'db1106252cb24089c7452caf9c80bde66332b33f' => 
    array (
      0 => '/opt/Main_Site/new/core/components/migx/elements/tv/migx.inputproperties.tpl',
      1 => 1642095608,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64b59ee8c15780_08569593 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="tv-input-properties-form<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
"></div>


<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[
var params = {
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['params']->value, 'v', false, 'k', 'p', array (
  'last' => true,
  'iteration' => true,
  'total' => true,
));
$_smarty_tpl->tpl_vars['v']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->do_else = false;
$_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['iteration']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['last'] = $_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['iteration'] === $_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['total'];
?>
 '<?php echo $_smarty_tpl->tpl_vars['k']->value;?>
': '<?php echo strtr((string)$_smarty_tpl->tpl_vars['v']->value, array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/", "<!--" => "<\!--", "<s" => "<\s", "<S" => "<\S" ));?>
'<?php if (!(isset($_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['last']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_p']->value['last'] : null)) {?>,<?php }
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
};
var oc = {'change':{fn:function(){Ext.getCmp('modx-panel-tv').markDirty();},scope:this}};
MODx.load({
    xtype: 'panel'
    ,layout: 'form'
    ,autoHeight: true
    ,labelWidth: 150
    ,border: false
    ,items: [{
        xtype: 'textfield'
        ,fieldLabel: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['configs'];?>
'
        ,description: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['configs_desc'];?>
'
        ,name: 'inopt_configs'
        ,hiddenName: 'inopt_configs'
        ,id: 'inopt_configs<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
        ,value: params['configs']
        ,width: 600
        ,listeners: oc
    },{
        xtype: 'textarea'
        ,fieldLabel: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['tabs'];?>
'
        ,description: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['tabs_desc'];?>
'
        ,name: 'inopt_formtabs'
        ,hiddenName: 'inopt_formtabs'
        ,id: 'inopt_formtabs<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
        ,value: params['formtabs']
        ,width: 600
        ,height: 150
        ,listeners: oc
    },{
        xtype: 'textarea'
        ,fieldLabel: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['columns'];?>
'
        ,description: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['columns_desc'];?>
'
        ,name: 'inopt_columns'
        ,hiddenName: 'inopt_columns'
        ,id: 'inopt_columns<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
        ,value: params['columns']
        ,width: 600
        ,height: 150
        ,listeners: oc
    },{
        xtype: 'textfield'
        ,fieldLabel: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['btntext'];?>
'
        ,description: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['btntext_desc'];?>
'
        ,name: 'inopt_btntext'
        ,hiddenName: 'inopt_btntext'
        ,id: 'inopt_btntext<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
        ,value: params['btntext']
        ,width: 600
        ,listeners: oc
    },{
        xtype: 'textfield'
        ,fieldLabel: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['previewurl'];?>
'
        ,description: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['previewurl_desc'];?>
'
        ,name: 'inopt_previewurl'
        ,hiddenName: 'inopt_previewurl'
        ,id: 'inopt_previewurl<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
        ,value: params['previewurl']
        ,width: 600
        ,listeners: oc
    },{
        xtype: 'textfield'
        ,fieldLabel: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['jsonvarkey'];?>
'
        ,description: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['jsonvarkey_desc'];?>
'
        ,name: 'inopt_jsonvarkey'
        ,hiddenName: 'inopt_jsonvarkey'
        ,id: 'inopt_jsonvarkey<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
        ,value: params['jsonvarkey']
        ,width: 600
        ,listeners: oc
    },{
        xtype: 'combo-boolean'
        ,fieldLabel: '<?php echo $_smarty_tpl->tpl_vars['mig']->value['autoResourceFolders'];?>
'
        ,name: 'inopt_autoResourceFolders'
        ,hiddenName: 'inopt_autoResourceFolders'
        ,id: 'inopt_autoResourceFolders<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
        ,value: params['autoResourceFolders'] == 0 || params['autoResourceFolders'] == 'true' ? true : false
        ,width: 300
        ,listeners: oc
    }]
    ,renderTo: 'tv-input-properties-form<?php echo $_smarty_tpl->tpl_vars['tv']->value;?>
'
});
// ]]>
<?php echo '</script'; ?>
>
<?php }
}
