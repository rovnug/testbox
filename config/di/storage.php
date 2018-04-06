<?php
/**
 * Configuration file for DI container.
 */
return [
    "services" => [
        "storageController" => [
            "shared" => true,
            "callback" => function () {
                $obj = new \Guni\Storage\StorageController();
                $obj->setDI($this);
                return $obj;
            }
        ],
    ],
];
