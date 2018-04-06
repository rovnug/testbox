<?php
/**
 * Routes for controller.
 */
return [
    "mount" => "spot",
    "routes" => [
        [
            "info" => "Spotpris-info",
            "requestMethod" => "get",
            "path" => "",
            "callable" => ["spotController", "getIndex"],
        ],
    ]
];
