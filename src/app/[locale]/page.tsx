import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Skills />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

