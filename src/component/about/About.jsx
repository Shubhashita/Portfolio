import React from 'react';
import './about.css';
import Info from './Info';
import CodeWindow from './CodeWindow';
import CV from '../../asset/Shubhashita_Resume.pdf';
import SectionHeading from '../motion/SectionHeading';
import Reveal from '../motion/Reveal';

const About = () => {
    return (
        <section className="about section" id="about">
            <SectionHeading title="About Me" subtitle="My Introduction" />

            <div className="about__container container grid">
                {/* Left Column: Description, Download CV, Stats */}
                <div className="about__left">
                    <Reveal variant="blur" delay={0.1}>
                        <p className="about__description">
                            Backend developer with hands-on experience in Node.js, specializing in
                            creating and integrating RESTful services. Adept at working with MongoDB
                            and React, supported by a strong grasp of end-to-end development
                            workflows. Able to seamlessly bridge server-side logic with interactive
                            interfaces, ensuring smooth data flow and responsive user experiences.
                            Committed to producing clean, reliable code and building solutions that
                            are practical, scalable, and aligned with user needs.
                        </p>
                    </Reveal>

                    <Reveal variant="up" delay={0.2}>
                        <div className="about__action">
                            <a download="" href={CV} className="button button--flex">
                                <span>Download CV</span>
                                <i className="bx bx-download button__icon"></i>
                            </a>
                        </div>
                    </Reveal>

                    <Reveal variant="up" delay={0.3}>
                        <Info />
                    </Reveal>
                </div>

                {/* Right Column: Interactive Code Editor with Typing Animation */}
                <div className="about__right">
                    <Reveal variant="scale" delay={0.22}>
                        <CodeWindow />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
