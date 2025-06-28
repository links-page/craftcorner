# MineSite - Minecraft Mods, Resource Packs & Collections Website

A modern, responsive website for hosting Minecraft mods, resource packs, and mod collections. Built for GitHub Pages with beautiful UI, theme switching, search functionality, and monetization features.

## 🌟 Features

### Core Functionality
- **Multiple Pages**: Dedicated pages for mods, resource packs, and collections
- **Advanced Search**: Search by name, description, tags, and categories
- **Filtering & Sorting**: Filter by version, category, type, and sort by popularity, date, name, or downloads
- **Realistic Download Counters**: Persistent download statistics with animations
- **Favorites System**: Save favorite items with localStorage persistence
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Theme System
- **Multiple Themes**: Light, Dark, and Blue themes
- **Theme Switcher**: Easy theme switching with visual previews
- **System Theme Detection**: Automatically detects user's system preference
- **Persistent Settings**: Theme choice saved in localStorage

### Monetization
- **Affiliate Link Integration**: Download buttons redirect through affiliate URLs
- **Multiple Download Options**: Support for multiple download links per item
- **Download Analytics**: Track download statistics for monetization insights

### User Experience
- **Modern UI**: Beautiful, clean interface with smooth animations
- **Search Suggestions**: Intelligent search with autocomplete suggestions
- **Notifications**: Toast notifications for user actions
- **Loading States**: Visual feedback during downloads and actions
- **Accessibility**: Keyboard navigation and screen reader support

## 📁 File Structure

```
minesite/
├── index.html              # Main homepage
├── mods.html              # Mods listing page
├── resourcepacks.html     # Resource packs listing page
├── collections.html       # Collections listing page
├── README.md             # This file
├── js/
│   ├── main.js           # Global functionality and utilities
│   ├── search.js         # Global search functionality
│   ├── themes.js         # Theme management system
│   ├── mods.js           # Mods page specific functionality
│   ├── resourcepacks.js  # Resource packs page functionality
│   └── collections.js    # Collections page functionality
└── styles/
    ├── main.css          # Base styles and layout
    ├── themes.css        # Theme variables and color schemes
    ├── mods.css          # Mods page specific styles
    ├── resourcepacks.css # Resource packs page styles
    └── collections.css   # Collections page styles
```

## 🚀 Getting Started

### Prerequisites
- A web server or GitHub Pages
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone or download this repository
2. Upload all files to your web server or GitHub Pages repository
3. Access the website through your domain or GitHub Pages URL

### GitHub Pages Deployment
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://yourusername.github.io/repositoryname`

## 📝 How to Add New Content

### Adding New Mods

1. **Edit `js/mods.js`**:
   ```javascript
   // Add to the modsData array
   {
       id: 9, // Unique ID
       title: 'New Mod Name',
       description: 'Description of the mod',
       version: '1.20.1',
       category: 'technology', // technology, magic, adventure, decoration, utility
       downloads: 5000,
       rating: 4.5,
       image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=NewMod',
       downloadUrl: '#',
       affiliateUrl: 'https://example.com/affiliate/newmod',
       tags: ['Tag1', 'Tag2', 'Tag3'],
       requirements: ['Forge', 'Java 17+'],
       isNew: true, // Show "NEW" badge
       isPremium: false // Show "PREMIUM" badge
   }
   ```

### Adding New Resource Packs

1. **Edit `js/resourcepacks.js`**:
   ```javascript
   // Add to the packsData array
   {
       id: 1, // Unique ID
       title: 'New Resource Pack',
       description: 'Description of the resource pack',
       version: '1.20.1',
       type: 'realistic', // realistic, cartoon, medieval, modern, fantasy
       downloads: 3000,
       rating: 4.7,
       image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=NewPack',
       downloadUrl: '#',
       affiliateUrl: 'https://example.com/affiliate/newpack',
       tags: ['Tag1', 'Tag2'],
       requirements: ['OptiFine'],
       isNew: false,
       isPremium: true
   }
   ```

### Adding New Collections

1. **Edit `js/collections.js`**:
   ```javascript
   // Add to the collectionsData array
   {
       id: 1, // Unique ID
       title: 'New Collection',
       description: 'Description of the collection',
       version: '1.20.1',
       style: 'tech', // tech, magic, adventure, building, survival
       downloads: 2000,
       rating: 4.6,
       image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=NewCollection',
       downloadUrl: '#',
       affiliateUrl: 'https://example.com/affiliate/newcollection',
       tags: ['Tag1', 'Tag2'],
       requirements: ['Forge', 'Java 17+'],
       modCount: 15,
       isNew: true,
       isPremium: false
   }
   ```

### Adding New Categories

1. **Edit the respective JavaScript file** (mods.js, resourcepacks.js, or collections.js)
2. **Add the category to the filter options** in the HTML file
3. **Update the `getCategoryName()` function** to include the new category

### Adding New Themes

1. **Edit `styles/themes.css`**:
   ```css
   .theme-newtheme {
       --primary-color: #your-color;
       --secondary-color: #your-color;
       --bg-color: #your-color;
       --card-bg: #your-color;
       --text-color: #your-color;
       --text-muted: #your-color;
       --border-color: #your-color;
       --bg-secondary: #your-color;
       --header-bg: #your-color;
       --footer-bg: #your-color;
   }
   ```

2. **Edit `js/themes.js`** to add the theme to the themes array
3. **Add theme button** to the HTML files

## 🎨 Customization

### Colors and Themes
- Edit `styles/themes.css` to modify color schemes
- Add new themes by creating new CSS classes
- Update theme variables for consistent styling

### Layout and Styling
- Modify `styles/main.css` for global layout changes
- Edit page-specific CSS files for individual page styling
- Use CSS custom properties for easy theme integration

### Functionality
- Extend JavaScript files to add new features
- Modify search functionality in `js/search.js`
- Update download handling in `js/main.js`

## 💰 Monetization Setup

### Affiliate Links
1. **Replace placeholder URLs** in the JavaScript data files:
   ```javascript
   affiliateUrl: 'https://your-affiliate-link.com/product'
   ```

2. **Update download handling** in `js/main.js`:
   ```javascript
   // Modify the handleDownload function to use your affiliate system
   function handleDownload(itemId, type, downloadUrl, affiliateUrl) {
       // Your affiliate link logic here
       window.open(affiliateUrl, '_blank');
   }
   ```

### Analytics Integration
- Add Google Analytics or other tracking scripts to `index.html`
- Track download clicks and user interactions
- Monitor theme usage and search patterns

## 🔧 Advanced Features

### Search Optimization
- Add more search suggestions in `js/search.js`
- Implement server-side search for large datasets
- Add search filters and advanced options

### Performance Optimization
- Optimize images and use WebP format
- Implement lazy loading for images
- Add service worker for offline functionality

### SEO Enhancement
- Add meta tags and Open Graph data
- Implement structured data markup
- Create sitemap.xml for better indexing

## 🐛 Troubleshooting

### Common Issues

1. **Theme not switching**: Check if `js/themes.js` is loaded
2. **Search not working**: Verify `js/search.js` is included
3. **Downloads not counting**: Check localStorage permissions
4. **Images not loading**: Verify image URLs are accessible

### Browser Compatibility
- Test in multiple browsers
- Check console for JavaScript errors
- Verify CSS compatibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the code comments for implementation details

## 🔄 Updates and Maintenance

### Regular Maintenance
- Update affiliate links regularly
- Monitor download statistics
- Check for broken links
- Update content and add new items

### Version Updates
- Keep track of Minecraft version compatibility
- Update mod requirements and dependencies
- Test with new browser versions

---
