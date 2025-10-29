import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { testimonialsData } from "@/constants";
 

const Testimonials = () => {
    return (
        <section className=""> 
            <div className="max-sm:mt-32 lg:-mb-32" id="testimonials">
                <TextHoverEffect text="FEEDBACK" />
            </div>
            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    className="   rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
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
