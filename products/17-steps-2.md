---
layout: landing
title: 17 шагов чтобы привести свою жизнь в порядок

## ЦА №2 — специалисты

permalink: /17-steps-2/
header: 
  title: "Как достичь гораздо&nbsp;большего в&nbsp;бизнесе, работе и&nbsp;жизни"
  subtitle: "инструкция из 17 важных шагов"
  background: "/images/kp-top-bg-min.jpg"
  buttontitle: "Записаться"
  video: dDWTdQ2GHtI
features: 
  -
    text: Увеличить доход
    image: "career"
  -
    text: Активно развиваться
    image: "start"
  -
    text: Создать перспективы в своей жизни
    image: "empower"
  -
    text: Улучшить эмоциональное состояние
    image: "love"
  -
    text: Повысить самодисциплину
    image: "wealth"
  -
    text: Перестать сдаваться
    image: "life"

author:
  - Ведущий тренер компании ПроРеальность
  - Международный тренер и коуч с 12-летним опытом
  - Ведущий и тренер в 4 телевизионных и радио шоу об отношениях и личной эффективности
  - Автор 5 книг и 15 тренингов об отношениях, мотивации, уверенности, бизнесе, продажах и личной эффективности
  - Провёл тренинги более чем в 20 городах России и Европы
---

<style type="text/css">
  header { display: none; }
</style>

<div class="section bg-primary text-center" style="background-image: url({{ page.header.background }}); background-size: cover; background-position: center; padding: 150px 0;">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 style="margin-top: 0; font-size: 48px;">{{ page.header.title }}</h1>
        <p class="lead">
          {{ page.header.subtitle }}
        </p>
      </div>
      {% comment %}
      <div class="col-md-4 col-md-offset-1">
        <div class="well">
          <h2 align="center" style="color: black; margin-top: 0; text-shadow: none;">
            Получить инструкцию
          </h2>
          <form action="http://prorealnost.prorealnost.com/shot/59" method="POST">
            <div class="form-group">
              <input type="text" name="name" class="form-control" placeholder="Имя" required="required"/>
            </div>
            <div class="form-group">
              <input type="text" name="phone" rules="phone" class="form-control" placeholder="Телефон" required="required"/>
            </div>
            <div class="form-group">
              <input type="email" name="email" class="form-control" placeholder="Емейл" required="required"/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Скачать</button>
          </form>
        </div>
      </div>
      {% endcomment %}
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <h1 class="text-center">Инструкция, которая уже помогла 684 людям</h1>
    <p class="lead text-muted text-center">решиться и начать менять свою жизнь к лучшему</p>
    <div class="row">
      {% for item in page.features %}
        <div class="col-md-4 text-center" style="height: 260px; margin-top: 40px">
          <img src="/images/17-steps/{{ item.image }}.png" width="150" height="150"/>
          <br/>
          <p class="lead">{{ item.text }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="section">
  <div style="
    min-width: 1000px;
    min-height: 600px;
    background-image: url(http://prorealnost.com/data/media/prorealnost/me.jpg);
    background-repeat: no-repeat;
    background-position: left bottom;
    border-bottom: solid #e0e0e0 3px;
  ">
    <div class="container">
      <div class="row">
        <div class="col-xs-offset-5 col-xs-7 bg-clouds" style="padding: 50px;">
          <h1 style="margin-top: 0;">Автор инструкции<br/>Николай Воробьёв</h1>
          <ul class="fa-ul">
            {% for item in page.author %}
              {% capture thecycle %}{% cycle 'text-strong', '' %}{% endcapture %}
              <li class="{{ thecycle }}">
                <i class="fa-li fa fa-check text-danger"></i>
                {{ item }}
              </li>
            {% endfor %}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <h1 align="center">
      Получить инструкцию
    </h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well">
          <form action="http://prorealnost.prorealnost.com/shot/78" method="POST">
            <div class="form-group">
              <input type="text" name="name" class="form-control input-lg" placeholder="Имя" required="required"/>
            </div>
            <div class="form-group">
              <input type="text" name="phone" rules="phone" class="form-control input-lg" placeholder="Телефон" required="required"/>
            </div>
            <div class="form-group">
              <input type="email" name="email" class="form-control input-lg" placeholder="Емейл" required="required"/>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Получить инструкцию</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

{% comment %}
<div class="section">
  <div class="container">
    <div style="width: 500px; margin: 0 auto;">
      <script>window.gcEmbedId=1953;</script>
      <script src='http://nv.prorealnost.com/public/js/embed.js'></script>
    </div>
  </div>
</div>
{% endcomment %}
