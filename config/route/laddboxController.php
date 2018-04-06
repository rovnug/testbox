<?php
/**
 * Routes for controller.
 */
return [
    "mount" => "charge",
    "routes" => [
        [
            "info" => "General laddbox info",
            "requestMethod" => "get",
            "path" => "",
            "callable" => ["laddboxController", "getIndex"],
        ],
    ]
];
