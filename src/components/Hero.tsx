
export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20">

            {/* Decorative Circles / Blobs */}
            <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-white/30 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-[var(--color-pop-yellow)]/20 rounded-full blur-3xl z-0" />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 flex flex-col items-center">

                {/* Floating Sticker Effect */}
                <div
                    className="absolute -top-16 -right-2 md:-right-20 w-20 h-20 md:w-32 md:h-32 bg-[var(--color-pop-green)] rounded-full flex items-center justify-center text-white font-bold text-[10px] md:text-xs uppercase tracking-widest z-20 shadow-lg border-2 border-white border-dashed rotate-12"
                >
                    <div className="text-center p-2 leading-tight">
                        Nouveau<br />Concept<br />2026
                    </div>
                </div>

                <h1
                    className="text-[12vw] md:text-9xl font-black text-[var(--color-pop-dark)] leading-[0.9] tracking-tighter drop-shadow-sm mb-6"
                >
                    <span className="block text-outline-white drop-shadow-none text-transparent stroke-2">BLOSSOM</span>
                    <span className="block text-[var(--color-pop-dark)]">CAFÉ</span>
                </h1>

                <p
                    className="text-base md:text-2xl font-sans font-medium text-[var(--color-pop-dark)]/90 max-w-xs md:max-w-lg mx-auto mb-8 md:mb-10 bg-white/40 backdrop-blur-sm p-4 rounded-2xl rotate-1"
                >
                    Brunch. Coffee. Good Vibes.
                    <br />
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest mt-2 block text-[var(--color-pop-green)]">Toulouse Centre</span>
                </p>

                <div
                    className="flex flex-col md:flex-row gap-4 w-full md:w-auto px-4 md:px-0"
                >
                    <a href="#menu" className="w-full md:w-auto px-8 py-4 bg-[var(--color-pop-green)] text-white font-bold rounded-full shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all border-2 border-[var(--color-pop-dark)] uppercase tracking-wide">
                        Le Menu
                    </a>
                    <a href="tel:+33650216450" className="w-full md:w-auto px-8 py-4 bg-[var(--color-pop-yellow)] text-[var(--color-pop-dark)] font-bold rounded-full shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all border-2 border-[var(--color-pop-dark)] uppercase tracking-wide">
                        Réserver
                    </a>
                </div>
            </div>

            {/* Floating Food Elements (Placeholders) */}
            <div
                className="absolute bottom-10 left-[-20%] md:left-10 w-48 md:w-64 rotate-12 z-20 pointer-events-none opacity-80"
            >
                {/* Replace with actual image later */}
                <div className="w-full h-full aspect-square bg-orange-200 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl">🥞</div>
            </div>

            <div
                className="absolute top-20 right-[-10%] md:right-20 w-32 md:w-48 -rotate-12 z-0 pointer-events-none opacity-80"
            >
                {/* Replace with actual image later */}
                <div className="w-full h-full aspect-square bg-green-200 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl">🥞</div>
            </div>

            {/* Wave Separator Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] md:h-[100px] w-full fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};
