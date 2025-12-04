export const METADATA = {
  author: "Giridhar K",
  title: "Portfolio | Giridhar K",
  description:
    "Giridhar K is a passionate Software Developer and Data Analyst, skilled in Python, machine learning, and data visualization. Dedicated to building efficient solutions and creating meaningful insights.",
  siteUrl: "https://giridhark.me/",
  twitterHandle: "@giridhark0915",
  keywords: [
    "Giridhar K",
    "Software Developer",
    "Data Analyst",
    "Python Developer",
    "Machine Learning",
    "Portfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I am a software developer",
  "I build intelligent solutions with data",
  "I create meaningful insights through analytics",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:giridhar.cseai@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/giridhar-k-90197929b/",
  },
  {
    name: "github",
    url: "https://github.com/Giri1529",
  },
  {
    name: "resume",
    url: "https://drive.google.com/file/d/14kcq_XSKeuLNFuJMcEuvMJzWd5WpqxkP/view?usp=sharing",
  },
];

export const SKILLS = {
  programmingAndMarkupLanguages: [
    "python",
    "html",
    "css",
    "streamlit",
  ],
  frameworksAndLibraries: [
    "numpy",
    "pandas",
    "sklearn",
    "tensorflow",
    "keras",
    "fastapi",
  ],
  databases: ["sql"],
  developerTools: [
    "git",
    "vscode",
    "github",
  ],
};

export const PROJECTS = [
  {
    name: "Job Role Prediction System",
    imageKey: "job-prediction",
    description: "ML model predicting job roles from education with 85%+ accuracy 🎯",
    gradient: ["#667eea", "#764ba2"],
    tech: ["python", "sklearn", "pandas"],
  },
  {
    name: "Data Analytics & Predictive Modeling",
    imageKey: "data-analytics",
    description: "End-to-end data pipeline with Power BI dashboards 📊",
    gradient: ["#f093fb", "#f5576c"],
    tech: ["python", "powerbi", "mysql"],
  },
  {
    name: "DocuQuery AI",
    imageKey: "docuquery",
    description: "AI-powered document chatbot with semantic search 🤖",
    gradient: ["#4facfe", "#00f2fe"],
    tech: ["python", "tensorflow", "fastapi"],
  },
  {
    name: "Finance Tracker",
    imageKey: "finance-tracker",
    description: "Personal finance app with interactive data visualizations 💰",
    gradient: ["#43e97b", "#38f9d7"],
    tech: ["python", "matplotlib", "pandas"],
  },
];

export const WORK_CONTENTS = {
  INFOSYS: [
    {
      title: "Infosys Springboard",
      description:
        "Infosys Springboard is a comprehensive learning platform providing industry-relevant skills and career development opportunities.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Learn. Build. Grow.
        </div>
      ),
    },
    {
      title: "Machine Learning Project",
      description:
        "Executed an end-to-end machine learning project, 'Predicting Job Roles from Educational Background,' involving data preprocessing, exploratory data analysis (EDA), and feature engineering using Python, Pandas, NumPy, and Scikit-learn.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Python Intern
        </div>
      ),
    },
    {
      title: "Model Development",
      description:
        "Built, trained, and optimized predictive models to classify job roles based on educational data, enhancing model performance and contributing to data-driven insights for talent mapping.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Sep 2025 – Nov 2025
        </div>
      ),
    },
  ],
  ROOMAN: [
    {
      title: "Rooman Technology",
      description:
        "Rooman Technology is a leading technology education and training company focused on data science and analytics.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Transform data into insights
        </div>
      ),
    },
    {
      title: "Data Analysis",
      description:
        "Conducted data analysis using SQL and Python, performing data cleaning, validation, and exploratory analysis to generate actionable business insights from structured datasets.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Data Analyst Intern
        </div>
      ),
    },
    {
      title: "Predictive Modeling",
      description:
        "Developed predictive ML models (classification/regression) with feature engineering and optimization, and designed Power BI dashboards to communicate data-driven insights to stakeholders.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          May 2025 - Jul 2025
        </div>
      ),
    },
  ],
  UPTOSKILLS: [
    {
      title: "UptoSkills",
      description:
        "UptoSkills is an ed-tech platform providing industry-relevant skills and training.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Artificial Intelligence Intern
        </div>
      ),
    },
    {
      title: "Compliance Automation",
      description:
        "Architected an AI-powered compliance automation system using LangChain and RAG, processing over 100 legal contracts with 92% accuracy in GDPR/HIPAA compliance detection.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          AI Architect
        </div>
      ),
    },
    {
      title: "NLP Pipeline",
      description:
        "Reduced manual compliance review time by 85% through the development of an NLP-based clause extraction and automated risk scoring pipeline.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          October 2025 - Present
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
