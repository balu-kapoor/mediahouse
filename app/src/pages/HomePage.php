<?php

namespace Mediahouse;

use Page;    
use SilverStripe\Assets\File;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\AssetAdmin\Forms\UploadField;


class HomePage extends Page 
{          

    private static $table_name = 'HomePage';

    public function getCMSFields() {
        $fields = parent::getCMSFields();
        
        $fields->addFieldToTab('Root.Banner', TextareaField::create('BannerSubTitle'), 'BannerButton');

        return $fields;
        
    }

}