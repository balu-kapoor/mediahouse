<?php

namespace {

    use SilverStripe\CMS\Model\SiteTree;
    use SilverStripe\Assets\Image;
    use SilverStripe\Assets\File;
    use SilverStripe\AssetAdmin\Forms\UploadField;
    use SilverStripe\Forms\TextField;
    class Page extends SiteTree
    {
        private static $db = [
            'BannerTitle' => 'Varchar(255)',
            'BannerSubTitle' => 'Varchar(255)',
        ];

        private static $has_one = [
            'BannerImage' => Image::class,
            'BannerVideo' => File::class
        ];

        private static $owns = [
            'BannerImage',
            'BannerVideo',
        ];

        public function getCMSFields() {
            $fields = parent::getCMSFields();
            
            $fields->addFieldToTab('Root.Banner', TextField::create('BannerTitle'));
            $fields->addFieldToTab('Root.Banner', TextField::create('BannerSubTitle'));
            $fields->addFieldToTab('Root.Banner', $banner_image = UploadField::create('BannerImage', 'Banner Image (JPG only)'));
            $fields->addFieldToTab('Root.Banner', $banner_video = UploadField::create('BannerVideo','Banner Video (MP4 only)'));

            $banner_image
            ->setFolderName('banner-photos')
            ->getValidator()->setAllowedExtensions(array('jpg'));

            $banner_video
            ->setFolderName('banner-videos')
            ->getValidator()->setAllowedExtensions(array('mp4'));
   
            return $fields;
       }
    }
}
