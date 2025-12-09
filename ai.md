---
layout: default
title: AI & Orchestration
permalink: /ai/
---
<div class="section-index">
  <header class="section-header">
    <h1>AI & Orchestration</h1>
    <p class="section-description">
      Explorations in AI-assisted development, Claude experiments, and multi-agent 
      orchestration patterns for building sophisticated applications.
    </p>
  </header>

  <div class="post-list">
    {% assign sorted_posts = site.ai | sort: "date" | reverse %}
    {% for post in sorted_posts %}
    <article class="post-preview">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.tags %}
        <span class="tags">
          {% for tag in post.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </span>
        {% endif %}
      </div>
      {% if post.excerpt %}
      <p class="excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>
