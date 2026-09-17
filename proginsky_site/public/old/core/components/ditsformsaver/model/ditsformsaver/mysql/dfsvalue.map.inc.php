<?php
$xpdo_meta_map['dfsValue']= array (
  'package' => 'ditsformsaver',
  'table' => 'ditsformsaver_values',
  'fields' => 
  array (
    'result_id' => 0,
    'fieldname' => '',
    'fieldvalue' => '',
  ),
  'fieldMeta' => 
  array (
    'result_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
      'index' => 'index',
    ),
    'fieldname' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'fieldvalue' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
  'aggregates' => 
  array (
    'Result' => 
    array (
      'class' => 'dfsResult',
      'local' => 'result_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
