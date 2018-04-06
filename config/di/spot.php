<?php
/**
 * Configuration file for DI container.
 */
return [
    "services" => [
        "spotController" => [
            "shared" => true,
            "callback" => function () {
                $obj = new \Guni\Spot\SpotController();
                $obj->setDI($this);
                return $obj;
            }
        ],
    ],
];
