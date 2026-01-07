import { motion } from 'framer-motion';

export const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none"
        >
            <div className="bg-white/90 backdrop-blur-md px-2 py-2 rounded-full border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)] pointer-events-auto flex items-center gap-2">

                {/* Logo Mini */}
                <div className="w-10 h-10 bg-[var(--color-pop-pink)] rounded-full flex items-center justify-center font-serif font-black text-[var(--color-pop-dark)] border border-[var(--color-pop-dark)]">
                    B.
                </div>

                {/* Links */}
                <nav className="flex gap-1">
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
                <a href="#book" className="ml-2 px-5 py-2 bg-[var(--color-pop-yellow)] text-[var(--color-pop-dark)] rounded-full font-bold text-sm border border-[var(--color-pop-dark)] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all">
                    Book
                </a>

            </div>
        </motion.header>
    );
};
