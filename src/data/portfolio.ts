export const portfolioData = {
  personal: {
    name: "Keerthirajan Murugesan",
    title: "Graduate AI Engineer",
    location: "London, UK",
    email: "keerthibe1704@gmail.com",
    phone: "+44 07760 965861",
    github: "https://github.com/dedlytitan",
    linkedin: "https://linkedin.com/in/keerthirajanmurugesan",
    executiveSummary:
      "Future-focused AI engineer with an MSc in Artificial Intelligence & Data Science who turns messy, real-world data into deployable NLP and ML systems, not just academic prototypes. Built an AI-powered clinical text de-identification pipeline using spaCy NER and a deep-learning crime forecasting model for London, covering everything from data cleaning and feature engineering to evaluation and model monitoring. Combines production-minded engineering with proven leadership as a retail store manager, bringing end-to-end ownership from understanding users and business constraints to shipping reliable, privacy-aware AI solutions.",
    shortSummary:
      "Turning messy real-world data into deployable NLP and ML systems. MSc AI & Data Science graduate with a focus on production-ready solutions.",
  },
  skills: {
    programming: ["Python (Advanced, OOP, REST APIs)", "Java", "C", "SQL", "HTML/CSS", "PHP"],
    mlAi: [
      "LLMs (fine-tuning, prompt engineering)",
      "NLP",
      "Deep Learning (TensorFlow)",
      "Model Evaluation",
      "MLOps",
    ],
    librariesTools: [
      "spaCy",
      "NLTK",
      "Transformers",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    dataEngineering: [
      "Data Cleaning",
      "EDA",
      "Feature Engineering",
      "ETL",
      "SQL/NoSQL",
      "MySQL",
      "PostgreSQL",
    ],
    cloudDevOps: ["AWS (EC2, S3)", "Docker", "Git", "GitHub", "CI/CD"],
    dataViz: ["Tableau", "Power BI"],
    personal: [
      "Problem-Solving",
      "Analytical Thinking",
      "Adaptability",
      "Collaboration",
      "Attention to Detail",
    ],
  },
  projects: [
    {
      title: "AI-Powered Clinical Text De-identification",
      category: "MSc Research Project",
      description:
        "Built a spaCy NER pipeline to automatically remove protected health information from clinical text. Performed data cleaning, manual annotation, and iterative model training on real-world healthcare data.",
      tech: ["spaCy", "NER", "NLP", "Python"],
      link: "https://github.com/dedlYTiTAN/Deidentifying-Clinical-Text",
    },
    {
      title: "TextPrep Lite",
      category: "Open Source / NLP",
      description:
        "A lightweight, efficient Python library for text preprocessing in NLP pipelines. Published on PyPI, it offers a streamlined API for cleaning and tokenizing text data.",
      tech: ["Python", "NLP", "PyPI"],
      link: "https://github.com/dedlYTiTAN/textprep-lite",
    },
    {
      title: "Predictive Analysis of Anti-Social Behaviour in Greater London",
      category: "ML/DL",
      description:
        "Developed ML/DL models to predict crime hotspots across 32 London boroughs. Engineered temporal, demographic, and POI-based features to forecast weekly crime trends.",
      tech: ["TensorFlow", "Pandas", "Scikit-learn"],
      link: "https://github.com/dedlYTiTAN/Antisocial-behaviour-crime-prediction-in-Greater-London",
    },
    {
      title: "Full-Stack Web Login System",
      category: "Web Development",
      description:
        "Designed a secure authentication system using Python, PHP, MySQL, HTML, and CSS with login/registration workflows and session management.",
      tech: ["Python", "PHP", "MySQL", "HTML/CSS"],
      link: "https://github.com/dedlYTiTAN/Simple-web-login",
    },
    {
      title: "Information Hiding in Images (Steganography Project)",
      category: "Image Processing",
      description:
        "Designed algorithms for reliable message encoding/decoding in images while minimising perceptual distortion; hands-on with image processing, binary data handling, and optimisation.",
      tech: ["Python", "Image Processing", "Algorithms"],
      link: "https://github.com/dedlYTiTAN/Information-Hiding-in-images-",
    },
    {
      title: "MyFunValentine – Interactive Web Experience",
      category: "Web Development",
      description:
        "A playful full‑stack web app built with HTML, CSS, JavaScript, and Flask to practice creative frontend design with simple backend logic.",
      tech: ["Flask", "JavaScript", "HTML/CSS"],
      link: "https://github.com/dedlYTiTAN/myfunvalentine",
    },
  ],
  experience: [
    {
      role: "Sales Manager",
      company: "Morrisons Daily",
      location: "Hull, UK",
      period: "Jan 2025 – Dec 2025",
    },
    {
      role: "Shop Assistant",
      company: "Morrisons Daily",
      location: "Hull, UK",
      period: "Jan 2024 – Dec 2024",
    },
  ],
  education: [
    {
      degree: "MSc Artificial Intelligence & Data Science",
      institution: "University of Hull, UK",
      period: "2024 – 2025",
    },
    {
      degree: "BEng Computer Science & Engineering (Distinction)",
      institution: "KSR Institute for Engineering and Technology (Anna University), India",
      gpa: "CGPA: 8.69 / 10",
      period: "2019 – 2023",
    },
  ],
  leadership: [
    {
      role: "President",
      organization: "E-CAP Club (KSRIET)",
      description: "Organised technical workshops and coding events.",
    },
    {
      role: "Retail leadership and staff mentoring",
      organization: "Morrisons Daily",
      description: "",
    },
  ],
};
