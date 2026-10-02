import React from 'react';
import { motion } from 'framer-motion';

const Social = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 2.4, // Wait for Data to finish staggering
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1, 
            transition: { type: "spring", stiffness: 300, damping: 20 } 
        }
    };

    return (
        <motion.div 
            className="home_social"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.a variants={itemVariants} href="https://github.com/Shubhashita" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
                <i className='uil uil-github-alt'></i>
            </motion.a>
            <motion.a variants={itemVariants} href="https://www.linkedin.com/in/shubhashita-singh/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
                <i className='uil uil-linkedin'></i>
            </motion.a>
        </motion.div>
    )
}

export default Social;