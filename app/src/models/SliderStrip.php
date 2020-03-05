<?php

namespace Mediahouse;

use SilverStripe\ORM\DataObject;
use Mediahouse\Strip;
use Mediahouse\SliderImages;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextAreaField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

class SliderStrip extends Strip
{
    private static $db = [
        'ButtonTitle' => 'Varchar(100)',
        'Description' => 'Text'
    ];

    private static $has_many = [
        'SliderImages' => SliderImages::class
    ];

    private static $summary_fields = [
        'ButtonTitle'
    ];

    private static $table_name = 'Slider';

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $fields->removeByName('Page');
        $fields->removeByName('SliderImages');
 
        $fields->addFieldToTab('Root.Main', TextField::create('ButtonTitle'));
        $fields->addFieldToTab('Root.Main', TextAreaField::create('Description'));

        $GridImages = new GridField(
            'SliderImages',
            'SliderImages',
            $this->SliderImages(),
            new GridFieldConfig_RecordEditor()
        );

        $fields->addFieldToTab('Root.Main', $GridImages);

        return $fields;
   }

}
