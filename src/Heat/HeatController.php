<?php

namespace Guni\Heat;

use \Anax\Configure\ConfigureInterface;
use \Anax\Configure\ConfigureTrait;
use \Anax\DI\InjectionAwareInterface;
use \Anax\DI\InjectionAwareTrait;
use \Guni\Heat\ShowAllService;

use \Guni\User\UserHelp;

/**
 * A default page rendering class.
 */
class HeatController implements
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
        $userhelp->toRender(["Elmätare","js/power.js"], "box/crud/article", $data);
    }
}
