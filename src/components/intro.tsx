"use client";

import Image from "next/image";
import React from "react";
import myImage from "../../public/me.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/hooks/useSectionInView";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);

    return (
        <section
            ref={ref}
            className="mb-28 max-w-[50rem] text-center sm:mb-0
            scroll-mt-[100rem]"
            id="home"
        >
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
            <motion.h1
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
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row
                items-center justify-center gap-2 px-4 
                text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 
                    flex items-center gap-2 rounded-full outline-none
                    focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
                    transition"
                >
                    Contact me here
                    <BsArrowRight
                        className="opacity-70 group-hover:translate-x-1.5 
                        group-hover:opacity-100 transition"
                    />
                </Link>
                <a
                    href="../../public/SangJuneRhee_Resume(Fulltime).pdf"
                    download={true}
                    className="group bg-white px-7 py-3 
                    flex items-center gap-2 rounded-full outline-none
                    focus:scale-110 hover:scale-110 active:scale-105
                    transition cursor-pointer border border-black/10"
                >
                    Resume{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                <a
                    href="https://www.linkedin.com/in/sjr95/"
                    className="bg-white text-gray-700 hover:text-gray-950 p-4
                    flex items-center gap-2 rounded-full
                    focus:scale-[1.15] hover:scale-[1.15] active:scale-105
                    transition cursor-pointer border border-black/10"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/joshrhee"
                    className="bg-white text-gray-700 hover:text-gray-950 text-[1.35rem] p-4
                    flex items-center gap-2 rounded-full
                    focus:scale-[1.15] hover:scale-[1.15] active:scale-105
                    transition cursor-pointer border border-black/10"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
