"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { projectsData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} className="scroll-mt-28" id="projects">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
