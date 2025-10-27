"use client";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
 import {aboutContentData} from '@/constants'
const About = () => {

  return (
    <div>
      <div  className="max-sm:mt-32" id="about">
        <TextHoverEffect text="ABOUT" />
      </div>
      <div className="w-full py-4">
        <StickyScroll content={aboutContentData} />
      </div>
    </div>
  );
};

export default About;
