'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Building2, Target, Briefcase, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

const AboutPage = () => {
  const capabilities = [
    { title: 'Office Fit out', desc: 'Functional, stylish, and efficient workplaces' },
    { title: 'Retail Fit out', desc: 'Engaging and customer-centric store interiors' },
    { title: 'Joinery Works', desc: 'Custom-built furniture, cabinetry, and wooden elements' },
    { title: 'Refurbishment & Renovation', desc: 'Upgrading existing spaces with minimal disruption' },
    { title: 'Project Management', desc: 'Cost planning, quality control, and on-time delivery' },
  ];

  const processSteps = [
    { number: '01', title: 'Consultation & Briefing', desc: 'Understanding client needs, goals, and space requirements' },
    { number: '02', title: 'Design & Planning', desc: 'Space planning, material selection, and design development' },
    { number: '03', title: 'Costing & Approval', desc: 'Transparent quotations and project timelines' },
    { number: '04', title: 'Execution & Fitout', desc: 'Skilled workmanship, safety compliance, and quality control' },
    { number: '05', title: 'Handover & Support', desc: 'Final inspection, client approval, and post-completion support' },
  ];

  const faqs = [
    {
      q: 'What services do you provide?',
      a: 'We offer office fit out, retail fit out, joinery works, refurbishment, and complete interior contracting solutions.'
    },
    {
      q: 'Do you handle both design and execution?',
      a: 'Yes. We provide design, project planning, and full construction services under one roof.'
    },
    {
      q: 'How long does a typical project take?',
      a: 'Project timelines vary depending on size and scope, but we always work to deliver on schedule without compromising quality.'
    },
    {
      q: 'Can you work with my existing design or consultant?',
      a: 'Absolutely. We can execute projects based on your approved design or collaborate with your consultant.'
    },
    {
      q: 'Do you offer custom furniture and joinery?',
      a: 'Yes. Our joinery team creates bespoke furniture and fittings tailored to your space and style.'
    },
  ];

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
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              WBM Contracting Company
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Transforming ideas into functional, inspiring spaces with precision and passion
            </p>
          </motion.div>

          {/* Our Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <Users className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold text-dark">Our Team</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="WBM Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-black text-lg mb-4 leading-relaxed">
                  At WBM Contracting, our team is the foundation of everything we create. We are a group of
                  designers, engineers, project managers, and skilled craftsmen who work with precision
                  and passion.
                </p>
                <p className="text-black text-lg leading-relaxed">
                  Every member brings industry expertise and a commitment to delivering
                  quality, ensuring each project is handled with professionalism from start to finish.
                  Together, we transform ideas into functional, inspiring spaces.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <Target className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold text-dark">Our Vision</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-dark to-dark-light p-12 rounded-2xl shadow-2xl">
                <p className="text-white text-lg mb-6 leading-relaxed">
                  Our vision is to shape environments that enhance the way people work, live, and
                  experience spaces.
                </p>
                <p className="text-white text-lg mb-6 leading-relaxed">
                  We aim to be a trusted contracting partner known for innovation, reliability, and superior
                  workmanship.
                </p>
                <p className="text-white text-lg leading-relaxed">
                  By combining modern design trends with smart construction practices, we deliver spaces
                  that reflect our clients' identity and long-term goals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Capabilities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <Briefcase className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold text-dark">Our Capabilities</h2>
            </div>
            <p className="text-black text-lg mb-10 text-center max-w-3xl mx-auto">
              WBM Contracting provides end-to-end solutions across commercial, retail, and office
              environments. From concept to completion, we manage every detail with accuracy and care.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-gold"
                >
                  <h3 className="text-xl font-bold text-dark mb-3">{cap.title}</h3>
                  <p className="text-black">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <Building2 className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold text-dark">Our Process</h2>
            </div>
            <p className="text-black text-lg mb-10 text-center max-w-3xl mx-auto">
              Our process ensures clarity, efficiency, and seamless execution. This structured approach guarantees smooth delivery with no surprises.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-dark to-dark-light p-8 rounded-2xl shadow-xl"
                >
                  <div className="text-6xl font-bold text-gold/20 absolute top-4 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                  <p className="text-white/90 relative z-10">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <HelpCircle className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-bold text-dark">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-dark mb-3 flex items-start gap-3">
                    <span className="text-gold">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-black pl-8">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Clients Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold via-gold-light to-gold p-12 rounded-2xl shadow-2xl text-center"
          >
            <h2 className="text-3xl font-bold text-dark mb-6">Our Clients</h2>
            <p className="text-dark text-lg max-w-3xl mx-auto mb-4">
              We work with a wide range of clients across various industries—corporate offices, retail
              brands, small businesses, and commercial spaces.
            </p>
            <p className="text-dark text-lg max-w-3xl mx-auto">
              Our commitment to quality and consistency has helped us build long-term relationships
              based on trust, transparency, and exceptional results. Every project, whether big or small, receives the same level of attention and dedication.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default AboutPage;
