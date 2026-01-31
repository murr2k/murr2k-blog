# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
bundle install

# Run local development server (http://localhost:4000)
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Architecture

This is a Jekyll static site deployed to Netlify. Content is organized into three collections:

- **`_physics/`** - Book chapters for "Proper Space Kinematics" (sorted by `chapter` front matter)
- **`_ai/`** - AI and orchestration articles
- **`_linkedin/`** - External links to LinkedIn posts

Each collection uses a dedicated layout (`chapter`, `post`, `link`) that extends `default.html`.

### Front Matter Requirements

**Physics chapters** require:
- `title`, `chapter` (numeric for ordering), `revision`, `date`, `summary`

**AI articles** require:
- `title`, `date`, optional `tags` array

**LinkedIn links** require:
- `title`, `date`, `url_external`, `description`

### Collection Defaults

Layouts are auto-assigned via `_config.yml` defaults - you don't need to specify `layout` in front matter.

## Deployment

Push to `main` triggers auto-deploy to Netlify. Build uses Ruby 3.2 and runs `jekyll build`.
