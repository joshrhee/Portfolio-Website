import visionariez from "../../public/visionariez.png";
import creditCardTrackerGenerator from "../../public/credit-card-tracker-generator.png";
import securitySmellsDetector from "../../public/security_smells_detector.png";
import samsung from "../../public/samsung.png";
import queues from "../../public/queues.png";
import amazon from "../../public/amazon.png";
import itential from "../../public/itential.png";
import gradationAnimation from "../../public/gradationAnimation.png";
import fireworksAnimation from "../../public/fireworksAnimation.png";
import particelAnimation from "../../public/particelAnimation.png";
import waveAnimation from "../../public/waveAnimation.png";
import bouncingEffectAnimation from "../../public/bouncingEffectAnimation.png";
import kineticTypography1 from "../../public/kineticTypography1.png";

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
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Gallery",
        hash: "#gallery"
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
            "Implemented vRAN automation team’s CI/CD dashboard that can automatically build, deploy, and release the team organization’s Docker images to reduce more than 300 engineers’ manual job.",
            "Add new feature that manage Docker Images’ deployments, and releases histories to help Vice President’s job.",
            "Maintained the dashboard Frontend asynchronous data fetching gracefully with readable code and add new feature that shows deployment status in real-time with using React.js, TypeScript, React-Query, Python, Flask, WebSocket, MongoDB, Jenkins, Docker, Chakra-UI, SCSS, Figma, Perforce(P4)."
        ],
        date: "2023"
    },
    {
        title: "Quality Assurance Engineer Intern / Software Development Engineer Intern",
        company: "Amazon",
        image: amazon,
        points: [
            "Wrote an Amazon Alexa’s music request service’s test plan and fixed bugs for that service that is requested 92k per month in the US with Java, AWS EC2.",
            "Re-wrote Amazon Music Voice Experience team’s automation testing scripts and improved automation tests’ passing rate up to 90% with Java, AWS EC2.",
            "Improved my Testing Plan skillsets with thinking highly specific and infrequent test scenarios, and reviewing other QAE’s test plan helped me approach the task in diverse perspective."
        ],
        date: "2022"
    },
    {
        title: "Software Engineer (Part-time)",
        company: "Queues",
        image: queues,
        points: [
            "Scaled the Dashboard’s universities information in GA area by 50% with React.js, JavaScript, and Redux.",
            "Edited API router to pull more important data so can reduce 50% of API request with Python, Flask, AWS EC2, MongoDB.",
            "Minimized the delay in the Dashboard User Interfaces which was caused by asynchronous data fetching and fixed this issue with editing the Frontend component architecture."
        ],
        date: "2022 - 2023"
    },
    {
        title: "Software Engineer Intern",
        company: "Itential",
        image: itential,
        points: [
            "Reduced 15% of employee’s manual work by creating an internal tool for the Itential Automation Platform to retrieve information from the platform and automatically updating the Confluence page with React.js, JavaScript, Node.js, and MongoDB.",
            "Created a script that reduced 30% of employee’s manual work which converts a specific type of network device native configuration to other types with Python.",
            "Minimized the latencies for the internal tool, addressed by modifying the database schema and adjusting the Frontend architecture."
        ],
        date: "2022"
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
