<?php

namespace Guni\Laddbox;

use \Anax\Configure\ConfigureInterface;
use \Anax\Configure\ConfigureTrait;
use \Anax\DI\InjectionAwareInterface;
use \Anax\DI\InjectionAwareTrait;
use \Guni\Laddbox\ShowAllService;

use \Guni\User\UserHelp;

/**
 * A default page rendering class.
 */
class LaddboxController implements
    ConfigureInterface,
    InjectionAwareInterface
{
    use ConfigureTrait,
        InjectionAwareTrait;


    /**
    *
    * @return sessionobject
    */
    public function getSess()
    {
        return $this->di->get("session")->get("user");
    }

    /**
     * Show all items.
     *
     * @return void
     */
    public function getIndex()
    {
        $text = new ShowAllService($this->di);
        $data = [
            "content" => $text->getHTML(),
        ];
        $userhelp = new UserHelp($this->di);
        $userhelp->toRender(["Laddbox","js/laddbox.js"], "box/crud/article", $data);
    }
}
