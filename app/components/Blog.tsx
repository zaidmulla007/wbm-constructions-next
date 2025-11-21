'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Successful Construction Projects',
      excerpt: 'Learn the key strategies that ensure your construction project stays on time and within budget...',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      author: 'Muhammad Din',
      date: 'Nov 15, 2025',
      category: 'Project Management',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Sustainable Building Practices for Modern Construction',
      excerpt: 'Discover how eco-friendly materials and practices are shaping the future of construction...',
      image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&q=80',
      author: 'WBM Team',
      date: 'Nov 10, 2025',
      category: 'Sustainability',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'The Future of Smart Buildings in the UAE',
      excerpt: 'Explore the latest innovations in smart building technology and automation systems...',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      author: 'WBM Team',
      date: 'Nov 5, 2025',
      category: 'Technology',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Maximizing ROI in Commercial Real Estate',
      excerpt: 'Strategic insights on how to maximize returns on your commercial property investments...',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      author: 'Muhammad Din',
      date: 'Oct 28, 2025',
      category: 'Business',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Safety First: Best Practices in Construction Sites',
      excerpt: 'Essential safety protocols and measures that protect workers and ensure project success...',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      author: 'WBM Team',
      date: 'Oct 20, 2025',
      category: 'Safety',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Luxury Home Design Trends for 2025',
      excerpt: 'The latest architectural trends and design elements defining luxury residential properties...',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      author: 'Muhammad Din',
      date: 'Oct 15, 2025',
      category: 'Design',
      readTime: '6 min read',
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
            INSIGHTS & NEWS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Stay updated with industry insights, project updates, and expert advice from WBM Contracting
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
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gold hover:bg-gold-dark text-dark font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold/30"
          >
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
