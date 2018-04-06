<?php

namespace Guni\Spot;

use \Anax\DI\DIInterface;
use \Guni\Comments\Misc;
use \Guni\User\UserHelp;
use \Guni\Spot\Spot;

/**
 * Form to update an item.
 */
class ShowAllService
{
    protected $misc;
    protected $area;
    protected $currency;
    protected $todaysDate;
    protected $tomorrowsDate;
    protected $pricesToday;
    protected $pricesTomorrow;
    protected $todaysAverage;
    protected $tomorrowsAverage;

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
        $this->area = "SE3";
        $this->currency = "SEK";
        $today = $this->extractSpots("spotprice.txt");
        $this->todaysDate = $today[5];
        $tomorrow = $this->extractSpots("spotprice2.txt");
        $this->tomorrowsDate = $tomorrow[5];
        $this->pricesToday = $this->getPrices($today);
        $this->todaysAverage = $this->pricesToday[25];
        $this->pricesTomorrow = $this->getPrices($tomorrow);
        $this->tomorrowsAverage = $this->pricesTomorrow[25];
    }


    public function extractSpots($file)
    {
        $req = $this->di->get("request");
        $path = $req->getBaseUrl() . "/scripts/" . $file;
        $file = file($path);

        foreach ($file as $line) {
            $pos1 = strpos($line, $this->area);
            $pos2 = strpos($line, $this->currency);
            if ($pos1 == true && $pos2 == true) {
                $current = $line;
                return explode(";", $current);
            }
        }
    }


    public function getPrices($chosen)
    {
        $ct = 0;
        for ($i = 8; $i < 34; $i++) {
            $replacecomma = str_replace(",", "", $chosen[$i]);
            $clean[$ct] = round(((double) $replacecomma / 1000), 1);
            $ct += 1;
        }
        return $clean;
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
        $summerwinterhead = "<th>02</th><th>03</th>";
        $summerwinterheadTomorrow = "<th>03</th>";
        $summerwinterdataToday = "<td>{$this->pricesToday[2]}</td>";
        $summerwinterdataTomorrow = "<td>{$this->pricesTomorrow[2]}</td>";

        if ($this->pricesToday[3] > 0) {
            $summerwinterdataToday = "<td>{$this->pricesToday[2]}</td><td>{$this->pricesToday[3]}</td>";
            $summerwinterdataTomorrow = "<td> - </td><td>{$this->pricesTomorrow[2]}</td>";
        }
        if ($this->pricesToday[2] == "") {
            $summerwinterdataToday = "<td></td>";
        }


        if ($this->pricesTomorrow[3] > 0) {
            $summerwinterdataTomorrow = "<td>{$this->pricesTomorrow[2]}</td><td>{$this->pricesTomorrow[3]}</td>";
            $summerwinterdataToday = "<td> - </td><td>{$this->pricesToday[2]}</td>";
        }
        if ($this->pricesTomorrow[2] == "") {
            $summerwinterdataTomorrow = "<td></td>";
        }

        if ($this->pricesTomorrow[3] > 0 || $this->pricesToday[3] > 0) {
            $summerwinterhead = "<th>02</th><th>02</th><th>03</th>";
        }

        $html = <<< EOD
<div class="col-lg-12">
<span class="center hundred"><h5>Spotpriserna</h5></span>
<p id ="demo"></p>
<table class ="fixed"><caption>Medelpris {$this->todaysDate}: <span class ="red">{$this->todaysAverage}</span> öre<br />
Medelpris {$this->tomorrowsDate}: <span class ="red">{$this->tomorrowsAverage}</span> öre</caption>
<thead><tr><th>När</th><th>01</th>{$summerwinterhead}<th>04</th>
<th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th>
<th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th>
<th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th>
<th>23</th><th>24</th></tr></thead>
<tbody><tr><td>Idag</td><td>{$this->pricesToday[0]}</td><td>{$this->pricesToday[1]}</td>
{$summerwinterdataToday}
<td>{$this->pricesToday[4]}</td><td>{$this->pricesToday[5]}</td>
<td>{$this->pricesToday[6]}</td><td>{$this->pricesToday[7]}</td>
<td>{$this->pricesToday[8]}</td><td>{$this->pricesToday[9]}</td>
<td>{$this->pricesToday[10]}</td><td>{$this->pricesToday[11]}</td>
<td>{$this->pricesToday[12]}</td><td>{$this->pricesToday[13]}</td>
<td>{$this->pricesToday[14]}</td><td>{$this->pricesToday[15]}</td>
<td>{$this->pricesToday[16]}</td><td>{$this->pricesToday[17]}</td>
<td>{$this->pricesToday[18]}</td><td>{$this->pricesToday[19]}</td>
<td>{$this->pricesToday[20]}</td><td>{$this->pricesToday[21]}</td>
<td>{$this->pricesToday[22]}</td><td>{$this->pricesToday[23]}</td>
<td>{$this->pricesToday[24]}</td>
</tr>
<tbody><tr><td>Imorgon</td><td>{$this->pricesTomorrow[0]}</td><td>{$this->pricesTomorrow[1]}</td>
{$summerwinterdataTomorrow}
<td>{$this->pricesTomorrow[4]}</td><td>{$this->pricesTomorrow[5]}</td>
<td>{$this->pricesTomorrow[6]}</td><td>{$this->pricesTomorrow[7]}</td>
<td>{$this->pricesTomorrow[8]}</td><td>{$this->pricesTomorrow[9]}</td>
<td>{$this->pricesTomorrow[10]}</td><td>{$this->pricesTomorrow[11]}</td>
<td>{$this->pricesTomorrow[12]}</td><td>{$this->pricesTomorrow[13]}</td>
<td>{$this->pricesTomorrow[14]}</td><td>{$this->pricesTomorrow[15]}</td>
<td>{$this->pricesTomorrow[16]}</td><td>{$this->pricesTomorrow[17]}</td>
<td>{$this->pricesTomorrow[18]}</td><td>{$this->pricesTomorrow[19]}</td>
<td>{$this->pricesTomorrow[20]}</td><td>{$this->pricesTomorrow[21]}</td>
<td>{$this->pricesTomorrow[22]}</td><td>{$this->pricesTomorrow[23]}</td>
<td>{$this->pricesTomorrow[24]}</td>
</tr>
</tbody></table>
<div id="chartContainer2" style="height: 150px; width: 100%;"></div>
</div>
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
