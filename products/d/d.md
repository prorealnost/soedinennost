---
layout: base
permalink: /d/
chat: false
---

<div id="wrap">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>Как увеличить доход</h1> <!-- ротация проблем -->
        <p class="lead">получи бесплатную консультацию<br/>тренера личностного роста</p>
        <ul class="fa-ul">
          <li><i class="fa-li fa fa-check text-belize-hole"></i>Будешь активно развиваться</li>
          <li><i class="fa-li fa fa-check text-belize-hole"></i>Создашь перспективы в жизни</li>
          <li><i class="fa-li fa fa-check text-belize-hole"></i>Повысишь самодисциплину</li>
          <li><i class="fa-li fa fa-check text-belize-hole"></i>Перестанешь сдаваться</li>
          <li><i class="fa-li fa fa-check text-belize-hole"></i>Улучшишь эмоциональное состояние</li>
        </ul>
      </div>
      <div class="col-xs-8 col-sm-5">
        <p>Чтобы оставить заявку, введи ссылку на&nbsp;свой профиль ВКонтакте:</p>
        <form action="http://prorealnost.prorealnost.com/shot/109" method="POST">
          <input type="hidden" name="name" />
          <input type="hidden" name="email" />
          <div class="form-group">
            <input type="text" name="note" class="form-control" placeholder="https://vk.com/id*" required="required"/>
          </div>
          <button type="submit" class="btn btn-primary bg-belize-hole">Получить консультацию</button>
        </form>
      </div>
    </div>
  </div>
</div>
<script type="text/javascript">
$(function() {
  $('form').submit(function(e) {
    var v = $('input[name="note"]').val();
    v = v.replace(/.*\//, "").replace(/[^\.a-zA-Z0-9_-]/g, "");
    $('input[name="name"]').val('https://vk.com/' + v);
    $('input[name="email"]').val(v + '@vk.com');
  })
})
</script>

<style type="text/css">
html, body
{
  height: 100%;
}
/*.lead {
  margin-bottom: 15px;
}*/
#wrap {
  min-height: 100%;
  padding-top: 20px;
  background-color: #e9e9e9;
  background-image: url(/images/official_hires_smiling_high_wide_nickvorobiov_photo-min.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: bottom left;
}
</style>
