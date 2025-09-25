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
1. Generates static site assets (sitemap.xml, sitemap.txt, rss.xml, robots.txt, .htaccess)
2. Builds the React application with Vite
3. Optimizes all assets for production

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
- Pre-generates HTML files for optimal performance
- Automated sitemap and RSS feed generation
- 301 redirects for URL migrations
- Comprehensive SEO optimization

### Content Management System
- Git-based workflow with Decap CMS
- Markdown-based content with front matter
- Visual editing interface
- Preview functionality

### Performance Optimization
- Vite-powered fast builds
- Lazy loading and code splitting
- Optimized assets and images
- Static file generation

### SEO & Analytics
- Complete Open Graph implementation
- Twitter Card optimization
- Structured data markup
- Automated sitemap generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by StringSoft.

## 📞 Support

For technical support or questions about this website:
- Email: support@stringsoft.com
- Website: https://stringsoft.com
- Phone: +1-555-STRING

---

Built with ❤️ for the veterinary community by StringSoft
