<?php

namespace Guni\Page;

use \Anax\DI\InjectionAwareInterface;
use \Anax\DI\InjectionAwareTrait;

/**
 * A default page rendering class.
 */
class FlatFileContentController implements InjectionAwareInterface
{
    use InjectionAwareTrait;



    /**
     * Render a page using flat file content.
     * @SuppressWarnings(PHPMD.UnusedLocalVariable)
     * @return void
     */
    public function render()
    {
        $req = $this->di->get("request");
        $path = $req->getRoute();
        if ($path == "") {
            $this->di->get("response")->redirect("test");
        }

        $file1 = ANAX_INSTALL_PATH . "/content/${path}.md";
        $file2 = ANAX_INSTALL_PATH . "/content/${path}/index.md";

        $file = is_file($file1) ? $file1 : null;
        $file = is_file($file2) ? $file2 : $file;

        if (!$file) {
            return;
        }

        $real = realpath($file);
        $base = realpath(ANAX_INSTALL_PATH . "/content/");
        if (strncmp($base, $real, strlen($base))) {
            return;
        }

        $content = file_get_contents($file);
        $content = $this->di->get("textfilter")->parse(
            $content,
            ["yamlfrontmatter", "shortcode", "markdown", "titlefromheader"]
        );

        $left = isset($content->frontmatter['views']['side-left']['data']['meta']['route']) ? $content->frontmatter['views']['side-left']['data']['meta']['route'] : null;
        $right = isset($content->frontmatter['views']['side-right']['data']['meta']['route']) ? $content->frontmatter['views']['side-right']['data']['meta']['route'] : null;

        $left = $left ? ANAX_INSTALL_PATH . "/content/${left}.md" : null;
        $right = $right ? ANAX_INSTALL_PATH . "/content/${right}.md" : null;

        $file = is_file($left) ? $left : null;
        $left = $file ? file_get_contents($file) : null;

        $left = $left ? $this->di->get("textfilter")->parse(
            $left,
            ["yamlfrontmatter", "shortcode", "markdown", "titlefromheader"]
        ) : null;

        $file = is_file($right) ? $right : null;
        $right = $file ? file_get_contents($file) : null;
        $right = $right ? $this->di->get("textfilter")->parse(
            $right,
            ["yamlfrontmatter", "shortcode", "markdown", "titlefromheader"]
        ) : null;
        $left = $left ? $left->text : null;
        $right = $right ? $right->text : null;

        $this->di->get("pageRender")->renderPage($content->text, $content->frontmatter, $left, $right);
    }
}
