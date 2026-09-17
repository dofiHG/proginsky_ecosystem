<?php
/* Smarty version 4.3.0, created on 2023-07-17 17:58:40
  from '/opt/Main_Site/new/setup/templates/complete.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.0',
  'unifunc' => 'content_64b5572033e881_32838638',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '198876370ec9ce61e75b6141a694df3768ea50f8' => 
    array (
      0 => '/opt/Main_Site/new/setup/templates/complete.tpl',
      1 => 1689591198,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64b5572033e881_32838638 (Smarty_Internal_Template $_smarty_tpl) {
?><form id="install" action="?action=complete" method="post">
    <div class="setup_body">
        <h2><?php echo $_smarty_tpl->tpl_vars['_lang']->value['thank_installing'];
echo $_smarty_tpl->tpl_vars['app_name']->value;?>
.</h2>

        <?php if ($_smarty_tpl->tpl_vars['errors']->value) {?>
            <div class="note">
                <h3><?php echo $_smarty_tpl->tpl_vars['_lang']->value['cleanup_errors_title'];?>
</h3>

                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['errors']->value, 'error');
$_smarty_tpl->tpl_vars['error']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['error']->value) {
$_smarty_tpl->tpl_vars['error']->do_else = false;
?>
                    <p><?php echo $_smarty_tpl->tpl_vars['error']->value;?>
</p><hr />
                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
            </div>
            <br />
        <?php }?>

        <p><?php echo $_smarty_tpl->tpl_vars['_lang']->value['please_select_login'];?>
</p>

        <p class="cleanup">
            <input type="checkbox" value="1" id="cleanup" name="cleanup" <?php if ($_smarty_tpl->tpl_vars['cleanup']->value) {?>checked="checked"<?php }?> />

            <label for="cleanup">
                <span class="cleanup_text"><?php echo $_smarty_tpl->tpl_vars['_lang']->value['delete_setup_dir'];?>
</span>
            </label>
        </p>
    </div>

    <div class="setup_navbar complete">
        <input type="submit" id="modx-next" class="button" name="proceed" value="<?php echo $_smarty_tpl->tpl_vars['_lang']->value['login'];?>
" autofocus="autofocus" />
    </div>
</form>
<?php }
}
