
import React, { useEffect } from 'react';
import { projectsData } from './Data';
import './projects.css';




const Project = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.projects__content');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My recent work</span>

            <div className="projects__container container grid">
                {projectsData.map((project) => (
                    <div className="projects__content" key={project.id}>
                        <div className="projects__img">
                            <img src={project.image} alt={project.title} />
                            <div className="projects__overlay">
                                <div className="projects__data">
                                    <h3 className="projects__title">{project.title}</h3>
                                    <p className="projects__description">{project.description}</p>
                                    <div className="projects__buttons">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                className="projects__button button button--flex button--small"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Demo
                                                <svg
                                                    className="button__icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                className="projects__button button button--flex button--small"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                                <svg
                                                    className="button__icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    />
                                                    <path
                                                        d="M9 18c-4.51 2-5-2-7-2"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects__info">
                            <h3 className="projects__name">{project.title}</h3>
                            <div className="projects__tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="projects__tech-item">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;