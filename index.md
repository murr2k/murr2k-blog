---
layout: default
title: Home
---
<div class="landing">
  <header class="landing-header">
    <h1>Murray Kopit</h1>
    <p class="tagline">Embedded Systems • Physics • AI</p>
  </header>

  <div class="section-cards">
    
    <a href="{{ '/physics/' | relative_url }}" class="section-card physics">
      <div class="card-icon">📘</div>
      <h2>Proper Space Kinematics</h2>
      <p>A theoretical framework proposing gravity as spatial density gradients rather than spacetime curvature.</p>
      <span class="card-meta">{{ site.physics | size }} chapters</span>
    </a>

    <a href="{{ '/ai/' | relative_url }}" class="section-card ai">
      <div class="card-icon">🤖</div>
      <h2>AI & Orchestration</h2>
      <p>Experiments with Claude, AI-assisted development, and multi-agent orchestration patterns.</p>
      <span class="card-meta">{{ site.ai | size }} articles</span>
    </a>

    <a href="{{ '/linkedin/' | relative_url }}" class="section-card linkedin">
      <div class="card-icon">🔗</div>
      <h2>LinkedIn Articles</h2>
      <p>Published articles on embedded systems, BACnet protocols, and consulting insights.</p>
      <span class="card-meta">{{ site.linkedin | size }} links</span>
    </a>

  </div>
</div>
