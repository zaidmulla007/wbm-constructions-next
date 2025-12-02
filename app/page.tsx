import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <div className="space-y-0">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contact />
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}
