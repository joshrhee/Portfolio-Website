import visionariez from "../../public/visionariez.png";
import creditCardTrackerGenerator from "../../public/credit-card-tracker-generator.png";
import securitySmellsDetector from "../../public/security_smells_detector.png";
import samsung from "../../public/samsung.png";
import queues from "../../public/queues.png";
import amazon from "../../public/amazon.png";
import itential from "../../public/itential.png";
import koreaArmy from "../../public/koreaArmy.png";
import freelance from "../../public/freelance.png";
import gradationAnimation from "../../public/gradationAnimation.png";
import fireworksAnimation from "../../public/fireworksAnimation.png";
import particelAnimation from "../../public/particelAnimation.png";
import waveAnimation from "../../public/waveAnimation.png";
import bouncingEffectAnimation from "../../public/bouncingEffectAnimation.png";
import kineticTypography1 from "../../public/kineticTypography1.png";
import threedCar from "../../public/threedCar.png";
import threedCarAnimation from "../../public/threedCarAnimation.png";
import rayTracingSimulator from "../../public/rayTracingSimulator.png";

export const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Gallery",
        hash: "#gallery"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Contact",
        hash: "#contact"
    }
] as const;

export const experiencesData = [
    {
        title: "Software Engineer Intern",
        company: "Samsung Electronics",
        image: samsung,
        points: [
            "Optimized workload of 300-member engineer team's operations by creating an automated CI/CD dashboard. It rapidly builds, deploys, and releases Docker images, boosting productivity.",
            "Tailored the deployment tool to meet the Vice President’s reporting needs, aiding data-driven decisions. Supported critical customer meetings through system enhancements.",
            "Managed Dashboard operations for real-time deployment status using React.js, TypeScript, React-Query, Python, Flask, WebSocket, MongoDB, Jenkins, Docker, Chakra-UI, SCSS, Figma, Perforce(P4), addressing technical challenges for code scalability and user experience."
        ],
        date: "06/2023 - 08/2023"
    },
    {
        title: "Freelance Frontend/Full Stack Developer (Part-time)",
        company: "",
        image: freelance,
        points: [
            "Developed responsive and visually stunning websites for 10+ customers across various industries with using Next.js, React.js, React -Server-Component, Typescript, Three.js, Tailwind CSS, Go, AWS (Lambda, S3, DynamoDB), Figma.",
            "Improved SEO strategies for the customer’s website with using Next.js, Server-Side-Rendering, React-Server-Component.",
            "Optimized website performance by reducing page load times and unnecessary rendering with using Next.js, Server-Side Rendering, React.js, React Server Component, Typescript, React-Query."
        ],
        date: "06/2021 - Present"
    },
    {
        title: "Software Engineer (Part-time)",
        company: "Queues",
        image: queues,
        points: [
            "Amplified the scalability of the Dashboard’s university information by an impressive 50%, utilizing React.js, JavaScript, and Redux.",
            "Enhanced the efficiency of API requests by 50% through strategic edits to the API router, resulting in a more streamlined data retrieval process with Python, Flask, AWS EC2, and MongoDB.",
            "Resolved latency issues in the Dashboard’s User Interfaces stemming from asynchronous data fetching. This was accomplished through a meticulous overhaul of the Frontend component architecture"
        ],
        date: "08/2022 - 03/2023"
    },
    {
        title: "Quality Assurance Engineer Intern / Software Development Engineer Intern",
        company: "Amazon",
        image: amazon,
        points: [
            "Devised a comprehensive test plan for Amazon Alexa’s music request service that is requested 92k per month, significantly reducing monthly service-related bugs.",
            "Rewrote the team’s automation testing scripts, leading a remarkable 90% increase in automation test pass rates. Implemented with Java, AWS EC2.",
            " Elevated my proficiency in Testing Plan development, specializing in highly specific and infrequent test scenarios. Actively participated in mentor’s review processes, gaining a diverse perspective on testing strategies."
        ],
        date: "05/2022 - 08/2022"
    },
    {
        title: "Software Engineer Intern",
        company: "Itential",
        image: itential,
        points: [
            "Pioneered the development of an internal tool for the main platform, reducting in employee manual efforts. This tool efficiently retrieved information from the platform, automating updates to the Confluence pages. Skillfully executed with React React.js, JavaScript, Node.js, and MongoDB.",
            "Implemented Python script that streamlined a specific type of network device’s native configuration conversion, saved employee manual labor",
            "Minimized the latencies for the internal tool, addressed by modifying the database schema and adjusting the Frontend architecture."
        ],
        date: "01/2022 - 05/2022"
    },
    {
        title: "Squad Leader of Combat Medic",
        company: "South Korea Army",
        image: koreaArmy,
        points: [
            "Led 7 combat medics, fostering a culture of excellence through one-on-one mentoring and collaborative teamwork to provide Top-tier services to customers.",
            "Supervised and directed medical procedures alongside doctors in both training and real situations.",
            "Conducted comprehensive team debriefs to dissect daily challenges, paving the way for continuous improvement and future successes."
        ],
        date: "12/2015 - 09/2017"
    }
] as const;

