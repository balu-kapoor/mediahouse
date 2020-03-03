<?php

namespace Mediahouse;

use PageController;    
use SilverStripe\View\Requirements;

class HomePageController extends PageController 
{
    public function init()
    {
        parent::init();
        Requirements::css('plugins/revo-slider/css/settings.css');
        Requirements::css('plugins/revo-slider/css/layers.css');
        Requirements::css('plugins/revo-slider/css/navigation.css');
        
        Requirements::javascript('plugins/revo-slider/js/jquery.themepunch.tools.min.js');
        Requirements::javascript('plugins/revo-slider/js/jquery.themepunch.revolution.min.js');
        Requirements::javascript('js/slider.js');
    }
}