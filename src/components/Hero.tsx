import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20">

            {/* Decorative Circles / Blobs */}
            <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-white/30 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-[var(--color-pop-yellow)]/20 rounded-full blur-3xl z-0" />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 flex flex-col items-center">

                {/* Floating Sticker Effect */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-4 md:-right-20 w-24 h-24 md:w-32 md:h-32 bg-[var(--color-pop-green)] rounded-full flex items-center justify-center text-white font-bold text-xs uppercase tracking-widest z-20 shadow-lg border-2 border-white border-dashed"
                >
                    <div className="text-center p-2 leading-tight">
                        Nouveau<br />Concept<br />2026
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="text-6xl md:text-9xl font-black text-[var(--color-pop-dark)] leading-[0.9] tracking-tighter drop-shadow-sm mb-6"
                >
                    <span className="block text-outline-white drop-shadow-none text-transparent stroke-2">BLOSSOM</span>
                    <span className="block text-[var(--color-pop-dark)]">CAFÉ</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-2xl font-sans font-medium text-[var(--color-pop-dark)]/90 max-w-lg mx-auto mb-10 bg-white/40 backdrop-blur-sm p-4 rounded-2xl rotate-1"
                >
                    Brunch. Coffee. Good Vibes.
                    <br />
                    <span className="text-sm font-bold uppercase tracking-widest mt-2 block text-[var(--color-pop-green)]">Paris 9ème</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-4"
                >
                    <a href="#menu" className="px-8 py-4 bg-[var(--color-pop-green)] text-white font-bold rounded-full shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all border-2 border-[var(--color-pop-dark)] uppercase tracking-wide">
                        Le Menu
                    </a>
                    <a href="#book" className="px-8 py-4 bg-[var(--color-pop-yellow)] text-[var(--color-pop-dark)] font-bold rounded-full shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all border-2 border-[var(--color-pop-dark)] uppercase tracking-wide">
                        Réserver
                    </a>
                </motion.div>
            </div>

            {/* Floating Food Elements (Placeholders) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-[-20%] md:left-10 w-48 md:w-64 rotate-12 z-20 pointer-events-none opacity-80"
            >
                {/* Replace with actual image later */}
                <div className="w-full h-full aspect-square bg-orange-200 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl">🥞</div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 right-[-10%] md:right-20 w-32 md:w-48 -rotate-12 z-0 pointer-events-none opacity-80"
            >
                {/* Replace with actual image later */}
                <div className="w-full h-full aspect-square bg-green-200 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl">🥑</div>
            </motion.div>

            {/* Wave Separator Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] md:h-[100px] w-full fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};
