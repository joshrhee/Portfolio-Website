"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { animationGalleryData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import CarouselComponent from "./CarouselComponent";

export default function Gallery() {
    const { ref } = useSectionInView("Gallery");

    // const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })
    };

    // useEffect(() => {
    //     setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
    // }, []);

    return (
        <motion.section
            ref={ref}
            id="gallery"
            className="scroll-mt-28 mb-28 sm:mb-40 text-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Web Animation Gallery</SectionHeading>
            <p className="mb-3">
                Implemented by Javascript, Typescript, Canvas, or Three.js.
            </p>
            {/* <motion.div
                ref={carousel}
                className="relative bg-gray-200 dark:hover:bg-white/20 dark:bg-white/10 mx-[20%] sm:pr-8 pb-4 border border-black/5 rounded-xl max-w-[42rem] sm:max-w-[60rem] max-h-[18rem] dark:text-white cursor-grab overflow-auto"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{
                        right: 0,
                        left: -width
                    }}
                    className="flex"
                >
                    <CarouselComponent />
                </motion.div>
            </motion.div> */}
            <CarouselComponent />
        </motion.section>
    );
}
