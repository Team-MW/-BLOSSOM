import { motion } from 'framer-motion';
import { MapPin, Train, Bus, CheckCircle2 } from 'lucide-react';

export const Location = () => {
    return (
        <section className="py-24 bg-[var(--color-pop-cream)] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--color-pop-green)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[var(--color-pop-pink)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Info Side */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-[var(--color-pop-pink)] text-white rounded-full text-sm font-bold uppercase tracking-wider"
                    >
                        Où nous trouver ?
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-[var(--color-pop-dark)] leading-tight"
                    >
                        Au Cœur de <br />
                        <span className="text-[var(--color-pop-green)] italic">Toulouse</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Address */}
                        <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)]">
                            <div className="bg-[var(--color-pop-yellow)] p-3 rounded-full border border-[var(--color-pop-dark)]">
                                <MapPin className="text-[var(--color-pop-dark)]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--color-pop-dark)] mb-1">Blossom Coffee</h3>
                                <p className="text-gray-600 font-medium">11 Rue des Trois Renards</p>
                                <p className="text-gray-600">31000 Toulouse</p>
                            </div>
                        </div>

                        {/* Accessibility */}
                        <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)]">
                            <div className="bg-[var(--color-pop-green)] p-3 rounded-full border border-[var(--color-pop-dark)]">
                                <CheckCircle2 className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--color-pop-dark)] mb-1">Accessibilité</h3>
                                <p className="text-gray-600">Notre établissement est entièrement accessible aux personnes à mobilité réduite (PMR). Rampe d'accès et toilettes adaptées.</p>
                            </div>
                        </div>

                        {/* Transport */}
                        <div className="flex gap-4">
                            <div className="flex-1 p-4 bg-white rounded-2xl border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)] flex items-center gap-3">
                                <Train className="text-[var(--color-pop-pink)]" />
                                <div>
                                    <p className="font-bold text-[var(--color-pop-dark)]">Métro A</p>
                                    <p className="text-xs text-gray-500">Esquirol</p>
                                </div>
                            </div>
                            <div className="flex-1 p-4 bg-white rounded-2xl border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)] flex items-center gap-3">
                                <Bus className="text-[var(--color-pop-pink)]" />
                                <div>
                                    <p className="font-bold text-[var(--color-pop-dark)]">Bus</p>
                                    <p className="text-xs text-gray-500">L4, L7, L9</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Map Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="h-full min-h-[400px] w-full relative"
                >
                    <div className="absolute inset-0 bg-[var(--color-pop-dark)] rounded-3xl transform rotate-2 translate-x-2 translate-y-2 opacity-20" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.336477864453!2d1.441936!3d43.600615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6269555555%3A0x1234567890abcdef!2s11%20Rue%20des%20Trois%20Renards%2C%2031000%20Toulouse!5e0!3m2!1sen!2sfr!4v1620000000000!5m2!1sen!2sfr"
                        className="w-full h-full rounded-3xl border-4 border-[var(--color-pop-dark)] relative z-10"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    );
};
