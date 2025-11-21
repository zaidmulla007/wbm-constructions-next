'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Building2, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Building2 className="w-8 h-8" />, number: '500+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8" />, number: '200+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, number: '25+', label: 'Years Experience' },
  ];

  const features = [
    'Premium Quality Construction',
    'On-Time Project Delivery',
    'Expert Team of Professionals',
    'Sustainable Building Practices',
    'Competitive Pricing',
    'Customer Satisfaction Guaranteed',
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
            ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Building Dreams Since 1999
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            WBM Contracting L.L.C is your trusted partner in creating exceptional spaces that stand the test of time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-24 lg:mb-28">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="About WBM Contracting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border-t-4 border-gold"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-dark" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-dark">ISO Certified</h4>
                    <p className="text-black">Quality Management System</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-dark mb-6">
              Excellence in Construction & Development
            </h3>
            <p className="text-black text-lg mb-6 leading-relaxed">
              With over two decades of experience, WBM Contracting L.L.C has established itself as a leading
              construction company in the region. We specialize in delivering high-quality residential,
              commercial, and industrial projects that exceed client expectations.
            </p>
            <p className="text-black text-lg mb-8 leading-relaxed">
              Our commitment to excellence, innovation, and sustainability has earned us the trust of
              countless clients. We combine traditional craftsmanship with modern technology to create
              structures that are not only beautiful but also built to last.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                  <span className="text-black font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-dark hover:bg-gold text-white hover:text-dark font-bold rounded-lg transition-all duration-300 shadow-lg"
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-dark to-dark-light p-8 rounded-2xl text-center shadow-xl border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4 text-dark">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-bold text-gold mb-2">{stat.number}</h4>
              <p className="text-white font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
