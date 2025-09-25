import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBlogPosts } from '@/utils/blogLoader';

const Blog = () => {
  const blogPosts = getBlogPosts();
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-charcoal-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Blog / Insights</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay ahead with resources built for veterinarians and practice managers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${post.slug}`} className="block feature-card glass-effect rounded-2xl overflow-hidden group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={post.imageDescription || post.title}
                    src={post.image || "https://images.unsplash.com/photo-1595872018818-97555653a011"} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold">{post.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white leading-relaxed mb-4 flex-grow">{post.title}</h3>
                  <div className="flex items-center justify-between text-white/60 mt-auto">
                    <span className="text-sm">{post.date}</span>
                    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm mr-2">Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;