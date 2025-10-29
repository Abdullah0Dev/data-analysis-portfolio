import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { CometCard } from "@/components/ui/comet-card";
import { projectsData } from "@/constants";
import Image from "next/image";

const Projects = () => {
    return (
        <section>
            {/* <h1 className="heading">
               Kind words from
               <span className="text-purple-500"> satisfied clients</span>
             </h1> */}
            <div className=" lg:-mb-32" id="projects">
                <TextHoverEffect text="PROJECTS" />
            </div>
            <div className="relative w-full items-center justify-center flex ">
                <div className="flex  max-w-7xl  flex-row items-center gap-4 px-2 justify-around flex-wrap">
                    {projectsData.map((item) => {
                        return (
                            <CometCard key={item.id}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="my-5 flex w-96 cursor-pointer flex-col items-stretch rounded-4xl border-0 bg-[#1F2121] p-2  md:p-4"
                                    aria-label={item.title + " Card"}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        transform: "none",
                                        opacity: 1,
                                    }}
                                >
                                    <div className="mx-2 flex-1">
                                        <div className="relative h-52 overflow-hidden w-full">
                                            {/* <img
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                                            alt="Invite background"
                                            src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            style={{
                                                boxShadow:
                                                    "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                opacity: 1,
                                            }}
                                        /> */}
                                            <Image
                                                loading="lazy"
                                                fill
                                                className="h-full w-full inset-0 object-cover rounded-t-2xl transition-transform duration-500"
                                                alt="Invite background"
                                                src={item.img}
                                                style={{
                                                    boxShadow:
                                                        "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                    opacity: 1,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* Project Info */}
                                    <div className="flex flex-col flex-1 p-5">
                                        <h3 className="text-lg font-semibold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-purple-400 mt-1">
                                            {item.subtitle}
                                        </p>
                                        <p className="mt-3 text-sm text-gray-300 leading-relaxed line-clamp-3">
                                            {item.description}
                                        </p>

                                        {/* Tools */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="text-[10px] uppercase tracking-wider bg-neutral-800 text-gray-300 px-2 py-1 rounded-full border border-neutral-700"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            </CometCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
