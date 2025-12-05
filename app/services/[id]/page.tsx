import Link from 'next/link';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import ServiceContent from './ServiceContent';

// Service data - duplicate of data in services/page.tsx
const services = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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

// Generate static params for all services
export function generateStaticParams() {
    return services.map((service) => ({
        id: service.id.toString(),
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const service = services.find(s => s.id === Number(resolvedParams.id));

    if (!service) {
        return (
            <main className="min-h-screen overflow-x-hidden w-full flex items-center justify-center">
                <Navbar />
                <div className="text-center pt-32">
                    <h1 className="text-4xl font-bold text-dark mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-gold hover:underline text-lg">
                        Back to Services
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen overflow-x-hidden w-full">
            <Navbar />
            <ServiceContent service={service} />
            <Footer />
            <FloatingActions />
        </main>
    );
}
