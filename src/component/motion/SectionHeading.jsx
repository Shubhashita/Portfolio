import React from 'react';
import { motion } from 'framer-motion';
import './sectionHeading.css';

const ease = [0.22, 1, 0.36, 1];

const SectionHeading = ({ title, subtitle }) => {
    return (
        <div className="section-heading">
            <motion.h2
                className="section__title"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.65, ease }}
            >
                {title}
            </motion.h2>

            <motion.span
                className="section__subtitle section-heading__subtitle"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.12, ease }}
            >
                {subtitle}
            </motion.span>

            <motion.span
                className="section-heading__line"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.22, ease }}
                aria-hidden="true"
            />
        </div>
    );
};

export default SectionHeading;
