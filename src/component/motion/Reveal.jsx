import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const presets = {
    up: {
        hidden: { opacity: 0, y: 42 },
        visible: { opacity: 1, y: 0 },
    },
    down: {
        hidden: { opacity: 0, y: -28 },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: -48 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 48 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.88 },
        visible: { opacity: 1, scale: 1 },
    },
    blur: {
        hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
};

export const Reveal = ({
    children,
    variant = 'up',
    delay = 0,
    duration = 0.7,
    className = '',
    as = 'div',
    once = true,
    amount = 0.25,
}) => {
    const MotionTag = motion[as] || motion.div;
    const animation = presets[variant] || presets.up;

    return (
        <MotionTag
            className={className}
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount, margin: '-40px' }}
            transition={{ duration, delay, ease }}
        >
            {children}
        </MotionTag>
    );
};

export const Stagger = ({
    children,
    className = '',
    delayChildren = 0.08,
    staggerChildren = 0.1,
    once = true,
    amount = 0.2,
}) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount, margin: '-40px' }}
        variants={{
            hidden: {},
            visible: {
                transition: { delayChildren, staggerChildren },
            },
        }}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({
    children,
    className = '',
    variant = 'up',
    as = 'div',
}) => {
    const MotionTag = motion[as] || motion.div;
    const animation = presets[variant] || presets.up;

    return (
        <MotionTag
            className={className}
            variants={{
                hidden: animation.hidden,
                visible: {
                    ...animation.visible,
                    transition: { duration: 0.55, ease },
                },
            }}
        >
            {children}
        </MotionTag>
    );
};

export default Reveal;
