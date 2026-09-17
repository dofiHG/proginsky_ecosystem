<?php  return array (
  'resourceClass' => 'MODX\\Revolution\\modDocument',
  'resource' => 
  array (
    'id' => 4,
    'type' => 'document',
    'pagetitle' => 'robots',
    'longtitle' => '',
    'description' => '',
    'alias' => 'robots',
    'link_attributes' => '',
    'published' => 1,
    'pub_date' => 0,
    'unpub_date' => 0,
    'parent' => 0,
    'isfolder' => 0,
    'introtext' => '',
    'content' => 'User-agent: *
Disallow: /core/
Disallow: /manager/
Disallow: /connectors/
Disallow: /index.php
Disallow: /index.html
Disallow: /404
Disallow: /500
Host: https://[[host]]
Sitemap: https://[[host]]/sitemap.xml',
    'richtext' => 0,
    'template' => 0,
    'menuindex' => 11,
    'searchable' => 1,
    'cacheable' => 1,
    'createdby' => 1,
    'createdon' => 1689607803,
    'editedby' => 1,
    'editedon' => 1731262000,
    'deleted' => 0,
    'deletedon' => 0,
    'deletedby' => 0,
    'publishedon' => 1689607800,
    'publishedby' => 1,
    'menutitle' => '',
    'donthit' => 0,
    'privateweb' => 0,
    'privatemgr' => 0,
    'content_dispo' => 0,
    'hidemenu' => 1,
    'class_key' => 'MODX\\Revolution\\modDocument',
    'context_key' => 'web',
    'content_type' => 3,
    'uri' => 'robots.txt',
    'uri_override' => 0,
    'hide_children_in_tree' => 0,
    'show_in_tree' => 1,
    'properties' => '{"autoredirector":{"old_uri":"robots.txt"}}',
    'alias_visible' => 1,
    '_content' => 'User-agent: *
Disallow: /core/
Disallow: /manager/
Disallow: /connectors/
Disallow: /index.php
Disallow: /index.html
Disallow: /404
Disallow: /500
Host: https://proginsky.ru
Sitemap: https://proginsky.ru/sitemap.xml',
    '_isForward' => false,
    '_jscripts' => 
    array (
      0 => '<script>console.log("UTM Saver: SET default - utm_source = сайт");</script>',
    ),
    '_loadedjscripts' => 
    array (
      '<script>console.log("UTM Saver: SET default - utm_source = сайт");</script>' => true,
    ),
  ),
  'contentType' => 
  array (
    'id' => 3,
    'name' => 'Text',
    'description' => 'Plain text content',
    'mime_type' => 'text/plain',
    'file_extensions' => '.txt',
    'icon' => 'icon-txt',
    'headers' => NULL,
    'binary' => 0,
  ),
  'policyCache' => 
  array (
  ),
  'elementCache' => 
  array (
    '[[host]]' => 'proginsky.ru',
  ),
  'sourceCache' => 
  array (
    'MODX\\Revolution\\modChunk' => 
    array (
    ),
    'MODX\\Revolution\\modSnippet' => 
    array (
      'host' => 
      array (
        'fields' => 
        array (
          'id' => 50,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'host',
          'description' => '',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => 'echo $_SERVER[\'HTTP_HOST\'];',
          'locked' => true,
          'properties' => 
          array (
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => 'echo $_SERVER[\'HTTP_HOST\'];',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'MODX\\Revolution\\Sources\\modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
    ),
    'MODX\\Revolution\\modTemplateVar' => 
    array (
    ),
  ),
);