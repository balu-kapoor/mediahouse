<?php

namespace Mediahouse;

use SilverStripe\ORM\DataObject;
use Mediahouse\Strip;
use SilverStripe\Assets\Image;
use SilverStripe\Assets\File;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextAreaField;

class LeftImageStrip extends Strip
{
    private static $db = [
        'Title' => 'Varchar(100)',
        'Description' => 'Text',
    ];

    private static $has_one = [
        'Background'  => Image::class        
    ];

    private static $owns = [
        'Background'
    ];

    private static $summary_fields = [
        'GridThumbnail'
    ];

    private static $table_name = 'LeftImageStrip';

    public function getCMSFields() {
        $fields = parent::getCMSFields();
 
        $fields->addFieldToTab('Root.Main', TextField::create('Title'));
        $fields->addFieldToTab('Root.Main', TextAreaField::create('Description'));

        $fields->addFieldToTab('Root.Main', UploadField::create('Background'));        

        return $fields;
   }

   public function getGridThumbnail() {
        if($this->SliderImage()->exists()) {
            return $this->SliderImage()->ScaleWidth(150);
        }

        return "(no image)";
    } 

}   
