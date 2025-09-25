import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Site configuration
const SITE_CONFIG = {
  name: 'StringSoft',
  url: 'https://stringsoft.com',
  description: 'Revolutionary veterinary practice management software designed for modern animal care professionals.',
  author: 'StringSoft',
  language: 'en',
  image: 'https://stringsoft.com/og-image.jpg',
};

// Route configurations
const ROUTES = [
  { path: '/', title: 'StringSoft - Revolutionary Veterinary Practice Management Software', description: 'Transform your veterinary practice with StringSoft\'s comprehensive practice management software. Streamline operations, improve efficiency, and deliver exceptional care.' },
  { path: '/features', title: 'Features - StringSoft Veterinary Practice Management', description: 'Discover StringSoft\'s powerful features including EMR, scheduling, digital imaging, lab interfaces, and more.' },
  { path: '/practice-types', title: 'Practice Types - StringSoft Solutions', description: 'StringSoft serves general practice, specialty, corporate, and university veterinary facilities with tailored solutions.' },
  { path: '/pricing', title: 'Pricing - StringSoft Veterinary Software', description: 'Transparent pricing for StringSoft veterinary practice management software. Contact us for a custom quote.' },
  { path: '/support', title: 'Support - StringSoft Customer Service', description: '24/7 support for StringSoft users. Get help with your veterinary practice management software.' },
  { path: '/blog', title: 'Blog - StringSoft Veterinary Insights', description: 'Expert insights, tips, and best practices for veterinary practice management and animal care.' },
  { path: '/request-demo', title: 'Request Demo - Try StringSoft Free', description: 'Schedule a free demo of StringSoft veterinary practice management software. See how we can transform your practice.' },
  { path: '/contact', title: 'Contact Us - StringSoft', description: 'Get in touch with StringSoft for sales, support, or general inquiries about our veterinary software.' },
  { path: '/privacy-policy', title: 'Privacy Policy - StringSoft', description: 'StringSoft\'s privacy policy and data protection practices.' },
  { path: '/terms-of-service', title: 'Terms of Service - StringSoft', description: 'Terms and conditions for using StringSoft veterinary practice management software.' },
  { path: '/cookie-policy', title: 'Cookie Policy - StringSoft', description: 'Information about how StringSoft uses cookies and tracking technologies.' },
  { path: '/faq', title: 'FAQ - StringSoft Help Center', description: 'Frequently asked questions about StringSoft veterinary practice management software.' },
];

