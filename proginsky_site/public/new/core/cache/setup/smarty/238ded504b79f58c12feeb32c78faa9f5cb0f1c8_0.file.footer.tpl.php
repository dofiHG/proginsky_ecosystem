<?php
/* Smarty version 4.3.0, created on 2023-07-17 17:58:36
  from '/opt/Main_Site/new/setup/templates/footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.0',
  'unifunc' => 'content_64b5571c88daf4_39924406',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '238ded504b79f58c12feeb32c78faa9f5cb0f1c8' => 
    array (
      0 => '/opt/Main_Site/new/setup/templates/footer.tpl',
      1 => 1689591198,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64b5571c88daf4_39924406 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/opt/Main_Site/new/core/vendor/smarty/smarty/libs/plugins/modifier.replace.php','function'=>'smarty_modifier_replace',),));
?>
            </div>
        </div>
    </div>

    <!-- start footer -->
    <footer>
        <div class="wrapper">
            <div class="copyrite">
                <p><?php ob_start();
echo date('Y');
$_prefixVariable1 = ob_get_clean();
echo smarty_modifier_replace($_smarty_tpl->tpl_vars['_lang']->value['modx_footer1'],'[[+current_year]]',$_prefixVariable1);?>
</p>
            </div>
            <div class="copyrite_info">
                <p><?php echo $_smarty_tpl->tpl_vars['_lang']->value['modx_footer2'];?>
</p>
            </div>
        </div>
    </footer>
    <!-- end footer -->
</body>

</html>
<?php }
}
