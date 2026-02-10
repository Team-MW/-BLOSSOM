import carteImg from '../assets/carte.png';

export const Menu = () => {


    return (
        <section id="menu" className="py-20 bg-[var(--color-pop-cream)] relative overflow-hidden">

            {/* Decorative Elements */}
            <div className="absolute top-20 right-[-50px] w-64 h-64 bg-[var(--color-pop-pink)] rounded-full blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-20 left-[-50px] w-80 h-80 bg-[var(--color-pop-yellow)] rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-pop-green)] font-bold uppercase tracking-widest text-sm mb-4 block">Gourmandise 100% Maison</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-pop-dark)] mb-4">
                        La Carte
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-[var(--color-pop-dark)]/80 mb-6">
                        Des produits frais, de saison, et beaucoup d'amour. Tout est fait sur place chaque matin.
                    </p>

                    {/* Opening Hours Highlight */}
                    <div className="inline-block bg-[var(--color-pop-dark)] text-[var(--color-pop-yellow)] px-6 py-3 rounded-xl border-2 border-[var(--color-pop-yellow)] shadow-[4px_4px_0px_0px_var(--color-pop-yellow)] transform -rotate-1 mb-8">
                        <p className="text-xl font-bold font-serif">
                            Ouvert 7j/7 • 11h00 - 18h45
                        </p>
                    </div>

                    {/* Image Embed */}
                    <div className="w-full max-w-4xl mx-auto mb-12 bg-white rounded-3xl overflow-hidden border-4 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)] relative group">
                        <img
                            src={carteImg}
                            className="w-full h-auto object-contain"
                            alt="Menu Blossom Coffee"
                        />
                    </div>
                </div>




            </div>
        </section>
    );
};
