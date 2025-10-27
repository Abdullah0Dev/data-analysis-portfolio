import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/constants";
 

const Experience = () => {
    return (
        <div>
            <div className=" " id="experience">
                <TextHoverEffect text="EXPERIENCE" />
            </div>
            <div className="">
                <div className="relative w-full overflow-clip">
                    <Timeline data={experienceData} />
                </div>
            </div>
        </div> 
    );
};

export default Experience;
