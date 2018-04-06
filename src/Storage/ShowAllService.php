<?php

namespace Guni\Storage;

use \Anax\DI\DIInterface;
use \Guni\Comments\Misc;
use \Guni\User\UserHelp;
use \Guni\Storage\Storage;

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
<span class="center hundred"><h5>Lagring</h5></span>
<p id ="temp"></p>
<p id ="dim"></p>

EOD;

        $more = <<< EOD
<div class="flex">
<div class="third"><span class="box il1"><span class="large">I</span>L1 = <span id ="resil1"></span></span></div>
<div class="third"><span class="box il2"><span class="large">I</span>L2 = <span id ="resil2"></span></span></div>
<div class="third"><span class="box il3"><span class="large">I</span>L3 = <span id ="resil3"></span></span></div>
<div class="clearfix"></div>
<div class="third"><span class="box ul1"><span class="large">U</span>L1 = <span id ="resul1"></span></span></div>
<div class="third"><span class="box ul2"><span class="large">U</span>L2 = <span id ="resul2"></span></span></div>
<div class="third"><span class="box ul3"><span class="large">U</span>L3 = <span id ="resul3"></span></span></div>
<div class="clearfix"></div>

<div class="third"><span class="box pl1"><span class="large">P</span>L1 = <span id ="respl1"></span></span></div>
<div class="third"><span class="box pl2"><span class="large">P</span>L2 = <span id ="respl2"></span></span></div>
<div class="third"><span class="box pl3"><span class="large">P</span>L3 = <span id ="respl3"></span></span></div>
<div class="clearfix"></div>

</div>

EOD;

        return $html;
    }
}
