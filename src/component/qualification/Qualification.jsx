import React, { useEffect, useRef, useState } from 'react'
import './qualification.css';

const Qualification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showData, setShowData] = useState(false);
    const qualificationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Show data items after section title animation completes
                    setTimeout(() => {
                        setShowData(true);
                    }, 800);
                }
            },
            { threshold: 0.1 }
        );

        const target = qualificationRef.current;
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);
    return (
        <section ref={qualificationRef}
            className={`qualification section ${isVisible ? 'fade-in' : ''}`} id='degree'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Educational Background</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className={`qualification__data ${showData ? 'animate-left' : ''}`}>
                            <div>
                                <h3 className="qualification__title">Bachelor of Technology(IT) </h3>
                                <span className="qualification__subtitle">Oriental Institute of science and technology, Bhopal </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021-2025 
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className={`qualification__data ${showData ? 'animate-right' : ''}`}>
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                            <div>
                                <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">Jeevan jyoti higher secondary school</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2020-2021
                                </div>
                            </div>
                        </div>

                        <div className={`qualification__data ${showData ? 'animate-left' : ''}`}>
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Jeevan jyoti higher secondary school</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2018-2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification