import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Club } from './components/Club';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Cursor } from './components/Cursor';
import { Menu } from './components/Menu';
import { Legal } from './components/Legal';
import { Reviews } from './components/Reviews';

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
      <Menu />
      <About />
      <Club />
      <Reviews />
      <Contact onOpenLegal={() => setIsLegalOpen(true)} />

      <AnimatePresence>
        {isLegalOpen && <Legal onClose={() => setIsLegalOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}

export default App;
