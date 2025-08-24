# AAIE Documentation - Development Guide

This repository contains the AAIE (Artificial Assessment Intelligence for Educators) project documentation, built with Astro and deployed on Netlify.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── layouts/          # Page layouts
├── pages/            # Route pages
└── styles/           # Global styles
public/               # Static assets
```

## 🎨 Styling

This project uses Tailwind CSS for styling. Custom styles can be added in `src/styles/global.css`.

## 📚 Documentation Sections

- **Core AAIE**: Main project documentation
- **Data Hub**: Data management and processing
- **Model Lab**: AI model development
- **Design Engineering**: System architecture
- **Forking Workflow**: Collaboration guidelines
- **Deprecated**: Outdated documentation

## 🚀 Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch.

### Netlify Configuration
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📝 Adding New Documentation

1. Create new pages in `src/pages/`
2. Use the `Layout.astro` component
3. Add navigation links in the header
4. Update this README if needed

## 🔧 Configuration Files

- `astro.config.mjs`: Astro configuration
- `tailwind.config.mjs`: Tailwind CSS configuration  
- `netlify.toml`: Netlify deployment settings
- `package.json`: Dependencies and scripts
