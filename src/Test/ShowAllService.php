<?php

namespace Guni\Test;

use \Anax\DI\DIInterface;
use \Guni\Comments\Misc;
use \Guni\User\UserHelp;
use \Guni\Test\Test;

/**
 * Form to update an item.
 */
class ShowAllService
{
    protected $misc;
    protected $userhelp;


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
<span class="center hundred"><h5>Avtal : <span id="agreement"></span> hos <span id = "utility"></span></h5></span>

<div id = "data"></div>
<div class="flex">
<div class = "showleft">
<div class="showbox">
<span id = "res"></span>
</div></div>
<div class = "showright">
<p>Över 5 &deg;C går det alltid att ladda. Enligt smhi är det nu <span id="temp"></span></p>
<p id = "info"></p>
</div>
<div class="third"><span class="box green">Miljövänlig</span></div>
<div class="third"><span class="box yellow">Mellan</span></div>
<div class="third"><span class="box expensive">Miljöovänlig</span></div>
<div class="clearfix"></div>
</div>
<p id = "agreed"></p>

EOD;

        return $html;
    }
}
