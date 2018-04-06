<?php

namespace Guni\Statistics;

use \Anax\DI\DIInterface;
use \Guni\Comments\Misc;
use \Guni\User\UserHelp;
use \Guni\Statistics\Statistics;

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
<span class="center hundred"><h5>Lite statistik</h5></span>
<p>Med hjälp av historik från debiteringsmätaren och SMHI visar vi här  timvärden för en månad.<br />Nu kan vi se vilken mängd energi som köps in för att värma huset vid olika utetemperaturer.<br />
Genom att utröna vilken grundlast vi normalt har, och mäta energi och temperatur mellan kl 23 och 05, kan vi göra en kurva över effektuttag som funktion av temperaturen.
</p>
<p id ="res"></p>
<div id = "data"></div>


EOD;

        return $html;
    }
}
