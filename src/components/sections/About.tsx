"use client";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { AnimatePresence, motion } from "motion/react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { aboutContentData } from "@/constants";
import { useState } from "react";
import Lottie from "react-lottie";

import animationLottieData from "@/constants/lottie/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../ui/magic-button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <div className="max-sm:mt-32 lg:-mb-32" id="about">
                <TextHoverEffect text="ABOUT" />
            </div>
            <div className="w-full p-5">
                <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            className={item.className}
                            content={item.content}
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
};

export default About;

const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
            x: 0,
            rotate: 0,
        },
        hover: {
            x: 8,
            rotate: 2,
        },
    };
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            variants={variants}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                duration: 0.3,
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] overflow-hidden rounded-3xl bg-dot-black/[0.2] flex-col space-y-2 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none"
            style={{
                background: "#FFFFFF",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundSize: "200% 200%",
            }}
        >
            <motion.div className="h-full p-8 w-full rounded-lg">
                <h1
                    className={`font-sans text-center text-lg lg:text-3xl   font-extrabold z-10 text-black`}
                >
                    {aboutContentData.title}
                </h1>
                <p className="mt-3 truncate text-wrap">
                    {aboutContentData.content}
                </p>
            </motion.div>
        </motion.div>
    );
};
const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 relative w-full h-full min-h-24 max-sm:h-120  rounded-3xl flex-row  overflow-hidden"
        >
            {/* make the image full width & height */}
            <Image
                fill
                src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                alt="avatar"
                className="rounded-3xl absolute inset-0  w-full h-full object-cover"
            />
            {/* make a half circle mask over the image top left to like crop it with white bg */}
            <motion.div
                variants={first}
                className="absolute -top-10 -left-24 bg-transparent rounded-br-[62px] w-52 h-52 border-44 border-white"
            />
            <motion.div
                variants={second}
                className="absolute -bottom-10 -right-12 bg-transparent rounded-tl-[62px] w-52 h-52 border-44 border-white"
            />
        </motion.div>
    );
};
const SkeletonFive = () => {
    const [copied, setCopied] = useState(false);
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationLottieData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        const text = aboutContentData.email;
        navigator.clipboard.writeText(text);
        setCopied(true);
        // reset after 3 seconds
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <BackgroundGradientAnimation containerClassName="rounded-4xl max-md:h-48 flex flex-col p-6  items-center justify-center w-full h-full">
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div
                    className={`font-sans text-center max-md:mb-5 text-lg lg:text-3xl max-w-96 font-extrabold z-10 text-white`}
                >
                    {aboutContentData.hookTitle}
                </div>

                <div className="relative items-center flex justify-center self-center">
                    {/* Copy Button + Lottie */}
                    {/* AnimatePresence lets Lottie fade in/out when copied changes */}
                    <AnimatePresence>
                        {copied && (
                            <motion.div
                                key="confetti"
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                transition={{ duration: 0.4 }}
                                className="absolute -bottom-5 right-1/2 translate-x-1/2 pointer-events-none"
                            >
                                <Lottie
                                    options={defaultOptions}
                                    height={200}
                                    width={400}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <MagicButton
                        title={
                            copied
                                ? "Email is Copied!"
                                : "Copy my email address"
                        }
                        icon={<IoCopyOutline />}
                        position="left"
                        handleClick={handleCopy}
                        otherClasses="!bg-[#161A31]"
                    />
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
};
const items = [
    {
        content: <SkeletonFour />,
        className: "md:col-span-2 md:row-span-2 ",
    },
    {
        content: <SkeletonThree />,
        className: "md:col-span-1",
    },

    {
        content: <SkeletonFive />,
        className: "md:col-span-1 col-span-3",
    },
];
