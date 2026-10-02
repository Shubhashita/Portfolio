import React from 'react';
import './about.css';
import Info from './Info';
import CV from '../../asset/Shubhashita_Resume.pdf';
import SectionHeading from '../motion/SectionHeading';
import Reveal from '../motion/Reveal';

const About = () => {
    return (
        <section className="about section" id="about">
            <SectionHeading title="About Me" subtitle="My Introduction" />

            <div className="about_container container grid">
                <div className="about__data">
                    <Info />

                    <Reveal variant="blur" delay={0.15}>
                        <p className="about_description">
                            Backend developer with hands-on experience in Node.js, specializing in
                            creating and integrating RESTful services. Adept at working with MongoDB
                            and React, supported by a strong grasp of end-to-end development
                            workflows. Able to seamlessly bridge server-side logic with interactive
                            interfaces, ensuring smooth data flow and responsive user experiences.
                            Committed to producing clean, reliable code and building solutions that
                            are practical, scalable, and aligned with user needs.
                        </p>
                    </Reveal>

                    <Reveal variant="up" delay={0.28}>
                        <a download="" href={CV} className="button button--flex">
                            Download CV
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
