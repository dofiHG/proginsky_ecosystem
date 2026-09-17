<?php
/**
 * Loads the header for mgr pages.
 *
 * @package ditsformsaver
 * @subpackage controllers
 */
$modx->regClientStartupScript($ditsformsaver->config['jsUrl'].'mgr/ditsformsaver.js');
$modx->regClientStartupHTMLBlock('<script type="text/javascript">
Ext.onReady(function() {
    Ditsformsaver.config = '.$modx->toJSON($ditsformsaver->config).';
});
</script>');

return '';