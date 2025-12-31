import React from 'react';
import './skills.css';
import useInViewFade from '../about/useInViewFade';

const skillsData = [
    {
        category: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "jQuery", "Material UI", "Tailwind CSS"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "Socket.IO", "RESTful APIs"]
    },
    {
        category: "Database",
        skills: ["SQL/MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        category: "Languages",
        skills: ["Java", "C/C++", "Python"]
    },
    {
        category: "Tools & Technologies",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Jira Board", "Docker", "ORM/ODM"]
    },
    {
        category: "Core CS",
        skills: ["OOPs", "Data Structure"]
    }
];

const SkillCategory = ({ item, index }) => {
    const [ref, visible] = useInViewFade(200 + index * 100);
    return (
        <div
            ref={ref}
            className={`skills__category fade-element ${visible ? 'fade-in' : ''}`}
        >
            <h3 className="skills__category-title">
                <span className="skills__bullet"></span>
                {item.category}
            </h3>
            <div className="skills__list">
                {item.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skills__item">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const [titleRef, titleVisible] = useInViewFade(0);
    const [subtitleRef, subtitleVisible] = useInViewFade(100);

    return (
        <section className="skills section" id='skills'>
            <h2 ref={titleRef}
                className={`section__title fade-element ${titleVisible ? 'fade-in' : ''}`}>Skills</h2>
            <span ref={subtitleRef}
                className={`section__subtitle fade-element ${subtitleVisible ? 'fade-in' : ''}`}>My Technical Level</span>

            <div className="skills__container container">
                <div className="skills__grid">
                    {skillsData.map((item, index) => (
                        <SkillCategory key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;