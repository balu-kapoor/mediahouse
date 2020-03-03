<?php

namespace Mediahouse;

use PageController;    
use SilverStripe\View\Requirements;

class AboutPageController extends PageController 
{
    protected function init()
    {
        parent::init();
        Requirements::css('css/page/our-team.css');
        
        Requirements::javascript('js/page/our-team.js');
    }
}