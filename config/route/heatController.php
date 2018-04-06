<?php
/**
 * Routes for controller.
 */
return [
    "mount" => "power",
    "routes" => [
        [
            "info" => "General värmepump info",
            "requestMethod" => "get",
            "path" => "",
            "callable" => ["heatController", "getIndex"],
        ],
    ]
];
