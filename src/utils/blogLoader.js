// Blog loader that combines legacy markdown files with Ghost CMS posts
import { fetchGhostPosts, fetchGhostPostBySlug } from './ghostClient';

// Import all legacy markdown files as modules
import comingSoon from '/src/content/blog/coming-soon.md?raw';
import addressingCustomerService from '/src/content/blog/addressing-customer-service-related-pain-points.md?raw';
import benefitsReferralPortals from '/src/content/blog/benefits-of-veterinary-practice-management-software-referral-and-client-portals.md?raw';
import stableWorkflows from '/src/content/blog/the-benefits-of-applying-stable-workflows-and-processes-to-your-veterinary-practice.md?raw';
import multiHospitalChallenges from '/src/content/blog/the-top-challenges-of-managing-a-multi-hospital-veterinary-practice.md?raw';
import hybridCloud from '/src/content/blog/7-benefits-of-a-hybrid-cloud-for-veterinarians.md?raw';
import dataSafety from '/src/content/blog/is-your-veterinary-practices-data-stored-safely.md?raw';
import simpleWorkflows from '/src/content/blog/top-5-simple-workflows-and-processes-to-apply-to-your-veterinary-practice.md?raw';
import workRelations from '/src/content/blog/4-ways-to-improve-work-relations-in-your-veterinary-practice.md?raw';
import wellnessPlans from '/src/content/blog/the-rise-of-subscription-based-wellness-plans-a-win-win-for-veterinary-practices-and-pet-owners.md?raw';
import digitalEngagement from '/src/content/blog/digital-first-client-engagement-meeting-the-expectations-of-todays-pet-owners.md?raw';
import improvingClientComm from '/src/content/blog/improving-client-communication.md?raw';
import buildingRelationships from '/src/content/blog/5-tips-for-building-lasting-relationships-with-your-veterinary-clients.md?raw';
import telemedicine from '/src/content/blog/why-telemedicine-is-changing-veterinary-care.md?raw';
import aiInMedicine from '/src/content/blog/ai-in-veterinary-medicine.md?raw';
import dicomImaging from '/src/content/blog/digital-imaging-and-communications-in-medicine.md?raw';
import openingChallenges from '/src/content/blog/the-top-challenges-of-opening-a-new-veterinary-practice.md?raw';
import customSoftware from '/src/content/blog/unlocking-the-benefits-of-completely-custom-veterinary-practice-management-software.md?raw';
import communicationSoftware from '/src/content/blog/3-ways-veterinary-practice-management-software-improves-communication.md?raw';
import specialtyWorkflows from '/src/content/blog/8-ways-veterinary-practice-management-software-benefits-your-specialty-workflows.md?raw';
import improvingEfficiency from '/src/content/blog/5-ways-your-veterinary-practice-management-software-can-improve-efficiency.md?raw';
import makeMoreEfficient from '/src/content/blog/top-5-ways-to-make-a-veterinary-practice-more-efficient.md?raw';
import streamliningWorkflow from '/src/content/blog/streamlining-your-clinic-workflow.md?raw';

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n(.*)/s;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: content };
  }

  const frontmatterText = match[1];
  const bodyContent = match[2];

  // Parse YAML-like frontmatter
  const frontmatter = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      frontmatter[key] = value;
    }
  });

  return { frontmatter, content: bodyContent };
}

