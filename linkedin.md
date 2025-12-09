---
layout: default
title: LinkedIn Articles
permalink: /linkedin/
---
<div class="section-index">
  <header class="section-header">
    <h1>LinkedIn Articles</h1>
    <p class="section-description">
      A curated collection of my published articles on LinkedIn covering embedded systems, 
      protocol development, and industry insights.
    </p>
  </header>

  <div class="link-list">
    {% assign sorted_links = site.linkedin | sort: "date" | reverse %}
    {% for link in sorted_links %}
    <article class="link-preview">
      <h2>
        <a href="{{ link.url_external }}" target="_blank" rel="noopener">
          {{ link.title }}
          <span class="external-icon">↗</span>
        </a>
      </h2>
      <div class="link-meta">
        <time datetime="{{ link.date | date_to_xmlschema }}">{{ link.date | date: "%B %d, %Y" }}</time>
      </div>
      {% if link.description %}
      <p class="description">{{ link.description }}</p>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>
