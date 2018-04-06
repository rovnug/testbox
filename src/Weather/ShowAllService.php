<?php

namespace Guni\Weather;

use \Anax\DI\DIInterface;
use \Guni\Comments\Misc;
use \Guni\User\UserHelp;
use \Guni\Weather\Weather;

/**
 * Form to update an item.
 */
class ShowAllService
{
    protected $misc;

    /**
     * Constructor injects with DI container and the id to update.
     *
     * @param Anax\DI\DIInterface $di a service container
     */
    public function __construct(DIInterface $di)
    {
        $this->di = $di;
        $this->misc = new Misc($di);
        $this->userhelp = new UserHelp($di);
    }


    /**
     * Returns all text for the view
     *
     * @return string htmlcode
     */
    public function getHTML()
    {
        $req = $this->di->get("request");
        $imgpath = $req->getBaseUrl() . "/cimage/imgd.php?src=6A.jpg";

        $html = <<< EOD
<div class="col-lg-12">
<span class="center hundred"><h5>Väderdata <span id="weather"></span> </h5></span>
<p id="geo"></p>
<div class="flex"></div>
EOD;

        return $html;
    }
}
