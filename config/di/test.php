<?php
/**
 * Configuration file for DI container.
 */
return [
    "services" => [
        "testController" => [
            "shared" => true,
            "callback" => function () {
                $obj = new \Guni\Test\TestController();
                $obj->setDI($this);
                return $obj;
            }
        ],
    ],
];
