"use client";

import { Variants, useAnimationControls } from "framer-motion";
import React, { FC, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const ScrollToTopButton:FC = () => {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue:number) => {
            if (latestValue > 0.2) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="scrollTotopbutton"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <i className="las la-arrow-up"></i>
        </motion.button>
    );
}

export default ScrollToTopButton;