---
layout: landing
title: Клуб Победителей
permalink: /kp/
header: 
  title: "Вступай в Клуб Победителей"
  subtitle: "и продолжай развиваться и достигать новых целей"
  # Длительная поддержка в&nbsp;достижении целей и&nbsp;развитии личных качеств
  background: "/images/kp-top-bg-min.jpg"
  buttontitle: "Записаться"
  video: dDWTdQ2GHtI
features: 
  feature1: "Узнаешь, что конкретно мешает тебе создать любящие отношения"
  feature2: "Получишь конкретный план действий по созданию и улучшению отношений"
  feature3: "Начнешь действовать и создавать яркие и насыщенные отношения"
contents: 
  items:
    - "мощную поддержку в достижении целей"
    - "непрерывное движение вперёд"
    - "дух победы длительное время"
    - "ответы на вопросы"
    - "быстрый доступ к нужной информации"
    - "привычку двигаться к целям уверенно и постоянно"
    - "командный дух и взаимную поддержку"
    - "челлендж каждую неделю"
    - "полезные связи и знакомства"
    - "навык самостоятельного движения к целям"

contents2: 
  items:
    - Вступай в клуб
    - Участвуй в клубных вебинарах каждый понедельник в 20:00 мск
    - Узнавай новые фишки и техники по достижению целей
    - Ставь собственные цели и двигайся к ним
    - Выбирай важные тебе качества и выполняй растяжки на развитие этих качеств
    - Общайся в закрытой группе и получай поддержку в твоих шагах к целям
    - Задавай вопросы тренеру и получай обратную связь

pricing: 
  - 
    name: "Один год"
    price: "3000"
    href: "http://prorealnost.prorealnost.com/shot/69"
    button: "на один год"
  - 
    name: "Полгода"
    price: "4000"
    href: "http://prorealnost.prorealnost.com/shot/66"
    button: "на полгода"
  - 
    name: "Три месяца"
    price: "5000"
    href: "http://prorealnost.prorealnost.com/shot/63"
    button: "на три месяца"
---

<div class="section bg-primary text-center" style="background-image: url({{ page.header.background }}); background-size: cover; background-position: center; padding: 150px 0;">
  <div class="container">
    <div class="row">
      <h1 style="margin-top: 0; font-size: 48px;">{{ page.header.title }}</h1>
      <p class="lead">
        {{ page.header.subtitle }}
      </p>
    </div>
  </div>
</div>
<div class="section">
  <div class="container">
    <div class="row">
      <div class="col-xs-4">
        <h1 style="margin-top: 0;">Отдыхают только лузеры</h1>
        <p>Может быть, тебе хочется полежать и набраться сил, но ты сам знаешь, что потом ты уже не встанешь чтобы идти дальше, а просто скатишься к тому, что было раньше.</p>
        <a class="btn btn-danger" href="#pricing"><i class="fa fa-arrow-up"></i> Встать с дивана</a>
        <p class="text-muted">вступай в клуб победителей</p>
      </div>
      <div class="col-xs-8">
        <div class="flex-video widescreen">
          <iframe width="853" height="480" src="//www.youtube.com/embed/{{ page.header.video }}?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section bg-clouds-lighter">
  <div class="container">
    <div class="row">
      <div class="col-xs-4">
        <img src="/images/flashman.jpg" class="img-responsive"/>
      </div>
      <div class="col-xs-8 bg-clouds-darker" style="padding: 50px;">
        <h1 style="margin-top: 0;">Что ты получишь<br/>в Клубе Победителей?</h1>
        <ul class="fa-ul">
          {% for item in page.contents.items %}
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

<div class="section" style="background-image: url({{ page.header.background }}); background-size: cover; background-position: right;">
  <div class="container">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1 bg-white" style="padding: 50px;">
        <h1 style="margin-top: 0;" class="text-center">Что делать?</h1>
        {% for item in page.contents2.items %}
          {% capture thecycle %}{% cycle 'text-strong', '' %}{% endcapture %}
          <div class="numbercircle bg-nephritis text-white text-strong" style="float: left;">{{ forloop.index }}</div>
          <p class="{{ thecycle }}" style="margin-left: 3em; padding-top: 3px; padding-bottom: 1em;">
            {{ item }}
          </p>
        {% endfor %}
      </div>
      <div class="col-xs-10 col-xs-offset-1 bg-clouds text-center" style="padding: 50px;">
        <a class="btn btn-danger" href="#pricing"><i class="fa fa-arrow-up"></i> <b>Оторвать зад от дивана</b> и вступить в клуб победителей</a>
      </div>
    </div>
  </div>
</div>

<div class="section" id="pricing">
  <div class="container">
    <div class="row">
     <h1 class="text-center">Выбери свой вариант</h1>
      {% for item in page.pricing %}
        {% capture color %}{% cycle 'info', 'success', 'danger' %}{% endcapture %}
        <div class="col-sm-4">
          <div style="border: 1px solid rgb(221, 221, 221); border-radius: 6px; margin-bottom: 20px;" class="bg-clouds">
            <div style="padding: 20px 15px;" class="{% cycle 'bg-peter-river', 'bg-emerald', 'bg-alizarin' %} text-center">
              <h3 style="color: white; margin: 0;">{{ item.name }}</h3>
            </div>
            <ul class="list-group list-group-flush" style="margin: -1px;">
              <li class="list-group-item">
                <p class="lead text-center" style="padding: 20px 15px; font-size: 42px; margin: 0px;"><strong>{{ item.price }}</strong><br/><span class="text-muted" style="font-size: 27px;">рублей в месяц</span></p>
              </li>
            </ul>
            <div style="padding: 20px 15px;">
              <a class="btn btn-lg btn-block btn-{{ color }} order-btn" href="{{ item.href }}" data-id="{{ item.product }}" data-title="{{ item.name }}" style="font-size: 20px;"><i class="fa fa-arrow-up"></i> <b>Вступить</b><br/>{{ item.button }}</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
