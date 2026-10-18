import React from 'react';
import './qualification.css';
import SectionHeading from '../motion/SectionHeading';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const education = [
    {
        title: 'Bachelor of Technology(IT)',
        subtitle: 'Oriental Institute of science and technology, Bhopal',
        calendar: '2021-2025',
        side: 'left',
    },
    {
        title: 'Intermediate',
        subtitle: 'Jeevan jyoti higher secondary school',
        calendar: '2020-2021',
        side: 'right',
    },
    {
        title: 'High School',
        subtitle: 'Jeevan jyoti higher secondary school',
        calendar: '2018-2019',
        side: 'left',
    },
];

const Qualification = () => {
    return (
        <section className="qualification section" id="degree">
            <SectionHeading title="Qualification" subtitle="My Educational Background" />

            <div className="qualification__container container">
                <motion.div
                    className="qualification__tabs"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease }}
                >
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                </motion.div>

                <div className="qualification__sections">
                    <div className="qualification__content-list">
                        {education.map((item, index) => {
                            const isLeft = item.side === 'left';
                            const isLast = index === education.length - 1;

                            return (
                                <div
                                    key={item.title}
                                    className={`qualification__data ${
                                        isLeft ? 'qualification__data--left' : 'qualification__data--right'
                                    }`}
                                >
                                    {/* Left Column */}
                                    {isLeft ? (
                                        <motion.div
                                            className="qualification__item qualification__item--left"
                                            initial={{ opacity: 0, x: -45 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.16,
                                                ease,
                                            }}
                                        >
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className="qualification__subtitle">{item.subtitle}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                <span>{item.calendar}</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="qualification__empty" aria-hidden="true"></div>
                                    )}

                                    {/* Middle Column: Central Timeline Line & Dot */}
                                    <div className="qualification__timeline">
                                        <motion.span
                                            className="qualification__rounder"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.16 + 0.08,
                                                ease,
                                            }}
                                        ></motion.span>
                                        {!isLast && (
                                            <motion.span
                                                className="qualification__line"
                                                initial={{ scaleY: 0, opacity: 0 }}
                                                whileInView={{ scaleY: 1, opacity: 1 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.16 + 0.16,
                                                    ease,
                                                }}
                                            ></motion.span>
                                        )}
                                    </div>

                                    {/* Right Column */}
                                    {!isLeft ? (
                                        <motion.div
                                            className="qualification__item qualification__item--right"
                                            initial={{ opacity: 0, x: 45 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.16,
                                                ease,
                                            }}
                                        >
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className="qualification__subtitle">{item.subtitle}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                <span>{item.calendar}</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="qualification__empty" aria-hidden="true"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
