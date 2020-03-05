<?php

namespace Mediahouse;

use SilverStripe\ORM\DataObject;
use Mediahouse\SliderStrip;
use SilverStripe\Assets\Image;
use SilverStripe\Assets\File;
use SilverStripe\AssetAdmin\Forms\UploadField;

class SliderImages extends DataObject
{

    private static $has_one = [
        'SliderStrip'    => SliderStrip::class,
        'SliderImage' => Image::class
    ];

    private static $owns = [
        'SliderImage'
    ];

    private static $summary_fields = [
        'GridThumbnail' => ''
    ];

    private static $table_name = 'SliderImages';

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $fields->removeByName('SliderID');
        $fields->addFieldToTab('Root.Main', UploadField::create('SliderImage'));
      
        return $fields;
   }

   public function getGridThumbnail() {
        if($this->SliderImage()->exists()) {
            return $this->SliderImage()->ScaleWidth(150);
        }

        return "(no image)";
   } 

}
