<?php

namespace Mediahouse;

use Page;    
use SilverStripe\Assets\Image;
use SilverStripe\Assets\File;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\TextField;

class HomePage extends Page 
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
        'FourthIcon',
    ];

    private static $table_name = 'HomePage';

    public function getCMSFields() {
        $fields = parent::getCMSFields();
        
        $fields->addFieldToTab('Root.IconBar', TextField::create('FirstIconTitle'));
        $fields->addFieldToTab('Root.IconBar', TextField::create('SecondIconTitle'));
        $fields->addFieldToTab('Root.IconBar', TextField::create('ThirdIconTitle'));
        $fields->addFieldToTab('Root.IconBar', TextField::create('FourthIconTitle'));
        $fields->addFieldToTab('Root.IconBar', UploadField::create('FirstIcon'));
        $fields->addFieldToTab('Root.IconBar', UploadField::create('SecondIcon'));
        $fields->addFieldToTab('Root.IconBar', UploadField::create('ThirdIcon'));
        $fields->addFieldToTab('Root.IconBar', UploadField::create('FourthIcon'));

        return $fields;
   }

}