import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from './Data';
import './experience.css';

const ease = [0.22, 1, 0.36, 1];

// Heading animations
const eyebrowVariants = {
    hidden: { opacity: 0, letterSpacing: '0.35em', y: -12 },
    visible: {
        opacity: 0.85,
        letterSpacing: '0.22em',
        y: 0,
        transition: { duration: 0.7, ease },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.85, delay: 0.1, ease },
    },
};

const subheadingVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 0.85,
        y: 0,
        transition: { duration: 0.75, delay: 0.22, ease },
    },
};

const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
        width: 48,
        opacity: 0.9,
        transition: { duration: 0.8, delay: 0.35, ease },
    },
};

// Item block animation
const itemVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(5px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.75, ease },
    },
};

const metricVariants = {
    hidden: { scale: 0.82, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2 + i * 0.07,
            type: 'spring',
            stiffness: 340,
            damping: 22,
        },
    }),
};

const bulletVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.55,
            delay: 0.25 + i * 0.08,
            ease,
        },
    }),
};

const techPillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.4 + i * 0.04,
            type: 'spring',
            stiffness: 380,
            damping: 20,
        },
    }),
};

const ExperienceItem = ({ exp }) => {
    return (
        <motion.div
            className="experience__block"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "120px 0px -40px 0px" }}
        >

            {/* Integrated Header: Logo + Title + Badges + Date */}
            <div className="experience__header-bar">
                <div className="experience__identity-wrap">
                    {/* Company Logo Badge */}
                    <motion.div
                        className="experience__logo-slot"
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    >
                        {exp.logo ? (
                            <img
                                src={exp.logo}
                                alt={`${exp.company} Logo`}
                                className="experience__logo-img"
                            />
                        ) : (
                            <div
                                className="experience__monogram-badge"
                                style={{
                                    borderColor: `${exp.accentColor}55`,
                                    boxShadow: `0 0 20px ${exp.accentColor}25`
                                }}
                            >
                                <span
                                    className="experience__monogram-text"
                                    style={{ color: exp.accentColor }}
                                >
                                    {exp.monogram}
                                </span>
                            </div>
                        )}
                    </motion.div>

                    {/* Role & Company details */}
                    <div className="experience__title-group">
                        <div className="experience__role-row">
                            <h3 className="experience__role">{exp.role}</h3>
                        </div>

                        <div className="experience__company-row">
                            <span className="experience__company-name">{exp.company}</span>
                            <span className="experience__dot-sep" aria-hidden="true">•</span>
                            <span className="experience__location">
                                <i className="uil uil-map-marker" /> {exp.location}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Date / Period on right side */}
                <div className="experience__period-col">
                    <span className="experience__period">
                        <i className="uil uil-calendar-alt" />
                        {exp.period}
                    </span>
                </div>
            </div>

            {/* Key Metrics / Highlights Strip */}
            {exp.metrics && exp.metrics.length > 0 && (
                <div className="experience__metrics-row">
                    {exp.metrics.map((m, mIdx) => (
                        <motion.div
                            key={mIdx}
                            className="experience__metric-item"
                            custom={mIdx}
                            variants={metricVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                        >
                            <span
                                className="experience__metric-value"
                                style={{ color: exp.accentColor }}
                            >
                                {m.value}
                            </span>
                            <span className="experience__metric-label">{m.label}</span>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Achievements Bullet List */}
            <ul className="experience__achievements-list">
                {exp.achievements.map((item, aIdx) => (
                    <motion.li
                        key={aIdx}
                        className="experience__achievement-item"
                        custom={aIdx}
                        variants={bulletVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span
                            className="experience__bullet-symbol"
                            style={{ color: exp.accentColor }}
                            aria-hidden="true"
                        >
                            ✦
                        </span>
                        <span className="experience__achievement-text">{item}</span>
                    </motion.li>
                ))}
            </ul>

            {/* Tech Stack Pills (Spring Pop-Up Animation matching Projects) */}
            {exp.technologies && exp.technologies.length > 0 && (
                <div className="experience__tech-list">
                    {exp.technologies.map((tech, tIndex) => (
                        <motion.span
                            key={tech}
                            className="experience__tech-pill"
                            custom={tIndex}
                            variants={techPillVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -4, scale: 1.08 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            {/* Custom Header Matching Projects with Smooth Transitions */}
            <div className="experience__header-container container">
                <div className="experience__header">
                    <motion.span
                        className="experience__eyebrow"
                        variants={eyebrowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        CAREER PATH
                    </motion.span>

                    <motion.h2
                        className="experience__heading"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Work Experience
                    </motion.h2>

                    <motion.p
                        className="experience__subheading"
                        variants={subheadingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Professional milestones and engineering contributions
                    </motion.p>

                    <motion.span
                        className="experience__header-line"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        aria-hidden="true"
                    />
                </div>
            </div>

            {/* Experience Container */}
            <div className="experience__container container">
                {experienceData.map((exp, index) => (
                    <React.Fragment key={exp.id}>
                        <ExperienceItem exp={exp} />

                        {/* Subtle divider connector between experiences */}
                        {index < experienceData.length - 1 && (
                            <div className="experience__divider-wrap" aria-hidden="true">
                                <span className="experience__divider-line" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Experience;
