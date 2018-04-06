<?php
/**
 * Configuration file for DI container.
 */
return [
    "services" => [
        "weatherController" => [
            "shared" => true,
            "callback" => function () {
                $obj = new \Guni\Weather\WeatherController();
                $obj->setDI($this);
                return $obj;
            }
        ],
    ],
];
