<?php
/**
 * Routes for controller.
 */
return [
    "mount" => "test",
    "routes" => [
        [
            "info" => "Testapp",
            "requestMethod" => "get",
            "path" => "",
            "callable" => ["testController", "getIndex"],
        ],
    ]
];
