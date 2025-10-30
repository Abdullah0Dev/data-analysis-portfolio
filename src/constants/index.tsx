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
export const RESUME_LINK = `https://drive.google.com/file/d/1hcRiwbbP_4mioIVtfv14KEMkdDCZb-j0/view`;
export const OWNER_NAME = "Abdullah";
export const OWNER_LOGO_URL = "https://i.ibb.co/21YqRXTp/logo.jpg";
export const OWNER_COUNTRY_NAME = "Saudi Arabia";
export const OWNER_CITY_NAME = "Riyadh";
export const WEBSITE_ADDRESS = "https://abdullah-portfolio-liard.vercel.app/";
export const CONTACT_ADDRESS = `https://wa.me/+201122026970?text=Hello%20${OWNER_NAME}!`;
export const CONTACT_EMAIL = `abdullahyonus616@gmail.com`;
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
export const aboutContentData = {
    title: "About me",
    content:
        "I’m Abdullah, a data analyst passionate about transforming data into clear insights and meaningful stories. I specialize in turning raw numbers into decisions that drive growth, improve performance, and uncover hidden trends through data visualization and analysis.",
    hookTitle: "Hey, want to team up on a project?",
    email: CONTACT_EMAIL,
};
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
        title: "Smart Hospitality Analytics",
        subtitle: "Revenue Optimization & Customer Insights",
        description:
            "Built a dynamic analytics dashboard that uncovered city-wise and day-wise performance trends for multi-location hotels. Helped optimize pricing, target customers better, and boost occupancy rates across locations — driving measurable revenue growth.",
        tools: ["Excel", "Power BI", "SQL"],
        img: "https://raw.githubusercontent.com/abdullahfuture/Hospitality-Analytics/main/hosptality-dashboard.png",
        link: "https://github.com/abdullahfuture/Hospitality-Analytics",
    },
    {
        id: 2,
        title: "US Healthcare Analytics Dashboard",
        subtitle: "Healthcare Data Intelligence & Performance Insights",
        description:
            "Developed an advanced Power BI dashboard that analyzes patient demographics, hospital performance, and payer-provider relationships across the U.S. healthcare system. Delivered actionable insights to improve decision-making, optimize hospital operations, and enhance patient care outcomes.",
        tools: ["Power BI", "DAX", "SQL", "Excel"],
        img: "/images/us-health.webp",
        link: "https://github.com/abdullahfuture/US-Healthcare-Analysis",
    },
    {
        id: 3,
        title: "Competitive Marketing Analysis Report",
        subtitle: "Sales Channel & Product Performance Insights",
        description:
            "Designed an interactive Power BI report analyzing total and channel-wise sales across online, social media, outlet, and store platforms. Delivered insights on product performance, sales distribution, and seasonal trends — empowering smarter marketing spend and channel optimization.",
        tools: ["Power BI", "DAX", "Excel", "SQL"],
        img: "https://github.com/abdullahfuture/Competivtive-Marketing-Analysis-Report/blob/main/Competivtive%20Marketing%20Analysis%20Report.jpg?raw=true",
        link: "https://github.com/abdullahfuture/Competivtive-Marketing-Analysis-Report",
    },
    {
        id: 4,
        title: "Alfa Store Sales & Profit Dashboard",
        subtitle: "Global Retail Analytics & Performance Tracking",
        description:
            "Created a Power BI dashboard that visualizes multi-year sales, profit ratios, and returns across global markets. Delivered insights by category, sub-category, and city to help identify top-performing regions, improve product strategy, and drive data-driven business growth.",
        tools: ["Power BI", "DAX", "Excel", "SQL"],
        img: "https://github.com/abdullahfuture/Alfa-Store-Analysis-Dashboard/blob/main/Alfa%20Store%20Analysis%20Dashboard.jpg?raw=true",
        link: "https://github.com/abdullahfuture/Alfa-Store-Analysis-Dashboard",
    },
    {
        id: 5,
        title: "E-Commerce Data Analysis Dashboard",
        subtitle: "Customer Insights & Sales Performance Tracking",
        description:
            "Built a detailed Power BI dashboard to analyze online sales performance, profit margins, and customer behavior across multiple regions. Helped identify top-selling products, improve pricing strategies, and optimize marketing efforts through interactive visual insights.",
        tools: ["Power BI", "DAX", "Excel", "SQL"],
        img: "https://github.com/KalyanM45/E-Commerce-Data-Analysis/blob/main/E-Commerce%20Data%20Analysis_page.jpg?raw=true",
        link: "https://github.com/abdullahfuture/E-Commerce-Data-Analysis",
    },

    {
        id: 6,
        title: "Shopping Customer Segmentation",
        subtitle: "Data-Driven Marketing & Customer Targeting",
        description:
            "Implemented a customer segmentation model using demographic and behavioral data such as age, income, and spending patterns. Delivered clear customer clusters to help marketing teams personalize campaigns, boost conversions, and maximize ROI.",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
        img: "https://github.com/abdullahfuture/Segment-Shopping-Customers/blob/main/end-results.png?raw=true",
        link: "https://github.com/abdullahfuture/Segment-Shopping-Customers",
    },
];

