"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="mb-28">
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af"
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
                                background: "white",
                                fontSize: "1.5rem"
                            }}
                        >
                            <h3 className="font-bold capitalize">
                                {item.title}
                            </h3>
                            <p className="font-semibold !mt-2 text-gray-700">
                                {item.company}
                            </p>

                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                {item.points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="!mt-1 !font-normal text-gray-700"
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
