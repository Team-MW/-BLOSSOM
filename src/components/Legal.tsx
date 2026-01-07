import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const Legal = ({ onClose }: { onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[var(--color-pop-dark)]/90 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--color-pop-cream)]">
                    <h2 className="text-2xl font-serif font-bold text-[var(--color-pop-dark)]">Mentions Légales</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto space-y-8 text-[var(--color-pop-dark)]">

                    <section>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--color-pop-green)] rounded-full"></span>
                            Éditeur du site
                        </h3>
                        <p className="opacity-80 leading-relaxed">
                            Le site blossom-cafe.com est édité par la société <strong>BLOSSOM CAFÉ</strong>.<br />
                            Forme juridique : SARL au capital de 10 000 €<br />
                            Siège social : 11 Rue des Trois Renards, 31000 Toulouse<br />
                            Email : hello@blossom.com<br />
                            Téléphone : 06 50 21 64 50<br />
                            RCS Toulouse B 123 456 789<br />
                            N° TVA Intracommunautaire : FR 12 123456789
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--color-pop-yellow)] rounded-full"></span>
                            Hébergement
                        </h3>
                        <p className="opacity-80 leading-relaxed">
                            Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
                            Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA<br />
                            Site web : https://vercel.com
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--color-pop-pink)] rounded-full"></span>
                            Propriété Intellectuelle
                        </h3>
                        <p className="opacity-80 leading-relaxed">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--color-pop-dark)] rounded-full"></span>
                            Données Personnelles
                        </h3>
                        <p className="opacity-80 leading-relaxed">
                            Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent. Pour l'exercer, adressez-vous à BLOSSOM CAFÉ via l'email hello@blossom.com.
                        </p>
                    </section>

                </div>
            </motion.div>
        </motion.div>
    );
};
