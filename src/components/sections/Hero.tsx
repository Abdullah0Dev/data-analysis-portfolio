"use client";

import React from "react";
import { CustomNavbar } from "../ui/Navbar";
import { Spotlight } from "../ui/spotlight";
import { cn } from "@/lib/utils";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { motion } from "motion/react";
import Image from "next/image";
import { heroData } from "@/constants";

const Hero = () => {
    return (
        <div className="min-h-screen min-w-screen">
            <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
                {/* Hero Content */}
                <div className="relative flex items-center max-lg:flex-col ">
                    <div className="">
                        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                        </div>
                        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        </div>
                        <div className="px-4 py-15 pb-28 md:py-20">
                            <h1 className="relative z-10 mx-auto max-w-4xl text-start max-sm:text-center  text-5xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
                                {heroData.title
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                filter: "blur(4px)",
                                                y: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                filter: "blur(0px)",
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                                ease: "easeInOut",
                                            }}
                                            className="mr-2 inline-block"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                            </h1>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.8,
                                }}
                                className="relative z-10 max-w-xl py-4  text-start max-sm:text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
                            >
                                {heroData.subTitle.beforeHeighLight}
                                <Highlight className="px-2">
                                    {" "}
                                    {heroData.subTitle.heighLight}
                                </Highlight>{" "}
                                {heroData.subTitle.afterHeighLight}
                            </motion.p>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: 1,
                                }}
                                className="relative z-10 mt-8 flex flex-wrap items-center justify-start max-sm:justify-center gap-4"
                            >
                                <a
                                    href="#projects"
                                    className="w-60 text-center cursor-pointer max-sm:w-[45%] transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                                >
                                    <button className="cursor-pointer">View My Work</button>
                                </a>
                                <a
                                    className="w-60 max-sm:w-[45%] text-center cursor-pointer transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                                    href="#contact"
                                >
                                    <button className="cursor-pointer">Get In Touch</button>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                    {/* pic.jpeg 500 460 => 350 300 */}
                    <div className="">
                        <div className="relative flex items-center justify-center h-[500px] w-[500px] max-sm:h-[300px] max-sm:w-[300px]">
                            {/* Blob Background */}
                            <motion.div
                                className="absolute w-[460px] h-[460px]  max-sm:h-[350px] max-sm:w-[350px] bg-black rounded-[60%]"
                                animate={{
                                    borderRadius: [
                                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                                        "40% 50% 60% 40% / 60% 50% 40% 50%",
                                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                                    ],
                                }}
                                transition={{
                                    duration: 8,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            />

                            {/* Profile Image */}
                            <div className="relative z-10 overflow-hidden rounded-full border-[6px] border-white shadow-lg w-[300px] h-[300px] max-sm:h-[240px] max-sm:w-[240px]">
                                <Image
                                    src="/images/pic.webp"
                                    alt="Profile Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
