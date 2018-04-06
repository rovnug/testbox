<?php

namespace Guni\Page;

use \Anax\DI\InjectionAwareInterface;
use \Anax\DI\InjectionAwareTrait;

/**
 * A default page rendering class.
 */
class PageRender implements PageRenderInterface, InjectionAwareInterface
{
    use InjectionAwareTrait;


    public function redirect($newpage)
    {
        $response = $this->di->get("response");
        $url = $this->di->get("url");
        $response->redirect($url->create($newpage));
    }



    /**
    * @param array $arr
    *
    */
    public function addViewContent($arr)
    {
        $arr[0]->add("view/header", [
            "header" => $arr[4]->getHeader(),
            "navbar" => $arr[4]->getHTML(),
        ], "header", 0);

        $arr[0]->add("view/footer", [
            "footeradd" => ""
        ], "footer", 1);
        $arr[0]->add($arr[5], [
                "content" => $arr[1][0]
            ], $arr[2], 0);
        if (isset($arr[1][1])) {
            $arr[0]->add($arr[5], [
                "content" => $arr[1][1]
            ], "sidebar-left", 0);
        }
        if (isset($arr[1][2])) {
            $arr[0]->add($arr[5], [
                "content" => $arr[1][2]
            ], "sidebar-right", 0);
        }
        $arr[0]->add("view/layout", $arr[3], "layout");
    }



    /**
     * Render a standard web page using a specific layout.
     * @SuppressWarnings("exit")
     * @param array   $data   variables to expose to layout view.
     * @param integer $status code to use when delivering the result.
     *
     * @return void
     */
    public function renderPage($text, $meta = null, $left = null, $right = null, $status = 200)
    {
        $req = $this->di->get("request");
        $path = $req->getRoute();

        $data = array();
        $data["stylesheets"] = isset($meta["stylesheets"]) ? $meta["stylesheets"] : ["css/style.min.css", "css/fontawesome-all.min.css", "css/style2.css", "css/fontawesome.min.css"];
        $data["title"] = isset($meta['title']) && is_array($meta["title"]) ? $meta["title"][0] : (isset($meta["title"]) ? $meta["title"] : "ipv6home");

        $region = isset($meta['region']) ? $meta['region'] : "main";
        $bodyClass = "route-";
        $data["bodyclass"] = isset($path) ? $bodyClass . $path : $bodyClass;
        $less = "js/less.min.js";
        $data["javascripts"] = isset($meta["javascripts"]) ? $meta("javascripts") : ["js/responsive-menu.js", "js/fontawesome-all.min.js", "js/canvasjs.min.js"];

        $data["reload"] = isset($meta["title"][0]) && $meta["title"][0] == "Elmätare" ? "Elmätare" : "Annat";

        $data["myjavascripts"] = isset($meta["title"]) && is_array($meta["title"]) ? [$meta["title"][1]] : [];

        $left = is_array($left) ? $left['text'] : $left;
        $where = isset($right['where']) ? $right['where'] : "default1/article";
        $right = is_array($right) ? $right['text'] : $right;

        $view = $this->di->get("view");

        $navbar = $this->di->get("navbar");
        $texts = [$text, $left, $right];
        $arr = [$view, $texts, $region, $data, $navbar, $where];
        $this->addViewContent($arr);
        $body = $view->renderBuffered("layout");
        $this->di->get("response")->setBody($body)
                                  ->send($status);
        exit;
    }
}
