<?php

namespace {

    use SilverStripe\CMS\Controllers\ContentController;
    use SilverStripe\View\Requirements;

    class PageController extends ContentController
    {
        /**
         * An array of actions that can be accessed via a request. Each array element should be an action name, and the
         * permissions or conditions required to allow the user to access it.
         *
         * <code>
         * [
         *     'action', // anyone can access this action
         *     'action' => true, // same as above
         *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
         *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
         * ];
         * </code>
         *
         * @var array
         */
        private static $allowed_actions = [];

        protected function init()
        {
            parent::init();
            
            Requirements::css('css/bootstrap.min.css');
            Requirements::css('css/base.css');
            Requirements::css('plugins/owl-carousel/assets/owl.carousel.min.css');           

            Requirements::javascript('js/jquery.min.js');          
            Requirements::javascript('js/bootstrap.min.js');
            Requirements::javascript('js/wow.min.js');
            Requirements::javascript('js/app.js');
            Requirements::javascript('plugins/owl-carousel/owl.carousel.min.js');
            Requirements::javascript('plugins/vide/jquery.vide.js');           
            Requirements::javascript('js/custom.js');
        }
    }
}
