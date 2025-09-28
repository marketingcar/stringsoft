import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getBlogPosts } from '@/utils/blogLoader';

const BlogPage = () => {
  const allBlogPosts = getBlogPosts();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const blogPosts = allBlogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Veterinary Practice Management Blog | StringSoft</title>
        <meta name="description" content="Insights, case studies, and practical tips for improving clinic efficiency and practice growth. Stay ahead with the StringSoft blog for veterinarians." />
      </Helmet>
      <div className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-20"
          >
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">StringSoft Blog</span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl mx-auto md:mx-0">
                Insights, case studies, and practical tips for improving clinic efficiency and practice growth.
              </p>
            </div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src="/images/blog-reading-illustration.png"
                alt="An illustration of a person reading a blog on a giant phone"
                className="max-w-sm md:max-w-md"
                loading="lazy"
                animate={{
                  y: ["-10px", "10px", "-10px"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${post.slug}`} className="block feature-card glass-effect rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={post.imageDescription || post.title}
                      loading="lazy"
                      src={post.image || "/images/blog-reading-illustration.png"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-white mb-3 flex-grow">{post.title}</h2>
                    <p className="text-white/70 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-end text-white/60 mt-auto">
                      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm mr-2">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-2"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1
                    ? 'text-white/30 cursor-not-allowed'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                } transition-colors`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-brand-teal text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'text-white/30 cursor-not-allowed'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                } transition-colors`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Blog stats */}
          <div className="text-center mt-8 text-white/60">
            <p>Showing {startIndex + 1}-{Math.min(endIndex, allBlogPosts.length)} of {allBlogPosts.length} articles</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;