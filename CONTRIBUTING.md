# Contributing to AAIE Documentation

Thank you for your interest in contributing to the AAIE documentation! This guide will help you understand how to add new documentation using Markdown files that will automatically appear on the website.

## 🚀 How It Works

The AAIE documentation site automatically processes Markdown (`.md`) files and converts them to web pages. Here's how:

1. **Add a Markdown file** to the appropriate content directory
2. **Include frontmatter metadata** at the top of the file
3. **Commit and push** to the repository
4. **Automatic deployment** - your content appears on the website!

## 📁 Content Directory Structure

```
src/content/
├── docs/           # General documentation
├── meetings/       # Meeting notes and minutes
└── tech-refs/      # Technical references and APIs
```

## ✍️ Creating New Documentation

### 1. Choose the Right Directory

- **General Documentation**: `src/content/docs/`
- **Meeting Notes**: `src/content/meetings/`
- **Technical References**: `src/content/tech-refs/`

### 2. Create Your Markdown File

Create a new `.md` file with a descriptive name:

```bash
# For general documentation
touch src/content/docs/my-new-document.md

# For meeting notes
touch src/content/meetings/team-meeting-2024-01-20.md

# For technical reference
touch src/content/tech-refs/new-feature-guide.md
```

### 3. Add Frontmatter Metadata

Every Markdown file must start with frontmatter (metadata between `---` markers):

```markdown
---
title: "Your Document Title"
description: "Brief description of what this document covers"
category: "core"
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
date: 2024-01-20
lastUpdated: 2024-01-20
order: 5
featured: false
---

# Your Content Here

Your Markdown content goes here...
```

### 4. Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Document title | `"Getting Started Guide"` |
| `description` | ❌ | Brief description | `"Complete setup guide"` |
| `category` | ❌ | Content category | `"core"`, `"data-hub"`, `"model-lab"` |
| `tags` | ❌ | Array of tags | `["beginner", "setup"]` |
| `author` | ❌ | Author name | `"John Doe"` |
| `date` | ❌ | Publication date | `2024-01-20` |
| `lastUpdated` | ❌ | Last update date | `2024-01-25` |
| `order` | ❌ | Display order | `5` |
| `featured` | ❌ | Featured content | `true` or `false` |

### 5. Write Your Content

Use standard Markdown syntax:

```markdown
# Main Heading
## Subheading
### Section

**Bold text** and *italic text*

- List item 1
- List item 2
- List item 3

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)

![Alt text](image-url)

```code
Code block
```

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

## 📝 Content Types

### General Documentation (`docs/`)

For guides, tutorials, and general information:

```markdown
---
title: "User Guide"
description: "Complete user guide for the AAIE platform"
category: "core"
tags: ["guide", "user", "tutorial"]
author: "AAIE Team"
date: 2024-01-20
---

# User Guide

## Introduction

Welcome to the AAIE platform...

## Getting Started

### Step 1: Installation

Installation instructions here...

### Step 2: Configuration

Configuration details...
```

### Meeting Notes (`meetings/`)

For meeting minutes, sprint planning, and team discussions:

```markdown
---
title: "Sprint Planning - January 20, 2024"
date: 2024-01-20
type: "scrum"
attendees: ["John Doe", "Jane Smith"]
agenda: ["Sprint Review", "Planning"]
summary: "Planning for Sprint 25"
actionItems: ["Update docs", "Review feedback"]
nextMeeting: 2024-01-27
---

# Sprint Planning Meeting

## Attendees

- John Doe (Scrum Master)
- Jane Smith (Developer)

## Agenda

1. Sprint Review
2. Sprint Planning

## Discussion

Meeting discussion content...
```

### Technical References (`tech-refs/`)

For API documentation, technical specifications, and reference materials:

```markdown
---
title: "API Reference v2.0"
description: "Complete API documentation for AAIE v2.0"
category: "api"
tags: ["api", "reference", "v2.0"]
version: "2.0.0"
author: "AAIE Dev Team"
date: 2024-01-20
---

