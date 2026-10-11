import React from 'react';
import './skills.css';
import SectionHeading from '../motion/SectionHeading';
import { Stagger, StaggerItem } from '../motion/Reveal';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: 'Frontend',
        skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'jQuery', 'Material UI', 'Tailwind CSS'],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'Socket.IO', 'RESTful APIs'],
    },
    {
        category: 'Database',
        skills: ['SQL/MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
        category: 'Languages',
        skills: ['Java', 'C/C++', 'Python'],
    },
    {
        category: 'Tools & Technologies',
        skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jira Board', 'Docker', 'ORM/ODM'],
    },
    {
        category: 'Core CS',
        skills: ['OOPs', 'Data Structure'],
    },
];

const chipVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.12 + i * 0.045,
            type: "spring",
            stiffness: 340,
            damping: 20,
        },
    }),
};

const SkillCategory = ({ item }) => (
    <StaggerItem className="skills__category" variant="up">
        <h3 className="skills__category-title">
            <span className="skills__bullet"></span>
            {item.category}
        </h3>
        <div className="skills__list">
            {item.skills.map((skill, sIndex) => (
                <motion.span
                    key={skill}
                    className="skills__item"
                    custom={sIndex}
                    variants={chipVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </StaggerItem>
);

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <SectionHeading title="Skills" subtitle="My Technical Level" />

            <div className="skills__container container">
                <Stagger className="skills__grid" staggerChildren={0.1} delayChildren={0.05}>
                    {skillsData.map((item) => (
                        <SkillCategory key={item.category} item={item} />
                    ))}
                </Stagger>
            </div>
        </section>
    );
};

export default Skills;
