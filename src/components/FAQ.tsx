import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Acceptez-vous les réservations ?",
        answer: "Pas de réservation chez Blossom ! Premier arrivé, premier servi. Passez nous voir, on trouvera toujours une petite place pour vous."
    },
    {
        question: "Avez-vous des options végétariennes / vegan ?",
        answer: "Absolument ! Notre menu change régulièrement mais nous avons toujours des options gourmandes pour tous les régimes (végé, vegan, sans gluten...)."
    },
    {
        question: "Les animaux sont-ils acceptés ?",
        answer: "Oui, vos compagnons à quatre pattes sont les bienvenus tant qu'ils sont sages et tenus en laisse."
    },
    {
        question: "Peut-on travailler sur place ?",
        answer: "Nous adorons les freelances, mais nous limitons l'usage des ordinateurs le week-end et entre 12h et 14h pour garder une ambiance conviviale !"
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[var(--color-pop-dark)] text-[var(--color-pop-cream)] relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-pop-pink)_1px,_transparent_1px)] bg-[size:20px_20px]" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-[var(--color-pop-pink)] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        Des questions ?
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-pop-cream)]">
                        FAQ
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold font-serif pr-8">{faq.question}</span>
                                <span className="bg-[var(--color-pop-green)] p-1 rounded-full text-white shrink-0">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-[var(--color-pop-cream)]/80 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
