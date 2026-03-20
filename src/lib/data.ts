export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  instructor: string;
  instructorSlug: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  lessons: number;
  category: string;
  gradient: string;
  description: string;
  curriculum: { title: string; lessons: string[] }[];
}

export interface Instructor {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  gradient: string;
  courseIds: string[];
}

export const categories = [
  { value: "all", label: "All Courses" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "business", label: "Business" },
  { value: "data", label: "Data Science" },
];

export const courses: Course[] = [
  {
    id: "1", slug: "fullstack-web-dev",
    title: "Full-Stack Web Development",
    subtitle: "Build modern web apps from front to back",
    instructor: "Alex Rivera", instructorSlug: "alex-rivera",
    level: "intermediate", duration: "12 weeks", lessons: 48, category: "development",
    gradient: "from-blue-600 via-indigo-700 to-violet-800",
    description: "Master React, Node.js, and PostgreSQL to build production-ready web applications. Includes hands-on projects and code reviews.",
    curriculum: [
      { title: "Module 1: Foundations", lessons: ["HTML & CSS deep dive", "JavaScript essentials", "Git & version control", "Dev environment setup"] },
      { title: "Module 2: Frontend", lessons: ["React fundamentals", "State management", "Routing & navigation", "API integration"] },
      { title: "Module 3: Backend", lessons: ["Node.js & Express", "Database design", "Authentication", "REST API patterns"] },
      { title: "Module 4: Deploy", lessons: ["CI/CD pipelines", "Cloud hosting", "Monitoring", "Final project"] },
    ],
  },
  {
    id: "2", slug: "ui-ux-design",
    title: "UI/UX Design Fundamentals",
    subtitle: "Create beautiful, user-centered interfaces",
    instructor: "Maya Chen", instructorSlug: "maya-chen",
    level: "beginner", duration: "8 weeks", lessons: 32, category: "design",
    gradient: "from-pink-600 via-rose-700 to-red-800",
    description: "Learn the principles of visual design, user research, wireframing, prototyping, and usability testing to create interfaces people love.",
    curriculum: [
      { title: "Module 1: Design Thinking", lessons: ["User research methods", "Persona creation", "Journey mapping", "Problem framing"] },
      { title: "Module 2: Visual Design", lessons: ["Typography & color", "Layout & grid systems", "Iconography", "Design systems"] },
      { title: "Module 3: Prototyping", lessons: ["Wireframing", "Figma essentials", "Interactive prototypes", "Design handoff"] },
      { title: "Module 4: Testing", lessons: ["Usability testing", "A/B testing", "Accessibility", "Portfolio project"] },
    ],
  },
  {
    id: "3", slug: "data-science-python",
    title: "Data Science with Python",
    subtitle: "From data wrangling to machine learning",
    instructor: "Dr. James Okafor", instructorSlug: "james-okafor",
    level: "intermediate", duration: "10 weeks", lessons: 40, category: "data",
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    description: "Learn data analysis, visualization, and machine learning using Python, pandas, and scikit-learn. Real-world datasets and capstone project included.",
    curriculum: [
      { title: "Module 1: Python for Data", lessons: ["Python refresher", "NumPy arrays", "Pandas DataFrames", "Data cleaning"] },
      { title: "Module 2: Visualization", lessons: ["Matplotlib", "Seaborn", "Interactive dashboards", "Storytelling with data"] },
      { title: "Module 3: ML Basics", lessons: ["Supervised learning", "Model evaluation", "Feature engineering", "Scikit-learn pipeline"] },
      { title: "Module 4: Advanced Topics", lessons: ["Deep learning intro", "NLP basics", "Time series", "Capstone project"] },
    ],
  },
  {
    id: "4", slug: "digital-marketing",
    title: "Digital Marketing Strategy",
    subtitle: "Grow your business online",
    instructor: "Sarah Kim", instructorSlug: "sarah-kim",
    level: "beginner", duration: "6 weeks", lessons: 24, category: "business",
    gradient: "from-amber-600 via-orange-700 to-red-800",
    description: "Master SEO, content marketing, social media advertising, and email campaigns to build and grow your online presence.",
    curriculum: [
      { title: "Module 1: Foundations", lessons: ["Marketing funnel", "Brand positioning", "Target audience", "Competitive analysis"] },
      { title: "Module 2: Content & SEO", lessons: ["Keyword research", "On-page SEO", "Content strategy", "Blog & copywriting"] },
      { title: "Module 3: Paid & Social", lessons: ["Google Ads", "Social media ads", "Retargeting", "Budget optimization"] },
      { title: "Module 4: Email & Analytics", lessons: ["Email campaigns", "Automation", "Analytics & KPIs", "Growth plan"] },
    ],
  },
  {
    id: "5", slug: "mobile-app-dev",
    title: "Mobile App Development",
    subtitle: "Build iOS & Android apps with React Native",
    instructor: "Alex Rivera", instructorSlug: "alex-rivera",
    level: "advanced", duration: "10 weeks", lessons: 40, category: "development",
    gradient: "from-violet-600 via-purple-700 to-indigo-800",
    description: "Create cross-platform mobile applications using React Native. Covers navigation, state, native modules, and App Store deployment.",
    curriculum: [
      { title: "Module 1: Setup", lessons: ["React Native CLI", "Project structure", "Components & styling", "Navigation"] },
      { title: "Module 2: Features", lessons: ["State management", "API calls", "Forms & validation", "Push notifications"] },
      { title: "Module 3: Native", lessons: ["Camera & media", "Maps & location", "Offline storage", "Native modules"] },
      { title: "Module 4: Ship", lessons: ["Testing", "Performance", "App Store prep", "CI/CD & launch"] },
    ],
  },
  {
    id: "6", slug: "product-management",
    title: "Product Management Essentials",
    subtitle: "Lead products from idea to launch",
    instructor: "Sarah Kim", instructorSlug: "sarah-kim",
    level: "beginner", duration: "6 weeks", lessons: 24, category: "business",
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
    description: "Learn how to define product strategy, prioritize features, work with engineering teams, and launch products users love.",
    curriculum: [
      { title: "Module 1: Strategy", lessons: ["Product vision", "Market research", "Competitive landscape", "OKRs & metrics"] },
      { title: "Module 2: Discovery", lessons: ["User interviews", "Problem validation", "PRDs & specs", "Roadmap planning"] },
      { title: "Module 3: Execution", lessons: ["Agile methodology", "Sprint planning", "Stakeholder management", "Launch planning"] },
      { title: "Module 4: Growth", lessons: ["Analytics deep dive", "A/B testing", "Retention strategies", "Case study project"] },
    ],
  },
];

