---
layout: default
title: Proper Space Kinematics
permalink: /physics/
---
<div class="section-index">
  <header class="section-header">
    <h1>Proper Space Kinematics</h1>
    <p class="section-subtitle"><em>An Interpretive Framework for Spatial Mechanics</em></p>
    <p class="section-description">
      A theoretical framework proposing that gravity emerges from density gradients in 
      continuously densifying space, rather than from spacetime curvature. This treatise 
      presents an alternative interpretation of gravitational, quantum, and cosmological phenomena.
    </p>
    <p class="author">Murray Leon Kopit</p>
  </header>

  <div class="toc">
    <h2>Table of Contents</h2>
    <ol class="chapter-list" start="0">
      {% assign sorted_chapters = site.physics | sort: "chapter" %}
      {% for chapter in sorted_chapters %}
      <li value="{{ chapter.chapter }}">
        <a href="{{ chapter.url | relative_url }}">
          <span class="chapter-title">{{ chapter.title }}</span>
        </a>
        {% if chapter.summary %}
        <p class="chapter-summary">{{ chapter.summary }}</p>
        {% endif %}
      </li>
      {% endfor %}
    </ol>
  </div>

  <div class="section-meta">
    <p><strong>Version:</strong> 26 (December 2025)</p>
    <p><strong>Status:</strong> Preprint — not peer reviewed</p>
    <p><strong>License:</strong> CC BY-NC-ND</p>
  </div>
</div>
