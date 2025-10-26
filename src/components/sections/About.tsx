"use client";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const About = () => {
  const content = [
    {
      title: "Turning Data into Insights",
      description:
        "I’m a data analyst passionate about uncovering patterns that drive smarter decisions. My expertise lies in transforming raw, messy datasets into actionable insights using tools like Python, SQL, and Power BI. I believe that every dataset tells a story — it just needs the right perspective to bring it to life.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--sky-400),var(--emerald-400))] text-white font-semibold">
          Data Storytelling
        </div>
      ),
    },
    {
      title: "Analytical Thinking Meets Creativity",
      description:
        "For me, analysis is more than just numbers — it’s about understanding context. I combine data visualization, statistical modeling, and problem-solving to communicate insights clearly and effectively. Whether it’s identifying trends, forecasting growth, or optimizing performance, I turn complex data into visual stories that everyone can understand.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/analytics-dashboard.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="Analytics Dashboard"
          />
        </div>
      ),
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "I thrive on helping businesses make evidence-based decisions. By connecting data pipelines, automating reports, and building predictive models, I enable teams to act faster and with confidence. My goal is always the same — to bridge the gap between data and action.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-400),var(--rose-400))] text-white font-semibold">
          Decision Intelligence
        </div>
      ),
    },
    {
      title: "Continuous Learning & Curiosity",
      description:
        "The world of data is constantly evolving — and that’s what keeps me inspired. I’m always exploring new tools, statistical techniques, and visualization trends to stay ahead. Beyond the numbers, I’m deeply curious about how data can make an impact on real-world problems.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-400),var(--sky-400))] text-white font-semibold">
          Growth Mindset
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="" id="about">
        <TextHoverEffect text="ABOUT" />
      </div>
      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default About;
