// Experience data for portfolio
import nexoraxLogo from '../../asset/nexorax.jpg';
import techdomeLogo from '../../asset/techdome.jpg';

export const experienceData = [
    {
        id: 1,
        company: "NexoraX Technologies Pvt. Ltd.",
        role: "Software Engineer",
        period: "Jan 2026 – Present",
        location: "Nagpur, Maharashtra",
        badge: "Full-Time",
        current: true,
        logo: nexoraxLogo,
        monogram: "NX",
        accentColor: "#38bdf8",
        metrics: [
            { label: "API Throughput", value: "+35%" },
            { label: "Monthly Transactions", value: "10K+" },
            { label: "Active Users Billed", value: "10K+" },
            { label: "Operational Efficiency", value: "+30%" }
        ],
        achievements: [
            "Boosted API throughput by 35% through Node.js optimization and efficient MongoDB data modeling, supporting 10,000+ monthly transactions.",
            "Secured multi-tenant access for 10K+ users using RBAC, JWT authentication, and Bcrypt encryption.",
            "Integrated Razorpay payment workflows with automated WhatsApp notifications, simplifying billing for 10K+ active users.",
            "Orchestrated scheduled background jobs using node-cron, improving operational efficiency by 30% while eliminating repetitive manual tasks."
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Razorpay", "WhatsApp API", "JWT", "Bcrypt", "node-cron"]
    },
    {
        id: 2,
        company: "Techdome Solution Pvt. Ltd.",
        role: "Software Development Engineer Intern",
        period: "Jul 2025 – Dec 2025",
        location: "Indore, Madhya Pradesh",
        badge: "Internship",
        current: false,
        logo: techdomeLogo,
        monogram: "TD",
        accentColor: "#e5ded2",
        metrics: [
            { label: "Production Apps", value: "8" },
            { label: "Figma Screens Converted", value: "40+" },
            { label: "DB Application Modules", value: "10+" },
            { label: "Mobile Responsiveness", value: "+25%" }
        ],
        achievements: [
            "Developed 8 production-ready web applications using React.js, Next.js, and Tailwind CSS, improving mobile responsiveness by 25%.",
            "Converted 40+ Figma screens into reusable React components, reducing duplicate UI development and accelerating feature delivery.",
            "Designed Prisma schemas and executed database migrations supporting 10+ application modules with reliable API integration."
        ],
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Prisma", "Figma", "REST APIs", "JavaScript"]
    }
];
