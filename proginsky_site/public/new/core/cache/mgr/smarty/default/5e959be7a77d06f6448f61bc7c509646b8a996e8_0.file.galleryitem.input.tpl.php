<?php
/* Smarty version 4.3.0, created on 2023-07-17 23:14:31
  from '/opt/Main_Site/new/core/components/gallery/elements/tv/galleryitem.input.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.0',
  'unifunc' => 'content_64b5a127cb09c1_83407479',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5e959be7a77d06f6448f61bc7c509646b8a996e8' => 
    array (
      0 => '/opt/Main_Site/new/core/components/gallery/elements/tv/galleryitem.input.tpl',
      1 => 1654869666,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64b5a127cb09c1_83407479 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
-form"></div>
<input type="hidden" id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" value="<?php if ($_smarty_tpl->tpl_vars['itemjson']->value) {
echo htmlspecialchars((string)$_smarty_tpl->tpl_vars['itemjson']->value, ENT_QUOTES, 'UTF-8', true);
} else { ?>{}<?php }?>" />


<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[
Ext.onReady(function() {
    MODx.load({
        xtype: 'gal-panel-tv'
        ,tv: '<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,tvValue: '<?php echo $_smarty_tpl->tpl_vars['tv']->value->value;?>
'
        <?php if ($_smarty_tpl->tpl_vars['itemjson']->value) {?>,data: <?php echo $_smarty_tpl->tpl_vars['itemjson']->value;
}?>
    });
});
// ]]>
<?php echo '</script'; ?>
>
<?php }
}
