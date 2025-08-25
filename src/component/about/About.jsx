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
                        className={`about_description fade-element ${descVisible ? 'fade-in' : ''}`}>I'm a Full stack web developer with practical experience in developing web applications using technologies like HTML5, CSS3, Javascript, Reactjs, Nodejs, Express.js and PostgreSQL. Built multiple personal projects that demonstrate front-end and back-end integration, API handling, and responsive design. Familliar with Git for version control and comfortable working in collaborative environments. Quick to learn new tolls and focused on writing clean, maintainable code.</p>

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