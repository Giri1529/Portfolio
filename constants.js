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
  image: "/social-preview.png",
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

export const findMenuRef = (ref) =>
  MENULINKS.find((m) => m.ref === ref) || { ref };

export const TYPED_STRINGS = [
  "I am a software developer",
  "I build intelligent solutions with data",
  "I create meaningful insights through analytics",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=giridhar.cseai@gmail.com",
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
    url: "https://drive.google.com/file/d/1fdQi_BxJuFaTnUlRn1vqb6QxYxGkr2pt/view?usp=sharing",
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
    name: "RAKSHANA 24/7",
    subtitle: "1st Place — Alliance University Hackathon 2026",
    imageKey: "rakshana-24-7",
    description: "Full-stack digital threat intelligence platform with real-time monitoring 🛡️",
    fullDescription: "Architected a digital threat intelligence platform: PWA frontend + Flask REST backend + Celery async task queues for continuous multi-source monitoring. AES-256 PII encryption, scraping pipelines (Telegram, paste sites), real-time Twilio alerts, and NLP-based contextual threat scoring. Designed for vernacular, mobile-first cyber-safety reporting.",
    gradient: ["#1a1f4d", "#ffd200"],
    url: "",
    repo: "",
    isFeatured: true,
    features: [
      "PWA frontend with offline-first reporting",
      "Flask REST backend + Celery async task queues",
      "Multi-source scraping (Telegram, paste sites)",
      "Real-time Twilio SMS alerts",
      "AES-256 PII encryption end-to-end",
      "NLP-based contextual threat scoring",
    ],
    achievements: [
      "1st Place — Alliance University Hackathon 2026",
      "Vernacular, mobile-first cyber-safety design",
      "Real-time multi-channel alerting",
    ],
    tech: ["Python", "Flask", "Celery", "Redis", "PWA", "JavaScript", "AES-256", "Twilio API", "NLP"],
  },
  {
    name: "Job Role Prediction System",
    imageKey: "job-prediction",
    description: "ML model predicting job roles from education with 85%+ accuracy 🎯",
    fullDescription: "An intelligent machine learning system that predicts job roles based on educational background and skills. The system uses optimized ML pipelines with feature selection, hyperparameter tuning, and model comparison to deliver accurate predictions.",
    gradient: ["#667eea", "#764ba2"],
    url: "",
    repo: "",
    features: [
      "Predicts multiple job categories (Software Engineer, Data Analyst, ML Engineer, Web Developer, etc.)",
      "Optimized ML pipeline with feature selection and hyperparameter tuning",
      "Interactive UI with predictions, skill-industry trends, and personalized suggestions",
      "Visual insights showing education-to-job mapping and domain suitability"
    ],
    achievements: [
      "Achieved 85-87% prediction accuracy on test data",
      "Reduced model error significantly using feature engineering",
      "Delivered fast inference system (<200ms prediction time)"
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "Jupyter Notebook"]
  },
  {
    name: "Data Analytics & Predictive Modeling",
    imageKey: "data-analytics",
    description: "End-to-end data pipeline with Power BI dashboards 📊",
    fullDescription: "Comprehensive data analytics solution featuring predictive modeling and interactive dashboards. Provides insights on revenue trends, customer segmentation, and performance metrics with ML-powered predictions.",
    gradient: ["#f093fb", "#f5576c"],
    url: "",
    repo: "",
    features: [
      "Revenue trends, customer segmentation, and churn indicators",
      "Outlier patterns, correlations, and KPI summaries",
      "Category-wise comparisons showing growth vs. decline drivers",
      "Classification models for churn prediction and anomaly detection",
      "Regression models for sales forecasting and revenue prediction"
    ],
    achievements: [
      "Identified high-impact variables driving decision-making",
      "Reduced manual analysis time with automated dashboards",
      "Helped stakeholders understand future trends through predictive modeling"
    ],
    tech: ["Python", "SQL", "MySQL", "Pandas", "NumPy", "Scikit-learn", "Power BI", "Matplotlib", "Seaborn", "Jupyter Notebook"]
  },
  {
    name: "DocuQuery AI",
    imageKey: "docuquery",
    description: "AI-powered document chatbot with semantic search 🤖",
    fullDescription: "An intelligent document question-answering system that uses natural language processing and semantic search to extract information from PDF documents. Supports multi-document search with context-aware retrieval.",
    gradient: ["#4facfe", "#00f2fe"],
    url: "",
    repo: "",
    features: [
      "Natural language question answering from uploaded documents",
      "Semantic search using vector embeddings and transformer models",
      "Multi-document search with context-aware retrieval",
      "Supports PDF documents (multi-page, scanned, or digital)",
      "Fast querying (<1 second per response)"
    ],
    achievements: [
      "Built fallback response system for out-of-scope queries",
      "Optimized for academic, corporate, legal, and personal use cases",
      "Implemented efficient vector indexing for multiple documents"
    ],
    tech: ["Python", "Hugging Face Transformers", "Sentence Transformers", "FAISS", "PyPDF2", "FastAPI", "Streamlit"]
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
