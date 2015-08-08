---
layout: landing
permalink: /almighty/
title: Чеклист всемогущества
header: 
  pretitle: |
    Для тех, кто подозревает, что способен в жизни на гораздо большее
  title: Чеклист всемогущества
  subtitle: |
    Скачай чеклист, который поможет тебе перестать ковыряться в песочнице и стать победителем в жизни
  background: "/images/random-grey-variations.png"
  image: "/images/almighty.png"
  buttontitle: "Скачать чеклист"
  text: |
    У каждого из нас есть слабые места, которые мешают двигаться вперёд.

    Данный чеклист позволит проверить себя, и выяснить, что отделяет тебя от той жизни, которой ты хочешь жить.

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
