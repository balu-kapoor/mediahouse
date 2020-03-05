<?php

namespace Mediahouse;

use SilverStripe\ORM\DataObject;
use Mediahouse\Strip;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextAreaField;

class TableStrip extends Strip
{
    private static $db = [
        'ButtonTitle' => 'Varchar(150)',
        'Description' => 'Text'
    ];

    // private static $many_many = [
    //     "HomePage" => HomePage::class,
    // ];

 
    private static $table_name = 'Table';

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $fields->removeByName('HomePage');

        $fields->addFieldToTab('Root.Main', TextField::create('ButtonTitle'));
        $fields->addFieldToTab('Root.Main', TextAreaField::create('Description'));


        return $fields;
   }



}
