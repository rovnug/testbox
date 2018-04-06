<!doctype html>
<html class="proj">
<head>
    <!--<meta http-equiv="Content-Security-Policy" content="default-src 'self' https://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/ ftp://ftp.nordpoolspot.com/ http://212.105.90.32:8077 http://212.105.90.32:8247/axis-cgi/mjpg/video.cgi http://212.105.90.32:8029/axis-cgi/mjpg/video.cgi data: gap: https://ssl.gstatic.com 'unsafe-eval' 'unsafe-inline'; style-src 'self'  'unsafe-inline'; media-src *; img-src 'self' http://212.105.90.32:8247/axis-cgi/mjpg/video.cgi http://212.105.90.32:8029/axis-cgi/mjpg/video.cgi data: content:;">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">-->

    <meta charset="utf-8">
    <?php if ($reload == "/Elmätare") : ?>
        <meta http-equiv="refresh" content="10"; URL="<?= $_SERVER['PHP_SELF'] ?>">
    <?php endif; ?>
    
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title><?= $title ?></title>
    <link rel="icon" href="<?= $this->asset("favicon.ico") ?>">

    <?php foreach ($stylesheets as $stylesheet) : ?>
    <link rel="stylesheet" type="text/css" href="<?= $this->asset("$stylesheet") ?>">
    <?php endforeach; ?>
    <link rel="stylesheet/less" type="text/css" href="<?= $this->asset("../theme/style.less") ?>">

<?php if (isset($javascripts)) : foreach ($javascripts as $javascript) : ?>
<script async="true" src="<?=$this->asset($javascript)?>"></script>
<?php endforeach; ?>
<?php endif; ?>


</head>

<body class="<?= $bodyclass ?>">
<!-- wrapper around all items on page -->
<div class="wrap-all">



<!-- siteheader -->
<?php if ($this->regionHasContent("header")) : ?>
<div class="outer-wrap outer-wrap-header">
    <div class="inner-wrap inner-wrap-header">
        <div class="row">
            <header class="site-header" role="banner">
                <?php $this->renderRegion("header") ?>
            </header>
        </div>
    </div>
</div>
<?php endif; ?>



<!-- navbar -->
<?php if ($this->regionHasContent("navbar1")) : ?>
<div class="outer-wrap outer-wrap-navbar">
    <div class="inner-wrap inner-wrap-navbar">
        <div class="row">
            <nav class="navbar1" role="navigation">
                <?php $this->renderRegion("navbar1")?>
            </nav>
        </div>
    </div>
</div>
<?php endif; ?>



<!-- flash -->
<?php if ($this->regionHasContent("flash")) : ?>
<div class="outer-wrap outer-wrap-flash">
    <div class="inner-wrap inner-wrap-flash">
        <div class="row">
            <div class="flash-wrap">
                <?php $this->renderRegion("flash")?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>



<!-- breadcrumb -->
<?php if ($this->regionHasContent("breadcrumb")) : ?>
<div class="outer-wrap outer-wrap-breadcrumb">
    <div class="inner-wrap inner-wrap-breadcrumb">
        <div class="row">
            <div class="breadcrumb-wrap">
                <nav class="breadcrumb-list" role="navigation">
                    <?php $this->renderRegion("breadcrumb")?>
                </nav>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>



<!-- columns-above -->
<?php if ($this->regionHasContent("columns-above")) : ?>
<div class="outer-wrap outer-wrap-columns-above">
    <div class="inner-wrap inner-wrap-columns-above">
        <div class="row">
            <div class="columns-above">
                <?php $this->renderRegion("columns-above")?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>



<!-- main -->
<div class="outer-wrap outer-wrap-main">
    <div class="inner-wrap inner-wrap-main">
        <div class="row">

<?php
$sidebarLeft  = $this->regionHasContent("sidebar-left");
$sidebarRight = $this->regionHasContent("sidebar-right");
$class = "";
$class .= $sidebarLeft  ? "has-sidebar-left "  : "";
$class .= $sidebarRight ? "has-sidebar-right " : "";
$class .= empty($class) ? "" : "has-sidebar";
?>

            <?php if ($sidebarLeft): ?>
            <div class="sidebar sidebar-left <?= $class ?>" role="complementary">
                <?php $this->renderRegion("sidebar-left")?>
            </div>
            <?php endif; ?>

            <?php if ($this->regionHasContent("main")): ?>
            <main class="main <?= $class ?>" role="main">
                <?php $this->renderRegion("main")?>
            </main>
            <?php endif; ?>

            <?php if ($sidebarRight): ?>
            <div class="sidebar sidebar-right <?= $class ?>" role="complementary">
                <?php $this->renderRegion("sidebar-right")?>
            </div>
            <?php endif; ?>

        </div>
    </div>
</div>



<!-- after-main -->
<?php if ($this->regionHasContent("after-main")) : ?>
<div class="outer-wrap outer-wrap-after-main">
    <div class="inner-wrap inner-wrap-after-main">
        <div class="row">
            <div class="after-main">
                <?php $this->renderRegion("after-main")?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>



<!-- columns-below -->
<?php if ($this->regionHasContent("columns-below")) : ?>
<div class="outer-wrap outer-wrap-columns-below">
    <div class="inner-wrap inner-wrap-columns-below">
        <div class="row">
            <div class="columns-below">
                <?php $this->renderRegion("columns-below")?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>



<!-- sitefooter -->
<?php if ($this->regionHasContent("footer")) : ?>
<div class="outer-wrap outer-wrap-footer" role="contentinfo">
    <div class="inner-wrap inner-wrap-footer">
        <div class="row">
            <div class="footer">
                <?php $this->renderRegion("footer")?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>



</div> <!-- end of wrapper -->


<!-- useful for inline javascripts such as google analytics-->
<?php if ($this->regionHasContent("body-end")) : ?>
<?php $this->renderRegion("body-end")?>
<?php endif; ?>

</body>


<?php if (isset($myjavascripts)) : foreach ($myjavascripts as $javascript) : ?>
<script src="<?=$this->asset($javascript)?>"></script>
<?php endforeach; ?>
<?php endif; ?>
</html>
