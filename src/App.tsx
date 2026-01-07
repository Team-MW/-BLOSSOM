import { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Club } from './components/Club';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Cursor } from './components/Cursor';

function App() {
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
      <About />
      <Club />
      <Contact />
    </main>
  );
}

export default App;
