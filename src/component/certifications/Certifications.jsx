import React from 'react';
import { certificationsData } from './Data';
import './certifications.css';
import SectionHeading from '../motion/SectionHeading';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const renderIssuerLogo = (type) => {
    switch (type) {
        case 'googlecloud':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 48 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.3 14.6C36.7 8.8 31.8 4.3 25.8 4.3C21.7 4.3 18.2 6.3 16 9.3C15.1 8.9 14.1 8.6 13 8.6C9.5 8.6 6.7 11.4 6.7 14.9C6.7 15.4 6.8 15.9 6.9 16.3C3 17.2 0 20.8 0 25.2C0 30.3 4.1 34.4 9.2 34.4H36.9C42.8 34.4 47.6 29.6 47.6 23.7C47.6 18.2 43.4 15 37.3 14.6Z"
                        fill="#4285F4"
                    />
                    <path
                        d="M13 8.6C14.1 8.6 15.1 8.9 16 9.3C18.2 6.3 21.7 4.3 25.8 4.3C31.8 4.3 36.7 8.8 37.3 14.6L24.5 19L16 14.9L6.9 16.3C6.8 15.9 6.7 15.4 6.7 14.9C6.7 11.4 9.5 8.6 13 8.6Z"
                        fill="#EA4335"
                    />
                    <path
                        d="M37.3 14.6C43.4 15 47.6 18.2 47.6 23.7C47.6 29.6 42.8 34.4 36.9 34.4L25 34.4L37.3 14.6Z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M9.2 34.4C4.1 34.4 0 30.3 0 25.2C0 20.8 3 17.2 6.9 16.3L16 20L25 34.4H9.2Z"
                        fill="#34A853"
                    />
                </svg>
            );
        case 'hackerrank':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2L29 9.5V24.5L16 32L3 24.5V9.5L16 2Z" fill="#00EA64" />
                    <path d="M11 9H13.8V14.2H18.2V9H21V23H18.2V16.8H13.8V23H11V9Z" fill="#0B131D" />
                </svg>
            );
        case 'coursera':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#0056D2" />
                    <path
                        d="M22 11.2C20.6 9.8 18.6 9 16.3 9C11.7 9 8.2 12.2 8.2 16.5C8.2 20.8 11.7 24 16.3 24C18.6 24 20.6 23.2 22 21.8L20.2 19.8C19.2 20.8 17.8 21.4 16.3 21.4C13.2 21.4 11 19.3 11 16.5C11 13.7 13.2 11.6 16.3 11.6C17.8 11.6 19.2 12.2 20.2 13.2L22 11.2Z"
                        fill="white"
                    />
                </svg>
            );
        case 'cisco':
            return (
                <svg className="certifications__logo-svg" viewBox="0 0 54 36" fill="none">
                    <rect x="2" y="14" width="3.2" height="8" rx="1.6" fill="#00BCEB" />
                    <rect x="8" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="14" y="6" width="3.2" height="16" rx="1.6" fill="#00BCEB" />
                    <rect x="20" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="26" y="2" width="3.2" height="20" rx="1.6" fill="#00BCEB" />
                    <rect x="32" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="38" y="6" width="3.2" height="16" rx="1.6" fill="#00BCEB" />
                    <rect x="44" y="10" width="3.2" height="12" rx="1.6" fill="#00BCEB" />
                    <rect x="50" y="14" width="3.2" height="8" rx="1.6" fill="#00BCEB" />
                    <text
                        x="27"
                        y="33"
                        textAnchor="middle"
                        fill="#00BCEB"
                        fontSize="9"
                        fontWeight="800"
                        fontFamily="sans-serif"
                        letterSpacing="1"
                    >
                        CISCO
                    </text>
                </svg>
            );
        default:
            return <i className="bx bx-award certifications__logo-fallback" />;
    }
};

/* Soft vertical unblur & rise transition matching the portfolio's theme */
const rowVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(6px)',
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            delay: 0.08 + i * 0.07,
            duration: 0.6,
            ease,
        },
    }),
};

const Certifications = () => {
    return (
        <section className="certifications section" id="certifications">
            <SectionHeading
                title="Certifications"
                subtitle="Courses and certifications that strengthen my skills"
            />

            <div className="certifications__container container">
                <div className="certifications__timeline-wrap">
                    {/* Vertical timeline line appears on hover in that section */}
                    <div className="certifications__timeline-line" aria-hidden="true" />

                    <div className="certifications__list">
                        {certificationsData.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="certifications__row"
                                custom={index}
                                variants={rowVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                            >
                                {/* Column 1: Year Pill Badge */}
                                <div className="certifications__year-col">
                                    <span className="certifications__year-badge">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Column 2: Vertical Line Indicator (appears on hover) */}
                                <div className="certifications__line-col" aria-hidden="true">
                                    <span className="certifications__row-indicator" />
                                </div>

                                {/* Column 3: Issuer Logo Tile + Clean Title & Issuer */}
                                <div className="certifications__details-col">
                                    <div className="certifications__logo-tile">
                                        {renderIssuerLogo(cert.logoType)}
                                    </div>
                                    <div className="certifications__text-wrap">
                                        <h3 className="certifications__item-title">
                                            {cert.title}
                                        </h3>
                                        <span className="certifications__item-issuer">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                </div>

                                {/* Column 4: Interactive Circular Action Arrow Button */}
                                <div className="certifications__action-col">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certifications__arrow-btn"
                                        aria-label={`View ${cert.title} certificate`}
                                        title="View Certificate"
                                    >
                                        <i className="bx bx-right-arrow-alt" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
