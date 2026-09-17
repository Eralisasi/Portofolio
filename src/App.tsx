import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Results from '@/components/Results';
import About from '@/components/About';
import Experience from '@/components/Experience';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Process />
        <Results />
        <About />
        <Experience />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
