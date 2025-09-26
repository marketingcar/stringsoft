# StringSoft.com - Veterinary Practice Management Software Website

A modern, optimized React-based website for StringSoft's veterinary practice management software, featuring comprehensive SEO, automated content management, and static site generation for optimal performance.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Radix UI** - Headless UI components for accessibility
- **Lucide React** - Modern icon library

### Typography
- **Signika** - Primary font for body text and general content from Google Fonts
- **Metrophobic** - Heading font for titles and headings from Google Fonts
- **Font Optimization** - Preloaded Google Fonts with fallbacks for optimal performance

### Content Management
- **Decap CMS** - Git-based headless CMS for content management
- **Gray Matter** - Front matter parser for markdown files
- **Markdown** - Content format for blog posts

### SEO & Performance
- **React Helmet** - Document head management
- **Static Site Generation** - Pre-generated HTML for optimal performance
- **Automated Sitemaps** - XML and TXT sitemaps
- **RSS Feed** - Automated RSS feed generation
- **Open Graph & Twitter Cards** - Social media optimization
- **Structured Data** - JSON-LD for search engines

### Build & Deployment
- **GitHub Actions** - Automated CI/CD pipeline
- **FTP Deployment** - Direct deployment to web server
- **301 Redirects** - Automated redirect generation for URL changes

## 📁 Directory Structure

```
stringsoft/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment workflow
├── public/
│   ├── admin/
│   │   ├── index.html             # Decap CMS admin interface
│   │   └── config.yml             # Decap CMS configuration
│   ├── favicon.ico
│   └── assets/                    # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── SEOHead.jsx           # Comprehensive SEO component
│   │   ├── Blog.jsx              # Blog listing component
│   │   ├── BlogPage.jsx          # Individual blog post component
│   │   └── ...                   # Other React components
│   ├── content/
│   │   └── blog/                 # Markdown blog posts
│   │       ├── *.md              # Individual blog post files
│   ├── data/
│   │   └── blogPosts.js          # Legacy blog post data (fallback)
│   ├── utils/
│   │   └── blogLoader.js         # Blog post loading utilities
│   └── App.jsx                   # Main React application
├── tools/
│   └── static-site-generator.js  # Static site generation system
├── dist/                         # Built files (generated)
│   ├── sitemap.xml              # Search engine sitemap
│   ├── sitemap.txt              # Plain text sitemap
│   ├── rss.xml                  # RSS feed
│   ├── robots.txt               # Search engine directives
│   └── .htaccess                # 301 redirects
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/marketingcar/stringsoft.git
cd stringsoft

# Install dependencies (use legacy-peer-deps for Decap CMS compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

### Content Management
Access the Decap CMS admin interface at `http://localhost:3000/admin` to:
- Create and edit blog posts
- Manage site content
- Preview changes before publishing

## 🚀 Build & Deployment

### Build Process
```bash
# Build for production
npm run build
```

The build process automatically:
1. **Pre-Build**: Generates static site assets and individual HTML files
   - Creates separate `index.html` for each route (37 total pages)
   - Generates sitemap.xml, sitemap.txt, rss.xml, robots.txt, .htaccess
   - Each HTML file has proper meta tags, structured data, and SEO optimization
2. **Build**: Compiles the React application with Vite
3. **Post-Build**: Optimizes all assets for production and ensures all files are copied to dist/

### Static HTML Architecture
Each route gets its own HTML file with optimized meta tags:
```
dist/
├── index.html                    # Home page
├── features/index.html           # Features page
├── features/complete/index.html  # Complete features page
├── pricing/index.html            # Pricing page
├── blog/index.html              # Blog listing
├── blog/[slug]/index.html       # Individual blog posts (23 files)
└── [other-routes]/index.html    # Other pages
```

This provides:
- **Better SEO**: Search engines can crawl individual pages
- **Faster Loading**: No client-side routing for initial page load
- **Social Sharing**: Each page has proper Open Graph tags
- **Progressive Enhancement**: Works without JavaScript

### Production Launch Checklist
Before launching to production, ensure:

1. **Domain Configuration**: All URLs in `tools/static-site-generator.js` point to `stringsoft.com`
2. **SSL Certificate**: Ensure HTTPS is properly configured
3. **DNS Records**: Point domain to your hosting server
4. **Server Configuration**:
   - Upload the `.htaccess` file for proper redirects
   - Ensure all static files (sitemap.xml, robots.txt, rss.xml) are accessible
   - Configure server to serve the React SPA properly
