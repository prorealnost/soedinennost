---
layout: landing
title: Клуб личностного роста Николая Воробьёва
permalink: /klr/
target: http://prorealnost.prorealnost.com/shot/89
chat: false
header: 
  title: "Клуб личностного роста<br/>Николая Воробьёва"
  subtitle: "создай новые возможности в&nbsp;своей жизни<br/>и&nbsp;наполни её&nbsp;крутыми результатами"
  # Длительная поддержка в&nbsp;достижении целей и&nbsp;развитии личных качеств
  background: "/images/kp-top-bg-min.jpg"
  buttontitle: "Записаться"
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
    <div class="row">
      <h1 style="margin-top: 0; font-size: 48px;">{{ page.header.title }}</h1>
      <p class="lead">
        {{ page.header.subtitle }}
      </p>
    </div>
  </div>
</div>
<div class="section bg-clouds-lighter">
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="flex-video widescreen">
          <iframe width="853" height="480" src="//www.youtube.com/embed/{{ page.header.video }}?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-md-5">
        <div class="well">
          <form action="{{ page.target }}" method="POST">
            <div class="form-group">
              <input type="text" name="name" class="form-control" placeholder="Имя" required="required"/>
            </div>
            <div class="form-group">
              <input type="text" name="phone" rules="phone" class="form-control" placeholder="Телефон" required="required"/>
            </div>
            <div class="form-group">
              <input type="email" name="email" class="form-control" placeholder="Емейл" required="required"/>
            </div>
            <button type="submit" class="btn btn-primary btn-danger btn-block">Записаться <i class="fa fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </div>
    <h1 class="text-center">Ближайший вторник в&nbsp;20:00&nbsp;мск</h1>
    <div class="clock" style="margin: 2em 0; width: 620px; left: 50%; margin-left: -310px;"></div>
  </div>
</div>

<div class="section">
  <div class="container">
    <h1 class="text-center">Пора вступать в клуб личностного роста</h1>
    <p class="lead text-muted text-center">только если ты готов менять свою жизнь к лучшему</p>
    <div class="row">
      {% for item in page.contents.items %}
        <div class="col-md-4" style="height: 100px; margin-top: 50px">
          <div class="numbercircle-md bg-nephritis text-white text-strong" style="float: left;">{{ forloop.index }}</div>
          <p style="margin-left: 4em; margin-top: 0; padding-bottom: 1em;">{{ item }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="section bg-clouds-lighter">
  <div class="container">
    <h1 align="center">
      Записаться на ближайшее занятие клуба
    </h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well">
          <form action="{{ page.target }}" method="POST">
            <div class="form-group">
              <input type="text" name="name" class="form-control input-lg" placeholder="Имя" required="required"/>
            </div>
            <div class="form-group">
              <input type="text" name="phone" rules="phone" class="form-control input-lg" placeholder="Телефон" required="required"/>
            </div>
            <div class="form-group">
              <input type="email" name="email" class="form-control input-lg" placeholder="Емейл" required="required"/>
            </div>
            <button type="submit" class="btn btn-danger btn-lg btn-block">Записаться <i class="fa fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


<link rel="stylesheet" href="/vendor/flipclock/flipclock.css"/>

<script src="/vendor/flipclock/flipclock.js"></script>  
<script type="text/javascript" src="/vendor/moment/moment-with-locales.min.js"></script>
<script type="text/javascript" src="/vendor/moment/moment-timezone-with-data-2010-2020.min.js"></script>

<script type="text/javascript">
  var clock;

  const targetDay = 2; // вторник
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