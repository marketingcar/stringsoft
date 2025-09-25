// Blog loader that dynamically imports all markdown files
// Since we can't use import.meta.glob with ?raw in this context,
// we'll manually import each markdown file and process them

// Import all markdown files as modules
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

// Create blog posts array from imported markdown files
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

// Process all blog posts
const blogPosts = markdownFiles.map((file) => {
  const { frontmatter, content: body } = parseFrontmatter(file.content);

  return {
    slug: frontmatter.slug || file.filename,
    title: frontmatter.title || 'Untitled',
    excerpt: frontmatter.excerpt || '',
    category: frontmatter.category || 'Technology',
    date: frontmatter.date || '',
    image: frontmatter.image || 'https://images.unsplash.com/photo-1608394547454-cbc0d9510e9e',
    imageDescription: frontmatter.imageDescription || frontmatter.title || '',
    content: body.trim(),
    filename: file.filename
  };
}).sort((a, b) => {
  // Sort by date, newest first
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
});

export const getBlogPost = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPosts = () => {
  return blogPosts;
};

// Export for debugging
export { blogPosts };