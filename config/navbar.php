<?php
/**
 * Config file for the navbar.
 */

return [
    "items" => [
        "home" => [
            "text" => "Hem",
            "fa" => '<i class="fas fa-home"></i>',
            "route" => "test",
            "class" => "home",
            "mobile" => "mobile mobile-home",
        ],
        "charge" => [
            "text" => "Laddbox",
            "fa" => '<i class="fas fa-car"></i>',
            "route" => "charge",
            "class" => "elcar",
            "mobile" => "mobile mobile",
        ],
        "weather" => [
            "text" => "Väder",
            "fa" => '<i class="fas fa-cloud"></i>',
            "route" => "weather",
            "class" => "elcar",
            "mobile" => "mobile mobile",
        ],
        "spot" => [
            "text" => "Spotpriser",
            "fa" => '<i class="fas fa-chart-area"></i>',
            "route" => "spot",
            "class" => "elcar",
            "mobile" => "mobile mobile",
        ],
        "statistics" => [
            "text" => "Statistik",
            "fa" => '<i class="fas fa-handshake"></i>',
            "route" => "statistics",
            "class" => "statistics",
            "mobile" => "mobile",
        ],
        "test" => [
            "text" => "Test",
            "fa" => '<i class="fas fa-battery-half"></i>',
            "route" => "test",
            "class" => "test",
            "mobile" => "mobile",
        ],
        /*
        "members" => [
            "text" => "Medlemmar",
            "fa" => '<i class="fas fa-handshake"></i>',
            "fa" => '<i class="fas fa-id-card"></i>',
            "route" => "user",
            "class" => "theme",
            "mobile" => "mobile",
        ],
*/
        "storage" => [
            "text" => "Lagring",
            "fa" => '<i class="fas fa-thermometer-half"></i>',
            "route" => "storage",
            "class" => "storage",
            "mobile" => "mobile",
        ],
        "power" => [
            "text" => "Elmätare",
            "fa" => '<i class="fas fa-briefcase"></i>',
            "route" => "power",
            "class" => "elcar",
            "mobile" => "mobile mobile-bottom",
        ],
    ]
];
