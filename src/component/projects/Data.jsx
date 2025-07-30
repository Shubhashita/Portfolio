// Project data for portfolio
import quizImage from '../../asset/quiz .png';
import AirIndia from '../../asset/Airindia.PNG';
import AMS from '../../asset/AirlineManagementSystem.jar'
import port from '../../asset/port.png';
import date from '../../asset/date.png';
import chat from '../../asset/chat.png'

export const projectsData = [
    {
        id: 1,
        title: "Hive Chat",
        description: "Developed a real-time chat application enabling instant messaging and seamless user interaction,Implemented cross-device compatibility.",
        image: chat,
        technologies: ["React", "Node.js", "Socket.Io", "PostgreSQL"],
        github: "https://github.com/Shubhashita/Chat"
    },
    {
        id: 2,
        title: "QuizQuest",
        description: "Developed a dynamic quiz website enabling users to take, create, and evaluate quizzes in real-time. ",
        image: quizImage,
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
        demo: "https://quizquest-381dc.web.app",
        github: "https://github.com/Shubhashita/QuizQuest"
    },
    {
        id: 3,
        title: "Airline Management Syatem",
        description: "Designed comprehensive Airline Management System to automate flight scheduling, reservations, ticketing. ",
        image: AirIndia,
        technologies: ["Java", "Java Swing", "MySQL", "MySQL Workbench"],
        demo: AMS,
        github: "https://github.com/Shubhashita/Airline-Management-System"
    },
    {
        id: 4,
        title: "Date Picker",
        description: "Built a user-friendly date picker website allowing users to select and manage dates with customizable calendar views.",
        image: date,
        technologies: ["React", "Javascript", "Tailwind CSS", "Railway"],
        demo: "https://datepicker-production-4dc6.up.railway.app/",
        github: "https://github.com/Shubhashita/Date_Picker"
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
        image: port,
        technologies: ["React", "Javascript", "CSS3", "Railway"],
        github: "https://github.com/Shubhashita/Portfolio"
    },

];