// Create legacy blog posts array from imported markdown files
const markdownFiles = [
  { content: comingSoon, filename: 'coming-soon' },
  { content: addressingCustomerService, filename: 'addressing-customer-service-related-pain-points' },
  { content: benefitsReferralPortals, filename: 'benefits-of-veterinary-practice-management-software-referral-and-client-portals' },
  { content: stableWorkflows, filename: 'the-benefits-of-applying-stable-workflows-and-processes-to-your-veterinary-practice' },
  { content: multiHospitalChallenges, filename: 'the-top-challenges-of-managing-a-multi-hospital-veterinary-practice' },
  { content: hybridCloud, filename: '7-benefits-of-a-hybrid-cloud-for-veterinarians' },
  { content: dataSafety, filename: 'is-your-veterinary-practices-data-stored-safely' },
  { content: simpleWorkflows, filename: 'top-5-simple-workflows-and-processes-to-apply-to-your-veterinary-practice' },
  { content: workRelations, filename: '4-ways-to-improve-work-relations-in-your-veterinary-practice' },
  { content: wellnessPlans, filename: 'the-rise-of-subscription-based-wellness-plans-a-win-win-for-veterinary-practices-and-pet-owners' },
  { content: digitalEngagement, filename: 'digital-first-client-engagement-meeting-the-expectations-of-todays-pet-owners' },
  { content: improvingClientComm, filename: 'improving-client-communication' },
  { content: buildingRelationships, filename: '5-tips-for-building-lasting-relationships-with-your-veterinary-clients' },
  { content: telemedicine, filename: 'why-telemedicine-is-changing-veterinary-care' },
  { content: aiInMedicine, filename: 'ai-in-veterinary-medicine' },
  { content: dicomImaging, filename: 'digital-imaging-and-communications-in-medicine' },
  { content: openingChallenges, filename: 'the-top-challenges-of-opening-a-new-veterinary-practice' },
  { content: customSoftware, filename: 'unlocking-the-benefits-of-completely-custom-veterinary-practice-management-software' },
  { content: communicationSoftware, filename: '3-ways-veterinary-practice-management-software-improves-communication' },
  { content: specialtyWorkflows, filename: '8-ways-veterinary-practice-management-software-benefits-your-specialty-workflows' },
  { content: improvingEfficiency, filename: '5-ways-your-veterinary-practice-management-software-can-improve-efficiency' },
  { content: makeMoreEfficient, filename: 'top-5-ways-to-make-a-veterinary-practice-more-efficient' },
  { content: streamliningWorkflow, filename: 'streamlining-your-clinic-workflow' }
];

// Process legacy blog posts
const legacyBlogPosts = markdownFiles.map((file) => {
  const { frontmatter, content: body } = parseFrontmatter(file.content);

  return {
    slug: frontmatter.slug || file.filename,
    title: frontmatter.title || 'Untitled',
    excerpt: frontmatter.excerpt || '',
    category: frontmatter.category || 'Technology',
    date: frontmatter.date || '',
    image: frontmatter.image || '/images/blog-reading-illustration.png',
    imageDescription: frontmatter.imageDescription || frontmatter.title || '',
    content: body.trim(),
    filename: file.filename,
    isLegacyPost: true // Flag to identify legacy posts
  };
});

// Cache for Ghost posts to avoid repeated API calls
let ghostPostsCache = null;
let ghostPostsCacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Get all blog posts (legacy + Ghost)
 * @returns {Promise<Array>} Combined array of blog posts sorted by date
 */
export async function getBlogPosts() {
  // Fetch Ghost posts with caching
  let ghostPosts = [];
  const now = Date.now();

  if (ghostPostsCache && (now - ghostPostsCacheTime) < CACHE_DURATION) {
    ghostPosts = ghostPostsCache;
  } else {
    ghostPosts = await fetchGhostPosts();
    ghostPostsCache = ghostPosts;
    ghostPostsCacheTime = now;
  }

  // Combine legacy and Ghost posts
  const allPosts = [...legacyBlogPosts, ...ghostPosts];

  // Sort by date, newest first
  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
}

/**
 * Get a single blog post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} Blog post or null if not found
 */
export async function getBlogPost(slug) {
  // First check legacy posts
  const legacyPost = legacyBlogPosts.find(post => post.slug === slug);
  if (legacyPost) {
    return legacyPost;
  }

  // If not found in legacy, try Ghost
  const ghostPost = await fetchGhostPostBySlug(slug);
  return ghostPost;
}

// Export legacy posts for backward compatibility
export { legacyBlogPosts as blogPosts };
