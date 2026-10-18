import React from 'react';
import { projectsData } from './Data';
import { motion } from 'framer-motion';
import './projects.css';

const ease = [0.22, 1, 0.36, 1];

const projectVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease },
    },
};

const techPillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.1 + i * 0.05,
            type: 'spring',
            stiffness: 350,
            damping: 20,
        },
    }),
};

const ProjectItem = ({ project, index }) => {
    const isEven = index % 2 === 1;
    const numFormatted = String(index + 1).padStart(2, '0');

    return (
        <motion.div
            className={`projects__item ${isEven ? 'projects__item--reverse' : ''}`}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "120px 0px -40px 0px" }}
        >
            {/* Visual Showcase Column (Image + Number Badge) */}
            <div className="projects__showcase">
                {/* Image Frame */}
                <a
                    href={project.demo || project.github || '#projects'}
                    target={project.demo || project.github ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="projects__img-frame"
                    title={`View ${project.title}`}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="projects__img"
                        style={{
                            ...(project.imagePosition && { '--img-pos': project.imagePosition }),
                            ...(project.imageScale && { '--img-scale': project.imageScale }),
                        }}
                        loading="lazy"
                    />
                    <div className="projects__img-overlay" />
                </a>
            </div>

            {/* Project Details Column */}
            <div className="projects__details">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>

                {/* Tech Stack Pills (Spring Pop-Up Animation) */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="projects__tech-list">
                        {project.technologies.map((tech, tIndex) => (
                            <motion.span
                                key={tech}
                                className="projects__tech-pill"
                                custom={tIndex}
                                variants={techPillVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                )}

                {/* Action Links Row (Icons Only, Separated by Vertical Divider Line) */}
                {(project.github || project.demo) && (
                    <div className="projects__actions-row">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects__action-link"
                                title={`${project.title} GitHub`}
                                aria-label={`${project.title} GitHub`}
                            >
                                <i className="bx bxl-github" />
                            </a>
                        )}

                        {project.github && project.demo && project.demo !== project.github && (
                            <span className="projects__action-divider" aria-hidden="true" />
                        )}

                        {project.demo && project.demo !== project.github && (
                            <a
                                href={project.demo}
                                target={project.demo !== '#' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="projects__action-link"
                                title={`${project.title} Live Demo`}
                                aria-label={`${project.title} Live Demo`}
                            >
                                <i className="bx bx-link-external" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            {/* Custom Header Matching Mockup */}
            <div className="projects__header-container container">
                <motion.div
                    className="projects__header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.65, ease }}
                >
                    <span className="projects__eyebrow">MY WORK</span>
                    <h2 className="projects__heading">Projects</h2>
                    <p className="projects__subheading">
                        Turning ideas into real-world applications
                    </p>
                    <span className="projects__header-line" aria-hidden="true" />
                </motion.div>
            </div>

            {/* Alternating Projects Showcase */}
            <div className="projects__container container">
                {projectsData.map((project, index) => (
                    <React.Fragment key={project.id}>
                        <ProjectItem project={project} index={index} />

                        {/* Curved dashed connector trail between projects */}
                        {index < projectsData.length - 1 && (
                            <div
                                className={`projects__connector ${
                                    index % 2 === 1 ? 'projects__connector--reverse' : ''
                                }`}
                                aria-hidden="true"
                            >
                                <svg
                                    className="projects__connector-svg"
                                    viewBox="0 0 500 80"
                                    fill="none"
                                >
                                    <path
                                        d={
                                            index % 2 === 0
                                                ? 'M 180 12 C 260 25, 360 40, 420 68'
                                                : 'M 320 12 C 240 25, 140 40, 80 68'
                                        }
                                        stroke="rgba(106, 125, 145, 0.35)"
                                        strokeWidth="2"
                                        strokeDasharray="6 6"
                                    />
                                </svg>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
