import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { testimonialsData } from "@/constants";
 

const Testimonials = () => {
    return (
        <section className="">
            {/* <h1 className="heading">
        Kind words from
        <span className="text-purple-500"> satisfied clients</span>
      </h1> */}
            <div className="" id="testimonials">
                <TextHoverEffect text="FEEDBACK" />
            </div>
            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={testimonialsData}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
