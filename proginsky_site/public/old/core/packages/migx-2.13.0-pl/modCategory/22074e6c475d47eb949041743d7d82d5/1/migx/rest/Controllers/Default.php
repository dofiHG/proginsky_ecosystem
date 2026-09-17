<?php

class MyControllerDefault extends modRestController {
    public $classKey = 'modResource';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'ASC';

    public function __construct(modX $modx, modRestServiceRequest $request, array $config = array()) {
        parent::__construct($modx, $request, $config);

        $config = $modx->migx->customconfigs;

        $hooksnippets = $modx->fromJson($modx->getOption('hooksnippets', $config, ''));
        if (is_array($hooksnippets)) {
            $hooksnippet_getcustomconfigs = $modx->getOption('getcustomconfigs', $hooksnippets, '');
        }

        $snippetProperties = array();
        //Todo: check, how to pass properties 
        //$snippetProperties['scriptProperties'] = $scriptProperties;
        //$snippetProperties['processor'] = 'getlist';

        if (!empty($hooksnippet_getcustomconfigs)) {
            $customconfigs = $modx->runSnippet($hooksnippet_getcustomconfigs, $snippetProperties);
            $customconfigs = $modx->fromJson($customconfigs);
            if (is_array($customconfigs)) {
                $config = array_merge($config, $customconfigs);
            }
        }

        $prefix = isset($config['prefix']) && !empty($config['prefix']) ? $config['prefix'] : null;
        if (isset($config['use_custom_prefix']) && !empty($config['use_custom_prefix'])) {
            $prefix = isset($config['prefix']) ? $config['prefix'] : '';
        }

        //code stolen from migx default-processors
        if (!empty($config['packageName'])) {
            $packageNames = explode(',', $config['packageName']);
            $packageName = isset($packageNames[0]) ? $packageNames[0] : '';

            if (count($packageNames) == '1') {
                //for now connecting also to foreign databases, only with one package by default possible
                //$xpdo = $modx->migx->getXpdoInstanceAndAddPackage($config);
                //usage of external database currently not possible with the modRest - API
                $modx->addPackage($packageName, $modelpath, $prefix);
            } else {
                //all packages must have the same prefix for now!
                foreach ($packageNames as $packageName) {
                    $packagepath = $modx->getOption('core_path') . 'components/' . $packageName . '/';
                    $modelpath = $packagepath . 'model/';
                    if (is_dir($modelpath)) {
                        $modx->addPackage($packageName, $modelpath, $prefix);
                    }

                }
                $xpdo = &$modx;
            }
            if ($this->modx->lexicon) {
                $this->modx->lexicon->load($packageName . ':default');
            }
        } else {
            $xpdo = &$modx;
        }

        $this->classKey = isset($config['classname']) ? $config['classname'] : '';

    }


    public function beforeDelete() {
        throw new Exception('Unauthorized', 401);
    }

    public function read($id) {
        //throw new Exception('Unauthorized', 401);
        parent::read($id);
    }

    public function beforePut() {

        if ($this->modx->hasPermission('fbuch_edit_fahrten')) {
            $this->setProperty('editedby', $this->modx->user->get('id'));
            $this->setProperty('editedon', strftime('%Y-%m-%d %H:%M:%S'));
        } else {
            throw new Exception('Unauthorized', 401);
        }

        return !$this->hasErrors();
    }

    public function afterPut(array & $objectArray) {
        //remove old, unused name(s)
        $fields = array();
        $fields['member_id'] = $this->getProperty('Member_id');
        $fields['fahrt_id'] = isset($objectArray['id']) ? $objectArray['id'] : 0;

        $c = $this->modx->newQuery('fbuchFahrtNames');
        $c->where(array('fahrt_id' => $fields['fahrt_id'], 'fahrt_id:!=' => $fields['fahrt_id']));
        if ($collection = $this->modx->getCollection('fbuchFahrtNames', $c)) {
            foreach ($collection as $object) {
                $object->remove();
            }
        }
        $this->afterSave($fields);

    }

