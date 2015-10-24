---
layout: landing
permalink: /17-steps-tripwire-kptd/
title: Как порвать трудное дело
header: 
  title: "Как порвать трудное дело"
  subtitle: "Практическая пошаговая инструкция"
  background: "/images/bg-goal.jpg"
  buttontitle: "Скачать"
  video: DmSPjYbTYA0
features:
  title: "У трудных задач не будет никаких шансов:"
  feature1: "**Справишься** с любой сложной задачей"
  feature2: "**Сэкономишь** много времени, сил и нервов"
  feature3: "**Почувствуешь** гордость за свои результаты"
author: 
  title: "Автор инструкции"
  name: "Николай Воробьев"
  photo: "/images/nickvorobiov.jpg"
  text: "Ведущий тренер компании ПроРеальность\n\nМеждународный тренер и коуч с 12-летним опытом\n\nВедущий и тренер в 4 телевизионных и радио шоу об отношениях и личной эффективности\n\nАвтор 5 книг и 15 тренингов об отношениях, мотивации, уверенности, бизнесе, продажах и личной эффективности\n\nПровёл тренинги более чем в 20 городах России и Европы"
---

<style type="text/css">
  header { display: none; }
</style>

<div class="section">
  <div class="container">
    <h1 id="thanks">Спасибо!</h1>

    <p>Привет, это Николай Воробьёв.</p>

    <p>Я очень рад, что ты решил скачать инструкцию «17 шагов».</p>

    <p>Для того, чтобы получить её — открой свой почтовый ящик  
    и найди там письмо от меня. В письме есть ссылка подтверждения подписки. Нажми на неё и ты получишь инструкцию «17 шагов».</p>
    
    <p><b>Позволь порекомендовать тебе</b> ещё одну инструкцию, «Как порвать трудное дело»:</p>

    <p class="text-center text-muted"><br/><i class="fa fa-arrow-circle-o-down fa-2x"></i></p>
  </div>
</div>

<div class="section bg-primary text-center" style="background-image: url({{ page.header.background }}); background-size: cover; background-position: center; padding: 75px 0;">
  <div class="container">
    <div class="row">
      <h1 style="margin-top: 0; font-size: 48px;">{{ page.header.title }}</h1>
      <p class="lead">
        {{ page.header.subtitle }}
      </p>
    </div>
  </div>
</div>

{% include sections/features.html features=page.features bg="bg-clouds-lighter" %}

<div class="section">
  <div class="container">
    <div class="row">
      <div class="col-xs-7 text-center">
        <h1 style="margin-top: 0;">Смотри видео<br/><i class="fa fa-arrow-down"></i></h1>
        <div class="flex-video widescreen">
          <iframe width="853" height="480" src="//www.youtube.com/embed/{{ page.header.video }}?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-xs-5 text-center">
        <h1 style="margin-top: 0;">Получай скидку<br/><i class="fa fa-arrow-down"></i></h1>
        <p class="lead">Потому что ты<br/>только что подписался</p>
        <form action="http://prorealnost.prorealnost.com/shot/87" method="POST">
          <div class="form-group">
            <input type="hidden" id="input-name" name="name" class="form-control" placeholder="Имя" required="required"/>
          </div>
          <div class="form-group">
            <input type="hidden" id="input-phone" name="phone" rules="phone" class="form-control" placeholder="Телефон" required="required"/>
          </div>
          <div class="form-group">
            <input type="hidden" id="input-email" name="email" class="form-control" placeholder="Емейл" required="required"/>
          </div>
          <button type="submit" class="btn btn-danger btn-lg btn-block"><b>Оформить заказ <i class="fa fa-arrow-right"></i></b><br/>за <s>900</s> <b>450</b> рублей</button>
          <!--p class="text-muted">Не закрывай эту страницу, потому что иначе скидка больше не будет доступна</p-->
        </form>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
var hash = window.location.hash.substring(1);

if (!hash) {
  window.location = '/';
}

var data = JSON.parse(hash);
document.getElementById('input-name').value = data.name;
document.getElementById('input-phone').value = data.phone;
document.getElementById('input-email').value = data.email;

$('#thanks').text('Спасибо, ' + data.name + '!');

window.location.hash = '';

</script>

<!--div class="section">
  <div class="container text-center">
    <h1>Заказывай инструкцию «Как&nbsp;порвать&nbsp;трудное&nbsp;дело»</h1>
    <a class="btn btn-danger btn-lg" href="#pricing"><b>Оформить заказ <i class="fa fa-arrow-right"></i></b><br/>за <s>900</s> <b>450</b> рублей</a>
  </div>
</div-->
