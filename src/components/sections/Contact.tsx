import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "../ui/magic-button";

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
        <div>
            <footer className="w-full  pb-5" id="contact">
                <div className="flex flex-col items-center">
                    <h1 className="heading lg:max-w-[45vw]">
                        Ready to take <span className="text-purple">your</span>{" "}
                        digital presence to the next level?
                    </h1>
                    <p className="text-white-200 md:mt-10 my-5 text-center">
                        Reach out to me today and let&apos;s discuss how I can
                        help you achieve your goals.
                    </p>
                    <a href="mailto:abdullahdev001@gmail.com">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
                <div className="flex mt-16 bg-[url(/footer-grid.svg)] md:flex-row flex-col justify-between items-center">
                    <p className="md:text-base text-sm md:font-normal font-light">
                        Copyright © 2024 Abdullah
                    </p>

                    <div className="flex items-center mt-3 md:gap-3 gap-6">
                        {socialMedia.map((info) => (
                            <a key={info.id} href={info.link}>
                                <div className="w-10 h-10 overflow-x-auto cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                    <img
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
        </div>
    );
};

export default Contact;
export const socialMedia = [
    {
        id: 1,
        link: "https://github.com/abdullah0Dev/",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png",
    },
    {
        id: 2,
        link: "https://wa.me/+201011245872?text=Hello%20Abdullah!",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/1024px-WhatsApp_Logo_green.svg.png",
    },
    {
        id: 3,
        link: "https://www.linkedin.com/in/abdullah1dev/",
        img: "https://cdn-icons-png.flaticon.com/512/3955/3955056.png",
    },
];
