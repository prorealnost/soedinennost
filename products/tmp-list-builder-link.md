---
layout: landing
permalink: /tmp-list-builder-link/
title: Система повышения личной эффективности для достижения амбициозных целей
header: 
  title: Система повышения личной эффективности для достижения амбициозных целей
  subtitle: |
    Комплект инструкций, техник и инструментов по управлению собой и своими результатами
  background: "/images/bg-goal.jpg"
  buttontitle: "Получить"

possibilities: |
  - Инструкция: Как достигать амбициозных целей
  - Инструкция: Технология лёгкого достижения целей
  - Как найти призвание и дело своей жизни
  - Натуральная мотивация
  - Страх
  - Как перестать уставать и терять силы
  - Как поверить в себя
  - Где взять силы для успеха
  - Как лентяю достигать целей
  - Как перестать сдаваться
  - Адекватная самооценка
  - Харизма
  - Целостность
  - Как отвлекаться от негативных мыслей и переживаний


author: 
  title: "Твой тренер"
  name: "Николай Воробьев"
  photo: "/images/nickvorobiov.jpg"
  text: "Ведущий тренер компании ПроРеальность\n\nМеждународный тренер и коуч с 12-летним опытом\n\nВедущий и тренер в 4 телевизионных и радио шоу об отношениях и личной эффективности\n\nАвтор 5 книг и 15 тренингов об отношениях, мотивации, уверенности, бизнесе, продажах и личной эффективности\n\nПровёл тренинги более чем в 20 городах России и Европы"

package: |
  - Электронная книга
  - Видеокурс «Тотальное достижение целей»
  - Персональная консультация Николая Воробьёва

format: |
  - Тренинг проходит онлайн
  - Длительность — 49 дней
  - Занятия с куратором 2 раза в неделю

---

{% include sections/header.html header=page.header bg="bg-primary" %}
{% include sections/author.html author=page.author bg="bg-clouds" %}

<div class="section">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <h1>Что ты получишь:</h1>
      </div>
      <div class="col-sm-6 col-md-8">
        {{ page.possibilities | markdownify }}
      </div>
    </div>
  </div>
</div>

<div class="section" id="pricing">
  <div class="container">
    <h1 class="text-center">Записывайся</h1>
    <div class="row">
      <div class="col-sm-6 col-md-4 col-md-offset-2">
        <h2>Цена:</h2>

        &euro;16 или 990&nbsp;рублей


        <h2>Ты получишь:</h2>

        {{ page.package | markdownify }}
      </div>
      <div class="col-sm-6 col-md-4">
        <h2>Нажми на кнопку:</h2>

        <a class="btn btn-lg btn-primary" style="padding: 10px 20px;" href="http://prorealnost.com/shot/55">
          <span style="font-size: 120%;"><b>Записаться на тренинг</b></span>
          <br/>
          и совершить прорыв в жизни
        </a>
      </div>
    </div>
  </div>
</div>

