import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import useInViewFade from '../about/useInViewFade'

const Skills = () => {

    const [titleRef, titleVisible] = useInViewFade(0);
    const [subtitleRef, subtitleVisible] = useInViewFade(100);
    const [frontendRef, frontendVisible] = useInViewFade(300);
    const [backendRef, backendVisible] = useInViewFade(500);

    return (
        <section className="skills section" id='skills'>
            <h2 ref={titleRef}
                className={`section__title fade-element ${titleVisible ? 'fade-in' : ''}`}>Skills</h2>
            <span ref={subtitleRef}
                className={`section__subtitle fade-element ${subtitleVisible ? 'fade-in' : ''}`}>My Technical level</span>

            <div className="skills__container container grid">
                <div ref={frontendRef} className={`fade-element ${frontendVisible ? 'fade-in' : ''}`}>
                    < Frontend />
                </div>
                <div ref={backendRef} className={`fade-element ${backendVisible ? 'fade-in' : ''}`} >
                    <Backend />
                </div>

            </div>
        </section>
    )
}

export default Skills