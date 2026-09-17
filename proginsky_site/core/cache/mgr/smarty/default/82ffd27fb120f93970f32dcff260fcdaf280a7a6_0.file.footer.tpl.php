<?php
/* Smarty version 4.3.0, created on 2026-08-27 07:59:57
  from '/opt/proginsky_ecosystem/proginsky_site/public/manager/templates/default/footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.0',
  'unifunc' => 'content_6a8fee7d2420d0_74106891',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '82ffd27fb120f93970f32dcff260fcdaf280a7a6' => 
    array (
      0 => '/opt/proginsky_ecosystem/proginsky_site/public/manager/templates/default/footer.tpl',
      1 => 1690036580,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6a8fee7d2420d0_74106891 (Smarty_Internal_Template $_smarty_tpl) {
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
