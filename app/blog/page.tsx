'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Office Interior Trends: Creating Future-Ready Workspaces',
      excerpt: 'We follow the latest shifts in office interior styling—from minimalistic workspaces and biophilic design to sustainable materials and smart technology...',
      fullContent: 'In today\'s rapidly evolving workplace landscape, office interiors are transforming to meet the needs of modern businesses and employees. The shift towards hybrid work models has necessitated flexible spaces that can adapt to various work styles. Minimalistic design principles combined with biophilic elements create environments that reduce stress and enhance productivity. We explore the integration of sustainable materials, smart building technologies, and collaborative zones that define the future of workspace design.',
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
      fullContent: 'Sustainability is no longer optional in modern construction—it\'s essential. Our commitment to creating healthier spaces extends beyond aesthetics to include comprehensive environmental responsibility. We utilize eco-friendly materials that minimize environmental impact while maintaining durability and quality. Energy-efficient MEP systems reduce operational costs and carbon footprint. Our waste management practices ensure minimal construction waste, and our material sourcing prioritizes local and sustainable suppliers.',
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
      fullContent: 'The construction industry is experiencing a technological revolution. From Building Information Modeling (BIM) to prefabrication techniques, modern methods are transforming how we approach projects. We leverage advanced materials that offer superior performance, durability, and sustainability. Our adoption of digital tools enables precise planning, cost control, and seamless coordination. Innovation extends to our construction methodologies, where we employ techniques that reduce project timelines while maintaining quality standards.',
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
      fullContent: 'Retail spaces must do more than display products—they must create memorable experiences. Our approach to retail fit-out focuses on understanding customer psychology and creating journeys that engage and inspire. Strategic product placement, atmospheric lighting, and thoughtful circulation patterns work together to maximize sales potential. We integrate brand identity seamlessly into the physical environment, creating cohesive experiences that resonate with target audiences.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      author: 'WBM Team',
      date: 'Oct 28, 2025',
      category: 'Retail',
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'Space Planning Advice for Commercial Interiors',
      excerpt: 'Practical tips for anyone planning a fit out, renovation, or interior project. From layout optimization to material selection...',
      fullContent: 'Effective space planning is the foundation of successful commercial interiors. It requires balancing functionality, aesthetics, and efficiency. Our approach begins with thorough analysis of how the space will be used, identifying traffic patterns, and understanding user needs. We optimize layouts to maximize usable area while maintaining comfort and compliance with regulations. Material selection plays a crucial role, considering durability, maintenance, aesthetics, and budget constraints.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      author: 'WBM Team',
      date: 'Oct 20, 2025',
      category: 'Planning',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'The Art of Custom Joinery: Adding Character to Interiors',
      excerpt: 'How craftsmanship, precision, and high-grade materials in joinery pieces add character, depth, and functionality to any interior...',
      fullContent: 'Custom joinery represents the pinnacle of interior craftsmanship. Unlike mass-produced furniture, bespoke pieces are designed and built specifically for your space, ensuring perfect fit and function. Our skilled artisans combine traditional techniques with modern technology to create woodwork that adds warmth, character, and sophistication. From intricate cabinetry to statement wall claddings, custom joinery transforms ordinary spaces into extraordinary environments.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      author: 'WBM Team',
      date: 'Oct 15, 2025',
      category: 'Craftsmanship',
      readTime: '5 min read',
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />

      <div className="pt-32 pb-20 bg-gradient-to-b from-dark via-dark-light to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold rounded-full text-gold font-semibold text-sm tracking-wider mb-4">
              OUR INSIGHTS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Shaping Better Built Environments
            </h1>
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
            className="mb-20"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-gold/20 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
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
                  <h2 className="text-3xl font-bold text-dark mb-4 hover:text-gold transition-colors duration-300">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-black text-lg mb-6 leading-relaxed">
                    {blogPosts[0].fullContent.substring(0, 200)}...
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
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-dark hover:text-gold font-semibold transition-colors duration-300 group">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Articles - Detailed View */}
          <div className="space-y-12">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-dark text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-4 hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-black text-lg mb-6 leading-relaxed">
                      {post.fullContent}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-4 text-sm text-black">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
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
            className="mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-gold via-gold-light to-gold p-12 rounded-2xl shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Want to Learn More?
              </h3>
              <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights and industry updates
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-dark hover:bg-dark-light text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default BlogPage;
