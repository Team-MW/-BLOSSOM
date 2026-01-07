import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Mail, Clock } from 'lucide-react';

export const Contact = () => (
    <section className="py-20 bg-[var(--color-pop-pink)] text-[var(--color-pop-dark)] relative overflow-hidden">

        {/* Decorative Wave Top */}
        <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[40px] w-full fill-[var(--color-pop-dark)]">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="container mx-auto px-6 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl max-w-5xl mx-auto border-4 border-[var(--color-pop-dark)]"
            >
                <div className="grid md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[var(--color-pop-green)]">On se voit quand ?</h2>

                        <div className="space-y-6 text-lg font-medium">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[var(--color-pop-yellow)] shrink-0 mt-1" />
                                <p>5 Place du Capitole,<br />31000 Toulouse</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-[var(--color-pop-yellow)] shrink-0 mt-1" />
                                <p>Mardi - Dimanche<br />09h00 - 18h00</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-[var(--color-pop-yellow)] shrink-0 mt-1" />
                                <a href="mailto:hello@blossom.com" className="hover:text-[var(--color-pop-green)]">hello@blossom.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center md:items-start">
                        <div className="bg-[var(--color-pop-yellow)] rotate-3 p-8 rounded-2xl w-full text-center border-2 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-pop-dark)] transition-all cursor-pointer">
                            <h3 className="font-serif text-2xl mb-2">Suivez nos aventures</h3>
                            <p className="mb-6 opacity-80">Les coulisses, les events et du latte art.</p>
                            <div className="flex justify-center gap-4">
                                <a href="#" className="p-3 bg-white rounded-full border-2 border-[var(--color-pop-dark)] hover:bg-[var(--color-pop-pink)] transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="p-3 bg-white rounded-full border-2 border-[var(--color-pop-dark)] hover:bg-[var(--color-pop-pink)] transition-colors">
                                    <Facebook size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            <div className="text-center mt-20 text-[var(--color-pop-dark)]/50 font-bold uppercase tracking-widest text-sm">
                © 2026 Blossom Café - Développé par Microdidact
            </div>
        </div>
    </section>
);
