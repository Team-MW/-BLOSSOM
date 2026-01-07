import { motion } from 'framer-motion';

export const About = () => (
    <section id="about" className="relative min-h-[80vh] flex items-center justify-center py-20 bg-white">
        {/* Wavy separator top */}
        <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] md:h-[100px] w-full fill-[var(--color-pop-pink)]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute top-0 -left-4 w-full h-full bg-[var(--color-pop-yellow)] rounded-3xl rotate-[-2deg] z-0" />
                    <div className="relative bg-[var(--color-pop-green)] p-10 rounded-3xl rotate-2 text-white shadow-xl z-10">
                        <h3 className="text-4xl font-serif mb-4">Le Concept</h3>
                        <p className="text-lg font-medium leading-relaxed">
                            Plus qu'un café, une destination. Ici, on prend le petit-déjeuner au sérieux (mais pas nous-mêmes).
                            <br /><br />
                            Pancakes fluffy, Matcha latte onctueux, et une playlist qui groove.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 text-[var(--color-pop-dark)]">
                        Good Food,<br />
                        <span className="text-[var(--color-pop-pink)]">Good Mood.</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-md">
                        Ingrédients locaux, recettes signatures et amour inconditionnel pour le café de spécialité.
                    </p>
                    <a href="#" className="inline-block border-b-2 border-[var(--color-pop-dark)] pb-1 font-bold text-[var(--color-pop-dark)] hover:text-[var(--color-pop-green)] hover:border-[var(--color-pop-green)] transition-colors">
                        Découvrir notre histoire
                    </a>
                </motion.div>

            </div>
        </div>
    </section>
);
