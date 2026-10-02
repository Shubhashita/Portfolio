import React from 'react';
import { certificationsData } from './Data';
import './certifications.css';
import SectionHeading from '../motion/SectionHeading';
import { Stagger, StaggerItem } from '../motion/Reveal';

const CertItem = ({ cert }) => (
    <StaggerItem className="certifications__item" variant="left">
        <span className="certifications__bullet" />

        <div className="certifications__info">
            <h3 className="certifications__title">{cert.title}</h3>
            <div className="certifications__meta">
                <span className="certifications__issuer">{cert.issuer}</span>
                <span className="certifications__date">
                    <i className="uil uil-calendar-alt" /> {cert.date}
                </span>
            </div>
        </div>

        <a
            href={cert.link}
            className="certifications__link"
            target="_blank"
            rel="noopener noreferrer"
        >
            View <i className="uil uil-arrow-right" />
        </a>
    </StaggerItem>
);

const Certifications = () => {
    return (
        <section className="certifications section" id="certifications">
            <SectionHeading title="Certifications" subtitle="My Achievements" />

            <Stagger
                className="certifications__container container"
                staggerChildren={0.1}
                delayChildren={0.08}
            >
                {certificationsData.map((cert) => (
                    <CertItem key={cert.id} cert={cert} />
                ))}
            </Stagger>
        </section>
    );
};

export default Certifications;
