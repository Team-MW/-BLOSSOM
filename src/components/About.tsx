import { motion } from 'framer-motion';


export const About = () => {
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className="relative py-20 bg-white overflow-hidden" id="about">
            {/* Wavy separator top */}
            <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] md:h-[100px] w-full fill-[var(--color-pop-pink)]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-12">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Header */}
                    <div className="text-center space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-serif text-[var(--color-pop-dark)] leading-tight"
                        >
                            Un café engagé,<br />
                            <span className="text-[var(--color-pop-pink)] italic">une lieu de vie.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-medium text-[var(--color-pop-green)]"
                        >
                            Blossom Coffee est né d’une envie simple : créer un endroit où l’on se sent bien.
                        </motion.p>
                    </div>

                    {/* Content Blocks */}
                    <div className="grid gap-12 text-lg text-gray-700 leading-relaxed">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-pop-cream)] p-8 md:p-12 rounded-3xl border-2 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)]"
                        >
                            <p className="mb-6">
                                Un lieu chaleureux, vivant, sincère. Un endroit où l’on vient autant pour boire un bon café que pour partager un brunch, déjeuner entre amis ou prendre le temps de souffler.
                            </p>
                            <p className="font-bold text-[var(--color-pop-dark)]">
                                Ici, chaque détail compte.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-serif text-[var(--color-pop-dark)]">Cuisine & Terroir</h3>
                                <p>
                                    Nous sélectionnons des cafés de qualité, des produits frais, locaux et de saison, et nous cuisinons maison, chaque jour, avec amour.
                                    Du brunch gourmand aux assiettes salées de la journée, notre cuisine se déguste en continu de 11h00 à 18h45.
                                </p>
                                <p>
                                    Parce que bien manger, c’est aussi prendre soin de ceux qui nous entourent, nous travaillons au maximum avec des producteurs, artisans et créateurs locaux.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-serif text-[var(--color-pop-dark)]">Nos Valeurs</h3>
                                <p>
                                    Mais Blossom, c’est plus qu’une table ou un coffee shop. C’est un café engagé.
                                    Un lieu qui défend des valeurs humaines fortes : la bienveillance, l’inclusion et le respect.
                                </p>
                                <p>
                                    Nous avons à cœur de soutenir et de mettre en lumière les femmes — entrepreneures, créatrices, productrices — parce que l’égalité et la solidarité font partie de notre ADN.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Features List */}
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4 text-[var(--color-pop-dark)]"
                    >
                        {[
                            "☕ Café de spécialité",
                            "🥐 Brunch & cuisine maison",
                            "🌿 Produits locaux et responsables",
                            "🤍 Engagement humain et féminin",
                            "✨ Une ambiance comme à la maison"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white px-6 py-3 rounded-full border border-[var(--color-pop-dark)] font-bold shadow-sm hover:shadow-md transition-shadow cursor-default"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center pt-8"
                    >
                        <p className="text-3xl font-serif italic text-[var(--color-pop-dark)]">
                            "Prenez place. Restez longtemps. <br />
                            <span className="text-[var(--color-pop-pink)] not-italic decoration-wavy underline">Vous êtes chez vous.</span>"
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
