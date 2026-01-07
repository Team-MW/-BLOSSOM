import { motion } from 'framer-motion';

export const Club = () => (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 bg-[var(--color-pop-dark)] text-[var(--color-pop-cream)] overflow-hidden">

        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-pop-pink)_1px,_transparent_1px)] bg-[size:20px_20px]" />

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
            <div className="inline-block bg-[var(--color-pop-green)] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                Membres Uniquement
            </div>

            <h2 className="text-5xl md:text-8xl font-serif mb-8 text-[var(--color-pop-pink)] drop-shadow-lg leading-tight">
                Blossom<br />Circle Club
            </h2>

            <p className="text-xl md:text-2xl font-medium opacity-90 mb-12 max-w-xl mx-auto leading-relaxed">
                Le cercle le plus <span className="text-[var(--color-pop-yellow)] italic">croustillant</span> de Toulouse. Événements privés, dégustations en avant-première & good vibes.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button className="relative overflow-hidden group px-10 py-4 bg-[var(--color-pop-cream)] text-[var(--color-pop-dark)] font-bold rounded-full hover:scale-105 transition-transform duration-300">
                    <span className="relative z-10">Rejoindre la liste</span>
                    <div className="absolute inset-0 bg-[var(--color-pop-pink)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
                </button>
                <span className="text-sm font-light italic opacity-60">Actuellement complet</span>
            </div>
        </motion.div>
    </section>
);
