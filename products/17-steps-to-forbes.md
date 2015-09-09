---
layout: landing
permalink: /17-steps-to-forbes/
title: 17 шагов, чтобы привести свою жизнь в порядок
header: 
  pretitle: |
    Для тех, кто подозревает, что способен в жизни на гораздо большее
  title: 17 шагов, чтобы привести свою жизнь в порядок
  subtitle: |
    План конкретных действий для улучшения личных результатов за короткий срок
  background: "/images/random-grey-variations.png"
  image: "/images/almighty.png"
  buttontitle: "Скачать инструкцию"
  text: |
    За много лет мы выяснили определенные работающие правила, придерживаясь которых ты однозначно обречен на успех

    **Для кого**: для успешных бизнесменов, для тех, кто собирается войти в список Forbes

    **Что ты получишь**:
 
    * мощно ускоришься  
    * научишься быстро выяснять, почему у тебя не получается  
    * добьешься больших результатов  
    * значительно повысишь свою эффективность

---

<div class="section bg-primary" style="background-image: url({{ page.header.background }});">
  <div class="container">
    <div class="row">
      <div class="col-xs-5">
        <img class="img-responsive" src="{{ page.header.image }}" />
      </div>
      <div class="col-xs-7">
        <p>{{ page.header.pretitle }}</p>
        <h1 class="text-sun-flower">{{ page.header.title }}</h1>
        <p class="lead">
          {{ page.header.subtitle }}
        </p>
        {{ page.header.text | markdownify }}
        <a class="btn btn-info btn-lg" href="#pricing">{{ page.header.buttontitle }}</a>
      </div>
    </div>
  </div>
</div>
