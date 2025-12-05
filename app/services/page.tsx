'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

const ServicesPage = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Design & Build',
      description: 'Our Design & Build service combines creativity and construction expertise into a single streamlined process',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      features: ['Initial Concept', 'Space Planning', 'Design Development', 'Execution & Handover'],
      detailedDescription: 'We offer comprehensive design and build services that integrate architectural design, engineering, and construction into one cohesive package. Our approach ensures seamless coordination, reduced timelines, and cost-effective delivery while maintaining the highest quality standards.',
      benefits: [
        'Single point of contact for entire project',
        'Reduced project timeline',
        'Cost transparency and control',
        'Integrated design and construction expertise',
        'Minimized risk of miscommunication'
      ]
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Office Fit out',
      description: 'We create functional, modern, and inspiring workspaces that enhance productivity and employee well-being',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      features: ['Partitions & Ceilings', 'Flooring & MEP Works', 'Furniture Installation', 'Complete Interior Finishing'],
      detailedDescription: 'Transform your office space into a productive and inspiring environment. We specialize in creating modern workspaces that balance functionality with aesthetics, incorporating the latest trends in office design while meeting your specific business needs.',
      benefits: [
        'Ergonomic workspace design',
        'Enhanced employee productivity',
        'Flexible and scalable solutions',
        'Energy-efficient systems',
        'Brand identity integration'
      ]
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Retail Fit out',
      description: 'We design and build retail environments that attract customers and elevate the shopping experience',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      features: ['Display Units', 'Counters & Checkout', 'Lighting Design', 'Branding Elements'],
      detailedDescription: 'Create captivating retail spaces that drive customer engagement and sales. Our retail fit-out services focus on optimizing the customer journey, showcasing products effectively, and creating memorable brand experiences.',
      benefits: [
        'Customer flow optimization',
        'Strategic product placement',
        'Atmospheric lighting design',
        'Brand storytelling through design',
        'Increased foot traffic and sales'
      ]
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Refurbishment',
      description: 'Our refurbishment services upgrade and refresh existing spaces without disrupting daily operations',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
      features: ['Layout Enhancement', 'Functionality Upgrade', 'Aesthetic Renewal', 'Performance Optimization'],
      detailedDescription: 'Breathe new life into existing spaces with our expert refurbishment services. We specialize in upgrading and modernizing interiors while minimizing disruption to your ongoing operations.',
      benefits: [
        'Cost-effective space transformation',
        'Minimal operational disruption',
        'Updated functionality and aesthetics',
        'Compliance with current standards',
        'Extended building lifecycle'
      ]
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Furniture Solutions',
      description: 'We supply and install high-quality office and retail furniture that blends comfort, style, and durability',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
      features: ['Modular Systems', 'Custom-Made Pieces', 'Ergonomic Design', 'Space Optimization'],
      detailedDescription: 'Complete your space with our curated selection of furniture solutions. From ergonomic office furniture to stylish retail fixtures, we provide high-quality pieces that complement your interior design.',
      benefits: [
        'Ergonomic comfort and health',
        'Customization to match brand identity',
        'Durable and sustainable materials',
        'Space-efficient designs',
        'Professional installation service'
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Joinery Works',
      description: 'Our in-house joinery team creates custom woodwork, cabinetry, counters, wall claddings, doors, and bespoke furniture',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
      features: ['Custom Cabinetry', 'Wall Claddings', 'Bespoke Furniture', 'High-Grade Materials'],
      detailedDescription: 'Experience the art of fine craftsmanship with our custom joinery services. Our skilled artisans create bespoke woodwork that adds character, warmth, and functionality to any interior space.',
      benefits: [
        'Unique, custom-designed pieces',
        'Superior craftsmanship quality',
        'Perfect fit for your space',
        'Premium material selection',
        'Long-lasting durability'
      ]
    },
    {
      icon: <PaintBucket className="w-12 h-12" />,
      title: 'Interior Design',
      description: 'Our interior design service transforms ideas into visually appealing, functional environments',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
      features: ['Mood Boards & Layouts', 'Material Selection', 'Color Palettes', '3D Visuals'],
      detailedDescription: 'Turn your vision into reality with our professional interior design services. We create cohesive, functional, and aesthetically pleasing environments that reflect your brand identity and meet your practical needs.',
      benefits: [
        'Professional design expertise',
        '3D visualization before execution',
        'Comprehensive material selection',
        'Space optimization strategies',
        'Cohesive aesthetic vision'
      ]
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Renovation',
      description: 'Whether it\'s restructuring a layout or updating finishes, our renovation services revitalize spaces with minimal downtime',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      features: ['Civil Works', 'Electrical Upgrades', 'Partition Changes', 'Flooring & Painting'],
      detailedDescription: 'Modernize and upgrade your space with comprehensive renovation services. From structural changes to cosmetic updates, we handle all aspects of your renovation project with precision and care.',
      benefits: [
        'Complete space transformation',
        'Updated infrastructure',
        'Improved functionality',
        'Increased property value',
        'Modern compliance standards'
      ]
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-gradient-to-b from-dark via-dark-light to-dark">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Interior Solutions
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              From concept to completion, we deliver complete interior solutions tailored to meet the needs of commercial, retail, and office spaces
            </p>
          </motion.div>

          {/* Services Grid - Detailed View */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-dark shadow-lg">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                      {service.title}
                    </h2>
                    <p className="text-black text-lg mb-6 leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-dark mb-4">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-black">
                            <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-black">
                            <CheckCircle className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-gold via-gold-light to-gold p-12 rounded-2xl shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
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
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default ServicesPage;
