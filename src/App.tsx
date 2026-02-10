import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Cursor } from './components/Cursor';
import { Menu } from './components/Menu';
import { ImageStrip } from './components/ImageStrip';
import { Legal } from './components/Legal';
import { Reviews } from './components/Reviews';
import { OurConcept } from './components/OurConcept';
import { Location } from './components/Location';
import { Club } from './components/Club';
import { FAQ } from './components/FAQ';
import { RevealSection } from './components/RevealSection';

function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden selection:bg-[var(--color-pop-yellow)] selection:text-[var(--color-pop-dark)]">
      <Cursor />
      <Header />
      <Hero />
      <OurConcept />
      <RevealSection>
        <ImageStrip />
      </RevealSection>
      <RevealSection>
        <About />
      </RevealSection>
      <RevealSection>
        <Menu />
      </RevealSection>
      <RevealSection>
        <FAQ />
      </RevealSection>
      <RevealSection>
        <Location />
      </RevealSection>
      <RevealSection>
        <Reviews />
      </RevealSection>
      <RevealSection>
        <Club />
      </RevealSection>
      <RevealSection>
        <Contact onOpenLegal={() => setIsLegalOpen(true)} />
      </RevealSection>

      <AnimatePresence>
        {isLegalOpen && <Legal onClose={() => setIsLegalOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}

export default App;
