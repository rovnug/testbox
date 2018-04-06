<?php
/**
 * Configuration file for DI container.
 */
return [
    "services" => [
        "laddboxController" => [
            "shared" => true,
            "callback" => function () {
                $obj = new \Guni\Laddbox\LaddboxController();
                $obj->setDI($this);
                return $obj;
            }
        ],
    ],
];
