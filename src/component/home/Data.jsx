import React from 'react';
import { motion } from 'framer-motion';

const Data = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1.4,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <motion.div 
            className="home_data"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={itemVariants} className="home_title">Shubhashita Singh</motion.h1>
            <motion.h3 variants={itemVariants} className="home_subtitle">Backend Developer</motion.h3>
            <motion.p variants={itemVariants} className="home_description">Where performance meets reliability behind the scenes.
                Creating backend solutions that scale with confidence.</motion.p>

            <motion.a variants={itemVariants} href='#contact' className="button button--flex">
                Say Hello
            </motion.a>
        </motion.div>
    )
}

export default Data;