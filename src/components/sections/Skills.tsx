"use client";
import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { GlareCard } from "../ui/glare-card";
import Image from "next/image";
import { skillsData } from "@/constants";


const Skills = () => {
    return (
        <section>
            <div className="" id="skills">
                <TextHoverEffect text="SKILLS" />
            </div>

            <div className="relative w-full items-center justify-center flex ">
                {/* Responsive Grid */}
                <div className=" flex max-w-7xl flex-row flex-wrap gap-5  items-center justify-around">
                    {skillsData.map((skill) => (
                        <GlareCard
                            key={skill.name}
                            className="flex flex-col items-start justify-start p-6 backdrop-blur-sm text-left"
                        >
                            {/* Icon */}
                            <div className="relative h-14 w-14 mb-4">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Skill Name */}
                            <h3 className="text-gray-300 font-bold text-xl mb-4">
                                {skill.name}
                            </h3>

                            {/* Skill Sections */}
                            <div className="flex flex-col gap-4 text-gray-400">
                                {skill.sections.map((section, i) => (
                                    <div key={i}>
                                        <h4 className="font-semibold text-gray-200 text-sm mb-1">
                                            {section.title}:
                                        </h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            {section.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </GlareCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
