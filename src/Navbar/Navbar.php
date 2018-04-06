<?php

namespace Guni\Navbar;

use \Guni\Comments\Misc;
use \Anax\Configure\ConfigureInterface;
use \Anax\Configure\ConfigureTrait;
use \Anax\DI\InjectionAwareInterface;
use \Anax\DI\InjectionAwareTrait;
use \Guni\Comments\Comm;

/**
 * Navbar to generate HTML for a navbar from a configuration array.
 */
class Navbar implements
    ConfigureInterface,
    InjectionAwareInterface
{
    use ConfigureTrait,
        InjectionAwareTrait;


    /**
    *
    * @return sessionobject
    */
    public function createPath($route)
    {
        $misc = new Misc($this->di);
        return $misc->setUrlCreator($route);
    }


    /**
     * Sets the callable to use for creating routes.
     *
     * @param obj $url - di_connection
     * @param string $create - path
     * @param string $navpath
     *
     * @return string $loginout - htmltext
     */
    public function getToLogin($create, $navpath)
    {
        $navtext = '<i class="fas fa-sign-in-alt" aria-hidden="true"></i>';
        $loginout = '<li><a href="' . $navpath . '"><span class="logout em08"><span class="logouttext">Mina sidor';
        $loginout .= '</span> ' . $navtext . '</span></a></li>';
        return $loginout;
    }


    /**
     * Sets the callable to use for creating routes.
     *
     * @param obj $url - di_connection
     * @param string $update - pathbase
     * @param obj $sess - session_info
     * @param string $grav - gravator_htmltext
     *
     * @return string $loginout - htmltext
     */
    public function getIsLoggedin($url, $update, $sess, $grav)
    {
        $logoutIcon = '<i class="fas fa-sign-out-alt" aria-hidden="true"></i>';

        $navpath = $this->createPath("user/logout");
        $loginout = '<li><a href="' . $update . '/' . $sess['id'] . '"><span class="logout em08">';
        $loginout .= '<span class="logouttext">' . $sess['acronym'] . '\'s sida</span> ' . $grav . '</span></a></li>';
        $loginout .= '<li><a href="' . $navpath . '"><span class="logout em08"><span class="logouttext">Logga ut';
        $loginout .= '</span> ' . $logoutIcon . '</span></a></li>';
        return $loginout;
    }

    /**
     * @param obj $url - di_connection
     * @param obj $val - navpath_info
     *
     * @return string $link - htmltext
     */
    public function getNavLink($val, $mobile)
    {
        $req = $this->di->get("request");
        $path = $req->getRoute();
        $url = $this->di->get("url");

        $htmlNavbar = $this->createPath($val['route']);
        //var_dump($mobile, $val);
        $tooltip = $mobile ? "" : '<span class="logout em08"><span class="logouttext">' . $val['text'] . '</span>';

        $fatext = $mobile ? "" : $val['fa'];

        $navclass = $mobile ? $val['mobile'] : $val['class'];
        $href = '"><a href="';
        
        $class = $val['route'] == $path ? $navclass . " selected" : $navclass;

        if ($val['route'] == "user/login") {
            $class .= " login";
        }
        $link = '<li class="' . $class . $href . $htmlNavbar . '">' . $val['text'] . " " . $fatext . '</a></li>';
        return $link;
    }


    /**
     * @param string $spans - htmlcode for hamburger-icon
     * @param string $home - htmlcode for active link
     * @param string $links - htmlcode for navigation
     * @param string $loginout - htmlcode for login-paths
     *
     * @return string $navbar - all the navbar htmltext
     */
    public function getEOD($spans, $home, $links, $loginout)
    {
        $navbar = <<<EOD
<nav class="navbar2" role="navigation">
<div class="rm-navbar-top rm-navbar">
<ul class="rm-default rm-desktop">
<span class="nav-left">{$links[0]}</span>
<span class="nav-right">{$loginout}</span>
</ul>
</div>
</nav>
<div class="profile">
<div class="rm-navbar-max rm-navbar rm-max rm-swipe-right">
<div class="rm-small-wrapper">
<ul class="rm-small">
<li><a id="rm-menu-button" class="rm-button" href="#">
<i class="fa fa-bars rm-button-face-1"></i>
<i class="fa fa-times rm-button-face-2"></i></a>
</li>
</ul>
</div>
<ul id="rm-menu" class="rm-default rm-mobile">{$loginout}{$links[1]}</ul>
</div>
</div>
EOD;
        return
        $navbar;
    }



    /**
     * Get HTML for the navbar.
     *
     * @return string as HTML with the navbar.
     */
    public function getHTML()
    {
        $session = $this->di->get("session");
        $sess = $session->get('user');

        $home = $this->createPath($this->config['items']['home']['route']);
        $navpath = $this->createPath("user/login");
        $create = $this->createPath("user/create");
        $update = $this->createPath("user/update");

        $comm = new Comm();
        $grav = "<img src='" . $comm->getGravatar($sess['email'])  . "' />";

        $spans = '<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>';

        $loginout = $this->getToLogin($create, $navpath);
        if ($sess) {
            $loginout = $this->getIsLoggedin($url, $update, $sess, $grav);
        }

        $links = "";
        foreach ($this->config['items'] as $val) {
            $links .= $this->getNavLink($val, false);
        }

        $maxlinks = "";
        foreach ($this->config['items'] as $val) {
            $maxlinks .= $this->getNavLink($val, true);
        }
        $links = [$links, $maxlinks];

        $navbar = $this->getEOD($spans, $home, $links, $loginout);
        return
        $navbar;
    }



    /**
    *
    *
    */
    public function getHeader()
    {
        $req = $this->di->get("request");
        $path = $req->getBaseUrl();
        $imgpath = $path . "/img/favicon/log2.jpg";
        $header = "<span class='site-logo-text'><a href='" . $path . "'><span class='site-logo-text-icon'><img src='" . $imgpath . "' alt='small logo' /></span></a></span>";
        return $header;
    }
}
