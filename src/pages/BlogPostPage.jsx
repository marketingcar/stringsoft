import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPost } from '@/utils/blogLoader';
import { ArrowLeft } from 'lucide-react';

// Simple markdown-to-HTML converter for blog content
const formatMarkdownContent = (content) => {
  return content
    // Convert headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Convert bold text
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Convert italic text
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Convert bullet points
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>')
    // Convert images
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" class="w-full h-auto rounded-lg mb-4" />')
    // Convert links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-brand-teal hover:underline">$1</a>')
    // Convert line breaks to paragraphs
    .split('\n\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0)
    .map(paragraph => {
      if (paragraph.startsWith('<h') || paragraph.startsWith('<ul') || paragraph.startsWith('<img')) {
        return paragraph;
      }
      return `<p>${paragraph}</p>`;
    })
    .join('\n');
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const fetchedPost = await getBlogPost(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 bg-charcoal-black text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">Loading post...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | StringSoft Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="pt-32 pb-20 bg-charcoal-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/blog" className="flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          <article className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-brand-teal text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">{post.category}</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">{post.title}</h1>
              <div className="mb-8">
                {/* Date removed for cleaner design */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden mb-12"
            >
              <img
                className="w-full h-full object-cover"
                alt={post.imageDescription || post.title}
                src={post.image || "/images/blog-reading-illustration.png"} />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-invert prose-lg max-w-none mx-auto"
            >
              <div dangerouslySetInnerHTML={{
                __html: post.isGhostPost ? post.content : formatMarkdownContent(post.content)
              }} />
            </motion.div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;