import React from 'react';
import { certificationsData } from './Data';
import './certifications.css';
import useInViewFade from '../about/useInViewFade';

const Certifications = () => {
    const [titleRef, titleVisible] = useInViewFade(0);
    const [subtitleRef, subtitleVisible] = useInViewFade(100);
    const [containerRef, containerVisible] = useInViewFade(300);

    return (
        <section className="certifications section" id="certifications">
            <h2 ref={titleRef}
                className={`section__title fade-element ${titleVisible ? 'fade-in' : ''}`}>Certifications</h2>
            <span ref={subtitleRef}
                className={`section__subtitle fade-element ${subtitleVisible ? 'fade-in' : ''}`}>My Achievements</span>

            <div ref={containerRef}
                className={`certifications__container container grid fade-element ${containerVisible ? 'fade-in' : ''}`}>
                {certificationsData.map((cert) => (
                    <div className="certifications__content" key={cert.id}>
                        <div className="certifications__icon-box">
                            <i className="uil uil-award certifications__icon"></i>
                        </div>

                        <div className="certifications__data">
                            <h3 className="certifications__title">{cert.title}</h3>
                            <span className="certifications__issuer">{cert.issuer}</span>
                            <div className="certifications__footer">
                                <span className="certifications__date">{cert.date}</span>
                                <a href={cert.link} className="certifications__button" target="_blank" rel="noopener noreferrer">
                                    View <i className="uil uil-arrow-right certifications__button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
