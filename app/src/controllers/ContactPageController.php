<?php

namespace Mediahouse;

use PageController;    
use SilverStripe\View\Requirements;

class ContactPageController extends PageController 
{
    public function init()
    {
        parent::init();      
        Requirements::javascript('plugins/spam-filter/draganddrop.js');
        Requirements::javascript('plugins/spam-filter/draggable-custom-scripts.js');
    }
}