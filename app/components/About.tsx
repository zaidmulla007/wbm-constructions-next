'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Building2, Target, Briefcase, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('team');

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
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
            ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            WBM Contracting Company
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Transforming ideas into functional, inspiring spaces with precision and passion
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'team', label: 'Our Team', icon: <Users className="w-5 h-5" /> },
            { id: 'vision', label: 'Our Vision', icon: <Target className="w-5 h-5" /> },
            { id: 'capabilities', label: 'Capabilities', icon: <Briefcase className="w-5 h-5" /> },
            { id: 'process', label: 'Our Process', icon: <Building2 className="w-5 h-5" /> },
            { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-5 h-5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold text-dark shadow-lg'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          {activeTab === 'team' && (
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
                <h3 className="text-3xl font-bold text-dark mb-6">Our Team</h3>
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
          )}

          {activeTab === 'vision' && (
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-dark to-dark-light p-12 rounded-2xl shadow-2xl">
                <Target className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
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
          )}

          {activeTab === 'capabilities' && (
            <div>
              <h3 className="text-3xl font-bold text-dark mb-8 text-center">Our Capabilities</h3>
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
                    <h4 className="text-xl font-bold text-dark mb-3">{cap.title}</h4>
                    <p className="text-black">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h3 className="text-3xl font-bold text-dark mb-8 text-center">Our Process</h3>
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
                    <h4 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h4>
                    <p className="text-white/90 relative z-10">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-dark mb-10 text-center">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-dark mb-3 flex items-start gap-3">
                      <span className="text-gold">Q:</span>
                      {faq.q}
                    </h4>
                    <p className="text-black pl-8">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold via-gold-light to-gold p-12 rounded-2xl shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold text-dark mb-6">Our Clients</h3>
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
    </section>
  );
};

export default About;
