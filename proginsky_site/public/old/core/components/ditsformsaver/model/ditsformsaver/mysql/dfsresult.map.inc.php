<?php
$xpdo_meta_map['dfsResult']= array (
  'package' => 'ditsformsaver',
  'table' => 'ditsformsaver_results',
  'fields' => 
  array (
    'form_id' => 0,
    'ip' => '',
  ),
  'fieldMeta' => 
  array (
    'form_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
      'index' => 'index',
    ),
    'ip' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '39',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
  ),
  'aggregates' => 
  array (
    'Form' => 
    array (
      'class' => 'dfsForm',
      'local' => 'form_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
  'composites' => 
  array (
    'Values' => 
    array (
      'class' => 'dfsValue',
      'local' => 'id',
      'foreign' => 'result_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