export const projectsData = [
    {
        title: "Visionariez",
        description:
            "A pair of wearable glasses that automatically focus on the object being viewed for individuals with presbyopia as part of a capstone design project. We showed our final prototype at Georgia Tech's Design Expo!!",
        tags: [
            "React-Native",
            "Python",
            "Pytorch",
            "OpenCV",
            "Firebase",
            "Rasberry Pi",
            "Arduion"
        ],
        imageUrl: visionariez,
        link: "https://docs.google.com/presentation/d/10HDx2BcXj7L2EymB5fvmm8xAMPiRaFTd0z_WnEnf2Qk/edit#slide=id.g21c7d8679ff_1_1"
    },
    {
        title: "Credit Card Tracker Generator",
        description:
            "A service that automatically track all my credit card usage and wrote all the information on excel file to reduce my daily credit card usage tracking job.",
        tags: [
            "React",
            "TypeScript",
            "Golang",
            "AWS Lambda",
            "AWS S3",
            "AWS Firehose",
            "Plaid"
        ],
        imageUrl: creditCardTrackerGenerator,
        link: "https://github.com/joshrhee/Finance-Tracking-App"
    },
    {
        title: "Terraform Security Smells Detector",
        description:
            "A new Jenkins pipeline to automate and secure IaC deployment process by detecting security smells in Terraform code with TFLint and custom ruleset.",
        tags: ["Golang", "AWS EC2", "Terraform", "TFLint", "Jenkins"],
        imageUrl: securitySmellsDetector,
        link: "https://github.com/alanrtao/tflint-ruleset-security-smells"
    }
] as const;

export const animationGalleryData = [
    {
        title: "3D Car",
        image: threedCar,
        link: "https://personal-javascript-drawing-projects.vercel.app/CS3451/a2a/index.html"
    },
    {
        title: "3D Car Animation",
        image: threedCarAnimation,
        link: "https://personal-javascript-drawing-projects.vercel.app/CS3451/a2b/index.html"
    },
    {
        title: "Ray Tracing Simulator",
        image: rayTracingSimulator,
        link: "https://personal-javascript-drawing-projects.vercel.app/CS3451/a3/index.html"
    },
    {
        title: "Gradation Animation",
        image: gradationAnimation,
        link: "https://personal-javascript-drawing-projects.vercel.app/Gradation-Animation/index.html"
    },
    {
        title: "Firworks Animation",
        image: fireworksAnimation,
        link: "https://personal-javascript-drawing-projects.vercel.app/Fireworks-Animation/index.html"
    },
    {
        title: "Particle Flow Animation",
        image: particelAnimation,
        link: "https://personal-javascript-drawing-projects.vercel.app/Particle-Practice/index.html"
    },
    {
        title: "Wave Animation",
        image: waveAnimation,
        link: "https://personal-javascript-drawing-projects.vercel.app/Wave-Animation/index.html"
    },
    {
        title: "Bouncing Ball Animation",
        image: bouncingEffectAnimation,
        link: "https://personal-javascript-drawing-projects.vercel.app/Bouncing-Effect-Animation/index.html"
    },
    {
        title: "Kinetic Typography Animation",
        image: kineticTypography1,
        link: "https://personal-javascript-drawing-projects.vercel.app/Kinetic%20Typography1/index.html"
    }
] as const;

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React-Query",
    "Redux",
    "Python",
    "Flask",
    "Node.js",
    "Express",
    "Go",
    "AWS Lambda",
    "AWS EC2",
    "AWS DynamoDB",
    "MongoDB",
    "Tailwind",
    "Framer Motion",
    "Three.js",
    "Unity",
    "SwiftUI",
    "Figma",
    "Docker",
    "Jenkins"
] as const;
