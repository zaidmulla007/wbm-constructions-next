'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface Service {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
    image: string;
    features: string[];
    detailedDescription: string;
    benefits: string[];
}

export default function ServiceContent({ service }: { service: Service }) {
    return (
        <>
            {/* Hero Banner with Service Image */}
            <div className="relative h-[60vh] md:h-[70vh]">
                <Image
                    src={service.image}
                    alt={service.title}
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
                            {/* <Link href="/services" className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors mb-6">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Back to Services</span>
              </Link> */}

                            <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold rounded-full mb-4">
                                <span className="text-gold font-bold text-sm tracking-wider">OUR SERVICE</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                {service.title}
                            </h1>

                            <p className="text-xl text-white/90 max-w-2xl bg-dark/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-gold">
                                {service.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Service Details Content */}
            <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Overview Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            <div className="lg:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Service Description</h2>
                                <p className="text-black text-lg leading-relaxed mb-8">
                                    {service.detailedDescription}
                                </p>
                            </div>

                            <div className="lg:w-1/3 w-full">
                                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold">
                                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6 mx-auto">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark text-center mb-4">Why Choose This Service?</h3>
                                    <p className="text-center text-gray-600 mb-6">
                                        Our {service.title} service is designed to deliver excellence and value at every step.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="block w-full text-center bg-dark text-white py-3 rounded-lg hover:bg-gold hover:text-dark transition-all duration-300 font-bold"
                                    >
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Key Features Section (Mapped from Challenges) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Key Features</h2>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-black text-lg">
                                        <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Benefits Section (Mapped from Solutions) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Benefits</h2>
                        <div className="bg-gradient-to-br from-dark to-dark-light p-8 rounded-xl shadow-lg">
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 text-white text-lg">
                                        <CheckCircle className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" />
                                        {benefit}
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
                            Interested in {service.title}?
                        </h3>
                        <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss your requirements and let our experts guide you through the process.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 bg-dark hover:bg-dark-light text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Contact Us Now
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
