"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 
            sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I am currently 4th year{" "}
                <span className="font-medium">Computer Science </span>student at{" "}
                <a
                    href="https://www.cc.gatech.edu/"
                    target="_blank"
                    className="font-medium"
                >
                    Georgia Tech{" "}
                </a>
                . I worked at{" "}
                <a
                    href="https://www.samsung.com/global/business/networks/our-business/networks-business-overview/"
                    target="_blank"
                    className="font-medium"
                >
                    Amazon
                </a>
                ,{" "}
                <a
                    href="https://music.amazon.com/"
                    target="_blank"
                    className="font-medium"
                >
                    Samsung
                </a>
                , and{" "}
                <a
                    href="https://www.itential.com/"
                    target="_blank"
                    className="font-medium"
                >
                    Itential
                </a>{" "}
                as a <span className="italic">Software Engineer Intern</span> or{" "}
                <span className="italic">
                    Software Quality Assurance Engineer Intern
                </span>
                . I also worked as a Part-time Software Engineer at{" "}
                <a
                    href="https://www.queues.com/"
                    target="_blank"
                    className="font-medium"
                >
                    Queues
                </a>
                . I always seek opportunities that challenge me and enhance my
                problem-solving skills. I have 5 years{" "}
                <span className="font-medium">Full-stack web development</span>{" "}
                expereince and my personal interest lie in{" "}
                <span className="font-medium">3D User Interface</span>,{" "}
                <span className="font-medium">
                    Architecture in Cloud environment
                </span>
                , and <span className="font-medium">Computer Vision</span>. I am
                going to graduate on May 2024 and currently looking for{" "}
                <span className="font-medium">Full-Time Software Engineer</span>{" "}
                position.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I mostly
                spend my time with my wife and child. If I am alone, I enjoy
                watching other engineers{" "}
                <span className="italic">Tech Talk</span> or reading{" "}
                <span className="italic">Engineering Blog Post</span> to learn
                how they solve their technical problems. I learned a lot from{" "}
                <a
                    href="https://www.youtube.com/@NetflixEngineering/videos"
                    target="_blank"
                    className="font-medium"
                >
                    Netflix Engineering
                </a>
                , and{" "}
                <a
                    href="https://www.youtube.com/@amazonwebservices/featured"
                    target="_blank"
                    className="font-medium"
                >
                    AWS
                </a>{" "}
                Youtube channel.
            </p>
        </motion.section>
    );
}
