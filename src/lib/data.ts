import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import visionariez from "../../public/visionariez.png";
import creditCardTrackerGenerator from "../../public/credit-card-tracker-generator.png";
import securitySmellsDetector from "../../public/security_smells_detector.png";

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
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Contact",
        hash: "#contact"
    }
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019"
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021"
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present"
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
    "AWS Serverless",
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
