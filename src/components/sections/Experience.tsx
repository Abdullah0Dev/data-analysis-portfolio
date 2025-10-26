import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
const data = [
  {
    title: "2025",
    content: (
      <div>
        <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
          Designed and developed end-to-end data analytics solutions — from data
          collection and cleaning to dashboard deployment using Power BI and Python.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://blog.coupler.io/wp-content/uploads/2025/04/web-analytics-dashboard-power-bi-768x431.png"
            alt="Power BI Dashboard"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://digitalfloats.com/wp-content/uploads/2023/08/Python-for-data-analysis-800x445.jpg"
            alt="Python Data Analysis"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://www.shutterstock.com/image-photo/data-analyst-working-on-business-260nw-2276307805.jpg"
            alt="Dashboard insights"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://boostlabs.com/wp-content/uploads/2023/02/10-types-of-data-visualization-1-1024x614.jpg"
            alt="Data Visualization"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
          Automated data pipelines and built predictive models using Python, SQL, and
          Scikit-learn. Improved data efficiency and accuracy by 30%.
        </p>
        <div className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
          Tools & Technologies: Python (Pandas, NumPy, Scikit-learn), PostgreSQL, Power BI
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://cdn.activestate.com/wp-content/uploads/2020/06/AutomatableTasks.jpg"
            alt="Python Data Automation"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=800"
            alt="SQL Query Optimization"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800"
            alt="Power BI Report"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800"
            alt="Machine Learning Workflow"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
          Completed professional certifications in Data Analysis and Data Science.
          Learned core concepts including Statistics, SQL, Python, and Business
          Intelligence tools.
        </p>
        <ul className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 list-disc list-inside">
          <li>Google Data Analytics Certification</li>
          <li>Hands-on with Python, Pandas, and Power BI</li>
          <li>Built 10+ mini projects analyzing real-world datasets</li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://yourdigitalaid.com/wp-content/uploads/2022/05/passing-crash-course-in-python.jpg"
            alt="Learning Python"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://softwaretechnologyconsultants.com/wp-content/uploads/2022/07/python-data-yand.jpg"
            alt="Data Visualization Study"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=800"
            alt="Certification"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/526853446_3751571605140193_6397578126667825284_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=7uCsL1howu8Q7kNvwFsILLd&_nc_oc=AdmXJwRRzoAhpnntxivMcOe0yHEXdObljjN-5M-lZxks8fbnXPmLC8buacOQanhP8hk&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=xF4aeBlpBwqBFoUJ2_WNcg&oh=00_Afcu4F_1xlIPW9KvZNmZvk-6ys1mj2B2WaDYuwNsyVBkrA&oe=6903920A"
            alt="Data Project"
            className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
];

const Experience = () => {
    return (
        <div>
            <div className=" " id="experience">
                <TextHoverEffect text="EXPERIENCE" />
            </div>
            <div className="">
                <div className="relative w-full overflow-clip">
                    <Timeline data={data} />
                </div>
            </div>
        </div> 
    );
};

export default Experience;
