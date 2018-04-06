<?php
/**
 * Routes for controller.
 */
return [
    "mount" => "storage",
    "routes" => [
        [
            "info" => "General laddbox info",
            "requestMethod" => "get",
            "path" => "",
            "callable" => ["storageController", "getIndex"],
        ],
    ]
];
