// All portfolio content lives here. Edit this file to customize the site.

export const profile = {
  name: "Shaharban V",
  title: "GenAI Engineer and Data Scientist",
  positioning: "I build multi-agent AI systems that turn business data into executive decisions.",
  location: "Kerala, India",
  email: "sonushaharban44@gmail.com",
  phone: "+91 9809043613",
  github: "https://github.com/shaharban-banu",
  linkedin: "https://www.linkedin.com/in/shaharbanv-695a84145",
};

export const about = [
  "I am a data scientist working on agentic AI, LLMs and retrieval-augmented generation (RAG), backed by a computer science degree and a software engineering foundation.",
  "I completed a one-year intensive data science program at Brototype (2025 to 2026), building 15+ end-to-end AI/ML solutions across machine learning, LLMs, RAG, data engineering, cloud and MLOps, with a focus on production-ready design.",
  "My strongest work is ExecuMind AI, a multi-agent platform that combines SQL analytics, customer intelligence and forecasting into business recommendations.",
];

export const projects = [
  {
    name: "ExecuMind AI",
    subtitle: "Multi-agent executive intelligence platform",
    year: "2025",
    featured: true,
    repo: "https://github.com/shaharban-banu/execumind-ai",
    problem: "Turning e-commerce data into decisions means combining SQL analytics, customer feedback and forecasts in one place.",
    solution: "A dataset-agnostic platform where four LangGraph agents (Data Intelligence, Customer Intelligence, Forecasting and Executive Advisor) produce AI-generated business recommendations.",
    contribution: [
      "Architected the four-agent LangGraph system and the FastAPI backend (SQLAlchemy, PostgreSQL) covering data access, authentication, agent orchestration and forecasting.",
      "Built a hybrid RAG pipeline for customer reviews and business documents using FAISS, BM25, Reciprocal Rank Fusion and Cross-Encoder reranking.",
      "Integrated Prophet forecasting for revenue, orders, customers and average order value, evaluated with MAE, RMSE and MAPE.",
      "Engineered an automated ETL pipeline: schema analysis, semantic mapping, relationship detection, validation and PostgreSQL loading.",
    ],
    outcome: "Deployed end to end: Dockerized backend on AWS EC2 behind Nginx, with the React frontend on Vercel.",
    stack: ["LangGraph", "LangChain", "RAG", "MCP", "FastAPI", "SQLAlchemy", "PostgreSQL", "FAISS", "Prophet", "Docker", "AWS EC2"],
  },
  {
    name: "Education RAG Chatbot",
    subtitle: "Curriculum-grounded tutor for fifth-grade students",
    year: "2025",
    repo: "https://github.com/shaharban-banu/Education-RAG",
    problem: "Students need answers that stay within their NCERT textbooks.",
    solution: "A Streamlit chatbot that ingests textbook PDFs and answers using retrieved context and Llama 3.2 3B.",
    contribution: ["Built PDF ingestion, chunking, semantic embedding, vector retrieval and context-aware answer generation with LlamaIndex, LangChain and ChromaDB."],
    outcome: "Answers are generated from NCERT textbook content rather than from the model alone.",
    stack: ["LlamaIndex", "LangChain", "ChromaDB", "Sentence Transformers", "Llama 3.2 3B", "Streamlit"],
  },
  {
    name: "Iris Classification on AWS SageMaker",
    subtitle: "Model deployment with CI/CD",
    year: "2025",
    repo: "",
    problem: "Getting a trained model into a deployable, repeatable cloud workflow.",
    solution: "An Iris classifier trained and served through Amazon SageMaker, automated with GitHub Actions.",
    contribution: ["Implemented model training, inference and endpoint deployment with Scikit-learn and SageMaker."],
    outcome: "Model deployed to an endpoint with GitHub Actions-based CI/CD automation.",
    stack: ["AWS SageMaker", "Scikit-learn", "GitHub Actions", "Python"],
  },
];

export const skills = [
  { group: "Generative and agentic AI", items: ["LLMs", "RAG", "LangGraph", "LangChain", "MCP", "Vector search", "LangSmith"] },
  { group: "Machine learning and statistics", items: ["Statistical analysis", "Hypothesis testing", "Regression", "Classification", "Clustering", "XGBoost", "Ensemble learning"] },
  { group: "Deep learning and NLP", items: ["CNN", "RNN", "LSTM", "Transformers", "NLP"] },
  { group: "Backend", items: ["FastAPI", "Flask", "Microservices", "SQLAlchemy", "REST APIs"] },
  { group: "Cloud and MLOps", items: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Vercel"] },
  { group: "Data and databases", items: ["Python", "SQL", "Pandas", "NumPy", "PostgreSQL", "ChromaDB", "FAISS", "PySpark", "Hadoop"] },
  { group: "Visualization", items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"] },
];

export const experience = [
  {
    role: "Data Science Intensive Research and Learning Program",
    org: "Brototype",
    period: "2025 to 2026",
    points: [
      "Completed 15+ end-to-end AI/ML solutions across ML, agentic AI, LLMs, RAG, data engineering, cloud and MLOps.",
      "Applied scalable backend development, REST API design, Git, Docker, CI/CD, automated testing and cloud deployment while building enterprise AI applications.",
    ],
  },
  {
    role: "Junior Software Developer (.NET)",
    org: "Detailz Technologies (P) Ltd.",
    period: "Jul 2013 to Dec 2013",
    points: ["Six-month internship on .NET development, contributing to the end-to-end software delivery lifecycle."],
  },
];

export const education = [
  { title: "B.Tech in Computer Science and Engineering", org: "MEA Engineering College, University of Calicut", detail: "CGPA 8.38 (2009 to 2013)" },
  { title: "AI and Data Scientist (verified certificate)", org: "OneRoadmap", detail: "Certification" },
];