// Feedback Data
export const testimonialsData = [
    {
        quote: "Working with Abdullah was exceptional. His data insights helped us identify trends we’d completely overlooked. Reliable, precise, and truly an expert in his field.",
        name: "Mohammed",
        title: "CEO of BrightWave Solutions",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        quote: "Abdullah consistently delivered high-quality analysis that guided our marketing strategy. Always on time, detail-oriented, and a pleasure to work with.",
        name: "Liam Martinez",
        title: "Marketing Manager at NextGen Media",
        img: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
        quote: "Abdullah’s analytical skills transformed how we understand our data. His reports were clear, actionable, and directly improved our performance metrics.",
        name: "Noah John",
        title: "Founder of EcoTech Innovations",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "Abdullah made our data come to life. His ability to translate numbers into insights helped us make confident business decisions with real results.",
        name: "Ethan Smith",
        title: "Product Manager at CloudSync",
        img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        quote: "Partnering with Abdullah was a great experience. His expertise in data analysis and clear communication made the whole process smooth and impactful.",
        name: "Adam Johnson",
        title: "Creative Director at PixelPerfect Designs",
        img: "https://randomuser.me/api/portraits/men/10.jpg",
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
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
                        src="https://blog.coupler.io/wp-content/uploads/2025/04/web-analytics-dashboard-power-bi-768x431.png"
                        alt="Power BI Dashboard"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
                        src="https://digitalfloats.com/wp-content/uploads/2023/08/Python-for-data-analysis-800x445.jpg"
                        alt="Python Data Analysis"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
                        src="https://www.shutterstock.com/image-photo/data-analyst-working-on-business-260nw-2276307805.jpg"
                        alt="Dashboard insights"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
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
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
                        src="https://cdn.activestate.com/wp-content/uploads/2020/06/AutomatableTasks.jpg"
                        alt="Python Data Automation"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
                        src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=800"
                        alt="SQL Query Optimization"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
                        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800"
                        alt="Power BI Report"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
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
                    <Image
                        loading="lazy"
                        src="https://abdallahnasser.netlify.app/assets/img/3.png"
                        alt="Learning Python"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                        // make width and hight
                        width={300}
                        height={400}
                    />
                    <Image
                        loading="lazy"
                        src="https://softwaretechnologyconsultants.com/wp-content/uploads/2022/07/python-data-yand.jpg"
                        alt="Data Visualization Study"
                        width={300}
                        height={400}
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        width={300}
                        height={400}
                        src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=800"
                        alt="Certification"
                        className="h-24 md:h-40 lg:h-52 w-full rounded-lg object-cover shadow-md"
                    />
                    <Image
                        loading="lazy"
                        src="https://abdallahnasser.netlify.app/assets/img/4.png"
                        alt="Data Project"
                        width={300}
                        height={400}
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
