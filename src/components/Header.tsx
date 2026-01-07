import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center pointer-events-none"
            >
                <div className="bg-white/90 backdrop-blur-md px-2 py-2 rounded-full border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)] pointer-events-auto flex items-center gap-2 max-w-[90%] md:max-w-none">

                    {/* Logo Mini */}
                    <div className="w-10 h-10 bg-[var(--color-pop-pink)] rounded-full flex items-center justify-center font-serif font-black text-[var(--color-pop-dark)] border border-[var(--color-pop-dark)] shrink-0">
                        B.
                    </div>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex gap-1">
                        {['Menu', 'Concept', 'Club', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-[var(--color-pop-green)] hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Mini */}
                    <a href="#book" className="hidden md:block ml-2 px-5 py-2 bg-[var(--color-pop-yellow)] text-[var(--color-pop-dark)] rounded-full font-bold text-sm border border-[var(--color-pop-dark)] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all">
                        Book
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center bg-[var(--color-pop-yellow)] rounded-full border border-[var(--color-pop-dark)] text-[var(--color-pop-dark)]"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {['Menu', 'Concept', 'Club', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-serif font-bold text-[var(--color-pop-dark)] hover:text-[var(--color-pop-pink)] transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <a 
                                href="#book" 
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-8 px-8 py-4 bg-[var(--color-pop-yellow)] text-[var(--color-pop-dark)] rounded-full font-bold text-xl border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)]"
                            >
                                Réserver une table
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
