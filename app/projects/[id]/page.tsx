import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import ProjectContent from './ProjectContent';

// Project data - move this to a shared file later
const allProjects = [
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
    client: 'Confidential',
    challenges: [
      'Coordinating multiple stakeholders and tenants',
      'Managing complex MEP systems across 45 floors',
      'Maintaining quality while meeting tight deadlines',
      'Ensuring minimal disruption to neighboring properties'
    ],
    solutions: [
      'Implemented advanced project management software',
      'Created detailed coordination drawings for all systems',
      'Established quality checkpoints at every stage',
      'Coordinated closely with local authorities'
    ]
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
    client: 'Private Client',
    challenges: [
      'Working with premium materials and finishes',
      'Integrating smart home technology seamlessly',
      'Coordinating with landscape architects',
      'Maintaining privacy during construction'
    ],
    solutions: [
      'Sourced rare materials from international suppliers',
      'Partnered with leading smart home technology providers',
      'Created integrated design approach with landscape team',
      'Implemented strict site security protocols'
    ]
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
    client: 'Tech Corp International',
    challenges: [
      'Meeting strict clean room standards',
      'Installing specialized HVAC systems',
      'Coordinating complex production line layouts',
      'Ensuring compliance with industrial regulations'
    ],
    solutions: [
      'Engaged clean room specialists for certification',
      'Custom-designed HVAC systems for precise control',
      'Used 3D modeling for production line optimization',
      'Worked closely with regulatory bodies throughout'
    ]
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
    client: 'Retail Holdings LLC',
    challenges: [
      'Creating cohesive design across diverse retail units',
      'Managing multiple tenant fit-outs simultaneously',
      'Optimizing customer flow and circulation',
      'Integrating advanced lighting and AV systems'
    ],
    solutions: [
      'Developed comprehensive design guidelines',
      'Created phased construction schedule',
      'Used customer flow simulation software',
      'Partnered with specialized lighting consultants'
    ]
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
    client: 'Development Partners',
    challenges: [
      'Maintaining consistency across multiple villas',
      'Coordinating with landscape and infrastructure teams',
      'Managing large-scale project logistics',
      'Ensuring timely completion of all units'
    ],
    solutions: [
      'Created standardized design templates with customization options',
      'Established integrated project management system',
      'Implemented efficient supply chain management',
      'Used parallel construction methodology'
    ]
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
    client: 'Logistics Solutions Group',
    challenges: [
      'Optimizing storage capacity and workflow',
      'Installing automated systems',
      'Ensuring safety compliance',
      'Minimizing operational downtime during handover'
    ],
    solutions: [
      'Used warehouse optimization software',
      'Partnered with automation system providers',
      'Implemented comprehensive safety protocols',
      'Created detailed training and handover program'
    ]
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
    client: 'Fortune 500 Company',
    challenges: [
      'Creating flexible workspace solutions',
      'Integrating advanced AV and collaboration technology',
      'Maintaining corporate brand identity',
      'Achieving LEED certification'
    ],
    solutions: [
      'Designed modular workspace systems',
      'Engaged technology integration specialists',
      'Developed custom branded design elements',
      'Implemented sustainable materials and systems'
    ]
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
    client: 'Property Developers LLC',
    challenges: [
      'Delivering diverse unit types on schedule',
      'Integrating smart home technology in all units',
      'Maintaining premium quality standards',
      'Coordinating common area amenities'
    ],
    solutions: [
      'Created efficient production schedule',
      'Standardized smart home installation process',
      'Implemented rigorous quality control system',
      'Used specialized teams for amenity areas'
    ]
  },
];

// Generate static params for all projects
export function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = allProjects.find(p => p.id === Number(resolvedParams.id));

  if (!project) {
    return (
      <main className="min-h-screen overflow-x-hidden w-full flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-32">
          <h1 className="text-4xl font-bold text-dark mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-gold hover:underline text-lg">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <ProjectContent project={project} />
      <Footer />
      <FloatingActions />
    </main>
  );
}
