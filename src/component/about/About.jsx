import React from 'react'
import './about.css';
import Info from './Info';
import CV from '../../asset/Shubhashita_Resume.pdf';
import useInViewFade from './useInViewFade';

const About = () => {

    const [titleRef, titleVisible] = useInViewFade(0);
    const [subtitleRef, subtitleVisible] = useInViewFade(100);
    const [infoRef, infoVisible] = useInViewFade(300);
    const [descRef, descVisible] = useInViewFade(500);
    const [btnRef, btnVisible] = useInViewFade(700);


    return (
        <section className="about section" id='about'>
            <h2 ref={titleRef}
                className={`section__title fade-element ${titleVisible ? 'fade-in' : ''}`}>About Me</h2>
            <span ref={subtitleRef}
                className={`section__subtitle fade-element ${subtitleVisible ? 'fade-in' : ''}`}>My Introduction</span>

            <div className='about_container container grid'>
                <div className="about__data">
                    <div ref={infoRef}
                        className={`fade-element ${infoVisible ? 'fade-in' : ''}`}>
                        <Info />
                    </div>


                    <p ref={descRef}
                        className={`about_description fade-element ${descVisible ? 'fade-in' : ''}`}>Backend developer with hands-on experience in Node.js, specializing in creating and integrating RESTful services. Adept at working with MongoDB and React, supported by a strong grasp of end-to-end development workflows. Able to seamlessly bridge server-side logic with interactive interfaces, ensuring smooth data flow and responsive user experiences. Committed to producing clean, reliable code and building solutions that are practical, scalable, and aligned with user needs.</p>

                    <div ref={btnRef}
                        className={`fade-element ${btnVisible ? 'fade-in' : ''}`}>

                        <a download="" href={CV} className="button button--flex">Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About

//hgvghytdddddddddyttttttttttttttttttttt