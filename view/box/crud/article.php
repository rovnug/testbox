<?php

namespace Anax\View;

$to = isset($data['url']) ? $data['url'] : "";
$where = isset($data['where']) ? $data['where'] : "";
$urlToView = url($to);

?>
<br />
<!--<a href="<?= $urlToView ?>"><?= $where ?></a>-->
<?= $content ?>

