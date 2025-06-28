# Deployment Guide for CraftCorner

This guide will help you deploy your CraftCorner website to various hosting platforms.

## 🚀 GitHub Pages Deployment (Recommended)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `craftcorner`)
4. Make it public (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your CraftCorner files into the upload area
3. Add a commit message like "Initial commit"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to your repository's "Settings" tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Site
- Your site will be available at: `https://yourusername.github.io/repositoryname`
- It may take a few minutes to deploy initially

## 🌐 Custom Domain Setup (Optional)

### Step 1: Purchase Domain
- Buy a domain from providers like Namecheap, GoDaddy, or Google Domains

### Step 2: Configure DNS
1. In your domain provider's DNS settings, add these records:
   ```
   Type: CNAME
   Name: @
   Value: yourusername.github.io
   ```

### Step 3: Update GitHub Pages
1. Go to repository Settings > Pages
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS"
4. Save the changes

### Step 4: Add CNAME File
1. Create a file named `CNAME` in your repository root
2. Add your domain name to the file (e.g., `craftcorner.com`)
3. Commit and push the changes

## 🔧 Netlify Deployment

### Step 1: Prepare Files
1. Ensure all files are in a Git repository
2. Make sure your repository is public

### Step 2: Deploy to Netlify
1. Go to [Netlify](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## ☁️ Vercel Deployment

### Step 1: Prepare Repository
1. Ensure your files are in a Git repository
2. Make sure the repository is public

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Other
   - Root Directory: `./`
5. Click "Deploy"

## 🖥️ Traditional Web Hosting

### Step 1: Prepare Files
1. Ensure all files are in the correct structure
2. Test locally to make sure everything works

### Step 2: Upload via FTP
1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your web hosting server
3. Upload all files to the `public_html` or `www` directory
4. Maintain the folder structure

### Step 3: Configure Server
1. Ensure your hosting supports static files
2. Set up proper MIME types if needed
3. Configure URL rewriting if desired

## 🔍 Post-Deployment Checklist

### ✅ Basic Functionality
- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Search functionality works
- [ ] Theme switching works
- [ ] Download buttons function
- [ ] Favorites system works

### ✅ Responsive Design
- [ ] Site works on desktop
- [ ] Site works on tablet
- [ ] Site works on mobile
- [ ] All interactive elements are touch-friendly

### ✅ Performance
- [ ] Pages load quickly
- [ ] Images are optimized
- [ ] No console errors
- [ ] All external resources load

### ✅ SEO & Analytics
- [ ] Add Google Analytics (optional)
- [ ] Test meta tags
- [ ] Verify social media previews
- [ ] Check mobile-friendliness

## 🛠️ Troubleshooting

### Common Issues

#### Files Not Loading
- Check file paths and case sensitivity
- Verify all files are uploaded
- Check server error logs

#### JavaScript Errors
- Open browser developer tools
- Check Console tab for errors
- Verify all .js files are loading

#### Styling Issues
- Check if CSS files are loading
- Verify theme variables are defined
- Test in different browsers

#### Search Not Working
- Verify `js/search.js` is included
- Check if localStorage is enabled
- Test search functionality

### Performance Optimization

#### Image Optimization
```bash
# Use tools like ImageOptim or TinyPNG
# Convert images to WebP format
# Implement lazy loading
```

#### Code Minification
```bash
# Minify CSS and JavaScript files
# Remove unnecessary whitespace
# Compress HTML files
```

#### Caching
```html
<!-- Add cache headers in .htaccess -->
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

## 📊 Monitoring & Maintenance

### Regular Checks
- Monitor site performance
- Check for broken links
- Update content regularly
- Monitor download statistics

### Security
- Keep dependencies updated
- Monitor for security issues
- Use HTTPS everywhere
- Regular backups

### Analytics
- Set up Google Analytics
- Monitor user behavior
- Track popular content
- Analyze search patterns

## 🆘 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review browser console for errors
3. Test in different browsers
4. Verify file permissions
5. Contact your hosting provider

---

**Happy deploying! 🎉**