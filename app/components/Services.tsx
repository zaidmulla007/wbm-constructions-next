'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Design & Build',
      description: 'Our Design & Build service combines creativity and construction expertise into a single streamlined process',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      features: ['Initial Concept', 'Space Planning', 'Design Development', 'Execution & Handover'],
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Office Fit out',
      description: 'We create functional, modern, and inspiring workspaces that enhance productivity and employee well-being',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      features: ['Partitions & Ceilings', 'Flooring & MEP Works', 'Furniture Installation', 'Complete Interior Finishing'],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Retail Fit out',
      description: 'We design and build retail environments that attract customers and elevate the shopping experience',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      features: ['Display Units', 'Counters & Checkout', 'Lighting Design', 'Branding Elements'],
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Refurbishment',
      description: 'Our refurbishment services upgrade and refresh existing spaces without disrupting daily operations',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
      features: ['Layout Enhancement', 'Functionality Upgrade', 'Aesthetic Renewal', 'Performance Optimization'],
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Furniture Solutions',
      description: 'We supply and install high-quality office and retail furniture that blends comfort, style, and durability',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
      features: ['Modular Systems', 'Custom-Made Pieces', 'Ergonomic Design', 'Space Optimization'],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Joinery Works',
      description: 'Our in-house joinery team creates custom woodwork, cabinetry, counters, wall claddings, doors, and bespoke furniture',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
      features: ['Custom Cabinetry', 'Wall Claddings', 'Bespoke Furniture', 'High-Grade Materials'],
    },
    {
      icon: <PaintBucket className="w-12 h-12" />,
      title: 'Interior Design',
      description: 'Our interior design service transforms ideas into visually appealing, functional environments',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
      features: ['Mood Boards & Layouts', 'Material Selection', 'Color Palettes', '3D Visuals'],
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Renovation',
      description: 'Whether it\'s restructuring a layout or updating finishes, our renovation services revitalize spaces with minimal downtime',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      features: ['Civil Works', 'Electrical Upgrades', 'Partition Changes', 'Flooring & Painting'],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-dark via-dark-light to-dark">
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
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Interior Solutions
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            From concept to completion, we deliver complete interior solutions tailored to meet the needs of commercial, retail, and office spaces
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-dark shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link href="/services" className="block">
                  <button className="w-full py-3 bg-dark text-white font-semibold rounded-lg group-hover:bg-gold group-hover:text-dark transition-all duration-300 transform group-hover:scale-105">
                    Explore More
                  </button>
                </Link>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 md:mt-28 lg:mt-32 text-center"
        >
          <div className="bg-gradient-to-r from-gold via-gold-light to-gold p-12 rounded-2xl shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-center">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto text-center">
              Let's discuss how we can bring your vision to life with our expert construction services
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-dark hover:bg-dark-light text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