// Load blog posts
function loadBlogPosts() {
  const blogDir = path.join(rootDir, 'src/content/blog');
  const posts = [];

  try {
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter, content: body } = matter(content);

      posts.push({
        slug: frontmatter.slug || path.basename(file, '.md'),
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        category: frontmatter.category,
        date: frontmatter.date,
        image: frontmatter.image,
        imageDescription: frontmatter.imageDescription,
        content: body,
        lastModified: fs.statSync(filePath).mtime.toISOString(),
      });
    }
  } catch (error) {
    console.warn('Could not load blog posts:', error.message);
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Generate HTML template
function generateHTML(path, title, description, content, canonical, structuredData = null) {
  const ogImage = SITE_CONFIG.image;
  const fullUrl = `${SITE_CONFIG.url}${path === '/' ? '' : path}`;

  return `<!DOCTYPE html>
<html lang="${SITE_CONFIG.language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:site_name" content="${SITE_CONFIG.name}">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${fullUrl}">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${description}">
  <meta property="twitter:image" content="${ogImage}">

  <!-- Additional Meta Tags -->
  <meta name="author" content="${SITE_CONFIG.author}">
  <meta name="generator" content="StringSoft Static Site Generator">
  <link rel="sitemap" type="application/xml" href="/sitemap.xml">
  <link rel="alternate" type="application/rss+xml" title="StringSoft RSS Feed" href="/rss.xml">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://www.stringsoft.com">

  ${structuredData ? `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>` : ''}

  <!-- CSS will be injected here by build process -->
  <link rel="stylesheet" href="/assets/index.css">
</head>
<body>
  <div id="root">${content}</div>
  <!-- JS will be injected here by build process -->
  <script type="module" src="/assets/index.js"></script>
</body>
</html>`;
}

// Generate sitemap.xml
function generateSitemap(routes, posts) {
  const now = new Date().toISOString();
  const urls = [];

  // Add main routes
  routes.forEach(route => {
    urls.push(`  <url>
    <loc>${SITE_CONFIG.url}${route.path === '/' ? '' : route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`);
  });

  // Add blog posts
  posts.forEach(post => {
    urls.push(`  <url>
    <loc>${SITE_CONFIG.url}/blog/${post.slug}</loc>
    <lastmod>${post.lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

// Generate sitemap.txt
function generateSitemapTxt(routes, posts) {
  const urls = [];

  routes.forEach(route => {
    urls.push(`${SITE_CONFIG.url}${route.path === '/' ? '' : route.path}`);
  });

  posts.forEach(post => {
    urls.push(`${SITE_CONFIG.url}/blog/${post.slug}`);
  });

  return urls.join('\n');
}

// Generate RSS feed
function generateRSSFeed(posts) {
  const now = new Date().toUTCString();
  const items = posts.slice(0, 20).map(post => {
    const pubDate = new Date(post.date).toUTCString();
    const description = post.excerpt || post.content.substring(0, 300) + '...';

    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_CONFIG.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/blog/${post.slug}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      ${post.image ? `<enclosure url="${post.image}" type="image/jpeg"/>` : ''}
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} Blog</title>
    <link>${SITE_CONFIG.url}/blog</link>
    <description>${SITE_CONFIG.description}</description>
    <language>${SITE_CONFIG.language}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_CONFIG.image}</url>
      <title>${SITE_CONFIG.name} Blog</title>
      <link>${SITE_CONFIG.url}/blog</link>
    </image>
${items}
  </channel>
</rss>`;
}

// Generate redirects for old URLs
function generateRedirects() {
  const redirects = [
    // Blog post redirects based on the provided URLs
    { from: '/the-benefits-of-applying-stable-workflows-and-processes-to-your-veterinary-practice/', to: '/blog/the-benefits-of-applying-stable-workflows-and-processes-to-your-veterinary-practice' },
    { from: '/the-top-challenges-of-managing-a-multi-hospital-veterinary-practice/', to: '/blog/the-top-challenges-of-managing-a-multi-hospital-veterinary-practice' },
    { from: '/unlocking-the-benefits-of-completely-custom-veterinary-practice-management-software/', to: '/blog/unlocking-the-benefits-of-completely-custom-veterinary-practice-management-software' },
    { from: '/5-ways-your-veterinary-practice-management-software-can-improve-efficiency/', to: '/blog/5-ways-your-veterinary-practice-management-software-can-improve-efficiency' },
    { from: '/4-ways-to-improve-work-relations-in-your-veterinary-practice/', to: '/blog/4-ways-to-improve-work-relations-in-your-veterinary-practice' },
    { from: '/5-tips-for-building-lasting-relationships-with-your-veterinary-clients/', to: '/blog/5-tips-for-building-lasting-relationships-with-your-veterinary-clients' },
    { from: '/7-benefits-of-a-hybrid-cloud-for-veterinarians/', to: '/blog/7-benefits-of-a-hybrid-cloud-for-veterinarians' },
    { from: '/digital-imaging-and-communications-in-medicine/', to: '/blog/digital-imaging-and-communications-in-medicine' },
    { from: '/benefits-of-veterinary-practice-management-software-referral-and-client-portals/', to: '/blog/benefits-of-veterinary-practice-management-software-referral-and-client-portals' },
    { from: '/8-ways-veterinary-practice-management-software-benefits-your-specialty-workflows/', to: '/blog/8-ways-veterinary-practice-management-software-benefits-your-specialty-workflows' },
    { from: '/is-your-veterinary-practices-data-stored-safely/', to: '/blog/is-your-veterinary-practices-data-stored-safely' },
    { from: '/the-top-challenges-of-opening-a-new-veterinary-practice/', to: '/blog/the-top-challenges-of-opening-a-new-veterinary-practice' },
    { from: '/top-5-ways-to-make-a-veterinary-practice-more-efficient/', to: '/blog/top-5-ways-to-make-a-veterinary-practice-more-efficient' },
    { from: '/top-5-simple-workflows-and-processes-to-apply-to-your-veterinary-practice/', to: '/blog/top-5-simple-workflows-and-processes-to-apply-to-your-veterinary-practice' },
    { from: '/coming-soon/', to: '/blog/coming-soon' },
    { from: '/the-rise-of-subscription-based-wellness-plans-a-win-win-for-veterinary-practices-and-pet-owners/', to: '/blog/the-rise-of-subscription-based-wellness-plans-a-win-win-for-veterinary-practices-and-pet-owners' },
    { from: '/why-telemedicine-is-changing-veterinary-care/', to: '/blog/why-telemedicine-is-changing-veterinary-care' },
    { from: '/digital-first-client-engagement-meeting-the-expectations-of-todays-pet-owners/', to: '/blog/digital-first-client-engagement-meeting-the-expectations-of-todays-pet-owners' },
    // Page redirects
    { from: '/products-pricing/', to: '/pricing' },
    { from: '/free-demo/', to: '/request-demo' },
    { from: '/news-events/', to: '/blog' },
    { from: '/privacy-policy-2/', to: '/privacy-policy' },
  ];

  // Generate .htaccess file
  let htaccess = `# StringSoft.com Redirects - Generated automatically\n`;
  htaccess += `RewriteEngine On\n\n`;

  redirects.forEach(redirect => {
    const fromPath = redirect.from.replace(/^\/|\/$/g, '');
    const toPath = redirect.to;
    htaccess += `RewriteRule ^${fromPath}/?$ ${toPath} [R=301,L]\n`;
  });

  return htaccess;
}

// Main generation function
async function generateStaticSite() {
  console.log('🚀 Starting static site generation...');

  const posts = loadBlogPosts();
  const distDir = path.join(rootDir, 'dist');

  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Generate sitemaps and RSS feed
  console.log('📄 Generating sitemaps and RSS feed...');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), generateSitemap(ROUTES, posts));
  fs.writeFileSync(path.join(distDir, 'sitemap.txt'), generateSitemapTxt(ROUTES, posts));
  fs.writeFileSync(path.join(distDir, 'rss.xml'), generateRSSFeed(posts));

  // Generate redirects
  console.log('🔀 Generating redirects...');
  fs.writeFileSync(path.join(distDir, '.htaccess'), generateRedirects());

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.url}/sitemap.xml
Sitemap: ${SITE_CONFIG.url}/rss.xml`;

  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);

  console.log(`✅ Generated ${ROUTES.length} routes and ${posts.length} blog posts`);
  console.log('📊 Files generated:');
  console.log('   - sitemap.xml');
  console.log('   - sitemap.txt');
  console.log('   - rss.xml');
  console.log('   - robots.txt');
  console.log('   - .htaccess (redirects)');

  return { routes: ROUTES, posts, redirects: generateRedirects() };
}

export { generateStaticSite, SITE_CONFIG, ROUTES };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticSite().catch(console.error);
}