<?php
$xpdo_meta_map['dfsForm']= array (
  'package' => 'ditsformsaver',
  'table' => 'ditsformsaver_forms',
  'fields' => 
  array (
    'name' => '',
    'fields' => '',
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'fields' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
  'composites' => 
  array (
    'Results' => 
    array (
      'class' => 'dfsResult',
      'local' => 'id',
      'foreign' => 'form_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
