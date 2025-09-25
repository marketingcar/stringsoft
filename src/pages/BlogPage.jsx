import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { getBlogPosts } from '@/utils/blogLoader';

const BlogPage = () => {
  const blogPosts = getBlogPosts();

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
                src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/a96d177ca9489f25f30dc4bfc418cbe1.png"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                      src={post.image || "https://images.unsplash.com/photo-1608394547454-cbc0d9510e9e"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-white mb-3 flex-grow">{post.title}</h2>
                    <p className="text-white/70 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-white/60 mt-auto">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{post.date}</span>
                      </div>
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
        </div>
      </div>
    </>
  );
};

export default BlogPage;