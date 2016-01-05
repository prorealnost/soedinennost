---
layout: landing
title: Клуб личностного роста Николая Воробьёва
permalink: /klr/
chat: false
header: 
  title: "Клуб личностного роста<br/>Николая Воробьёва"
  subtitle: "бесплатно для всех желающих"
  # Длительная поддержка в&nbsp;достижении целей и&nbsp;развитии личных качеств
  background: "/images/kp-top-bg-min.jpg"
  buttontitle: "Записаться"
  morebuttontitle: "Узнать больше"
  video: GflraE1h99Q
features: 
  feature1: "Работа, которая приносит 50-70-100 т.р. в месяц, но перспективы роста закончились"
  feature2: "Бизнес с доходом в 100 тысяч в хороший месяц, но ты начал сомневаться и забывать, зачем открывал бизнес"
  feature3: ""
contents: 
  items:
    - "устал топтаться на&nbsp;одном месте"
    - "надоело проживать каждый день так&nbsp;же, как предыдущий"
    - "чувствуешь, что пора в&nbsp;жизни что-то менять"
    - "готов развиваться и&nbsp;становиться лучше"
    - "хочешь найти новые перспективы в&nbsp;жизни"
    - "мечтаешь достичь в&nbsp;жизни гораздо большего"
---

<div class="section bg-primary text-center" style="background-image: url({{ page.header.background }}); background-size: cover; background-position: center; padding: 150px 0;">
  <div class="container">
    <h1 style="margin-top: 0; font-size: 48px;">{{ page.header.title }}</h1>
    <p class="lead">
      {{ page.header.subtitle }}
    </p>
    <a class="btn btn-danger" href="#pricing"><i class="fa fa-arrow-right"></i> {{ page.header.buttontitle }}</a>
    &nbsp;
    <a class="btn btn-info" href="#more"><i class="fa fa-arrow-down"></i> {{ page.header.morebuttontitle }}</a>
  </div>
</div>

<div class="section bg-clouds-lighter" id="more">
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 text-center">
        <div class="flex-video widescreen">
          <iframe width="853" height="480" src="//www.youtube.com/embed/{{ page.header.video }}?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <h1 class="text-center">Встречи клуба каждую среду<br/>онлайн в&nbsp;20:00&nbsp;мск</h1>
    <div class="clock"></div>
    <p class="text-center">
      <a class="btn btn-danger" href="#pricing"><i class="fa fa-arrow-right"></i> Записаться</a>
    </p>
  </div>
</div>

<div class="section">
  <div class="container">
    <h1 class="text-center">Пора вступать в клуб личностного роста</h1>
    <p class="lead text-muted text-center">только если ты готов менять свою жизнь к лучшему</p>
    <div class="row">
      {% for item in page.contents.items %}
        <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4" style="height: 100px; margin-top: 50px">
          <div class="numbercircle-md bg-nephritis text-white text-strong" style="float: left;">{{ forloop.index }}</div>
          <p style="margin-left: 4em; margin-top: 0; padding-bottom: 1em;">{{ item }}</p>
        </div>
      {% endfor %}
    </div>
    <br/>
    <p class="text-center">
      <a class="btn btn-danger" href="#pricing"><i class="fa fa-arrow-right"></i> Записаться</a>
    </p>
  </div>
</div>

<link rel="stylesheet" href="/vendor/flipclock/flipclock.css"/>

<script src="/vendor/flipclock/flipclock.js"></script>  
<script type="text/javascript" src="/vendor/moment/moment-with-locales.min.js"></script>
<script type="text/javascript" src="/vendor/moment/moment-timezone-with-data-2010-2020.min.js"></script>

<script type="text/javascript">
  var clock;

  const targetDay = 3; // среда
  const targetHour = 20; // 20:00

  $(document).ready(function() {
    // Set some date in the future. In this case, it's always Jan 1
    var futureDate = moment().tz('Europe/Moscow');

    if (futureDate.day() > targetDay) {
      futureDate.add(1, 'week');
    }

    if (futureDate.day() == targetDay && futureDate.hour() >= targetHour) {
      futureDate.add(1, 'week');
    }

    futureDate = futureDate.day(targetDay).hour(targetHour).minute(0);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.unix() - moment().unix();

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
      clockFace: 'DailyCounter',
      countdown: true,
      language: 'Russian'
    });
  });
</script>

<div class="section bg-clouds-lighter" id="pricing">
  <div class="container">
    <h1 class="text-center">Чтобы записаться</h1>
  </div>
  <div class="content">
    <div class="numbercircle bg-pumpkin text-white text-strong" style="float: left;">1</div>
    <p class="lead" style="margin-left: 2em; padding-top: 0; margin-top: 0; padding-bottom: 1em;">
      Оставь вот такой комментарий:
    </p>

    <p style="margin-left: 4em; margin-bottom: 2em; margin-top: -10px;"><i>Записываюсь в клуб личностного роста<br/>Николая Воробьёва http://soedinennost.com/klr/</i></p>

    <div class="numbercircle bg-pumpkin text-white text-strong" style="float: left;">2</div>
    <p class="lead" style="margin-left: 2em; padding-top: 0; margin-top: 0; padding-bottom: 1em;">
      Убедись, что комментарий отобразился на&nbsp;твоей стене ВКонтакте
    </p>

    <div class="numbercircle bg-pumpkin text-white text-strong" style="float: left;">3</div>
    <p class="lead" style="margin-left: 2em; padding-top: 0; margin-top: 0; padding-bottom: 1em;">
      Мы с&nbsp;тобой свяжемся перед ближайшим занятием и&nbsp;пришлём ссылку для&nbsp;участия
    </p>
  </div>
  <div class="content">
    <div id="vk_comments"></div>
  </div>
</div>

<style type="text/css">
body {
  min-width: 700px;
}
.clock {
  margin: 2em 0;
  width: 620px;
  left: 50%;
  margin-left: -310px;
}
</style>

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
VK.Widgets.Comments("vk_comments", {width: 700, limit: 100, attach: "*"}, '{{ page.stream }}');
</script>
