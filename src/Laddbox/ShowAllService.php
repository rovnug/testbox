<?php

namespace Guni\Laddbox;

use \Anax\DI\DIInterface;
use \Guni\Comments\Misc;
use \Guni\User\UserHelp;
use \Guni\Laddbox\Laddbox;

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
        $this->test();
    }


    public function test() {
        $req = $this->di->get("request");
        $message = exec($req->getBaseUrl() . "js/test.py");
        print_r($message);
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
<div class=""><span class="center hundred"><h5>Styrning av laddbox</h5></span></div>
<div class = "result"><p>
<span id="result"></span>
</p></div>
<div class="flex">

<div class="halfleft"><span class="box manual">Manuell</span></div>
<div class="halfright"><span class="box utility">Nätbolag</span></div>
<div class="clearfix"></div>
<div class="sixth"><span class="box sixamp">6A</span></div>
<div class="sixth"><span class="box tenamp">10A</span></div>
<div class="sixth"><span class="box sixteenamp">16A</span></div>
<div class="sixth"><span class="box twentyamp">20A</span></div>
<div class="sixth"><span class="box twentyfiveamp">25A</span></div>
<div class="sixth"><span class="box thirtytwoamp">32A</span></div>
<div class="clearfix"></div>
<!--<div class="all"><img src='http://192.168.86.98:8698/axis-cgi/mjpg/video.cgi?resolution=400x250&dummy=1467809960764'></div>-->
<div class="clearfix"></div>
<div class="sixth"><span class="box report1">Report 1</span></div>
<div class="sixth"><span class="box report2">Report 2</span></div>
<div class="sixth"><span class="box report3">Report 3</span></div>
<div class="sixth"><span class="box report100">Report last</span></div>
<div class="sixth"><span class="box report110">Report 10</span></div>
<div class="sixth"><span class="box setenergy10">Ladda 10kWh</span></div>
<div class="clearfix"></div>
<div class="sixth"><span class="box setenergy0">Ladda 0kWh</span></div>
<div class="sixth"><span class="box ena1">Aktivera</span></div>
<div class="sixth"><span class="box ena0">Inaktivera</span></div>
<div class="sixth"><span class="box dummy1">Dummy</span></div>
<div class="sixth"><span class="box dummy2">Dummy</span></div>
<div class="sixth"><span class="box dummy3">Dummy</span></div>
</div></div>

EOD;

        return $html;
    }
}
