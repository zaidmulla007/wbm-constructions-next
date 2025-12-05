'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Office Interior Trends: Creating Future-Ready Workspaces',
      excerpt: 'We follow the latest shifts in office interior styling—from minimalistic workspaces and biophilic design to sustainable materials and smart technology...',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      author: 'WBM Team',
      date: 'Nov 15, 2025',
      category: 'Trends',
      readTime: '6 min read',
    },
    {
      id: 2,
      title: 'Building Greener, Healthier Spaces',
      excerpt: 'Our sustainable approach includes eco-friendly materials, energy-efficient solutions, responsible sourcing, and waste management practices...',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      author: 'WBM Team',
      date: 'Nov 10, 2025',
      category: 'Sustainability',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Innovation in Modern Construction Methods',
      excerpt: 'Innovation is at the heart of what we do. We explore new materials, advanced construction methods, and modern design concepts...',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      author: 'WBM Team',
      date: 'Nov 5, 2025',
      category: 'Innovation',
      readTime: '8 min read',
    },
    {
      id: 4,
      title: 'Retail Fit Out: Creating Engaging Shopping Experiences',
      excerpt: 'Expert guidance on designing retail spaces that attract customers and enhance the shopping experience with modern layouts and branding...',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      author: 'WBM Team',
      date: 'Oct 28, 2025',
      category: 'Blogs',
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'Space Planning Advice for Commercial Interiors',
      excerpt: 'Practical tips for anyone planning a fit out, renovation, or interior project. From layout optimization to material selection...',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      author: 'WBM Team',
      date: 'Oct 20, 2025',
      category: 'Blogs',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'The Art of Custom Joinery: Adding Character to Interiors',
      excerpt: 'How craftsmanship, precision, and high-grade materials in joinery pieces add character, depth, and functionality to any interior...',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      author: 'WBM Team',
      date: 'Oct 15, 2025',
      category: 'Blogs',
      readTime: '5 min read',
    },
  ];

  return (
    <section id="blog" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-dark via-dark-light to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold rounded-full text-gold font-semibold text-sm tracking-wider mb-4">
            OUR INSIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shaping Better Built Environments
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our insights reflect our knowledge, expertise, and commitment to staying ahead of industry trends through continuous learning, innovation, and improvement
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-gold/20 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-gold rounded-full text-dark font-bold text-sm">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full mb-4">
                  {blogPosts[0].category}
                </span>
                <h3 className="text-3xl font-bold text-dark mb-4 group-hover:text-gold transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                <p className="text-black text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-black">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="flex items-center gap-2 text-dark hover:text-gold font-semibold transition-colors duration-300 group">
                  Read More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-dark text-xs font-bold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-black mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-black mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <button className="flex items-center gap-2 text-dark hover:text-gold font-semibold transition-colors duration-300 group">
                    Read
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 md:mt-28 lg:mt-32 text-center"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-gold hover:bg-gold-dark text-dark font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold/30"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
