const ProjectInfo = [
  {
    slug: "netflix-gpt",
    title: "Netflix GPT",
    shortDescription:
      "A Netflix-inspired movie discovery app with authentication, real-time movie data, and AI-based recommendations.",

    overview:
      "Netflix GPT is a modern frontend web application inspired by Netflix that allows users to explore movies and TV shows using real-time data from TMDB. It includes secure authentication, trailer playback, and an AI-powered recommendation feature that suggests movies based on user prompts, focusing on clean UI, responsiveness, and scalable React architecture.",

    problem:
      "Traditional movie browsing platforms rely heavily on manual searching and static recommendations, making it difficult for users to discover content that matches their mood or preferences quickly.",

    solution:
      "Netflix GPT solves this by combining real-time movie data with AI-powered recommendations, allowing users to discover movies through natural language prompts while enjoying a familiar Netflix-like interface and smooth user experience.",

    features: [
      "User authentication with Firebase",
      "Netflix-style UI and responsive design",
      "Browse trending, popular, and categorized movies",
      "Watch movie trailers directly inside the app",
      "AI-powered movie recommendations using prompts",
      "Search movies using TMDB API",
      "Secure environment variable handling",
    ],

    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Firebase Authentication"],
      apis: ["TMDB API", "Gemini API"],
      tools: ["Vite", "Git", "Netlify / Firebase Hosting"],
    },

    challenges: [
      {
        challenge:
          "Managing complex state across multiple components for authentication and movie data.",
        solution:
          "Used React hooks and a structured component hierarchy to keep state predictable and easy to maintain.",
      },
      {
        challenge:
          "Integrating AI recommendations without breaking the user experience.",
        solution:
          "Designed the AI feature as an optional enhancement and optimized prompt handling to keep responses fast and relevant.",
      },
    ],

    links: {
      github: "https://github.com/VijayaKumarGavara/Netflix-GPT",
      live: "https://kaleidoscopic-pasca-2735bc.netlify.app/",
    },
  },
  {
    slug: "task-flow",
    title: "Task Flow",

    shortDescription:
      "A priority-based task planning and tracking application that helps users organize work, monitor progress in real time, and visualize productivity insights.",

    overview:
      "Task Flow is a personal productivity web application designed to help users plan tasks, track completion over time, and analyze efficiency through priority-wise insights. The system focuses on time-bound tasks, real-time status evaluation, and intuitive visual feedback to improve daily task execution.",

    problem:
      "Most task management tools focus heavily on listing tasks but provide limited insight into how effectively tasks are completed over time. Users often struggle to understand missed tasks, overlapping schedules, and priority-wise performance, making it hard to evaluate productivity objectively.",

    solution:
      "Task Flow addresses this by combining time-aware task evaluation with priority-based analytics. Tasks are continuously evaluated against the current time, and completion data is aggregated to present clear insights such as total progress and priority-wise efficiency, helping users understand not just what they planned, but how well they executed it.",

    features: [
      "Create time-bound tasks with priority levels (High, Medium, Low)",
      "Real-time task evaluation based on current time",
      "Priority-wise completion insights and efficiency metrics",
      "Interactive insights dashboard with hover-based breakdowns",
      "Automatic detection of completed vs missed tasks",
      "Support for recurring (repeatable) tasks",
      "Overlap handling to prevent conflicting task schedules",
      "Clean and responsive UI focused on clarity and usability",
    ],

    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      tools: ["REST APIs", "Git", "Postman"],
    },

    challenges: [
      {
        challenge:
          "Efficiently updating task insights without constantly reloading the page or overloading the API.",
        solution:
          "Implemented controlled polling with timed intervals and state-based rendering to update insights while minimizing unnecessary API calls.",
      },
      {
        challenge:
          "Accurately determining task completion and missed tasks based on time and user actions.",
        solution:
          "Designed a time-parsing utility to convert task deadlines into comparable timestamps, enabling reliable real-time task evaluation.",
      },
      {
        challenge:
          "Displaying multiple task metrics without overwhelming the user.",
        solution:
          "Used interactive UI patterns like hover-based data switching and visual indicators to present detailed insights while keeping the interface minimal.",
      },
    ],

    links: {
      github: "https://github.com/VijayaKumarGavara/Task-Flow",
      live: "",
    },
  },
  {
    slug: "dhanya-sethu",
    title: "Dhanya Sethu",

    shortDescription:
      "A web-based agri-procurement platform that connects farmers and grain buyers through transparent, two-way digital records for procurements and payments.",

    overview:
      "Dhanya Sethu is a full-stack web application designed to digitize grain procurement workflows. It enables farmers and buyers to maintain shared, accurate procurement and payment records in real time. The platform reduces manual paperwork, entry errors, and trust gaps by ensuring that every procurement entry made by a buyer is visible to the corresponding farmer.",

    problem:
      "Traditional grain procurement relies heavily on manual records and one-sided data entry. Buyers or workers maintain records independently, while farmers often have no visibility into what is recorded on their behalf. This leads to data mismatches, delayed payments, disputes, and lack of trust—especially when procurements happen frequently across multiple farmers and workers.",

    solution:
      "Dhanya Sethu introduces a dual-visibility procurement system where farmers are registered with unique identities and buyers record procurements against these identities. Once a procurement entry is created, it appears instantly on both the buyer’s and the farmer’s dashboards, ensuring transparency, accuracy, and mutual trust throughout the transaction lifecycle.",

    features: [
      "Farmer and buyer registration with role-based access",
      "Unique farmer identification for quick and error-free procurement entries",
      "Buyer-managed worker accounts for field-level procurement operations",
      "Two-way visibility of procurement records (buyers & farmers)",
      "Crop-wise and farmer-wise procurement tracking",
      "Payment and dues management system",
      "Cloud-based storage for farmer profile images",
      "Clean, dashboard-oriented UI with testimonial and informational sections",
    ],

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Node.js", "Express.js", "REST API's"],
      database: ["MySQL"],
      authentication: ["Session-based authentication"],
      storage: ["Cloudinary"],
      tools: ["MySQL Workbench", "Git", "GitHub"],
    },

    challenges: [
      {
        challenge:
          "Preventing data mismatch and duplication during procurement entries when buyers handle multiple farmers daily.",
        solution:
          "Introduced unique farmer identification and auto-fetching of farmer details, eliminating manual re-entry of farmer information during procurements.",
      },
      {
        challenge:
          "Designing a system where both buyers and farmers can trust the recorded data without conflict.",
        solution:
          "Implemented a shared record model where every procurement entry is stored once and displayed on both buyer and farmer dashboards in real time.",
      },
    ],

    links: {
      live: "https://vijayakumargavara.github.io/DhanyaSethu/",
      github: "https://github.com/VijayaKumarGavara/Dhanya---Sethu-Production",
    },
  },
  {
    slug: "guardian-save",
    title: "Guardian Save",

    shortDescription:
      "A secure banking transaction prototype implementing role-based access control to protect sensitive digital payments.",

    overview:
      "Guardian Save is a prototype banking application designed to add an extra layer of security to online transactions. The system introduces a guardian-based approval flow, where sensitive transactions require authorization based on predefined roles, reducing misuse and fraud.",

    problem:
      "Existing digital payment systems allow single-user control, which can be risky for high-value or sensitive transactions, especially for students, elders, or shared accounts.",

    solution:
      "Guardian Save introduces role-based access control where a guardian role can monitor or approve transactions. This ensures accountability and adds a safety layer without disrupting the user experience.",

    features: [
      "Role-based access control (User & Guardian roles)",
      "Transaction approval workflow for sensitive payments",
      "Secure authentication and authorization flow",
      "Transaction history tracking",
      "Basic admin-style monitoring for guardians",
    ],

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Node.js", "Express.js"],
      database: ["MySQL"],
      tools: ["Git", "GitHub"],
    },

    challenges: [
      {
        challenge:
          "Designing a clear role-based permission flow without making the system complex",
        solution:
          "Implemented a simple RBAC model with clearly defined permissions for users and guardians",
      },
      {
        challenge:
          "Ensuring transaction data consistency during approval workflows",
        solution:
          "Used backend validations and structured database relationships to maintain reliable transaction states",
      },
    ],

    links: {
      github: "https://github.com/VijayaKumarGavara/Guardian-Save",
      live:"http://guardiansave.infinityfreeapp.com/"
    },
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio Website",

    shortDescription:
      "A responsive personal portfolio website showcasing my projects, skills, experience, and contact information in a clean and professional layout.",

    overview:
      "This portfolio website is designed to present my work, technical skills, and experience in a structured and readable manner. It serves as a central place for recruiters and collaborators to explore my projects, understand my background, and get in touch easily.",

    problem:
      "Sharing projects, experience, and skills across multiple platforms makes it hard to present a clear and complete profile in one place.",

    solution:
      "Built a single, well-structured portfolio website that organizes information into clear sections like About, Skills, Projects, Experience, and Contact, ensuring easy navigation and professional presentation.",

    features: [
      "Responsive layout for mobile, tablet, and desktop",
      "Project listing with individual project detail pages",
      "Clear skills categorization and experience timeline",
      "Contact section with direct email and social links",
      "Dark and light theme support",
    ],

    techStack: {
      frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      backend: ["EmailJS"],
      database: [],
      tools: ["Git", "GitHub", "Netlify"],
    },

    challenges: [
      {
        challenge:
          "Maintaining a clean layout across different screen sizes without clutter",
        solution:
          "Used responsive design principles and flexible layouts to ensure consistent spacing and readability on all devices",
      },
      {
        challenge:
          "Structuring content to feel professional without appearing overcrowded",
        solution:
          "Focused on minimal UI components, clear typography, and section-based information hierarchy",
      },
    ],

    links: {
      github: "https://github.com/VijayaKumarGavara/Portfolio",
      live: "https://statuesque-pixie-9650a6.netlify.app/",
    },
  },
];

export default ProjectInfo;
