import React from 'react';
import { projectsData } from './Data';
import { motion } from 'framer-motion';
import SectionHeading from '../motion/SectionHeading';
import './projects.css';

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.05 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.65, ease },
    },
};

const ProjectCard = ({ project }) => {
    return (
        <motion.article
            className="projects__card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.35, ease }}
        >
            <div className="projects__img-box">
                <img src={project.image} alt={project.title} className="projects__img" />
            </div>

            <h3 className="projects__title">{project.title}</h3>

            <div className="projects__btns">
                {project.github && (
                    <a
                        href={project.github}
                        className="projects__btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        className="projects__btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </motion.article>
    );
};

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <SectionHeading title="Projects" subtitle="Browse My Recent" />

            <motion.div
                className="projects__container container grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
