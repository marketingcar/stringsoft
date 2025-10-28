// Ghost CMS API Client
// Fetches blog posts from Ghost CMS headless API

const GHOST_API_URL = import.meta.env.VITE_GHOST_API_URL || 'https://stringsoft.marketingcarcontent.com';
const GHOST_CONTENT_API_KEY = import.meta.env.VITE_GHOST_CONTENT_API_KEY || '120a310b63c6465ed857f3c447';

/**
 * Fetch posts from Ghost CMS
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of blog posts
 */
export async function fetchGhostPosts(options = {}) {
  try {
    const params = new URLSearchParams({
      key: GHOST_CONTENT_API_KEY,
      limit: options.limit || 'all',
      include: 'tags,authors',
      ...options
    });

    const response = await fetch(
      `${GHOST_API_URL}/ghost/api/content/posts/?${params.toString()}`
    );

    if (!response.ok) {
      console.error('Failed to fetch Ghost posts:', response.statusText);
      return [];
    }

    const data = await response.json();

    // Transform Ghost posts to our format
    return (data.posts || []).map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || post.custom_excerpt || '',
      category: post.primary_tag?.name || 'Technology',
      date: post.published_at,
      image: post.feature_image || '/images/blog-reading-illustration.png',
      imageDescription: post.feature_image_alt || post.title,
      content: post.html || '',
      author: post.primary_author?.name || 'StringSoft',
      isGhostPost: true // Flag to identify Ghost posts
    }));
  } catch (error) {
    console.error('Error fetching Ghost posts:', error);
    return [];
  }
}

/**
 * Fetch a single post from Ghost CMS by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} Blog post or null
 */
export async function fetchGhostPostBySlug(slug) {
  try {
    const params = new URLSearchParams({
      key: GHOST_CONTENT_API_KEY,
      include: 'tags,authors'
    });

    const response = await fetch(
      `${GHOST_API_URL}/ghost/api/content/posts/slug/${slug}/?${params.toString()}`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const post = data.posts?.[0];

    if (!post) return null;

    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || post.custom_excerpt || '',
      category: post.primary_tag?.name || 'Technology',
      date: post.published_at,
      image: post.feature_image || '/images/blog-reading-illustration.png',
      imageDescription: post.feature_image_alt || post.title,
      content: post.html || '',
      author: post.primary_author?.name || 'StringSoft',
      isGhostPost: true
    };
  } catch (error) {
    console.error('Error fetching Ghost post:', error);
    return null;
  }
}
