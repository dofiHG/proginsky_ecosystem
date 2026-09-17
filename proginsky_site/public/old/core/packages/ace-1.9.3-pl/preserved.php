<?php return array (
  'f2e23f123e3caa440eda6672e0aec139' => 
  array (
    'criteria' => 
    array (
      'name' => 'ace',
    ),
    'object' => 
    array (
      'name' => 'ace',
      'path' => '{core_path}components/ace/',
      'assets_path' => '',
    ),
  ),
  'c64f1b6db56d686ec01533560f9c34ae' => 
  array (
    'criteria' => 
    array (
      'name' => 'Ace',
    ),
    'object' => 
    array (
      'id' => 3,
      'source' => 0,
      'property_preprocess' => 0,
      'name' => 'Ace',
      'description' => 'Ace code editor plugin for MODx Revolution',
      'editor_type' => 0,
      'category' => 0,
      'cache_type' => 0,
      'plugincode' => '/**
 * Ace Source Editor Plugin
 *
 * Events: OnManagerPageBeforeRender, OnRichTextEditorRegister, OnSnipFormPrerender,
 * OnTempFormPrerender, OnChunkFormPrerender, OnPluginFormPrerender,
 * OnFileCreateFormPrerender, OnFileEditFormPrerender, OnDocFormPrerender
 *
 * @author Danil Kostin <danya.postfactum(at)gmail.com>
 *
 * @package ace
 *
 * @var array $scriptProperties
 * @var Ace $ace
 */
if ($modx->event->name == \'OnRichTextEditorRegister\') {
    $modx->event->output(\'Ace\');
    return;
}

if ($modx->getOption(\'which_element_editor\', null, \'Ace\') !== \'Ace\') {
    return;
}

$corePath = $modx->getOption(\'ace.core_path\', null, $modx->getOption(\'core_path\').\'components/ace/\');
$ace = $modx->getService(\'ace\', \'Ace\', $corePath.\'model/ace/\');
$ace->initialize();

$extensionMap = array(
    \'tpl\'   => \'text/x-smarty\',
    \'htm\'   => \'text/html\',
    \'html\'  => \'text/html\',
    \'css\'   => \'text/css\',
    \'scss\'  => \'text/x-scss\',
    \'less\'  => \'text/x-less\',
    \'svg\'   => \'image/svg+xml\',
    \'xml\'   => \'application/xml\',
    \'xsl\'   => \'application/xml\',
    \'js\'    => \'application/javascript\',
    \'json\'  => \'application/json\',
    \'php\'   => \'application/x-php\',
    \'sql\'   => \'text/x-sql\',
    \'md\'    => \'text/x-markdown\',
    \'txt\'   => \'text/plain\',
    \'twig\'  => \'text/x-twig\'
);

// Define default mime for html elements(templates, chunks and html resources)
$html_elements_mime=$modx->getOption(\'ace.html_elements_mime\',null,false);
if(!$html_elements_mime){
    // this may deprecated in future because components may set ace.html_elements_mime option now
    switch (true) {
        case $modx->getOption(\'twiggy_class\'):
            $html_elements_mime = \'text/x-twig\';
            break;
        case $modx->getOption(\'pdotools_fenom_parser\'):
            $html_elements_mime = \'text/x-smarty\';
            break;
        default:
            $html_elements_mime = \'text/html\';
    }
}

// Defines wether we should highlight modx tags
$modxTags = false;
switch ($modx->event->name) {
    case \'OnSnipFormPrerender\':
        $field = \'modx-snippet-snippet\';
        $mimeType = \'application/x-php\';
        break;
    case \'OnTempFormPrerender\':
        $field = \'modx-template-content\';
        $modxTags = true;
        $mimeType = $html_elements_mime;
        break;
    case \'OnChunkFormPrerender\':
        $field = \'modx-chunk-snippet\';
        if ($modx->controller->chunk && $modx->controller->chunk->isStatic()) {
            $extension = pathinfo($modx->controller->chunk->name, PATHINFO_EXTENSION);
            if(!$extension||!isset($extensionMap[$extension])){
                $extension = pathinfo($modx->controller->chunk->getSourceFile(), PATHINFO_EXTENSION);
            }
            $mimeType = isset($extensionMap[$extension]) ? $extensionMap[$extension] : \'text/plain\';
        } else {
            $mimeType = $html_elements_mime;
        }
        $modxTags = true;
        break;
    case \'OnPluginFormPrerender\':
        $field = \'modx-plugin-plugincode\';
        $mimeType = \'application/x-php\';
        break;
    case \'OnFileCreateFormPrerender\':
        $field = \'modx-file-content\';
        $mimeType = \'text/plain\';
        break;
    case \'OnFileEditFormPrerender\':
        $field = \'modx-file-content\';
        $extension = pathinfo($scriptProperties[\'file\'], PATHINFO_EXTENSION);
        $mimeType = isset($extensionMap[$extension])
            ? $extensionMap[$extension]
            : (\'@FILE:\'.pathinfo($scriptProperties[\'file\'], PATHINFO_BASENAME));
        $modxTags = $extension == \'tpl\';
        break;
    case \'OnDocFormPrerender\':
        if (!$modx->controller->resourceArray) {
            return;
        }
        $field = \'ta\';
        $mimeType = $modx->getObject(\'modContentType\', $modx->controller->resourceArray[\'content_type\'])->get(\'mime_type\');

        if($mimeType == \'text/html\')$mimeType = $html_elements_mime;

        if ($modx->getOption(\'use_editor\')){
            $richText = $modx->controller->resourceArray[\'richtext\'];
            $classKey = $modx->controller->resourceArray[\'class_key\'];
            if ($richText || in_array($classKey, array(\'modStaticResource\',\'modSymLink\',\'modWebLink\',\'modXMLRPCResource\'))) {
                $field = false;
            }
        }
        $modxTags = true;
        break;
    case \'OnTVInputRenderList\':
        $modx->event->output($corePath . \'elements/tv/input/\');
        break;
    default:
        return;
}

$modxTags = (int) $modxTags;
$script = \'\';
if ($field) {
    $script .= "MODx.ux.Ace.replaceComponent(\'$field\', \'$mimeType\', $modxTags);";
}

if ($modx->event->name == \'OnDocFormPrerender\' && !$modx->getOption(\'use_editor\')) {
    $script .= "MODx.ux.Ace.replaceTextAreas(Ext.query(\'.modx-richtext\'));";
}

if ($script) {
    $modx->controller->addHtml(\'<script>Ext.onReady(function() {\' . $script . \'});</script>\');
}',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'ace/elements/plugins/ace.plugin.php',
      'content' => '/**
 * Ace Source Editor Plugin
 *
 * Events: OnManagerPageBeforeRender, OnRichTextEditorRegister, OnSnipFormPrerender,
 * OnTempFormPrerender, OnChunkFormPrerender, OnPluginFormPrerender,
 * OnFileCreateFormPrerender, OnFileEditFormPrerender, OnDocFormPrerender
 *
 * @author Danil Kostin <danya.postfactum(at)gmail.com>
 *
 * @package ace
 *
 * @var array $scriptProperties
 * @var Ace $ace
 */
if ($modx->event->name == \'OnRichTextEditorRegister\') {
    $modx->event->output(\'Ace\');
    return;
}

if ($modx->getOption(\'which_element_editor\', null, \'Ace\') !== \'Ace\') {
    return;
}

$corePath = $modx->getOption(\'ace.core_path\', null, $modx->getOption(\'core_path\').\'components/ace/\');
$ace = $modx->getService(\'ace\', \'Ace\', $corePath.\'model/ace/\');
$ace->initialize();

$extensionMap = array(
    \'tpl\'   => \'text/x-smarty\',
    \'htm\'   => \'text/html\',
    \'html\'  => \'text/html\',
    \'css\'   => \'text/css\',
    \'scss\'  => \'text/x-scss\',
    \'less\'  => \'text/x-less\',
    \'svg\'   => \'image/svg+xml\',
    \'xml\'   => \'application/xml\',
    \'xsl\'   => \'application/xml\',
    \'js\'    => \'application/javascript\',
    \'json\'  => \'application/json\',
    \'php\'   => \'application/x-php\',
    \'sql\'   => \'text/x-sql\',
    \'md\'    => \'text/x-markdown\',
    \'txt\'   => \'text/plain\',
    \'twig\'  => \'text/x-twig\'
);

// Define default mime for html elements(templates, chunks and html resources)
$html_elements_mime=$modx->getOption(\'ace.html_elements_mime\',null,false);
if(!$html_elements_mime){
    // this may deprecated in future because components may set ace.html_elements_mime option now
    switch (true) {
        case $modx->getOption(\'twiggy_class\'):
            $html_elements_mime = \'text/x-twig\';
            break;
        case $modx->getOption(\'pdotools_fenom_parser\'):
            $html_elements_mime = \'text/x-smarty\';
            break;
        default:
            $html_elements_mime = \'text/html\';
    }
}

// Defines wether we should highlight modx tags
$modxTags = false;
switch ($modx->event->name) {
    case \'OnSnipFormPrerender\':
        $field = \'modx-snippet-snippet\';
        $mimeType = \'application/x-php\';
        break;
    case \'OnTempFormPrerender\':
        $field = \'modx-template-content\';
        $modxTags = true;
        $mimeType = $html_elements_mime;
        break;
    case \'OnChunkFormPrerender\':
        $field = \'modx-chunk-snippet\';
        if ($modx->controller->chunk && $modx->controller->chunk->isStatic()) {
            $extension = pathinfo($modx->controller->chunk->name, PATHINFO_EXTENSION);
            if(!$extension||!isset($extensionMap[$extension])){
                $extension = pathinfo($modx->controller->chunk->getSourceFile(), PATHINFO_EXTENSION);
            }
            $mimeType = isset($extensionMap[$extension]) ? $extensionMap[$extension] : \'text/plain\';
        } else {
            $mimeType = $html_elements_mime;
        }
        $modxTags = true;
        break;
    case \'OnPluginFormPrerender\':
        $field = \'modx-plugin-plugincode\';
        $mimeType = \'application/x-php\';
        break;
    case \'OnFileCreateFormPrerender\':
        $field = \'modx-file-content\';
        $mimeType = \'text/plain\';
        break;
    case \'OnFileEditFormPrerender\':
        $field = \'modx-file-content\';
        $extension = pathinfo($scriptProperties[\'file\'], PATHINFO_EXTENSION);
        $mimeType = isset($extensionMap[$extension])
            ? $extensionMap[$extension]
            : (\'@FILE:\'.pathinfo($scriptProperties[\'file\'], PATHINFO_BASENAME));
        $modxTags = $extension == \'tpl\';
        break;
    case \'OnDocFormPrerender\':
        if (!$modx->controller->resourceArray) {
            return;
        }
        $field = \'ta\';
        $mimeType = $modx->getObject(\'modContentType\', $modx->controller->resourceArray[\'content_type\'])->get(\'mime_type\');

        if($mimeType == \'text/html\')$mimeType = $html_elements_mime;

        if ($modx->getOption(\'use_editor\')){
            $richText = $modx->controller->resourceArray[\'richtext\'];
            $classKey = $modx->controller->resourceArray[\'class_key\'];
            if ($richText || in_array($classKey, array(\'modStaticResource\',\'modSymLink\',\'modWebLink\',\'modXMLRPCResource\'))) {
                $field = false;
            }
        }
        $modxTags = true;
        break;
    case \'OnTVInputRenderList\':
        $modx->event->output($corePath . \'elements/tv/input/\');
        break;
    default:
        return;
}

$modxTags = (int) $modxTags;
$script = \'\';
if ($field) {
    $script .= "MODx.ux.Ace.replaceComponent(\'$field\', \'$mimeType\', $modxTags);";
}

if ($modx->event->name == \'OnDocFormPrerender\' && !$modx->getOption(\'use_editor\')) {
    $script .= "MODx.ux.Ace.replaceTextAreas(Ext.query(\'.modx-richtext\'));";
}

if ($script) {
    $modx->controller->addHtml(\'<script>Ext.onReady(function() {\' . $script . \'});</script>\');
}',
    ),
  ),
  '6c4a5394641b40976ba2eadd017050fe' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnChunkFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnChunkFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'f5cb739fb42e0abed00cc2b76a7d9928' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnPluginFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnPluginFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'ae1fe837491777810210eed10619a79a' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnSnipFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnSnipFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'c1914e5df4d845aecfb930153a3d4419' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnTempFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnTempFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'a4f1b1c91a189521163606170d94bce3' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnFileEditFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnFileEditFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '4a8407691e9b5818235026a5774ee319' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnFileCreateFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnFileCreateFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'bab9369276c14b9e6fa3be5a7b25ae39' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnDocFormPrerender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnDocFormPrerender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '30f3b679c4a30f22e1377f4489a04aac' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnRichTextEditorRegister',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnRichTextEditorRegister',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '2e42bc525cae325bbd696eba88013e45' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnManagerPageBeforeRender',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnManagerPageBeforeRender',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  '07ed0e9c30e6478a7ce5e9c482735237' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 3,
      'event' => 'OnTVInputRenderList',
    ),
    'object' => 
    array (
      'pluginid' => 3,
      'event' => 'OnTVInputRenderList',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
  'a12e99922abf8c3ad1b01e833b3f5bfd' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.theme',
    ),
    'object' => 
    array (
      'key' => 'ace.theme',
      'value' => 'monokai',
      'xtype' => 'textfield',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => '2022-01-28 11:59:58',
    ),
  ),
  'd9ec281fdea25a16daa206ac8902691e' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.font_size',
    ),
    'object' => 
    array (
      'key' => 'ace.font_size',
      'value' => '13px',
      'xtype' => 'textfield',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  '3ca8676f25747c581bcdc42474b8cbfa' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.word_wrap',
    ),
    'object' => 
    array (
      'key' => 'ace.word_wrap',
      'value' => '',
      'xtype' => 'combo-boolean',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  '1d231f4561761dbec51df83bf8e11a9a' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.soft_tabs',
    ),
    'object' => 
    array (
      'key' => 'ace.soft_tabs',
      'value' => '1',
      'xtype' => 'combo-boolean',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  '88cec86feb523e41eff43b34108c8e92' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.tab_size',
    ),
    'object' => 
    array (
      'key' => 'ace.tab_size',
      'value' => '4',
      'xtype' => 'textfield',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  'aa303fc6071e8f08b4b1fc1da54fde3f' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.fold_widgets',
    ),
    'object' => 
    array (
      'key' => 'ace.fold_widgets',
      'value' => '1',
      'xtype' => 'combo-boolean',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  '3d6c5abcc2c5992d47f11201f27626e0' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.show_invisibles',
    ),
    'object' => 
    array (
      'key' => 'ace.show_invisibles',
      'value' => '0',
      'xtype' => 'combo-boolean',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  '442a2b4a6459f9f1313c5a96e142ca11' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.snippets',
    ),
    'object' => 
    array (
      'key' => 'ace.snippets',
      'value' => '',
      'xtype' => 'textarea',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  '9fb1c05db8a80f0d792b08f29da61fa2' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.height',
    ),
    'object' => 
    array (
      'key' => 'ace.height',
      'value' => '',
      'xtype' => 'textfield',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  '23c6f92632d18853e5828bc9c47efcf7' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.grow',
    ),
    'object' => 
    array (
      'key' => 'ace.grow',
      'value' => '',
      'xtype' => 'textfield',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
  'bc1f44eff9bb0ae71cbab00603d4cb9b' => 
  array (
    'criteria' => 
    array (
      'key' => 'ace.html_elements_mime',
    ),
    'object' => 
    array (
      'key' => 'ace.html_elements_mime',
      'value' => '',
      'xtype' => 'textfield',
      'namespace' => 'ace',
      'area' => 'general',
      'editedon' => NULL,
    ),
  ),
);