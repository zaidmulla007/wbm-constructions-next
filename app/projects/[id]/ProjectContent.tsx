'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Building2, ArrowLeft, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  description: string;
  fullDescription: string;
  scope: string;
  duration: string;
  client: string;
  challenges: string[];
  solutions: string[];
}

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      {/* Hero Banner with Project Image */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <Link href="/projects" className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors mb-6">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Back to Projects</span>
              </Link> */}

              <span className="inline-block px-4 py-2 bg-gold text-dark text-sm font-bold rounded-full mb-4">
                {project.category.toUpperCase()}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-lg">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="text-lg">{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-gold" />
                  <span className="text-lg">{project.duration}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details Content */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Project Overview</h2>
            <p className="text-black text-lg leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                <h3 className="text-sm font-bold text-gold mb-2">SCOPE OF WORK</h3>
                <p className="text-black">{project.scope}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                <h3 className="text-sm font-bold text-gold mb-2">DURATION</h3>
                <p className="text-black">{project.duration}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                <h3 className="text-sm font-bold text-gold mb-2">CLIENT</h3>
                <p className="text-black">{project.client}</p>
              </div>
            </div>
          </motion.div>

          {/* Challenges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Challenges</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-black text-lg">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Solutions</h2>
            <div className="bg-gradient-to-br from-dark to-dark-light p-8 rounded-xl shadow-lg">
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-white text-lg">
                    <CheckCircle className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold via-gold-light to-gold p-12 rounded-2xl shadow-2xl text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Have a Similar Project in Mind?
            </h3>
            <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our proven expertise
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-dark hover:bg-dark-light text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
