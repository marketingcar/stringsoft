import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const ResourcesPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog - StringSoft</title>
        <meta name="description" content="Stay ahead with resources, case studies, and insights built for veterinarians and practice managers from the StringSoft blog." />
      </Helmet>
      <div className="pt-32 pb-20 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">StringSoft Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, case studies, and practical tips for improving clinic efficiency and practice growth.
            </p>
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
                      alt={post.title}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gradient-to-r from-[#19A4AF] to-[#6C2DC7] text-white px-3 py-1 rounded-full text-xs font-bold">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-white mb-3 flex-grow">{post.title}</h2>
                    <p className="text-white/70 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-white/60 mt-auto">
                      <div className="flex items-center">
                        <img className="w-8 h-8 rounded-full mr-3 object-cover" alt={post.author} src="https://images.unsplash.com/photo-1591013078076-42ae16047f45" />
                        <span className="text-sm">{post.author} &bull; {post.date}</span>
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

export default ResourcesPage;