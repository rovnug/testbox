<?php
/**
 * Routes for controller.
 */
return [
    "mount" => "statistics",
    "routes" => [
        [
            "info" => "Statistical measures Mölndal",
            "requestMethod" => "get",
            "path" => "",
            "callable" => ["statisticsController", "getIndex"],
        ],
    ]
];
