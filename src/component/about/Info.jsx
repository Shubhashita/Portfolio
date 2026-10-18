import React from 'react';
import { Stagger, StaggerItem } from '../motion/Reveal';

const Info = () => (
    <div className="about__stats-wrapper">
        <Stagger className="about__stats-container" staggerChildren={0.12} delayChildren={0.08}>
            {/* Experience */}
            <StaggerItem className="about__stat-item" variant="up">
                <h3 className="about__stat-title">Experience</h3>
                <span className="about__stat-subtitle">+1 Year</span>
            </StaggerItem>

            {/* Red vertical divider line from 2nd image */}
            <span className="about__stat-line about__stat-line--red" aria-hidden="true" />

            {/* Completed */}
            <StaggerItem className="about__stat-item" variant="up">
                <h3 className="about__stat-title">Completed</h3>
                <span className="about__stat-subtitle">5 + Projects</span>
            </StaggerItem>

            {/* Green vertical divider line from 2nd image */}
            <span className="about__stat-line about__stat-line--green" aria-hidden="true" />

            {/* Professional */}
            <StaggerItem className="about__stat-item" variant="up">
                <h3 className="about__stat-title">Professional</h3>
                <span className="about__stat-subtitle">Open to work</span>
            </StaggerItem>
        </Stagger>
    </div>
);

export default Info;
