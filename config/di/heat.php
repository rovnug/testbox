<?php
/**
 * Configuration file for DI container.
 */
return [
    "services" => [
        "heatController" => [
            "shared" => true,
            "callback" => function () {
                $obj = new \Guni\Heat\HeatController();
                $obj->setDI($this);
                return $obj;
            }
        ],
    ],
];
