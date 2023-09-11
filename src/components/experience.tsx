"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#f3f4f6"
                                        : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.5rem solid rbga(255, 255, 255, 0.5)"
                            }}
                            date={item.date}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img
                                        src={item.image.src}
                                        alt={item.title}
                                        className="w-[60%] h-[60%] object-contain"
                                    />
                                </div>
                            }
                            iconStyle={{
                                background:
                                    theme === "light"
                                        ? "white"
                                        : "rbga(255, 255, 255, 0.15)",
                                fontSize: "1.5rem"
                            }}
                        >
                            <h3 className="font-bold capitalize">
                                {item.title}
                            </h3>
                            <p className="font-semibold !mt-2 text-gray-700 dark:text-white/75">
                                {item.company}
                            </p>

                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                {item.points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="!mt-1 !font-normal text-gray-700
                                        dark:text-white/75"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
