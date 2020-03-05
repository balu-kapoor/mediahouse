<?php

namespace Mediahouse;

use SilverStripe\ORM\DataObject;
use Mediahouse\Strip;
use SilverStripe\Assets\Image;
use SilverStripe\Assets\File;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\TextField;

class IconsStrip extends Strip
{
    private static $db = [
        'FirstIconTitle' => 'Varchar(100)',
        'SecondIconTitle' => 'Varchar(100)',
        'ThirdIconTitle' => 'Varchar(100 ',
        'FourthIconTitle' => 'Varchar(100)',
    ];

    private static $has_one = [
        'FirstIcon' => Image::class,
        'SecondIcon' => Image::class,
        'ThirdIcon' => Image::class,
        'FourthIcon' => Image::class,
    ];

    private static $owns = [
        'FirstIcon',
        'SecondIcon',
        'ThirdIcon',
        'FourthIcon'
    ];

    private static $table_name = 'IconsStrip';

    public function getCMSFields() {
        $fields = parent::getCMSFields();
 
        $fields->addFieldToTab('Root.Main', TextField::create('FirstIconTitle'));
        $fields->addFieldToTab('Root.Main', TextField::create('SecondIconTitle'));
        $fields->addFieldToTab('Root.Main', TextField::create('ThirdIconTitle'));
        $fields->addFieldToTab('Root.Main', TextField::create('FourthIconTitle'));
        $fields->addFieldToTab('Root.Main', UploadField::create('FirstIcon'));
        $fields->addFieldToTab('Root.Main', UploadField::create('SecondIcon'));
        $fields->addFieldToTab('Root.Main', UploadField::create('ThirdIcon'));
        $fields->addFieldToTab('Root.Main', UploadField::create('FourthIcon'));
       

        return $fields;
   }

}   
