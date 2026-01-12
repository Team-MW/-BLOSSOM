import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpeg';
import slide4 from '../assets/slide4.jpg';

export const OurConcept = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="concept" ref={containerRef} className="py-16 bg-[var(--color-pop-yellow)] overflow-hidden relative">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-20 bg-[var(--color-pop-pink)] rotate-1 z-10 scale-110 -translate-y-10" />

            <div className="max-w-6xl mx-auto px-6 relative z-20">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Text Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-white border-2 border-[var(--color-pop-dark)] rounded-full text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--color-pop-dark)]">
                            Notre Concept
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-[var(--color-pop-dark)] leading-[0.9]">
                            Coffee Shop <br />
                            <span className="text-[var(--color-pop-pink)] italic">Reinvented</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-xl font-medium text-[var(--color-pop-dark)] opacity-90 leading-relaxed">
                            Plus qu'un simple café, Blossom est une expérience sensorielle.
                            Une fusion audacieuse entre l'art du café de spécialité et une
                            culture pop vibrante.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-default bg-[var(--color-pop-green)] px-6 py-4 rounded-2xl border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)] -rotate-2"
                            >
                                <span className="font-bold text-white text-lg">Good Vibes Only</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-default bg-white px-6 py-4 rounded-2xl border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)] rotate-2"
                            >
                                <span className="font-bold text-[var(--color-pop-dark)] text-lg">Specialty Coffee</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Image Grid Side */}
                    <div className="w-full md:w-1/2 relative min-h-[500px]">

                        {/* Blob Background using CSS or SVG */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-pop-pink)] rounded-full blur-3xl opacity-20 animate-pulse" />

                        <div className="grid grid-cols-2 gap-4 relative">
                            <motion.div style={{ y: y1 }} className="flex flex-col gap-4 mt-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, rotate: -2, zIndex: 10 }}
                                    className="border-4 border-[var(--color-pop-dark)] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_var(--color-pop-dark)] bg-white rotate-2 transition-all duration-300"
                                >
                                    <img src={slide1} alt="Ambiance Blossom" className="w-full h-56 object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, rotate: 2, zIndex: 10 }}
                                    className="border-4 border-[var(--color-pop-dark)] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_var(--color-pop-dark)] bg-white -rotate-1 transition-all duration-300"
                                >
                                    <img src={slide3} alt="Food Blossom" className="w-full h-48 object-cover" />
                                </motion.div>
                            </motion.div>

                            <motion.div style={{ y: y2 }} className="flex flex-col gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, rotate: 2, zIndex: 10 }}
                                    className="border-4 border-[var(--color-pop-dark)] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_var(--color-pop-dark)] bg-white -rotate-2 transition-all duration-300"
                                >
                                    <img src={slide2} alt="Coffee Art" className="w-full h-48 object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, rotate: -3, zIndex: 10 }}
                                    className="border-4 border-[var(--color-pop-dark)] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_var(--color-pop-dark)] bg-white rotate-3 transition-all duration-300"
                                >
                                    <img src={slide4} alt="Interior" className="w-full h-64 object-cover" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[40px] w-full fill-[var(--color-pop-pink)]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};
