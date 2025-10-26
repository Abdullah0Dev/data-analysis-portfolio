import React from "react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { IconBrain } from "@tabler/icons-react";

const Footer = () => {
    return (
        <BackgroundGradientAnimation className="relative w-full py-2">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:gap-4">
                {/* Logo or name */}
                <div className="flex items-center gap-2 text-gray-200">
                    {/* Optional: if you have a logo */}
                        <IconBrain
                            width={24}
                            height={24}
                            className="text-white/80"
                        />
                    <span className="text-sm text-gray-300">
                        Crafted with <span className="text-red-400">❤️</span> by{" "}
                        <a
                            href="https://www.devmindslab.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                            Dev Minds
                        </a>
                    </span>
                </div>
            </div>

            {/* Glow line accent */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </BackgroundGradientAnimation>
    );
};

export default Footer;
