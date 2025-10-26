"use client";
import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { GlareCard } from "../ui/glare-card";
import Image from "next/image";

const skills = [
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        sections: [
            {
                title: "Data Analysis",
                items: ["NumPy", "Pandas", "Seaborn"],
            },
            {
                title: "Automation & Scraping",
                items: ["Regex", "OpenPyXL", "BeautifulSoup", "Selenium"],
            },
        ],
    },
    {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        sections: [
            {
                title: "Query Mastery",
                items: [
                    "Joins & Aggregations",
                    "CTEs & Subqueries",
                    "Window Functions",
                    "Data Cleaning in SQL",
                ],
            },
            {
                title: "Databases",
                items: ["PostgreSQL", "MySQL", "SQLite"],
            },
        ],
    },
    {
        name: "Power BI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        sections: [
            {
                title: "Modeling & DAX",
                items: [
                    "Power Query",
                    "Data Modeling",
                    "DAX Functions",
                    "Custom KPIs",
                ],
            },
            {
                title: "Dashboards",
                items: [
                    "Interactive Reports",
                    "Cloud Publishing",
                    "Row-Level Security",
                ],
            },
        ],
    },
    {
        name: "Excel",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/587px-Microsoft_Excel_2013-2019_logo.svg.png",
        sections: [
            {
                title: "Analysis Tools",
                items: [
                    "Pivot Tables",
                    "Power Query",
                    "Formulas & VBA",
                    "Data Visualization",
                ],
            },
            {
                title: "Automation",
                items: ["Excel + Python", "Data Cleaning Scripts"],
            },
        ],
    },
    {
        name: "Statistics",
        icon: "/logo1.png",
        sections: [
            {
                title: "Descriptive",
                items: ["Distributions", "Variance", "Correlation"],
            },
            {
                title: "Inferential",
                items: [
                    "Hypothesis Testing",
                    "Regression",
                    "Confidence Intervals",
                ],
            },
        ],
    },
    {
        name: "Data Engineering",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        sections: [
            {
                title: "Pipelines",
                items: ["ETL", "Airflow", "Prefect", "BigQuery"],
            },
            {
                title: "Visualization",
                items: ["Tableau", "Streamlit", "Plotly Dash"],
            },
        ],
    },
];

const Skills = () => {
    return (
        <section>
            <div className="" id="skills">
                <TextHoverEffect text="SKILLS" />
            </div>

            <div className="relative w-full items-center justify-center flex ">
                {/* Responsive Grid */}
                <div className=" flex max-w-7xl flex-row flex-wrap gap-5 columns-3 items-center justify-center">
                    {skills.map((skill) => (
                        <GlareCard
                            key={skill.name}
                            className="flex flex-col items-start justify-start p-6 bg-white/90 backdrop-blur-sm text-left"
                        >
                            {/* Icon */}
                            <div className="relative h-14 w-14 mb-4">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Skill Name */}
                            <h3 className="text-gray-300 font-bold text-xl mb-4">
                                {skill.name}
                            </h3>

                            {/* Skill Sections */}
                            <div className="flex flex-col gap-4 text-gray-400">
                                {skill.sections.map((section, i) => (
                                    <div key={i}>
                                        <h4 className="font-semibold text-gray-200 text-sm mb-1">
                                            {section.title}:
                                        </h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            {section.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </GlareCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
