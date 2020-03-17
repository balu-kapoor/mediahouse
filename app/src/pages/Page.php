<?php

namespace {

    use SilverStripe\CMS\Model\SiteTree;
    use SilverStripe\Assets\Image;
    use SilverStripe\Assets\File;
    use SilverStripe\AssetAdmin\Forms\UploadField;
    use SilverStripe\Forms\TextField;
    use SilverStripe\Forms\GridField\GridFieldToolbarHeader;
    use Mediahouse\Strip;
    use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;
    use SilverStripe\Forms\GridField\GridField;
    use SilverStripe\Forms\GridField\GridFieldDeleteAction;
    use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
    use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
    use SilverStripe\Forms\GridField\GridFieldAddNewButton;
    use Symbiote\GridFieldExtensions\GridFieldAddNewMultiClass;
    use SilverStripe\Forms\GridField\GridFieldConfig;
    use Symbiote\GridFieldExtensions\GridFieldTitleHeader;
    use SilverStripe\Forms\HTMLEditor\HTMLEditorField;


    class Page extends SiteTree
    {
        private static $db = [
            'BannerTitle' => 'Varchar(255)',
            'BannerSubTitle' => 'HTMLText',
            'BannerButton'  => 'Varchar(255)'
        ];

        private static $has_one = [
            'BannerImage' => Image::class,
            'BannerVideo' => File::class
        ];

        private static $belongs_many_many = [
            'Strips'   => Strip::class,
        ];

        private static $owns = [
            'BannerImage',
            'BannerVideo',
        ];

        public function getCMSFields() {
            $fields = parent::getCMSFields();
            
            $fields->addFieldToTab('Root.Banner', TextField::create('BannerTitle'));
            $fields->addFieldToTab('Root.Banner', HTMLEditorField::create('BannerSubTitle'));
            $fields->addFieldToTab('Root.Banner', TextField::create('BannerButton'));
            $fields->addFieldToTab('Root.Banner', $banner_image = UploadField::create('BannerImage', 'Banner Image (JPG only)'));
            $fields->addFieldToTab('Root.Banner', $banner_video = UploadField::create('BannerVideo','Banner Video (MP4 only)'));

            $banner_image
            ->setFolderName('banner-photos')
            ->getValidator()->setAllowedExtensions(array('jpg'));

            $banner_video
            ->setFolderName('banner-videos')
            ->getValidator()->setAllowedExtensions(array('mp4'));           
            
            $grid = new GridField(
                'Strips',
                'Strips',
                $this->Strips(),
                new GridFieldConfig_RelationEditor()
            );

            $grid->getConfig()
            ->removeComponentsByType(GridFieldAddNewButton::class)
            ->addComponents(
                new GridFieldAddNewMultiClass(),
                new GridFieldDeleteAction(),
                new GridFieldSortableRows('StripID')
            );        

            $fields->addFieldToTab('Root.Strips', $grid);

            return $fields;
       }
    }
}
