<?php
/* Smarty version 4.3.0, created on 2023-07-17 23:29:47
  from '/opt/Main_Site/new/manager/templates/default/element/tv/renders/input/url.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.0',
  'unifunc' => 'content_64b5a4bb445073_88128927',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2f6186f06434c0d60ae137ee2d5945d01505aa65' => 
    array (
      0 => '/opt/Main_Site/new/manager/templates/default/element/tv/renders/input/url.tpl',
      1 => 1689591192,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64b5a4bb445073_88128927 (Smarty_Internal_Template $_smarty_tpl) {
?><select id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix" onchange="MODx.fireResourceFormChange();">
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['urls']->value, 'url');
$_smarty_tpl->tpl_vars['url']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['url']->value) {
$_smarty_tpl->tpl_vars['url']->do_else = false;
?>
        <option value="<?php echo $_smarty_tpl->tpl_vars['url']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['url']->value == (($tmp = $_smarty_tpl->tpl_vars['selected']->value ?? null)===null||$tmp==='' ? '' ?? null : $tmp)) {?>selected="selected"<?php }?>><?php echo $_smarty_tpl->tpl_vars['url']->value;?>
</option>
    <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
</select>

<input id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
"
    type="text"
    value="<?php echo $_smarty_tpl->tpl_vars['tv']->value->get('processedValue');?>
"
    onchange="MODx.fireResourceFormChange();"
    class="textfield x-form-text x-form-field"
    style="width: 283px;"
/>

<?php echo '<script'; ?>
>
// <![CDATA[
Ext.onReady(function() {
    MODx.makeDroppable(Ext.get('tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'));
    const protocols = MODx.load({
        xtype: 'combo'
        ,transform: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix'
        ,id: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix'
        ,triggerAction: 'all'
        ,width: 100
        ,maxHeight: 300
        ,typeAhead: false
        ,forceSelection: false
        ,allowBlank: true
        ,msgTarget: 'under'
        ,listeners: {
            select: {
                fn: MODx.fireResourceFormChange,
                scope: this
            }
        }
    });
    protocols.wrap.applyStyles({
        display: "inline-block"
    });

    const fld = MODx.load({
        xtype: 'textfield'
        ,itemId: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,applyTo: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,enableKeyEvents: true
        ,msgTarget: 'under'
        ,allowBlank: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 1 || $_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 'true') {?>true<?php } else { ?>false<?php }?>
        ,listeners: {
            keydown: {
                fn: MODx.fireResourceFormChange,
                scope: this
            }
        }
    });
    MODx.makeDroppable(fld);
    Ext.getCmp('modx-panel-resource').getForm().add(fld);
});
// ]]>
<?php echo '</script'; ?>
>
<?php }
}
