// Project data for portfolio
import quizImage from '../../asset/quiz .png';
import AirIndia from '../../asset/Airindia.PNG';
import AMS from '../../asset/AirlineManagementSystem.jar'
import port from '../../asset/port.png';
import chat from '../../asset/chat.png'
import todo from '../../asset/todo.png'

export const projectsData = [
    {
        id: 1,
        title: "Hive Chat",
        description: "Developed a real-time chat application enabling instant messaging and seamless user interaction,Implemented cross-device compatibility.",
        image: chat,
        technologies: ["React", "Node.js", "Socket.Io", "MongoDB", "Cloudinary"],
        demo: "https://hivechat-client.onrender.com",
        github: "https://github.com/Shubhashita/hivechat-client"
    },
    {
        id: 2,
        title: "SLATE",
        description: "Built a user-friendly date picker website allowing users to select and manage dates with customizable calendar views.",
        image: todo,
        technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Cloudinary", "MinIO", "Docker"],
        demo: "https://todo-board-frontend-beta.vercel.app/",
        github: "https://github.com/Shubhashita/todo_board-frontend"
    },
    {
        id: 3,
        title: "QuizQuest",
        description: "Developed a dynamic quiz website enabling users to take, create, and evaluate quizzes in real-time. ",
        image: quizImage,
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
        demo: "https://quizquest-381dc.web.app",
        github: "https://github.com/Shubhashita/QuizQuest"
    },
    {
        id: 4,
        title: "Airline Management System",
        description: "Designed comprehensive Airline Management System to automate flight scheduling, reservations, ticketing. ",
        image: AirIndia,
        technologies: ["Java", "Java Swing", "MySQL", "MySQL Workbench"],
        demo: AMS,
        github: "https://github.com/Shubhashita/Airline-Management-System"
    },
    {
        id: 5,
        title: "Portfolio",
        description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
        image: port,
        technologies: ["React", "Javascript", "CSS3", "Firebase"],
        github: "https://github.com/Shubhashita/Portfolio"
    },

];

// cdsyfvrygv com