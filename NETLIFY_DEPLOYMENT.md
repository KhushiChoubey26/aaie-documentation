# Netlify Deployment Guide for AAIE Documentation

This guide will help you deploy the AAIE documentation site to Netlify using the Astro framework.

## 🚀 Quick Deployment

### Option 1: Deploy via Netlify UI (Recommended for first-time setup)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Setup Astro documentation site"
   git push origin development
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose GitHub and select your `aaie-documentation` repository
   - Select the `development` branch (or `main` if you prefer)

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## ⚙️ Configuration Files

### netlify.toml
The `netlify.toml` file is already configured with:
- Build settings
- Redirects for SPA routing
- Security headers
- Function directory configuration

### astro.config.mjs
Configured for:
- Netlify adapter
- Server-side rendering (SSR)
- Tailwind CSS integration
- Custom site URL

## 🔄 Continuous Deployment

Once connected to Netlify:
- **Automatic deploys**: Every push to your selected branch triggers a new deployment
- **Preview deploys**: Pull requests get preview URLs automatically
- **Branch deploys**: Each branch can have its own deployment

## 🌐 Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `docs.aaie.org`)

2. **DNS Configuration**
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify's DNS service

## 📱 Environment Variables

If you need environment variables:
1. Go to Site settings > Environment variables
2. Add any required variables
3. They'll be available during build and runtime

## 🚨 Troubleshooting

### Build Failures
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check build logs in Netlify dashboard

### 404 Errors
- Ensure `netlify.toml` has proper redirects
- Check that `astro.config.mjs` has correct base path

### Styling Issues
- Verify Tailwind CSS is building correctly
- Check that `src/styles/global.css` is imported

## 📊 Performance Optimization

Netlify automatically provides:
- Global CDN
- Asset optimization
- Image optimization
- Automatic HTTPS

## 🔒 Security

The configuration includes:
- X-Frame-Options: DENY
- X-XSS-Protection
- X-Content-Type-Options: nosniff

## 📈 Analytics (Optional)

Add analytics by:
1. Going to Site settings > Analytics
2. Connecting Google Analytics or other services
3. Or adding tracking code to your layout

## 🎯 Next Steps

After successful deployment:
1. Test all navigation links
2. Verify responsive design on mobile
3. Set up monitoring and alerts
4. Configure backup and recovery procedures

## 📞 Support

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Astro Docs**: [docs.astro.build](https://docs.astro.build)
- **GitHub Issues**: Use your repository's issue tracker
