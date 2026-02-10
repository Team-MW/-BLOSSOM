import { Instagram, MapPin, Clock, Phone } from 'lucide-react';

export const Contact = ({ onOpenLegal }: { onOpenLegal: () => void }) => (
    <section id="contact" className="py-20 bg-[var(--color-pop-pink)] text-[var(--color-pop-dark)] relative overflow-hidden">

        {/* Decorative Wave Top */}
        <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[40px] w-full fill-[var(--color-pop-dark)]">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="container mx-auto px-6 pt-20">
            <div
                className="bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-20 shadow-xl max-w-5xl mx-auto border-4 border-[var(--color-pop-dark)]"
            >
                <div className="grid md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[var(--color-pop-green)]">On se voit quand ?</h2>

                        <div
                            className="space-y-6 text-lg font-medium"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[var(--color-pop-yellow)] shrink-0 mt-1" />
                                <p>11 Rue des Trois Renards,<br />31000 Toulouse</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-[var(--color-pop-yellow)] shrink-0 mt-1" />
                                <a href="tel:+33650216450" className="hover:text-[var(--color-pop-green)]">06 50 21 64 50</a>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-[var(--color-pop-yellow)] shrink-0 mt-1" />
                                <div className="text-sm">
                                    <p className="flex justify-between w-48 border-b border-[var(--color-pop-dark)]/10 pb-1 mb-1">
                                        <span>Lundi</span> <span>11:00–18:45</span>
                                    </p>
                                    <p className="flex justify-between w-48 border-b border-[var(--color-pop-dark)]/10 pb-1 mb-1">
                                        <span>Mardi</span> <span>11:00–18:45</span>
                                    </p>
                                    <p className="flex justify-between w-48 border-b border-[var(--color-pop-dark)]/10 pb-1 mb-1">
                                        <span>Mercredi</span> <span>11:00–18:45</span>
                                    </p>
                                    <p className="flex justify-between w-48 border-b border-[var(--color-pop-dark)]/10 pb-1 mb-1">
                                        <span>Jeudi</span> <span>11:00–18:45</span>
                                    </p>
                                    <p className="flex justify-between w-48 border-b border-[var(--color-pop-dark)]/10 pb-1 mb-1">
                                        <span>Vendredi</span> <span>11:00–18:45</span>
                                    </p>
                                    <p className="flex justify-between w-48 border-b border-[var(--color-pop-dark)]/10 pb-1 mb-1">
                                        <span>Samedi</span> <span>11:00–18:45</span>
                                    </p>
                                    <p className="flex justify-between w-48">
                                        <span>Dimanche</span> <span>11:00–18:45</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center md:items-start">
                        <div className="flex flex-col gap-8 justify-center h-full w-full">

                            {/* Social Card */}
                            <div className="bg-[var(--color-pop-yellow)] rotate-2 p-8 rounded-3xl border-4 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)] hover:rotate-1 hover:scale-[1.02] transition-all cursor-default relative overflow-hidden group w-full max-w-sm mx-auto md:mx-0">

                                {/* Decor */}
                                <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all" />

                                <h3 className="font-serif text-3xl mb-3 text-[var(--color-pop-dark)]">Suivez nos aventures</h3>
                                <p className="mb-8 font-medium opacity-90 text-[var(--color-pop-dark)]">
                                    Les coulisses, les events et du latte art. <br />
                                    <span className="text-sm font-bold uppercase tracking-widest mt-2 block opacity-75">@blossom.coffee</span>
                                </p>

                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/blossom.coffees/" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Instagram" className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border-2 border-[var(--color-pop-dark)] hover:bg-[var(--color-pop-pink)] transition-all font-bold shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] text-sm md:text-base">
                                        <Instagram size={20} />
                                        <span>Insta</span>
                                    </a>
                                    <a href="https://www.tiktok.com/@blossom.coffee" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur TikTok" className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border-2 border-[var(--color-pop-dark)] hover:bg-[var(--color-pop-pink)] transition-all font-bold shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] text-sm md:text-base">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok">
                                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                        </svg>
                                        <span>TikTok</span>
                                    </a>
                                </div>
                            </div>

                            {/* Mini Map Visual (Abstract) */}
                            <div className="bg-[var(--color-pop-green)] -rotate-1 p-6 rounded-3xl border-4 border-[var(--color-pop-dark)] shadow-[8px_8px_0px_0px_var(--color-pop-dark)] text-white w-full max-w-xs self-end md:self-end mx-auto md:mx-0">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white text-[var(--color-pop-dark)] rounded-full border-2 border-[var(--color-pop-dark)]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg leading-tight">Centre Ville</p>
                                        <p className="text-sm opacity-90">Juste à côté du Capitole</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center mt-20 flex flex-col items-center gap-2 text-[var(--color-pop-dark)]/50 font-bold uppercase tracking-widest text-sm">
                <span>© 2026 Blossom Coffee - Développé par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-pop-green)] transition-all">Microdidact</a></span>
                <button onClick={onOpenLegal} className="hover:text-[var(--color-pop-dark)] underline decoration-2 underline-offset-4 decoration-[var(--color-pop-green)] transition-all">
                    Mentions Légales
                </button>
            </div>
        </div>
    </section >
);
