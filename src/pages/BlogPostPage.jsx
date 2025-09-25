import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPost } from '@/utils/blogLoader';
import { ArrowLeft, Calendar } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
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
              <div className="flex items-center space-x-6 text-white/70 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{post.date}</span>
                </div>
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
                src={post.image || "https://images.unsplash.com/photo-1595872018818-97555653a011"} />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-invert prose-lg max-w-none mx-auto"
            >
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;