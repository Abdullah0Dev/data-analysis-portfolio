import React from "react";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "../ui/magic-button";
import { TextHoverEffect } from "../ui/text-hover-effect";
import Footer from "./Footer";
import Image from "next/image";
import { CONTACT_ADDRESS, contactData, OWNER_NAME, socialMedia } from "@/constants";

export const gridItems = [
    {
        id: 1,
        title: "I focus on working closely with clients and keeping communication open.",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zones.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech lover, crazy about development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a A Soccer App",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Hey, want to team up on a project?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

const Contact = () => {
    return (
        <div className="">
            <div className="z-10 mt-12" id="contact">
                <TextHoverEffect text="CONTACT" />
            </div>
            <div className="relative overflow-hidden">
                <footer className="w-full pb-5" id="contact">
                    <div className="flex flex-col items-center py-16">
                        <h1 className="heading lg:max-w-[45vw]">
                           {contactData.title.beforeHeighLight}{" "}
                            <span className="text-[#CBACF9]">{contactData.title.heighLight}</span> {contactData.title.afterHeighLight}
                        </h1>
                        <p className="custom-backdrop-blur  z-10 lg:max-w-[45vw] md:mt-10 my-5 text-center">
                           {contactData.subTitle}
                        </p>
                        <div className="relative z-10">
                            <a href={CONTACT_ADDRESS}>
                                <MagicButton
                                    title="Let's get in touch"
                                    icon={<FaLocationArrow />}
                                    position="right"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex  px-5 mt-16 md:flex-row flex-col max-md:mb-5 justify-between items-center">
                        <p className="md:text-base text-sm md:font-normal font-light">
                            Copyright © 2025 {OWNER_NAME}
                        </p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                            <Footer />
                        </div>
                        <div className="flex items-center mt-3 md:gap-3 gap-6">
                            {socialMedia.map((info) => (
                                <a key={info.id} href={info.link}>
                                    <div className="w-10 h-10 overflow-x-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                        <Image
                                            src={info.img}
                                            alt="icons"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
                <DottedGlowBackground
                    className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
                    opacity={1}
                    gap={10}
                    radius={1.6}
                    colorLightVar="--color-neutral-500"
                    glowColorLightVar="--color-neutral-600"
                    colorDarkVar="--color-neutral-500"
                    glowColorDarkVar="--color-sky-800"
                    backgroundOpacity={0}
                    speedMin={0.3}
                    speedMax={1.6}
                    speedScale={1}
                />
            </div>
        </div>
    );
};

export default Contact;
