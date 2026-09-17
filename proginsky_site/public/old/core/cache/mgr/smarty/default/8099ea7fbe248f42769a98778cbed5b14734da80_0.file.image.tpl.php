<?php
/* Smarty version 3.1.44, created on 2023-08-04 11:12:37
  from '/opt/Main_Site/old/manager/templates/default/element/tv/renders/input/image.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.44',
  'unifunc' => 'content_64ccb2f583f6b5_43068023',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8099ea7fbe248f42769a98778cbed5b14734da80' => 
    array (
      0 => '/opt/Main_Site/old/manager/templates/default/element/tv/renders/input/image.tpl',
      1 => 1690024885,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64ccb2f583f6b5_43068023 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/opt/Main_Site/old/core/model/smarty/plugins/modifier.replace.php','function'=>'smarty_modifier_replace',),));
?>
<div id="tv-image-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
"></div>
<div id="tv-image-preview-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" class="modx-tv-image-preview">
    <?php if ($_smarty_tpl->tpl_vars['tv']->value->value) {?><img src="<?php echo $_smarty_tpl->tpl_vars['_config']->value['connectors_url'];?>
system/phpthumb.php?w=400&h=400&aoe=0&far=0&f=png&src=<?php echo $_smarty_tpl->tpl_vars['tv']->value->value;?>
&source=<?php echo $_smarty_tpl->tpl_vars['source']->value;?>
&version=<?php echo $_smarty_tpl->tpl_vars['hash']->value;?>
" alt="" /><?php }?>
</div>
<?php if ($_smarty_tpl->tpl_vars['disabled']->value) {
echo '<script'; ?>
>
// <![CDATA[

Ext.onReady(function() {
    var fld<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
 = MODx.load({
    
        xtype: 'displayfield'
        ,tv: '<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,renderTo: 'tv-image-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,value: '<?php echo strtr($_smarty_tpl->tpl_vars['tv']->value->value, array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/", "<!--" => "<\!--", "<s" => "<\s", "<S" => "<\S" ));?>
'
        ,width: 400
        ,msgTarget: 'under'
    
    });
});

// ]]>
<?php echo '</script'; ?>
>
<?php } else {
echo '<script'; ?>
>
// <![CDATA[

Ext.onReady(function() {
    var fld<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
 = MODx.load({
    
        xtype: 'modx-panel-tv-image'
        ,renderTo: 'tv-image-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,tv: '<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,value: '<?php echo strtr($_smarty_tpl->tpl_vars['tv']->value->value, array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/", "<!--" => "<\!--", "<s" => "<\s", "<S" => "<\S" ));?>
'
        ,relativeValue: '<?php echo strtr($_smarty_tpl->tpl_vars['tv']->value->value, array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/", "<!--" => "<\!--", "<s" => "<\s", "<S" => "<\S" ));?>
'
        ,width: 400
        ,allowBlank: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 1 || $_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 'true') {?>true<?php } else { ?>false<?php }?>
        ,wctx: '<?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['wctx'])===null||$tmp==='' ? '' : $tmp)) {
echo $_smarty_tpl->tpl_vars['params']->value['wctx'];
} else { ?>web<?php }?>'
        <?php if ((($tmp = @$_smarty_tpl->tpl_vars['params']->value['openTo'])===null||$tmp==='' ? '' : $tmp)) {?>,openTo: '<?php echo smarty_modifier_replace($_smarty_tpl->tpl_vars['params']->value['openTo'],"'","\\'");?>
'<?php }?>
        ,source: '<?php echo $_smarty_tpl->tpl_vars['source']->value;?>
'
    
        ,msgTarget: 'under'
        ,listeners: {
            'select': {fn:function(data) {
                MODx.fireResourceFormChange();
                var d = Ext.get('tv-image-preview-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
');
                if (Ext.isEmpty(data.url)) {
                    d.update('');
                } else {
                    
                    d.update('<img src="<?php echo $_smarty_tpl->tpl_vars['_config']->value['connectors_url'];?>
system/phpthumb.php?w=400&h=400&aoe=0&far=0&f=png&src='+data.url+'&wctx=<?php echo $_smarty_tpl->tpl_vars['ctx']->value;?>
&source=<?php echo $_smarty_tpl->tpl_vars['source']->value;?>
" alt="" />');
                    
                }
            }}
        }
        ,validate: function () {
            var value = Ext.getCmp('tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
').value;
            return !(!this.allowBlank && (value.length < 1));
        }
        ,markInvalid : Ext.emptyFn
        ,clearInvalid : Ext.emptyFn
    });
    MODx.makeDroppable(Ext.get('tv-image-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'),function(v) {
        var cb = Ext.getCmp('tvbrowser<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
');
        if (cb) {
            cb.setValue(v);
            cb.fireEvent('select',{relativeUrl:v});
        }
        return '';
    });
    Ext.getCmp('modx-panel-resource').getForm().add(fld<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
);
});

// ]]>
<?php echo '</script'; ?>
>
<?php }
}
}
