# murr2k-blog

Personal site with sections for physics writing, AI articles, and LinkedIn links.

## Structure

```
_physics/     # Book chapters (Proper Space Kinematics)
_ai/          # AI and orchestration articles
_linkedin/    # External links to LinkedIn posts
_layouts/     # Page templates
assets/       # CSS and images
```

## Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

Site will be available at `http://localhost:4000`

## Deploying to Netlify

This repo is connected to Netlify. Push to `main` and it auto-deploys.

## Adding Content

### Physics Chapter

Create `_physics/03-new-chapter.md`:

```yaml
---
title: Chapter Title
chapter: 3
revision: 0.1
date: 2025-01-01
summary: Brief description for TOC
---

Your content here...
```

### AI Article

Create `_ai/article-slug.md`:

```yaml
---
title: Article Title
date: 2025-01-01
tags: [tag1, tag2]
---

Your content here...
```

### LinkedIn Link

Create `_linkedin/link-slug.md`:

```yaml
---
title: Article Title
date: 2025-01-01
url_external: https://linkedin.com/...
description: Brief description
---

Optional additional commentary...
```

## Markdown Monster Integration

Use MM's Jekyll publishing feature:
1. Set the local path to this repo
2. Write posts in MM
3. Publish to appropriate collection folder
4. Push to GitHub → Netlify auto-deploys
