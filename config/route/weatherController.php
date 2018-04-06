<?php
/**
 * Routes for controller.
 */
return [
    "mount" => "weather",
    "routes" => [
        [
            "info" => "General väder info",
            "requestMethod" => "get",
            "path" => "",
            "callable" => ["weatherController", "getIndex"],
        ],
    ]
];
