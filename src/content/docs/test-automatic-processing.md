---
title: "Test Automatic Processing"
description: "This is a test document to verify that new Markdown files are automatically processed and appear on the website"
category: "core"
tags: ["test", "automation", "markdown"]
author: "Test User"
date: 2024-01-20
order: 10
featured: false
---

# Test Automatic Processing

This is a test document to verify that the automatic Markdown processing system is working correctly!

## What Should Happen

When you add this file to the repository:

1. ✅ **Automatic Processing**: Astro should detect this new `.md` file
2. ✅ **Route Generation**: A new page should be created at `/docs/test-automatic-processing`
3. ✅ **Metadata Extraction**: Frontmatter data should be used for navigation
4. ✅ **Content Rendering**: Markdown should be converted to styled HTML
5. ✅ **Live Website**: The page should appear on your documentation site

## Test Features

### Code Blocks
```javascript
// This should be properly formatted
function testFunction() {
  console.log("Code blocks working!");
  return true;
}
```

### Lists
- **Bold list item**
- *Italic list item*
- Regular list item

### Links
- [Home Page](/)
- [Core AAIE](/aaie/)
- [Data Hub](/aaie-data-hub/)

### Tables
| Feature | Status | Notes |
|---------|--------|-------|
| Markdown Processing | ✅ | Should work automatically |
| Frontmatter | ✅ | Metadata extraction |
| Styling | ✅ | Tailwind CSS classes |
| Navigation | ✅ | Breadcrumbs and TOC |

## How to Test

1. **Check the URL**: Visit `/docs/test-automatic-processing` in your browser
2. **Verify Styling**: Content should be properly styled with Tailwind
3. **Check Navigation**: Breadcrumbs should show: Home → Core → Test Automatic Processing
4. **Table of Contents**: Should be generated from the headings above
5. **Metadata Display**: Author, date, and tags should be visible

## Expected Results

If everything is working correctly, you should see:

- ✅ A properly formatted web page
- ✅ Responsive design that works on all devices
- ✅ Table of contents in the sidebar
- ✅ Related content suggestions
- ✅ Edit on GitHub links
- ✅ Proper metadata display

## Troubleshooting

If this page doesn't appear:

1. **Check the build**: Run `npm run build` to see any errors
2. **Verify file path**: Ensure the file is in `src/content/docs/`
3. **Check frontmatter**: Make sure the YAML frontmatter is correct
4. **Restart dev server**: Sometimes the dev server needs a restart

---

*This is a test document created on January 20, 2024*
