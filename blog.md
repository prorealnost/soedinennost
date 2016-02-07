---
layout: default
title: Полезные материалы
permalink: /blog/
---

<div class="margin"></div>

<div id="main" role="main" class="container">
  <div class="posts">
    {% for post in site.posts %}
      <article class="post">

        <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

        <div class="entry">
          {% if post.type == 'cast' %}
            {% include audio-player.html project='soedinennost' slug=post.slug %}
          {% endif %}

          {{ post.excerpt }}
        </div>

        <p><a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Читать Дальше</a></p>
      </article>
    {% endfor %}
  </div>
</div>

<div class="margin"></div>

{% include audio-scripts.html %}