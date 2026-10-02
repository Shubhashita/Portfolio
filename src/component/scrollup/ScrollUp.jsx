import React, { useEffect, useState } from 'react';
import './scrollUp.css';
import { scrollToTarget } from '../../hooks/useLenis';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollUp = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY >= 560);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    className="scrollup show-scroll"
                    onClick={() => scrollToTarget('#home', { offset: 0 })}
                    aria-label="Scroll to top"
                    initial={{ opacity: 0, y: 24, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.85 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.92 }}
                >
                    <i className="uil uil-arrow-up scrollup__icon"></i>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollUp;
