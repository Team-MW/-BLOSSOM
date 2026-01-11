import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface RevealSectionProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
}

export const RevealSection = ({ children, width = "100%" }: RevealSectionProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
