// Project data for portfolio
import quizImage from '../../asset/quiz .png';
import AirIndia from '../../asset/Airindia.PNG';
import AMS from '../../asset/AirlineManagementSystem.jar';
import port from '../../asset/port.png';
import memexAI from '../../asset/memexAI.png';
import todo from '../../asset/todo.png';
import finezImg from '../../asset/Finez.png'; // updated

export const projectsData = [
    {
        id: 1,
        title: "MemexAI",
        description: "A full-stack SaaS-style Personal Knowledge Management application with AI-powered chat, document management, real-time file processing, and semantic search.",
        image: memexAI,
        technologies: ["React", "Node.js", "MongoDB", "Google AI", "Tailwind CSS"],
        demo: "https://memex-ai-gamma.vercel.app/",
        github: "https://github.com/Shubhashita/MemexAI"
    },
    {
        id: 2,
        title: "FinEZ – Finance & Tax Platform",
        description: "Delivered RESTful APIs supporting 10,000+ financial transactions, optimized MongoDB indexing reducing query latency by 25%, managed Redis queues for 1,000+ daily background tasks, and integrated AI-powered tax guidance with an automated WhatsApp bot.",
        image: finezImg,
        technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "WhatsApp Business API"],
        imagePosition: "62% center",
        imageScale: 1.08,
        demo: "#",
    },
    {
        id: 3,
        title: "SLATE",
        description: "Collaborative task board with customizable views for planning, organizing, and tracking work.",
        image: todo,
        technologies: ["React", "Node.js", "Express.js", "Tailwind CSS"],
        demo: "https://todo-board-frontend-beta.vercel.app/",
        github: "https://github.com/Shubhashita/todo_board-frontend"
    },
    {
        id: 4,
        title: "QuizQuest",
        description: "Dynamic quiz platform where users create, take, and evaluate quizzes in real time.",
        image: quizImage,
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
        demo: "https://quizquest-381dc.web.app",
        github: "https://github.com/Shubhashita/QuizQuest"
    },
    {
        id: 5,
        title: "Airline Management System",
        description: "Desktop system for flight scheduling, reservations, and ticketing with a MySQL-backed workflow.",
        image: AirIndia,
        technologies: ["Java", "Java Swing", "MySQL", "MySQL Workbench"],
        demo: AMS,
        github: "https://github.com/Shubhashita/Airline-Management-System"
    },
    {
        id: 6,
        title: "Portfolio",
        description: "Responsive personal site showcasing projects and skills with smooth motion and clean interaction.",
        image: port,
        technologies: ["React", "JavaScript", "CSS3", "Firebase"],
        github: "https://github.com/Shubhashita/Portfolio"
    },
];