export const instructors: Instructor[] = [
  {
    id: "1", slug: "alex-rivera",
    name: "Alex Rivera", title: "Senior Software Engineer",
    bio: "[PLACEHOLDER] Full-stack developer with 10+ years of experience building web and mobile applications. Previously at a large tech company.",
    gradient: "from-blue-700 via-indigo-800 to-violet-900",
    courseIds: ["1", "5"],
  },
  {
    id: "2", slug: "maya-chen",
    name: "Maya Chen", title: "Lead Product Designer",
    bio: "[PLACEHOLDER] Product designer passionate about creating accessible, beautiful interfaces. Background in cognitive psychology and human-computer interaction.",
    gradient: "from-pink-700 via-rose-800 to-red-900",
    courseIds: ["2"],
  },
  {
    id: "3", slug: "james-okafor",
    name: "Dr. James Okafor", title: "Data Scientist",
    bio: "[PLACEHOLDER] Data scientist and researcher with a PhD in computational statistics. Specializes in applied machine learning and data visualization.",
    gradient: "from-emerald-700 via-teal-800 to-cyan-900",
    courseIds: ["3"],
  },
  {
    id: "4", slug: "sarah-kim",
    name: "Sarah Kim", title: "Marketing Director",
    bio: "[PLACEHOLDER] Marketing strategist who has helped dozens of startups grow from zero to revenue. Expert in digital marketing and product-led growth.",
    gradient: "from-amber-700 via-orange-800 to-red-900",
    courseIds: ["4", "6"],
  },
];

export function getCourse(slug: string) { return courses.find((c) => c.slug === slug); }
export function getInstructor(slug: string) { return instructors.find((i) => i.slug === slug); }