# API Reference v2.0

## Authentication

API authentication details...

## Endpoints

### GET /users

User endpoint documentation...
```

## 🔄 Automatic Processing

Once you add a Markdown file:

1. **Build Process**: Astro automatically processes your `.md` file
2. **Route Generation**: Creates a web page at `/docs/{filename}`
3. **Metadata Extraction**: Frontmatter data is used for navigation and search
4. **Content Rendering**: Markdown is converted to HTML with styling
5. **Automatic Deployment**: Netlify deploys the updated site

## 📱 What Users See

Your Markdown file becomes a fully-featured web page with:

- **Responsive design** that works on all devices
- **Table of contents** automatically generated from headings
- **Breadcrumb navigation** showing the page hierarchy
- **Related content** suggestions based on category and tags
- **Search functionality** (content is automatically indexed)
- **Edit on GitHub** links for easy contribution

## 🚀 Deployment Workflow

1. **Local Development**: Test your changes with `npm run dev`
2. **Commit Changes**: `git add . && git commit -m "Add new documentation"`
3. **Push to Repository**: `git push origin development`
4. **Automatic Build**: Netlify detects changes and rebuilds the site
5. **Live Website**: Your content appears at the new URL

## 🧪 Testing Your Changes

### Local Testing

```bash
# Start development server
npm run dev

# Visit your new page
# http://localhost:4321/docs/your-filename
```

### Build Testing

```bash
# Test the build process
npm run build

# Check for any build errors
```

## 📋 Best Practices

### File Naming

- Use descriptive, kebab-case names: `user-authentication-guide.md`
- Avoid spaces and special characters
- Keep names concise but clear

### Content Structure

- Start with a clear title and description
- Use consistent heading hierarchy (H1 → H2 → H3)
- Include a table of contents for long documents
- Break content into logical sections

### Metadata

- Always include a `title` and `category`
- Use relevant `tags` for better discoverability
- Set appropriate `order` values for important documents
- Mark `featured: true` for key content

### Markdown Usage

- Use proper heading levels
- Include alt text for images
- Use code blocks for technical content
- Link to related documents when possible

## 🐛 Troubleshooting

### Common Issues

1. **Page Not Found**: Check the file path and frontmatter
2. **Build Errors**: Verify Markdown syntax and frontmatter format
3. **Styling Issues**: Ensure proper heading hierarchy
4. **Deployment Failures**: Check Netlify build logs

### Getting Help

- Check the [development guide](DEVELOPMENT.md)
- Review existing documentation for examples
- Contact the development team
- Open an issue on GitHub

## 🎯 Example: Complete Document

Here's a complete example of a well-structured documentation file:

```markdown
---
title: "Database Setup Guide"
description: "Step-by-step guide for setting up the AAIE database"
category: "core"
tags: ["database", "setup", "configuration"]
author: "Database Team"
date: 2024-01-20
order: 3
featured: true
---

# Database Setup Guide

## Overview

This guide covers the complete setup process for the AAIE database system.

## Prerequisites

- PostgreSQL 14+
- Node.js 18+
- 4GB RAM minimum

## Installation Steps

### Step 1: Install PostgreSQL

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# macOS
brew install postgresql
```

### Step 2: Create Database

```sql
CREATE DATABASE aaie_production;
CREATE USER aaie_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE aaie_production TO aaie_user;
```

### Step 3: Run Migrations

```bash
npm run db:migrate
npm run db:seed
```

## Configuration

Database configuration options...

## Troubleshooting

Common issues and solutions...

## Next Steps

What to do after setup...

---

*Last updated: January 20, 2024*
```

## 🎉 You're Ready!

You now know everything needed to contribute documentation to the AAIE project. The system will automatically:

- ✅ Process your Markdown files
- ✅ Generate web pages
- ✅ Create navigation and search
- ✅ Deploy to the live website

Start contributing today and help build the best documentation for the AAIE project!
