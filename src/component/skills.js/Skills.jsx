import React from 'react';
import './skills.css';
import SectionHeading from '../motion/SectionHeading';
import { motion } from 'framer-motion';

// Authentic SVGs for modern APIs and cloud services
const GeminiIcon = () => (
    <svg viewBox="0 0 24 24" width="1.15rem" height="1.15rem" className="skills__svg-icon">
        <defs>
            <linearGradient id="geminiGradPill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1ba1e3" />
                <stop offset="50%" stopColor="#5b7fff" />
                <stop offset="100%" stopColor="#9b72cb" />
            </linearGradient>
        </defs>
        <path
            d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
            fill="url(#geminiGradPill)"
        />
    </svg>
);

const OpenAIIcon = () => (
    <svg viewBox="0 0 24 24" width="1.15rem" height="1.15rem" fill="currentColor" style={{ color: '#10a37f' }} className="skills__svg-icon">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
);

const CloudinaryIcon = () => (
    <svg viewBox="0 0 24 24" width="1.15rem" height="1.15rem" fill="currentColor" style={{ color: '#3448C5' }} className="skills__svg-icon">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
    </svg>
);

const AWSS3Icon = () => (
    <svg viewBox="0 0 24 24" width="1.15rem" height="1.15rem" fill="none" className="skills__svg-icon">
        <path d="M12 2L4 5v14l8 3 8-3V5l-8-3zm0 2.2l5.5 2.1L12 8.4 6.5 6.3 12 4.2zM6 7.8l5 2v10.1l-5-1.9V7.8zm7 12.1V9.8l5-2v10.2l-5 1.9z" fill="#E25340"/>
    </svg>
);

const AWSEC2Icon = () => (
    <svg viewBox="0 0 24 24" width="1.15rem" height="1.15rem" fill="none" className="skills__svg-icon">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#FF9900" strokeWidth="2"/>
        <path d="M7 8h10M7 12h10M7 16h6" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
);

const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
            { name: 'Python', iconClass: 'devicon-python-plain colored' },
            { name: 'Java', iconClass: 'devicon-java-plain colored' },
            { name: 'C++', iconClass: 'devicon-cplusplus-plain colored' },
            { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
        ],
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React.js', iconClass: 'devicon-react-original colored' },
            { name: 'Next.js', iconClass: 'devicon-nextjs-plain', iconStyle: { color: '#ffffff' } },
            { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' },
            { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
            { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
            { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
            { name: 'Material UI', iconClass: 'devicon-materialui-plain colored' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
            { name: 'Express.js', iconClass: 'devicon-express-original', iconStyle: { color: '#ffffff' } },
            { name: 'RESTful APIs', iconClass: 'bx bx-network-chart', iconStyle: { color: '#38bdf8' } },
            { name: 'Socket.IO', iconClass: 'devicon-socketio-original', iconStyle: { color: '#ffffff' } },
            { name: 'Prisma', iconClass: 'devicon-prisma-original', iconStyle: { color: '#ffffff' } },
            { name: 'JWT', iconClass: 'bx bxs-key', iconStyle: { color: '#f59e0b' } },
            { name: 'RBAC', iconClass: 'bx bxs-shield-alt-2', iconStyle: { color: '#38bdf8' } },
            { name: 'Bcrypt', iconClass: 'bx bxs-lock-alt', iconStyle: { color: '#10b981' } },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
            { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
            { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
            { name: 'Redis', iconClass: 'devicon-redis-plain colored' },
        ],
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git', iconClass: 'devicon-git-plain colored' },
            { name: 'GitHub', iconClass: 'devicon-github-original', iconStyle: { color: '#ffffff' } },
            { name: 'Postman', iconClass: 'devicon-postman-plain colored' },
            { name: 'Jira', iconClass: 'devicon-jira-plain colored' },
            { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
            { name: 'CI/CD', iconClass: 'bx bx-infinite', iconStyle: { color: '#38bdf8' } },
            { name: 'AWS S3', customIcon: <AWSS3Icon /> },
            { name: 'AWS EC2', customIcon: <AWSEC2Icon /> },
            { name: 'Cloudinary', customIcon: <CloudinaryIcon /> },
        ],
    },
    {
        category: 'AI & APIs',
        skills: [
            { name: 'WhatsApp Business API', iconClass: 'bx bxl-whatsapp', iconStyle: { color: '#25D366' } },
            { name: 'Google Gemini API', customIcon: <GeminiIcon /> },
            { name: 'RAG', iconClass: 'bx bx-git-branch', iconStyle: { color: '#38bdf8' } },
            { name: 'OpenAI API', customIcon: <OpenAIIcon /> },
        ],
    },
];

const rowVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            delay: i * 0.06,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <SectionHeading title="Skills" subtitle="My Technical Level" />

            <div className="skills__container container">
                <div className="skills__rows-stack">
                    {skillsData.map((item, index) => (
                        <motion.div
                            key={item.category}
                            className="skills__row"
                            custom={index}
                            variants={rowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            {/* Left Header Column */}
                            <div className="skills__row-header">
                                <h3 className="skills__category-title">{item.category}</h3>
                            </div>

                            {/* Right Horizontal Pills List */}
                            <div className="skills__row-list">
                                {item.skills.map((skill, sIndex) => (
                                    <motion.span
                                        key={skill.name}
                                        className="skills__item"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.04 + sIndex * 0.02,
                                            duration: 0.25,
                                        }}
                                        whileHover={{ y: -2, scale: 1.05 }}
                                    >
                                        <span className="skills__item-icon">
                                            {skill.customIcon ? (
                                                skill.customIcon
                                            ) : (
                                                <i
                                                    className={skill.iconClass}
                                                    style={skill.iconStyle || {}}
                                                />
                                            )}
                                        </span>
                                        <span className="skills__item-name">{skill.name}</span>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
