'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, MapPin, Calendar, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'commercial', 'residential', 'industrial'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Business Tower',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      location: 'Dubai Marina',
      year: '2023',
      description: '45-story luxury commercial complex',
      fullDescription: 'A prestigious 45-story commercial tower featuring state-of-the-art office spaces, premium retail areas, and world-class amenities. This project showcases our expertise in large-scale commercial construction.',
      scope: 'Complete interior fit-out, office spaces, retail units, MEP systems',
      duration: '18 months',
      client: 'Confidential'
    },
    {
      id: 2,
      title: 'Oceanview Residence',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      location: 'Palm Jumeirah',
      year: '2023',
      description: 'Premium waterfront villa',
      fullDescription: 'An exclusive waterfront villa featuring contemporary design, panoramic ocean views, and luxurious interiors. This project demonstrates our capability in high-end residential construction.',
      scope: 'Full interior design and build, custom joinery, landscape integration',
      duration: '14 months',
      client: 'Private Client'
    },
    {
      id: 3,
      title: 'Tech Manufacturing Hub',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      location: 'Dubai Industrial City',
      year: '2022',
      description: 'State-of-the-art manufacturing facility',
      fullDescription: 'A cutting-edge manufacturing facility designed for technology production, featuring clean rooms, advanced MEP systems, and efficient workflow layouts.',
      scope: 'Industrial fit-out, specialized flooring, MEP installation, clean room construction',
      duration: '20 months',
      client: 'Tech Corp International'
    },
    {
      id: 4,
      title: 'Shopping Plaza',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
      location: 'Downtown Dubai',
      year: '2023',
      description: 'Modern retail and entertainment complex',
      fullDescription: 'A vibrant retail and entertainment destination featuring diverse retail units, dining areas, and entertainment zones designed to create memorable customer experiences.',
      scope: 'Retail fit-out, branding elements, lighting design, circulation planning',
      duration: '16 months',
      client: 'Retail Holdings LLC'
    },
    {
      id: 5,
      title: 'Villa Community',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      location: 'Arabian Ranches',
      year: '2022',
      description: 'Exclusive gated community',
      fullDescription: 'A premium gated community comprising luxury villas with contemporary architecture, landscaped gardens, and community amenities.',
      scope: 'Multiple villa interiors, community facilities, landscape coordination',
      duration: '24 months',
      client: 'Development Partners'
    },
    {
      id: 6,
      title: 'Logistics Center',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      location: 'Jebel Ali',
      year: '2023',
      description: 'Advanced logistics and distribution center',
      fullDescription: 'A modern logistics hub designed for efficient warehouse operations, featuring optimized storage systems, loading docks, and administrative facilities.',
      scope: 'Warehouse fit-out, office areas, loading systems, safety installations',
      duration: '15 months',
      client: 'Logistics Solutions Group'
    },
    {
      id: 7,
      title: 'Corporate Headquarters',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      location: 'Business Bay',
      year: '2024',
      description: 'Premium office space with modern amenities',
      fullDescription: 'A flagship corporate headquarters featuring flexible workspaces, collaborative zones, executive suites, and premium amenities designed to enhance productivity.',
      scope: 'Complete office fit-out, custom furniture, technology integration, breakout areas',
      duration: '12 months',
      client: 'Fortune 500 Company'
    },
    {
      id: 8,
      title: 'Luxury Apartments',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      location: 'Dubai Hills',
      year: '2024',
      description: 'High-end residential tower',
      fullDescription: 'A luxury residential tower offering sophisticated apartment units with premium finishes, smart home features, and breathtaking views.',
      scope: 'Apartment interiors, common areas, amenities fit-out, smart home integration',
      duration: '22 months',
      client: 'Property Developers LLC'
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold rounded-full text-gold font-semibold text-sm tracking-wider mb-4">
              OUR PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4">
              Featured Projects
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our commitment to excellence
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-gold text-dark shadow-lg shadow-gold/30'
                    : 'bg-white text-black border-2 border-gray-200 hover:border-gold'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - Same as Home */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14"
            >
              {filteredProjects.map((project, index) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <span className="inline-block w-fit px-3 py-1 bg-gold text-dark text-xs font-bold rounded-full mb-3">
                          {project.category.toUpperCase()}
                        </span>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-2">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">{project.location}</span>
                          <span className="text-sm text-gold font-semibold">{project.year}</span>
                        </div>
                      </div>

                      {/* View Button */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <ExternalLink className="w-6 h-6 text-dark" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

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
                Have a Project in Mind?
              </h3>
              <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with our proven expertise
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-dark hover:bg-dark-light text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
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

export default ProjectsPage;
