<?php

namespace Mediahouse;

use SilverStripe\ORM\DataObject;
use Page;

class Strip extends DataObject
{   

    private static $many_many = [
        "Page" => Page::class,
    ];

    private static $summary_fields = [
        'ClassDetail' => 'Strip Type',
    ];

    public function getClassDetail() {
        $class = explode('\\', $this->ClassName);
        return array_pop($class);
    }

    private static $table_name = 'Strip';


    public function forTemplate()
    {
        return $this->renderWith($this->ClassName);
    }

}
