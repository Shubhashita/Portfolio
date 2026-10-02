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
                    <div className="qualification__content">
                        {education.map((item, index) => {
                            const isLeft = item.side === 'left';
                            return (
                                <motion.div
                                    key={item.title}
                                    className="qualification__data"
                                    initial={{
                                        opacity: 0,
                                        x: isLeft ? -56 : 56,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.12,
                                        ease,
                                    }}
                                >
                                    {isLeft ? (
                                        <>
                                            <div>
                                                <h3 className="qualification__title">{item.title}</h3>
                                                <span className="qualification__subtitle">
                                                    {item.subtitle}
                                                </span>
                                                <div className="qualification__calendar">
                                                    <i className="uil uil-calendar-alt"></i>
                                                    {item.calendar}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="qualification__rounder"></span>
                                                <span className="qualification__line"></span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div></div>
                                            <div>
                                                <span className="qualification__rounder"></span>
                                                <span className="qualification__line"></span>
                                            </div>
                                            <div>
                                                <h3 className="qualification__title">{item.title}</h3>
                                                <span className="qualification__subtitle">
                                                    {item.subtitle}
                                                </span>
                                                <div className="qualification__calendar">
                                                    <i className="uil uil-calendar-alt"></i>
                                                    {item.calendar}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
