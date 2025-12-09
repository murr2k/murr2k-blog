---
layout: default
title: Proper Space Kinematics
permalink: /physics/
---
<div class="section-index">
  <header class="section-header">
    <h1>Proper Space Kinematics</h1>
    <p class="section-description">
      A theoretical framework exploring gravity not as spacetime curvature, but as gradients 
      in spatial density. This work-in-progress presents an alternative interpretation of 
      gravitational phenomena.
    </p>
  </header>

  <div class="toc">
    <h2>Table of Contents</h2>
    <ol class="chapter-list">
      {% assign sorted_chapters = site.physics | sort: "chapter" %}
      {% for chapter in sorted_chapters %}
      <li>
        <a href="{{ chapter.url | relative_url }}">
          <span class="chapter-title">{{ chapter.title }}</span>
          {% if chapter.revision %}
          <span class="chapter-revision">Rev {{ chapter.revision }}</span>
          {% endif %}
        </a>
        {% if chapter.summary %}
        <p class="chapter-summary">{{ chapter.summary }}</p>
        {% endif %}
      </li>
      {% endfor %}
    </ol>
  </div>

  <div class="section-meta">
    <p><strong>Status:</strong> Work in progress</p>
    <p><strong>Last updated:</strong> {{ site.time | date: "%B %Y" }}</p>
  </div>
</div>
