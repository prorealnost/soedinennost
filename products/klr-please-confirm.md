---
layout: landing
title: Подтверждение вступления в клуб личностного роста Николая Воробьёва
permalink: /klr-please-confirm/
---

<div class="section" id="pricing">
  <div class="container">
    <h1 class="text-center">Поздравляем, ты в тренинге!</h1>
    <p class="lead text-muted text-center">что дальше:</p>
  </div>
  <div class="content">
    <p><b>1. Чтобы подтвердить, что ты реальный человек, оставь ниже вот такой комментарий:</b></p>
    <p style="margin-left: 2em;"><i>Записался в клуб личностного роста<br/>Николая Воробьёва http://soedinennost.com/klr/</i></p>
    <p><b>2. Мы с тобой свяжемся и пришлём ссылку для участия<br/>в ближайшем занятии</b></p>
  </div>
  <div class="content">
    <div id="vk_comments"></div>
  </div>
</div>

<style type="text/css">
.content {
  width: 700px;
  margin: 0 auto;
  padding: 40px 0 0 0;
}
</style>

<script type="text/javascript" src="//vk.com/js/api/openapi.js?115"></script>
<script type="text/javascript">
VK.init({apiId: {{ site.vk_app_id }}, onlyWidgets: true});
VK.Widgets.Comments("vk_comments", {width: 700, limit: 100, attach: "*"}, 'http://soedinennost.com/klr/');
</script>
