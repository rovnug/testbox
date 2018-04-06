<?php
/**
 * Configuration file for DI container.
 */
return [
    "services" => [
        "statisticsController" => [
            "shared" => true,
            "callback" => function () {
                $obj = new \Guni\Statistics\StatisticsController();
                $obj->setDI($this);
                return $obj;
            }
        ],
    ],
];
