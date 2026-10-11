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

const skillTagSpring = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.15 + i * 0.04,
            type: 'spring',
            stiffness: 340,
            damping: 20,
        },
    }),
};

const iconSpring = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.25 + i * 0.08,
            type: 'spring',
            stiffness: 350,
            damping: 18,
        },
    }),
};

const ProjectCard = ({ project }) => {
    return (
        <motion.article
            className="projects__card edge-beam"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.35, ease }}
        >
            {/* Left Column: Image box + skills list */}
            <div className="projects__left">
                <div className="projects__img-box">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="projects__img"
                        style={{
                            ...(project.imageScale ? { '--img-scale': project.imageScale } : {}),
                            ...(project.imagePosition ? { objectPosition: project.imagePosition } : {}),
                        }}
                    />
                </div>
                {project.technologies && project.technologies.length > 0 && (
                    <div className="projects__skills">
                        {project.technologies.map((tech, idx) => (
                            <motion.span
                                key={idx}
                                className="projects__skill-tag"
                                custom={idx}
                                variants={skillTagSpring}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                whileHover={{ y: -2, scale: 1.06 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                )}
            </div>

            {/* Right Column: Title, Description, and clean unboxed action icons */}
            <div className="projects__right">
                <div className="projects__content">
                    <h3 className="projects__title">{project.title}</h3>
                    <p className="projects__description">{project.description}</p>
                </div>

                <div className="projects__actions">
                    {project.github && (
                        <motion.a
                            href={project.github}
                            className="projects__action-icon-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                            title="GitHub"
                            custom={0}
                            variants={iconSpring}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <i className="uil uil-github-alt"></i>
                        </motion.a>
                    )}
                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            className="projects__action-icon-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Live Demo`}
                            title="Live Demo"
                            custom={1}
                            variants={iconSpring}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <i className="uil uil-external-link-alt"></i>
                        </motion.a>
                    )}
                </div>
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
