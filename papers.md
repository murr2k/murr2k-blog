---
layout: default
title: Papers
---

<div class="section-header">
  <h1>Papers</h1>
  <p class="section-description">Theoretical physics research and alternative frameworks</p>
</div>

<ul class="papers-list">
  {% for paper in site.papers %}
  <a href="{{ paper.url | relative_url }}" class="paper-card">
    <h2>{{ paper.title }}</h2>
    {% if paper.subtitle %}
    <p class="subtitle">{{ paper.subtitle }}</p>
    {% endif %}
    <p class="description">A candidate substrate mechanism proposing that space densifies uniformly at rate c, with gravitational phenomena emerging from density gradients around matter.</p>
    <div class="meta">
      <span>{{ paper.author }}</span>
      <span>Version {{ paper.version }}</span>
      <span>{{ paper.status }}</span>
    </div>
  </a>
  {% endfor %}
</ul>
