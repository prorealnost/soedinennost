---
layout: landing
permalink: /17-steps-to-forbes/
title: 17 шагов, чтобы привести свою жизнь в порядок
header: 
  title: 17 шагов, чтобы привести свою жизнь в порядок
  subtitle: |
    План конкретных действий для улучшения личных результатов за короткий срок
  background: "/images/random-grey-variations.png"
  image: "/images/almighty.png"
  buttontitle: "Скачать инструкцию"
  text: |
    За много лет мы выяснили определенные работающие правила, придерживаясь которых ты однозначно обречен на успех

    **Для кого**: для тех, кто подозревает, что способен в жизни на гораздо большее

    **Что ты получишь**:
 
    * мощно ускоришься  
    * научишься быстро выяснять, почему у тебя не получается  
    * добьешься больших результатов  
    * значительно повысишь свою эффективность

author: 
  title: "Автор инструкции"
  name: "Николай Воробьев"
  photo: "/images/nickvorobiov.jpg"
  text: "Ведущий тренер компании ПроРеальность\n\nМеждународный тренер и коуч с 12-летним опытом\n\nВедущий и тренер в 4 телевизионных и радио шоу об отношениях и личной эффективности\n\nАвтор 5 книг и 15 тренингов об отношениях, мотивации, уверенности, бизнесе, продажах и личной эффективности\n\nПровёл тренинги более чем в 20 городах России и Европы"
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
        <a class="btn btn-info btn-lg" href="http://prorealnost.com/shot/58">{{ page.header.buttontitle }}</a>
      </div>
    </div>
  </div>
</div>

{% include sections/author.html author=page.author bg="bg-clouds" %}
