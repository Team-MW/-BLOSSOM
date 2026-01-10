import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpeg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
}

function ParallaxStrip({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);

    // For drag physics
    const dragFactor = useRef<number>(0);

    useAnimationFrame((_t, delta) => {
        // Reduced base movement for "slower" feel
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Apply scroll-based velocity (optional)
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += moveBy * Math.abs(velocityFactor.get());

        // Apply drag-based velocity (decaying)
        if (Math.abs(dragFactor.current) > 0.01) {
            // Significant boost from drag and longer lasting decay for "vif"
            moveBy += dragFactor.current * (delta / 10);
            dragFactor.current *= 0.92; // Decay
        }

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className="parallax overflow-hidden tracking-tight leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap"
        >
            <motion.div
                className="scroller flex flex-nowrap gap-4"
                style={{ x }}
                onPan={(_e, info) => {
                    // High sensitivity for direct control feeling
                    dragFactor.current += info.delta.x * 2;
                }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export const ImageStrip = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5];

    return (
        <section className="w-full bg-[var(--color-pop-cream)] pb-20 pt-10 overflow-hidden space-y-8 cursor-grab active:cursor-grabbing">

            {/* Row 1 - Slower base speed */}
            <ParallaxStrip baseVelocity={-0.5}>
                {slides.map((slide, index) => (
                    <div key={`strip-1-${index}`} className="w-[300px] h-[200px] mx-2 shrink-0 inline-block pointer-events-none relative rounded-xl overflow-hidden shadow-md border-2 border-[var(--color-pop-pink)]">
                        <img
                            src={slide}
                            alt={`Gourmandise ${index + 1}`}
                            className="w-full h-full object-cover"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </ParallaxStrip>

            {/* Row 2 - Slower base speed */}
            <ParallaxStrip baseVelocity={0.5}>
                {slides.map((slide, index) => (
                    <div key={`strip-2-${index}`} className="w-[300px] h-[200px] mx-2 shrink-0 inline-block pointer-events-none relative rounded-xl overflow-hidden shadow-md border-2 border-[var(--color-pop-pink)]">
                        <img
                            src={slide}
                            alt={`Gourmandise ${index + 1}`}
                            className="w-full h-full object-cover"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </ParallaxStrip>

        </section>
    );
};