5. **Search Engine Setup**:
   - Submit `https://stringsoft.com/sitemap.xml` to Google Search Console
   - Submit `https://stringsoft.com/sitemap.xml` to Bing Webmaster Tools
   - Verify robots.txt is accessible at `https://stringsoft.com/robots.txt`
6. **Content Verification**:
   - Test all 36+ URLs for proper loading
   - Verify blog pagination works correctly
   - Test 404 page functionality
   - Confirm all redirects work properly

### Automated Deployment
GitHub Actions automatically deploys the site when changes are pushed to the main branch:

1. **Checkout** - Downloads the repository
2. **Setup Node.js** - Installs Node.js 18
3. **Install Dependencies** - Runs `npm ci --legacy-peer-deps`
4. **Build** - Executes `npm run build`
5. **Deploy** - Uploads built files to FTP server

#### Required Secrets
Configure these secrets in your GitHub repository settings:
- `FTP_HOST` - Your FTP server hostname
- `FTP_USERNAME` - Your FTP username
- `FTP_PASSWORD` - Your FTP password

## 📝 Content Management

### Blog Posts
Blog posts are stored as Markdown files in `src/content/blog/` with front matter:

```yaml
---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
excerpt: "Brief description of the post"
category: "Category Name"
date: "2025-08-29"
image: "https://example.com/image.jpg"
imageDescription: "Alt text for the image"
---

Your blog post content goes here...
```

### Adding New Content
1. **Via Decap CMS** (Recommended): Visit `/admin` and use the visual editor
2. **Manual**: Create new `.md` files in `src/content/blog/` following the format above

## 🖼️ Image Optimization

### Optimized Image Component
The site uses a custom `OptimizedImage` component that automatically serves WebP images with PNG fallbacks:

```jsx
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage
  src="/images/logo-header.png"
  alt="StringSoft - Veterinary Practice Management Software Logo"
  className="h-10 w-auto"
  loading="eager"
  width={775}
  height={178}
/>
```

### Image Assets
All images are stored in `public/images/` with descriptive names:
- `logo-header.png` & `logo-header.webp` - Main header logo
- `logo-footer-white.png` & `logo-footer-white.webp` - Footer logo
- `contact-cat-envelope.png` & `contact-cat-envelope.webp` - Contact page illustration
- `blog-reading-illustration.png` & `blog-reading-illustration.webp` - Blog page illustration
- And more contextually named images...

### Adding New Images
1. Add both PNG and WebP versions to `public/images/`
2. Use descriptive names (e.g., `feature-name-illustration.png`)
3. Update components to use `OptimizedImage` component
4. Include proper alt text and dimensions

## 🔍 SEO Features

### Automated SEO
- **Meta Tags**: Title, description, author, canonical URLs
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemaps**: XML and TXT formats for search engines
- **RSS Feed**: For content syndication
- **301 Redirects**: Handles URL changes automatically

### SEO Configuration
The `SEOHead` component automatically generates appropriate meta tags for each page. Site-wide configuration is in `tools/static-site-generator.js`:

```javascript
const SITE_CONFIG = {
  name: 'StringSoft',
  url: 'https://stringsoft.com',
  description: 'Revolutionary veterinary practice management software...',
  author: 'StringSoft',
  language: 'en',
  image: 'https://stringsoft.com/og-image.jpg',
};
```

## 🔧 Key Features

### Static Site Generation
- **Individual HTML files** for each route and blog post (37 total pages)
- Pre-generated HTML for optimal SEO and performance
- Automated sitemap.xml and RSS feed generation
- 301 redirects for URL migrations
- Comprehensive structured data markup

### Image Optimization
- **WebP format with PNG fallbacks** for 50-70% smaller file sizes
- Contextually named images (e.g., `logo-header.png`, `contact-cat-envelope.png`)
- Optimized `<picture>` elements with format selection
- Proper alt text and dimensions for accessibility

### Content Management System
- Git-based workflow with Decap CMS
- Markdown-based content with front matter
- Visual editing interface
- Preview functionality
- 23 blog posts with pagination (9 per page)

### Performance Optimization
- Vite-powered fast builds with code splitting
- Lazy loading for images and components
- WebP image optimization with fallbacks
- Static file generation for sub-second load times
- DNS prefetching and resource preconnection

### SEO & Analytics
- **Separate HTML pages** for better search indexing
- Complete Open Graph and Twitter Card implementation
- JSON-LD structured data for articles and business info
- Automated sitemap generation (XML and TXT)
- Comprehensive meta tags and canonical URLs

## 📄 License

This project is proprietary software owned by StringSoft.

## 📞 Support

For technical support or questions about this website:
- Website: https://stringsoft.com

---

Built with ❤️ for the veterinary community by StringSoft
