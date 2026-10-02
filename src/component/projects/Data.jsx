// Project data for portfolio
import quizImage from '../../asset/quiz .png';
import AirIndia from '../../asset/Airindia.PNG';
import AMS from '../../asset/AirlineManagementSystem.jar';
import port from '../../asset/port.png';
import chat from '../../asset/hivechat.png';
import todo from '../../asset/todo.png';

export const projectsData = [
    {
        id: 1,
        title: "Hive Chat",
        description: "Real-time chat app with instant messaging, media sharing, and seamless cross-device conversations.",
        image: chat,
        technologies: ["React", "Node.js", "Socket.Io", "MongoDB", "Cloudinary"],
        demo: "https://hivechat-client.onrender.com",
        github: "https://github.com/Shubhashita/hivechat-client"
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
