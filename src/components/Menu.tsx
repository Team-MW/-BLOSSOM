// import brunchMenuPdf from '../assets/carte-brunch-toulouse-blossom-coffee.pdf';

/* const MenuSection = ({ title, items, colorClass }: { title: string, items: { name: string, desc: string, price: string }[], colorClass: string }) => (
    <div className="mb-12 last:mb-0">
        <h3
            className={`text-3xl md:text-5xl font-serif mb-8 text-[var(--color-pop-dark)] uppercase tracking-tight`}
        >
            <span className={`bg-[${colorClass}] px-2 text-white transform -skew-x-6 inline-block`}>{title}</span>
        </h3>
        <div
            className="grid md:grid-cols-2 gap-6"
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-white border-2 border-[var(--color-pop-dark)] rounded-2xl p-6 shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all cursor-default"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif font-bold text-xl uppercase text-[var(--color-pop-dark)]">{item.name}</h4>
                        <span className="font-bold text-[var(--color-pop-green)] bg-[var(--color-pop-cream)] px-2 py-1 rounded-full border border-[var(--color-pop-dark)] text-sm">{item.price}</span>
                    </div>
                    <p className="font-medium text-[var(--color-pop-dark)]/70 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    </div>
); */

export const Menu = () => {
    /* const pancakesSucres = [
        {
            name: "Fruits de Saison",
            desc: "2 gros pancakes, Fruits de saison, Crémeux mascarpone à la vanille, Noisettes torréfiées",
            price: "9,50€"
        },
        {
            name: "Beurre de Cacahuète & Spéculos",
            desc: "2 gros pancakes, Crémeux mascarpone à la vanille, banane et spéculos",
            price: "9,50€"
        },
        {
            name: "Pistachio et Fleur d'Oranger",
            desc: "2 gros pancakes, Coulis pistache, Crémeux mascarpone à la fleur d'oranger et aux fruits rouges frais",
            price: "12,50€"
        },
        {
            name: "Pomme Caramélisée et Canelle",
            desc: "2 gros pancakes, Pommes caramélisée à la canelle, Coulis caramel, Crémeux mascarpone maison",
            price: "9,50€"
        }
    ];

    const pancakesSales = [
        {
            name: "The Classic Bacon",
            desc: "2 gros pancakes, Bacon croustillant, Œuf au plat, Sirop d'érable, Beurre demi-sel",
            price: "11,50€"
        },
        {
            name: "Avocado Salmon",
            desc: "2 gros pancakes, Saumon fumé, Avocat frais, Crème ciboulette, Graines de sésame",
            price: "13,00€"
        },
        {
            name: "Chèvre Miel & Noix",
            desc: "2 gros pancakes, Fromage de chèvre, Miel de fleurs, Noix concassées, Roquette",
            price: "10,50€"
        },
        {
            name: "Sunny Side Up",
            desc: "2 gros pancakes, Œufs brouillés crémeux, Champignons sautés, Tomates confites",
            price: "11,00€"
        }
    ];

    const boissons = [
        {
            name: "Latte Art Signature",
            desc: "Double espresso, Lait micro-moussé, Design du jour",
            price: "4,50€"
        },
        {
            name: "Matcha Latte Ceremonial",
            desc: "Thé vert Matcha bio du Japon, Lait d'avoine, Touche de vanille",
            price: "5,00€"
        },
        {
            name: "Homemade Iced Tea",
            desc: "Thé noir, Pêche blanche, Menthe fraîche, Citron",
            price: "4,00€"
        },
        {
            name: "Fresh Smoothie",
            desc: "Banane, Fraise, Orange pressée, Gingembre",
            price: "5,50€"
        }
    ]; */

    // SECTION "LA CARTE" - HIDDEN (uncomment to display)
    return null;

    /* return (
        <section id="menu" className="py-20 bg-[var(--color-pop-cream)] relative overflow-hidden">

            {/* Decorative Elements *\/}
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
                    <p className="max-w-2xl mx-auto text-lg text-[var(--color-pop-dark)]/80">
                        Des produits frais, de saison, et beaucoup d'amour. Tout est fait sur place chaque matin.
                    </p>
                </div>

                <MenuSection title="Pancakes Sucrés" items={pancakesSucres} colorClass="var(--color-pop-pink)" />
                <MenuSection title="Pancakes Salés" items={pancakesSales} colorClass="var(--color-pop-yellow)" />
                <MenuSection title="Boissons & Coffee" items={boissons} colorClass="var(--color-pop-green)" />

                <div className="text-center mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
                    <a href="tel:+33650216450" className="inline-block px-10 py-5 bg-[var(--color-pop-dark)] text-white font-bold rounded-full shadow-[4px_4px_0px_0px_var(--color-pop-green)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-pop-green)] transition-all uppercase tracking-wide">
                        Réserver ma table
                    </a>
                    <a
                        href={brunchMenuPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-5 bg-white text-[var(--color-pop-dark)] border-2 border-[var(--color-pop-dark)] font-bold rounded-full shadow-[4px_4px_0px_0px_var(--color-pop-dark)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-pop-dark)] transition-all uppercase tracking-wide">
                        Voir le Menu (PDF)
                    </a>
                </div>

            </div>
        </section>
    ); */
};
