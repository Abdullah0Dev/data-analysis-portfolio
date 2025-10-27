import { Metadata } from "next";
import Image from "next/image";

// Navbar Data
export const navItems = [
    // { name: "About", link: "#about" },[]
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Testimonials", link: "#testimonials" },
];
// constants
export const RESUME_LINK = `https://drive.google.com/file/d/1hcRiwbbP_4mioIVtfv14KEMkdDCZb-j0/view`
export const OWNER_NAME = "Abdullah";
export const OWNER_LOGO_URL = "https://i.ibb.co/21YqRXTp/logo.jpg";
export const OWNER_COUNTRY_NAME = "Saudi Arabia";
export const OWNER_CITY_NAME = "Riyadh";
export const WEBSITE_ADDRESS = "https://abdullah-portfolio-liard.vercel.app/";
export const CONTACT_ADDRESS = `https://wa.me/+201122026970?text=Hello%20${OWNER_NAME}!`;
// METADATA for SEO
export const metadataTemplate: Metadata = {
    title: `${OWNER_NAME} - Professional Data Analyst`,
    description: `${OWNER_NAME} is a professional data analyst specializing in turning complex datasets into actionable business insights using Python, SQL, Power BI, and advanced analytics techniques.`,
    keywords: [
        // Core Data Analysis Services
        "data analysis",
        "business intelligence",
        "data visualization",
        "predictive analytics",
        "Python data analysis",
        "SQL analytics",
        "Power BI dashboards",
        "machine learning for business",
        "data-driven decision making",
        "data storytelling",

        // Local SEO (if targeting a region)
        `"data analyst in ${OWNER_COUNTRY_NAME}`,
        `"business intelligence consultant ${OWNER_COUNTRY_NAME}`,
        `"Power BI expert ${OWNER_CITY_NAME}`,
        `"Python data analytics ${OWNER_COUNTRY_NAME}`,
        // Branding
        OWNER_NAME,
    ],
    openGraph: {
        title: `${OWNER_NAME} - Professional Data Analyst`,
        description: `Expert data analysis and business intelligence solutions using Python, SQL, Power BI, and machine learning to drive smarter business decisions.`,
        type: "website",
        url: WEBSITE_ADDRESS,
        siteName: OWNER_NAME,
        images: [
            {
                url: OWNER_LOGO_URL,
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: `@${OWNER_NAME.trim()}`,
        creator: `@${OWNER_NAME.trim()}`,
        title: `${OWNER_NAME} - Professional Data Analyst`,
        description: `Expert data analysis and business intelligence solutions using Python, SQL, Power BI, and machine learning to drive smarter business decisions.`,
        images: [OWNER_LOGO_URL],
    },
};

// Hero Section content data
export const heroData = {
    title: "Transforming data into actionable insights.",
    subTitle: {
        beforeHeighLight:
            "I’m a data analyst who uncovers patterns,  visualizes trends, and turns complex data ",
        heighLight: "into clear, actionable insights",
        afterHeighLight: "that drive results.",
    },
};

// About Section content data
export const aboutContentData = [
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

// Skills Section Data
export const skillsData = [
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

// Projects Data
export const projectsData = [
    {
        id: 1,
        title: "Customer Churn Analysis",
        subtitle: "Predictive Modeling using Python & SQL",
        description:
            "Developed a predictive model to identify key churn drivers across 5,000+ customers, enabling proactive retention strategies and reducing churn risk by 17%.",
        tools: ["Python", "Pandas", "Scikit-learn", "SQL"],
        img: "https://mavenanalyticsio-upload-bucket-prod.s3.us-west-2.amazonaws.com/197857246/projects/c3bea0c1-82cc-44f4-aa71-dd86736560c2.png",
        link: "https://github.com/abdullah/churn-analysis",
    },
    {
        id: 2,
        title: "Sales Performance Dashboard",
        subtitle: "Interactive KPI Tracking in Power BI",
        description:
            "Built a Power BI dashboard to monitor sales trends, profit margins, and customer segments, improving forecasting accuracy and decision-making efficiency by 25%.",
        tools: ["Power BI", "DAX", "Excel", "SQL"],
        img: "https://cdn.mavenanalytics.io/public/profile/08c10360-a031-7037-515c-674e64056860/projects/1.png",
        link: "https://app.powerbi.com/view?r=example",
    },
    {
        id: 3,
        title: "Customer Segmentation Analysis",
        subtitle: "Clustering & Behavioral Insights",
        description:
            "Performed segmentation analysis using K-Means and visualization dashboards to identify high-value customer groups and tailor targeted marketing strategies.",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        img: "https://mavenanalyticsio-upload-bucket-prod.s3.us-west-2.amazonaws.com/197857246/projects/c3bea0c1-82cc-44f4-aa71-dd86736560c2.png",
        link: "https://github.com/abdullah/customer-segmentation",
    },
    {
        id: 4,
        title: "Financial Performance Report",
        subtitle: "Power BI & Excel Integration",
        description:
            "Designed a financial dashboard analyzing revenue streams, expense trends, and profit ratios, helping leadership track KPIs and optimize financial planning.",
        tools: ["Power BI", "Excel", "DAX", "SQL"],
        img: " https://cdn.mavenanalytics.io/public/profile/08c10360-a031-7037-515c-674e64056860/projects/1.png",
        link: "https://github.com/abdullah/financial-performance",
    },
    {
        id: 5,
        title: "Supply Chain Efficiency Analysis",
        subtitle: "Operational Performance Optimization",
        description:
            "Analyzed delivery and inventory data to identify bottlenecks, reducing order fulfillment time by 12% and improving overall supply chain efficiency.",
        tools: ["Python", "SQL", "Power BI", "Pandas"],
        img: " https://cdn.mavenanalytics.io/public/profile/08c10360-a031-7037-515c-674e64056860/projects/1.png",
        link: "https://github.com/abdullah/supply-chain-analysis",
    },
    {
        id: 6,
        title: "Marketing Campaign Performance",
        subtitle: "Attribution & ROI Analysis",
        description:
            "Evaluated campaign data across multiple channels to measure ROI, identify top-performing segments, and provide data-backed recommendations for future campaigns.",
        tools: ["Tableau", "SQL", "Excel", "Python"],
        img: " https://cdn.mavenanalytics.io/public/profile/08c10360-a031-7037-515c-674e64056860/projects/1.png",
        link: "https://github.com/abdullah/marketing-performance",
    },
];

// Feedback Data
export const testimonialsData = [
    {
        quote: "Working with Abdullah was exceptional. His data insights helped us identify trends we’d completely overlooked. Reliable, precise, and truly an expert in his field.",
        name: "Mohammed",
        title: "CEO of BrightWave Solutions",
        img: "/icons/person.png",
    },
    {
        quote: "Abdullah consistently delivered high-quality analysis that guided our marketing strategy. Always on time, detail-oriented, and a pleasure to work with.",
        name: "Liam Martinez",
        title: "Marketing Manager at NextGen Media",
        img: "/icons/person.png",
    },
    {
        quote: "Abdullah’s analytical skills transformed how we understand our data. His reports were clear, actionable, and directly improved our performance metrics.",
        name: "Noah John",
        title: "Founder of EcoTech Innovations",
        img: "/icons/person.png",
    },
    {
        quote: "Abdullah made our data come to life. His ability to translate numbers into insights helped us make confident business decisions with real results.",
        name: "Ethan Smith",
        title: "Product Manager at CloudSync",
        img: "/icons/person.png",
    },
    {
        quote: "Partnering with Abdullah was a great experience. His expertise in data analysis and clear communication made the whole process smooth and impactful.",
        name: "Adam Johnson",
        title: "Creative Director at PixelPerfect Designs",
        img: "/icons/person.png",
    },
];

// Experience Timeline Data Data
export const experienceData = [
    {
        title: "2025",
        content: (
            <div>
                <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                    Designed and developed end-to-end data analytics solutions —
                    from data collection and cleaning to dashboard deployment
                    using Power BI and Python.
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
                    Automated data pipelines and built predictive models using
                    Python, SQL, and Scikit-learn. Improved data efficiency and
                    accuracy by 30%.
                </p>
                <div className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                    Tools & Technologies: Python (Pandas, NumPy, Scikit-learn),
                    PostgreSQL, Power BI
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
                    Completed professional certifications in Data Analysis and
                    Data Science. Learned core concepts including Statistics,
                    SQL, Python, and Business Intelligence tools.
                </p>
                <ul className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 list-disc list-inside">
                    <li>Google Data Analytics Certification</li>
                    <li>Hands-on with Python, Pandas, and Power BI</li>
                    <li>
                        Built 10+ mini projects analyzing real-world datasets
                    </li>
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

// Contact Content Data
export const contactData = {
    title: {
        beforeHeighLight: "Let’s transform your ",
        heighLight: "data",
        afterHeighLight: "into powerful insights.",
    },
    subTitle: `Whether you need advanced dashboards, automated reports, or end-to-end data pipelines — I help teams uncover trends, make informed decisions, and build scalable data systems. Let’s connect and discuss your next project.`,
};

// Footer Social Media Data
export const socialMedia = [
    {
        id: 1,
        link: "https://github.com/abdullahfuture",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png",
    },
    {
        id: 2,
        link: "https://wa.me/+201011245872?text=Hello%20Abdullah!",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/1024px-WhatsApp_Logo_green.svg.png",
    },
    {
        id: 3,
        link: "https://www.linkedin.com/in/abdullah01ahmed/",
        img: "https://cdn-icons-png.flaticon.com/512/3955/3955056.png",
    },
];
