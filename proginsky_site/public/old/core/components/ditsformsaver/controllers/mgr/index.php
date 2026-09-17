<?php
/**
 * Loads the home page.
 *
 * @package ditsformsaver
 * @subpackage controllers
 */
$modx->regClientStartupScript($ditsformsaver->config['jsUrl'].'mgr/widgets/forms.grid.js');
$modx->regClientStartupScript($ditsformsaver->config['jsUrl'].'mgr/widgets/home.panel.js');
$modx->regClientStartupScript($ditsformsaver->config['jsUrl'].'mgr/sections/index.js');

$output = '<div id="ditsformsaver-panel-home-div"></div>';

return $output;
