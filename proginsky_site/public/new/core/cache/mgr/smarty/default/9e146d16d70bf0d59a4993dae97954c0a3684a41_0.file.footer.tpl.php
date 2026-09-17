<?php
/* Smarty version 4.3.0, created on 2023-07-17 17:58:54
  from '/opt/Main_Site/new/manager/templates/default/footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.0',
  'unifunc' => 'content_64b5572e7020f7_00532241',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9e146d16d70bf0d59a4993dae97954c0a3684a41' => 
    array (
      0 => '/opt/Main_Site/new/manager/templates/default/footer.tpl',
      1 => 1689591191,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64b5572e7020f7_00532241 (Smarty_Internal_Template $_smarty_tpl) {
?>    </div>
    <!-- #modx-content-->
    <div id="modx-footer">
        <?php if ($_smarty_tpl->tpl_vars['_search']->value) {?>
            <div class="modx-subnav" id="modx-manager-search-icon-submenu">
                <div class="modx-subnav-arrow"></div>
                <div id="modx-manager-search" role="search"></div>
            </div>
        <?php }?>
        <?php $_template = new Smarty_Internal_Template('eval:'.$_smarty_tpl->tpl_vars['navb_submenus']->value, $_smarty_tpl->smarty, $_smarty_tpl);echo $_template->fetch(); ?>
        <?php $_template = new Smarty_Internal_Template('eval:'.$_smarty_tpl->tpl_vars['userNav_submenus']->value, $_smarty_tpl->smarty, $_smarty_tpl);echo $_template->fetch(); ?>
    </div>
</div>
<!-- #modx-container -->

</body>
</html><?php }
}
