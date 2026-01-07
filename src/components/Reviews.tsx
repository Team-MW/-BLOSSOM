import { Star, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Reviews = () => {
    return (
        <section id="reviews" className="py-20 bg-[var(--color-pop-cream)] text-[var(--color-pop-dark)] overflow-hidden relative">

            {/* Background Decor */}
            <div className="absolute top-10 right-[-100px] w-64 h-64 bg-[var(--color-pop-pink)]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-[-100px] w-64 h-64 bg-[var(--color-pop-yellow)]/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <span className="inline-block bg-[var(--color-pop-green)] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)]">
                        Vos Avis
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-4">
                        Ils nous kiffent <span className="text-[var(--color-pop-pink)]">Grave</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-[var(--color-pop-yellow)] drop-shadow-sm">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={32} fill="currentColor" strokeWidth={2} stroke="var(--color-pop-dark)" />
                        ))}
                    </div>
                    <p className="mt-4 font-bold text-xl">4.9/5 sur Google</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-3xl border-2 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)]"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-[var(--color-pop-pink)] rounded-full flex items-center justify-center font-bold text-xl border border-[var(--color-pop-dark)]">
                                L
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Léa D.</h4>
                                <div className="flex text-[var(--color-pop-yellow)]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" strokeWidth={1} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="font-medium text-gray-700 leading-relaxed">
                            "Le meilleur café de Toulouse ! L'ambiance est incroyable, la déco est super colorée et l'équipe est adorable. Les pancakes sont une tuerie."
                        </p>
                    </motion.div>

                    {/* Review 2 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-3xl border-2 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)] md:translate-y-8"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-[var(--color-pop-yellow)] rounded-full flex items-center justify-center font-bold text-xl border border-[var(--color-pop-dark)]">
                                T
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Thomas M.</h4>
                                <div className="flex text-[var(--color-pop-yellow)]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" strokeWidth={1} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="font-medium text-gray-700 leading-relaxed">
                            "Un spot parfait pour bosser ou chiller. Le café est excellent (vrai specialty coffee) et les pâtisseries maison sont à tomber. Je recommande !"
                        </p>
                    </motion.div>

                    {/* Review 3 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-3xl border-2 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)]"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-[var(--color-pop-green)] rounded-full flex items-center justify-center font-bold text-xl border border-[var(--color-pop-dark)] text-white">
                                S
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Sarah B.</h4>
                                <div className="flex text-[var(--color-pop-yellow)]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" strokeWidth={1} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="font-medium text-gray-700 leading-relaxed">
                            "Gros coup de cœur pour le Blossom ! C'est pop, c'est frais, ça change. Le brunch du dimanche est devenu notre rituel."
                        </p>
                    </motion.div>
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://www.google.com/search?q=blossom+coffee+toulouse+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Lire tous les avis sur Google"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--color-pop-dark)] rounded-full font-bold text-lg border-2 border-[var(--color-pop-dark)] shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                        <MessageCircle size={24} />
                        Voir tous les avis Google
                    </a>
                </div>

            </div>
        </section>
    );
};
