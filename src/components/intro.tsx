"use client";

import Image from "next/image";
import React from "react";
import myImage from "../../public/me.png";
import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image
                            className="h-24 w-24 rounded-full border-[0.35rem] 
                        border-white shadow-xl object-cover "
                            src={myImage}
                            alt="Josh portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
                sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, </span> I'm{" "}
                <span className="font-bold">Sang June Rhee, </span> and you can
                call me <span className="font-bold">Josh.</span> I'm a{" "}
                <span className="font-bold">Softwar Engineer, </span>
                <span className="font-bold">Student, </span> and{" "}
                <span className="font-bold">Problem Solver</span>. I enjoy
                building{" "}
                <span className="italic">
                    sites, apps, & solving challenge problems
                </span>
                . I have 5 years of experience in software development specially{" "}
                <span className="underline">
                    React (Next.js), Typescript, Python, Node.js
                </span>
                .
            </motion.p>
        </section>
    );
}