    public function beforePost() {

        if ($this->modx->hasPermission('fbuch_create_fahrten')) {
            $this->setProperty('createdby', $this->modx->user->get('id'));
            $this->setProperty('createdon', strftime('%Y-%m-%d %H:%M:%S'));

        } else {
            throw new Exception('Unauthorized', 401);
        }


        return !$this->hasErrors();
    }

    public function afterPost(array & $objectArray) {
        $fields = array();
        $fields['member_id'] = $this->getProperty('Member_id');
        $fields['fahrt_id'] = isset($objectArray['id']) ? $objectArray['id'] : 0;
        $this->afterSave($fields);

    }

    public function afterSave($fields) {
        $kmstand_start = $this->getProperty('kmstand_start');
        $kmstand_end = $this->getProperty('kmstand_end');
        if ($kmstand_end > $kmstand_start) {
            $this->object->set('km', $kmstand_end - $kmstand_start);
        } else {
            $this->object->set('km', 0);
            $this->object->set('kmstand_end', 0);
        }
        $this->object->save();

        if ($this->modx->getObject('fbuchFahrtNames', $fields)) {

        } else {
            $fahrtname = $this->modx->newObject('fbuchFahrtNames');
            $fahrtname->fromArray($fields);
            $fahrtname->save();
        }
    }

    public function verifyAuthentication() {

        $modx = &$this->modx;

        if ($modx->migx->working_context != $modx->context->key) {
            return false;
        }
        if (!$modx->hasPermission('load')) {
            return false;
        }
        return true;
    }

    protected function prepareListQueryBeforeCount(xPDOQuery $c) {
        /*
        $returntype = $this->getProperty('returntype');
        $where = array('deleted'=>0);
        $datewhere = array();
        
        switch ($returntype) {
        case 'open':
        $this->setProperty('dir','ASC');
        $where['km'] = 0;
        $datewhere['date:<='] = strftime('%Y-%m-%d 23:59:59');
        $datewhere['start_time:<='] = strftime('%H:%M');
        $datewhere['OR:date:<'] = strftime('%Y-%m-%d 00:00:00');
        break;
        case 'sheduled':
        $this->setProperty('dir','ASC');
        $where['km'] = 0;
        $where['date:>='] = strftime('%Y-%m-%d 00:00:00');
        
        $datewhere['date:>='] = strftime('%Y-%m-%d 00:00:00');
        $datewhere['start_time:>'] = strftime('%H:%M');
        $datewhere['OR:date:>'] = strftime('%Y-%m-%d 23:59:00');                
        
        break;                
        case 'finished':
        $this->setProperty('dir','DESC');
        $where['km:>'] = 0;
        break;                
        } 
        
        
        
        $joins = '[{"alias":"Boot"},{"alias":"Gattung","classname":"fbuchBootsGattung","on":"Gattung.id=Boot.gattung_id"}]';
        
        $this->modx->migx->prepareJoins($this->classKey, json_decode($joins,1) , $c);
        
        if ($gattung = $this->getProperty('gattung')){
        $where['Gattung.name'] = $gattung;
        }
        $w = array();
        $w[] = $where;
        $w[] = $datewhere;
        $c->where($w);
        */
        //$c->prepare();echo $c->toSql();
        return $c;
    }

    protected function prepareListObject(xPDOObject $object) {
        /*
        $names_array = array();
        if ($fahrt_names = $object->getMany('Names')){
        foreach ($fahrt_names as $fahrt_name){

        if ($name = $fahrt_name->getOne('Member')){
        $name_array = $name->toArray();
        foreach ($name_array as $field => $value){
        $fahrt_name->set('Member_' . $field,$value);
        if (count($fahrt_names == 1)){
        $object->set('Member_' . $field,$value);
        $object->set('Member_fullname',$name->get('firstname') . ' ' . $name->get('name'));
        }                            
        }
        
        }
        $names_array[] = $fahrt_name->toArray();
        
        }
        }
        */
        $objectArray = $object->toArray();
        /*
        $objectArray['names'] = $names_array;
        $objectArray['date'] = substr($object->get('date'),0,10);
        $objectArray['date_end'] = substr($object->get('date_end'),0,10);
        */
        return $objectArray;
    }

}
