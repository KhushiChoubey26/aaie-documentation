# AAIE Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/68ab656398c62a1f585e6f8e/deploy-status)](https://app.netlify.com/sites/aaie-docs/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live Site**: [https://aaie-docs.netlify.app](https://aaie-docs.netlify.app)

This repository stores all official documentation for the **AAIE (Artificial Assessment Intelligence for Educators)** project. It includes architecture diagrams, meeting notes, technical references, and comprehensive guides to support seamless collaboration and long-term project maintenance.

##  Live Documentation Site

Visit our beautifully designed documentation site: **[https://aaie-docs.netlify.app](https://aaie-docs.netlify.app)**

The site features:
-  **Modern, responsive design** with smooth animations
-  **Easy navigation** through all documentation sections
-  **Mobile-friendly** interface
-  **Fast loading** with automatic deployment
-  **Automatic Markdown processing** - just add `.md` files!

## How It Works

This documentation system automatically converts **Markdown (`.md`) files** into beautiful web pages:

1. **Add a `.md` file** to the appropriate content directory
2. **Include frontmatter metadata** at the top of the file
3. **Commit and push** to GitHub
4. **Automatic deployment** - your content appears on the website instantly!

## 📁 Project Structure & Where to Put Documents

### **Complete Project Structure**

```
aaie-documentation/
├── src/
│   ├── content/                    # 📚 ALL YOUR DOCUMENTS GO HERE
│   │   ├── aaie/                   # Core AAIE documentation
│   │   │   ├── overview.md         # Main overview page
│   │   │   └── your-file.md        # ✅ ADD YOUR CORE DOCS HERE
│   │   ├── aaie-data-hub/          # Data management docs
│   │   │   ├── overview.md         # Data hub overview
│   │   │   └── your-file.md        # ✅ ADD YOUR DATA DOCS HERE
│   │   ├── aaie-model-lab/         # AI model development docs
│   │   │   ├── overview.md         # Model lab overview
│   │   │   └── your-file.md        # ✅ ADD YOUR ML DOCS HERE
│   │   ├── aaie-design-engineering/ # System design docs
│   │   │   ├── overview.md         # Design overview
│   │   │   └── your-file.md        # ✅ ADD YOUR DESIGN DOCS HERE
│   │   ├── deprecated/              # Outdated documentation
│   │   │   ├── archive-overview.md # Deprecated overview
│   │   │   └── your-file.md        # ✅ ADD YOUR DEPRECATED DOCS HERE
│   │   └── forking-worflow/        # Git workflow docs
│   │       ├── overview.md         # Workflow overview
│   │       └── your-file.md        # ✅ ADD YOUR WORKFLOW DOCS HERE
│   ├── layouts/                     # Page layouts (don't modify)
│   ├── pages/                       # Route pages (don't modify)
│   └── styles/                      # Global styles (don't modify)
├── public/                          # Static assets (don't modify)
├── netlify.toml                     # Netlify config (don't modify)
├── astro.config.mjs                 # Astro config (don't modify)
├── tailwind.config.mjs              # Tailwind config (don't modify)
├── package.json                     # Dependencies (don't modify)
└── README.md                        # This file
```

### **🎯 Key Point: Only Modify `src/content/` Folder**

**You only need to work with the `src/content/` folder!** All other files are configuration files that should not be modified.

## ✍️ How to Add New Documentation

### **Step 1: Choose the Right Folder**

Based on your content type, choose the appropriate folder:

| Content Type | Folder | Example Files |
|--------------|--------|---------------|
| **Core project docs** | `src/content/aaie/` | `architecture.md`, `overview.md` |
| **Data management** | `src/content/aaie-data-hub/` | `data-processing.md`, `datasets.md` |
| **AI/ML models** | `src/content/aaie-model-lab/` | `model-training.md`, `deployment.md` |
| **System design** | `src/content/aaie-design-engineering/` | `api-design.md`, `frontend.md` |
| **Git workflows** | `src/content/forking-worflow/` | `contribution.md`, `review-process.md` |
| **Deprecated content** | `src/content/deprecated/` | `old-features.md`, `migration.md` |

### **Step 2: Create Your Markdown File**

```bash
# Example: Adding a new data processing guide
touch src/content/aaie-data-hub/data-processing-guide.md

# Example: Adding a new model training guide
touch src/content/aaie-model-lab/model-training-guide.md

# Example: Adding a new API design doc
touch src/content/aaie-design-engineering/api-design.md
```

### **Step 3: Add Required Frontmatter**

Every file MUST start with frontmatter (metadata between `---` markers):

```markdown
---
title: "Your Document Title"
description: "Brief description of what this document covers"
category: "appropriate-category"
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
date: 2024-01-20
order: 1
featured: false
---

# Your Content Here

Your Markdown content goes here...
```

### **Step 4: Required Frontmatter Fields**

| Field | Required | Description | Example Values |
|-------|----------|-------------|----------------|
| `title` | Document title | `"Data Processing Guide"` |
| `description` | Brief description | `"Complete guide for processing datasets"` |
| `category`| Content category | `"core"`, `"data"`, `"models"`, `"design"`, `"workflow"`, `"deprecated"` |
| `tags` | Array of tags | `["beginner", "setup", "guide"]` |
| `author` | Author name | `"John Doe"` |
| `date` | Publication date | `2024-01-20` |
| `order` | Display order | `1`, `2`, `3` |
| `featured` | Featured content | `true` or `false` |

### **Step 5: Write Your Content**

Use standard Markdown syntax:

```markdown
# Main Heading (H1)
## Subheading (H2)
### Section (H3)

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

> Blockquote for important information
```

## 🚀 Development Setup

### **Prerequisites**
- Node.js 18+
- npm or yarn
- Git

### **Local Development**

```bash
# Clone the repository
git clone https://github.com/your-username/aaie-documentation.git
cd aaie-documentation

# Switch to development branch
git checkout development

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:4321
```

### **Testing Your Changes**

```bash
# Test locally
npm run dev

# Test build process
npm run build

# Preview production build
npm run preview
```

## 🔄 Complete Workflow: From File to Live Website

### **1. Create Your Document**

```bash
# Navigate to the right folder
cd src/content/aaie-data-hub/

# Create your file
touch my-new-guide.md
```

### **2. Add Content and Frontmatter**

```markdown
---
title: "My New Guide"
description: "Complete guide for new feature"
category: "data"
tags: ["guide", "new-feature"]
author: "Your Name"
date: 2024-01-20
---

# My New Guide

Your content here...
```

### **3. Test Locally**

```bash
# Start dev server
npm run dev

# Visit your page
# http://localhost:4321/aaie-data-hub/my-new-guide/
```

### **4. Deploy to Live Website**

```bash
# Commit your changes
git add src/content/aaie-data-hub/my-new-guide.md
git commit -m "Add new guide: My New Guide"
git push origin development
```

**That's it!** Your document automatically appears at:
`https://aaie-docs.netlify.app/aaie-data-hub/my-new-guide/`

## 🎯 Documentation Categories Explained

### **Core AAIE** (`/aaie/`)
- **Purpose**: Main project documentation and architecture
- **Content**: Project overview, core implementation, cross-team communication
- **Example files**: `overview.md`, `architecture.md`, `team-structure.md`

### **Data Hub** (`/aaie-data-hub/`)
- **Purpose**: Data management and processing documentation
- **Content**: Datasets, data workflows, processing guides, quality standards
- **Example files**: `data-processing.md`, `datasets.md`, `quality-standards.md`

### **Model Lab** (`/aaie-model-lab/`)
- **Purpose**: AI/ML model development documentation
- **Content**: Model training, evaluation, deployment, ML workflows
- **Example files**: `model-training.md`, `evaluation.md`, `deployment.md`

### **Design Engineering** (`/aaie-design-engineering/`)
- **Purpose**: System design and engineering documentation
- **Content**: API design, frontend development, UX guidelines, architecture
- **Example files**: `api-design.md`, `frontend.md`, `ux-guidelines.md`

### **Forking Workflow** (`/forking-worflow/`)
- **Purpose**: Git collaboration and contribution guidelines
- **Content**: Contribution process, code review, team workflows
- **Example files**: `contribution.md`, `review-process.md`, `workflow.md`

### **Deprecated** (`/deprecated/`)
- **Purpose**: Outdated and archived documentation
- **Content**: Old features, migration guides, historical references
- **Example files**: `old-features.md`, `migration.md`, `archive.md`

## 🎨 Styling and Design

The site automatically applies:
- **Tailwind CSS** for responsive design
- **Custom animations** and hover effects
- **Professional typography** and spacing
- **Mobile-first** responsive design
- **Smooth transitions** and interactions

**No styling needed!** Just write your content in Markdown and the system handles the rest.

## 📱 What Users See

Your Markdown file automatically becomes a beautiful web page with:

-  **Responsive design** that works on all devices
-  **Automatic navigation** and breadcrumbs
-  **Professional styling** with Tailwind CSS
-  **Fast loading** with Netlify CDN
-  **SEO optimization** for search engines
-  **Mobile-friendly** interface

##  Troubleshooting

### **Common Issues**

1. **Page Not Found (404)**
   - Check file is in correct `src/content/` folder
   - Verify frontmatter syntax (no typos in `---`)
   - Ensure file has `.md` extension

2. **Build Errors**
   - Check Markdown syntax
   - Verify frontmatter format
   - Check for missing required fields

3. **Styling Issues**
   - Ensure proper heading hierarchy (H1 → H2 → H3)
   - Use standard Markdown syntax

### **Getting Help**

- Check existing files in `src/content/` for examples
- Review the live site: [https://aaie-docs.netlify.app](https://aaie-docs.netlify.app)
- Contact the development team
- Open an issue on GitHub

## 🏗️ Project Architecture

### **Built With**
- **[Astro](https://astro.build)** - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Netlify](https://netlify.com)** - Hosting and deployment
- **Markdown** - Simple content authoring

### **Key Features**
- **Content Collections** - Organized content management
- **Dynamic Routing** - Automatic page generation
- **Static Site Generation** - Fast, SEO-friendly pages
- **Automatic Deployment** - CI/CD with Netlify
- **Responsive Design** - Mobile-first approach

## 🤝 Contributing

### **How to Contribute**

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-documentation`
3. **Add your documentation** to the appropriate `src/content/` folder
4. **Test locally**: `npm run dev`
5. **Commit and push**: `git push origin feature/new-documentation`
6. **Create a pull request**

### **Contribution Guidelines**

- Use clear, descriptive file names
- Include comprehensive frontmatter
- Follow Markdown best practices
- Test your changes locally
- Provide clear commit messages

##  Project Status

-  **Core AAIE** - Complete
-  **Data Hub** - Complete  
-  **Model Lab** - Complete
-  **Design Engineering** - Complete
-  **Forking Workflow** - Complete
-  **Deprecated** - Complete
-  **Homepage** - Complete with modern design
-  **Automatic deployment** - Working
-  **Responsive design** - Complete

## Live URLs

- **Homepage**: [https://aaie-docs.netlify.app](https://aaie-docs.netlify.app)
- **Core AAIE**: [https://aaie-docs.netlify.app/aaie/overview/](https://aaie-docs.netlify.app/aaie/overview/)
- **Data Hub**: [https://aaie-docs.netlify.app/aaie-data-hub/overview/](https://aaie-docs.netlify.app/aaie-data-hub/overview/)
- **Model Lab**: [https://aaie-docs.netlify.app/aaie-model-lab/overview/](https://aaie-docs.netlify.app/aaie-model-lab/overview/)
- **Design Engineering**: [https://aaie-docs.netlify.app/aaie-design-engineering/overview/](https://aaie-docs.netlify.app/aaie-design-engineering/overview/)
- **Forking Workflow**: [https://aaie-docs.netlify.app/forking-worflow/overview/](https://aaie-docs.netlify.app/forking-worflow/overview/)
- **Deprecated**: [https://aaie-docs.netlify.app/deprecated/archive-overview/](https://aaie-docs.netlify.app/deprecated/archive-overview/)

##  Quick Start Summary

**To add new documentation:**

1. **Navigate to the right folder** in `src/content/`
2. **Create a new `.md` file** with descriptive name
3. **Add frontmatter** with title, description, category, tags
4. **Write your content** in Markdown
5. **Commit and push** - it's automatically deployed!

**Example:**
```bash
# Add a new data processing guide
echo '---
title: "Data Processing Guide"
description: "Complete guide for processing AAIE datasets"
category: "data"
tags: ["data-processing", "guide"]
author: "Your Name"
date: 2024-01-20
---

# Data Processing Guide

Your content here...
' > src/content/aaie-data-hub/data-processing-guide.md

# Commit and deploy
git add .
git commit -m "Add data processing guide"
git push origin development
```

**That's it!** Your documentation will automatically appear on the live website at:
`https://aaie-docs.netlify.app/aaie-data-hub/data-processing-guide/`

## 📞 Support & Contact

- **Live Documentation**: [https://aaie-docs.netlify.app](https://aaie-docs.netlify.app)
- **GitHub Repository**: [https://github.com/your-username/aaie-documentation](https://github.com/your-username/aaie-documentation)
- **Netlify Dashboard**: [https://app.netlify.com/sites/aaie-docs](https://app.netlify.com/sites/aaie-docs)

