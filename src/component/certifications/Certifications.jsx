import React from 'react';
import { certificationsData } from './Data';
import './certifications.css';
import useInViewFade from '../about/useInViewFade';

const CertItem = ({ cert, index }) => {
    const [ref, visible] = useInViewFade(150 + index * 80);
    return (
        <div
            ref={ref}
            className={`certifications__item fade-element ${visible ? 'fade-in' : ''}`}
        >
            {/* diamond bullet — same as skills__bullet */}
            <span className="certifications__bullet" />

            {/* text */}
            <div className="certifications__info">
                <h3 className="certifications__title">{cert.title}</h3>
                <div className="certifications__meta">
                    <span className="certifications__issuer">{cert.issuer}</span>
                    <span className="certifications__date">
                        <i className="uil uil-calendar-alt" /> {cert.date}
                    </span>
                </div>
            </div>

            {/* view link */}
            <a
                href={cert.link}
                className="certifications__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                View <i className="uil uil-arrow-right" />
            </a>
        </div>
    );
};

const Certifications = () => {
    const [titleRef, titleVisible] = useInViewFade(0);
    const [subtitleRef, subtitleVisible] = useInViewFade(100);

    return (
        <section className="certifications section" id="certifications">
            <h2
                ref={titleRef}
                className={`section__title fade-element ${titleVisible ? 'fade-in' : ''}`}
            >
                Certifications
            </h2>
            <span
                ref={subtitleRef}
                className={`section__subtitle fade-element ${subtitleVisible ? 'fade-in' : ''}`}
            >
                My Achievements
            </span>

            <div className="certifications__container container">
                {certificationsData.map((cert, index) => (
                    <CertItem key={cert.id} cert={cert} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Certifications;
