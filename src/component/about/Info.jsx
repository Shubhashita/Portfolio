import React from 'react';
import { Stagger, StaggerItem } from '../motion/Reveal';

const boxes = [
    {
        icon: 'bx-award',
        title: 'Experience',
        subtitle: '+1 Year',
    },
    {
        icon: 'bx-briefcase-alt',
        title: 'Completed',
        subtitle: '5 + Projects',
    },
    {
        icon: 'bx-briefcase',
        title: 'Professional',
        subtitle: 'Open to work',
    },
];

const Info = () => (
    <Stagger className="about__info grid" staggerChildren={0.14} delayChildren={0.05}>
        {boxes.map((box) => (
            <StaggerItem key={box.title} className="about about__box" variant="scale">
                <i className={`bx ${box.icon}`}></i>
                <h3 className="about__title">{box.title}</h3>
                <span className="about__subtitle">{box.subtitle}</span>
            </StaggerItem>
        ))}
    </Stagger>
);

export default Info;
