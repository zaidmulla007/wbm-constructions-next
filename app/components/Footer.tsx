'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Testimonials', href: '#' },
    ],
    services: [
      { name: 'Commercial Construction', href: '#services' },
      { name: 'Residential Projects', href: '#services' },
      { name: 'Industrial Facilities', href: '#services' },
      { name: 'Renovation', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Projects', href: '#projects' },
      { name: 'Case Studies', href: '#projects' },
      { name: 'FAQs', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, link: '#', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, link: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, link: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white text-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 mb-12 md:mb-16 lg:mb-20">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Image
              src="/logo.png"
              alt="WBM Contracting"
              width={150}
              height={75}
              className="mb-6 object-contain"
            />
            <p className="text-black mb-6 leading-relaxed">
              Building excellence since 1999. Your trusted partner in creating exceptional spaces that stand the test of time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-lg flex items-center justify-center text-black hover:text-white transition-all duration-300 border border-gold/30 hover:border-gold"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold text-black mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-black hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold text-black mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-black hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold text-black mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:048863085"
                  className="flex items-start gap-3 text-black hover:text-gold transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>04-886 3085</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:wbmcontracting@gmail.com"
                  className="flex items-start gap-3 text-black hover:text-gold transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="break-all">wbmcontracting@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-black">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>P.O.Box: 93361<br />Dubai, U.A.E</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-black text-sm text-center md:text-left">
            © {new Date().getFullYear()} WBM Contracting L.L.C. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-black hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-black hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-black hover:text-gold transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold hover:bg-gold-dark text-dark rounded-full flex items-center justify-center shadow-lg shadow-gold/30 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
