// Project data for portfolio
import quizImage from '../../asset/quiz .png';
import AirIndia from '../../asset/Airindia.PNG';
import AMS from '../../asset/AirlineManagementSystem.jar';
import port from '../../asset/port.png';
import memexAI from '../../asset/memexAI.png';
import todo from '../../asset/todo.png';

export const projectsData = [
    {
        id: 1,
        title: "MemexAI",
        description: "A full-stack, modern SaaS-style Personal Knowledge Management application. It features an intelligent AI-powered chat using Google's Gemini API, robust document management, real-time file processing, and semantic search capabilities.",
        image: memexAI,
        imageScale: 1,
        imagePosition: "54% 42%",
        technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary", "Google Generative AI", "Multer"],
        demo: "https://memex-ai-gamma.vercel.app/",
        github: "https://github.com/Shubhashita/MemexAI"
    },
    {
        id: 2,
        title: "SLATE",
        description: "Collaborative task board with customizable views for planning, organizing, and tracking work.",
        image: todo,
        technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Cloudinary", "MinIO", "Docker"],
        demo: "https://todo-board-frontend-beta.vercel.app/",
        github: "https://github.com/Shubhashita/todo_board-frontend"
    },
    {
        id: 3,
        title: "QuizQuest",
        description: "Dynamic quiz platform where users create, take, and evaluate quizzes in real time.",
        image: quizImage,
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
        demo: "https://quizquest-381dc.web.app",
        github: "https://github.com/Shubhashita/QuizQuest"
    },
    {
        id: 4,
        title: "Airline Management System",
        description: "Desktop system for flight scheduling, reservations, and ticketing with a MySQL-backed workflow.",
        image: AirIndia,
        technologies: ["Java", "Java Swing", "MySQL", "MySQL Workbench"],
        demo: AMS,
        github: "https://github.com/Shubhashita/Airline-Management-System"
    },
    {
        id: 5,
        title: "Portfolio",
        description: "Responsive personal site showcasing projects and skills with smooth motion and clean interaction.",
        image: port,
        technologies: ["React", "Javascript", "CSS3", "Firebase"],
        github: "https://github.com/Shubhashita/Portfolio"
    },
];
