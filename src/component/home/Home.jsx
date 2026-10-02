import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 90]);
    const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="home section" id="home" ref={sectionRef}>
            <motion.div
                className="home_container container grid"
                style={{ y: parallaxY, opacity: fadeOut }}
            >
                <div className="home_content grid">
                    <Social />

                    <motion.div
                        className="home_img"
                        initial={{
                            scale: 0,
                            x: isMobile ? 0 : '-100%',
                            y: isMobile ? 150 : 0,
                        }}
                        animate={{ scale: 1, x: 0, y: 0 }}
                        transition={{
                            scale: { duration: 0.6, ease: 'easeOut' },
                            x: { duration: 0.8, ease: 'easeInOut', delay: 0.8 },
                            y: { duration: 0.8, ease: 'easeInOut', delay: 0.8 },
                        }}
                    ></motion.div>

                    <Data />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 1 }}
                >
                    <ScrollDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;
