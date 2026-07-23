/**
 * All site copy, transcribed from the SmartGrow website blueprint (v3).
 * Rules: no pricing anywhere; stipends, salary outcomes, statistics and
 * engagement timelines are retained as the blueprint allows.
 */

export const heroStats = [
  { value: "500+", label: "Projects delivered" },
  { value: "50+", label: "Business clients" },
  { value: "1000+", label: "Students trained" },
  { value: "87%", label: "Placement rate" },
] as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type ListItem = { title: string; description?: string };

export type ServiceSection = {
  heading: string;
  note?: string;
  items: ListItem[];
};

export type ProcessPhase = {
  title: string;
  period?: string;
  points: string[];
};

export type Story = { title: string; description: string };

export type Testimonial = {
  name: string;
  org: string;
  quote: string;
  image?: string;
};

export type Service = {
  slug: string;
  num: string;
  name: string;
  /** Emoji from the blueprint's services grid; empty for US IT Staffing (M12, icon set in UI). */
  icon: string;
  short: string;
  tagline: string;
  metaDescription: string;
  audience: string;
  image: string;
  overview: string[];
  sections: ServiceSection[];
  processHeading?: string;
  process?: ProcessPhase[];
  stack?: { group: string; items: string[] }[];
  engagementNote?: string;
  stories?: Story[];
  testimonials?: Testimonial[];
  ctaLabel?: string;
};

export const services: Service[] = [
  {
    slug: "product-development",
    num: "01",
    name: "Product Development",
    icon: "💻",
    short: "SaaS, enterprise & MVP software, end to end.",
    tagline:
      "End-to-end product engineering that turns ideas into market-ready, scalable software.",
    metaDescription:
      "Turn your idea into a market-ready product. SmartGrow Infotech builds scalable SaaS platforms, enterprise software, marketplaces and MVPs end to end, from discovery and design through Agile development, testing and launch. Architected to scale from 100 to 1,000,000 users. Book a call to get started.",
    audience: "Startups & businesses building software",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "An end-to-end service that turns ideas into market-ready, scalable software, SaaS applications, enterprise solutions, marketplaces, and custom products.",
      "Our approach is rooted in Agile: flexibility, continuous feedback, and iterative improvement. We architect solutions that scale from 100 users to 1 million, and from a single region to global operations.",
    ],
    sections: [
      {
        heading: "What we build",
        items: [
          { title: "SaaS applications", description: "Cloud platforms with subscription models, multi-tenancy, automated billing." },
          { title: "Enterprise software", description: "Custom ERP, CRM, HRMS, industry-specific systems." },
          { title: "MVP development", description: "Test market fit fast with a lean first version." },
          { title: "E-commerce platforms", description: "Full stores with payment gateways, inventory, analytics." },
          { title: "Marketplace platforms", description: "Multi-vendor platforms for buyers & sellers." },
          { title: "FinTech", description: "Payments, digital wallets, trading and lending." },
          { title: "HealthTech", description: "Telemedicine, health records, appointment scheduling." },
          { title: "EdTech", description: "LMS, online course platforms, student portals." },
        ],
      },
    ],
    processHeading: "Development process",
    process: [
      {
        title: "Discovery & planning",
        period: "Phase 1",
        points: [
          "Requirements gathering",
          "Market and competitor research",
          "User personas",
          "Stack selection",
          "Architecture",
          "Wireframing",
        ],
      },
      {
        title: "Design",
        period: "Phase 2",
        points: [
          "User-centric UI/UX",
          "Interactive prototypes",
          "A design system",
          "Client iterations",
        ],
      },
      {
        title: "Development",
        period: "Phase 3",
        points: [
          "Two-week Agile sprints",
          "Clean, maintainable code",
          "Weekly demos",
          "CI/CD",
          "API & third-party integrations",
        ],
      },
      {
        title: "Testing & deployment",
        period: "Phase 4",
        points: [
          "Functional, integration and performance testing",
          "Security assessment",
          "Production setup",
          "Go-live",
        ],
      },
    ],
    stack: [
      { group: "Frontend", items: ["React.js", "Angular", "Vue.js", "TypeScript", "Next.js"] },
      { group: "Backend", items: ["Spring Boot (Java)", "Node.js", "Python (Django/FastAPI)", ".NET Core"] },
      { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"] },
      { group: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"] },
      { group: "Additional", items: ["GraphQL", "WebSockets", "Kafka", "Stripe", "Razorpay"] },
    ],
    engagementNote:
      "Engagement formats: fixed-scope projects and monthly retainers. Timelines are scoped per project, on the call.",
    stories: [
      { title: "EdTech SaaS platform", description: "An online learning platform now serving 25,000+ active users and ₹15L+ monthly revenue." },
      { title: "E-commerce marketplace", description: "A multi-vendor platform processing 10,000+ orders/month and ₹50L+ GMV." },
      { title: "FinTech solution", description: "A payment platform handling ₹10Cr+ in transactions monthly." },
    ],
  },
  {
    slug: "web-development",
    num: "02",
    name: "Web Development",
    icon: "🌐",
    short: "Corporate sites, e-commerce & web apps.",
    tagline:
      "High-performance websites and web apps that convert visitors into customers.",
    metaDescription:
      "Websites that work as hard as you do. SmartGrow Infotech designs and builds fast, responsive, SEO-ready websites and web apps, corporate sites, e-commerce stores, landing pages and PWAs, engineered to load in under 2 seconds and convert visitors into customers. Book a call for a quote.",
    audience: "Any business needing a web presence",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "Stunning, high-performance websites that look beautiful and drive business results, corporate sites, e-commerce stores, and complex web applications built to convert.",
    ],
    sections: [
      {
        heading: "Types of websites we build",
        items: [
          { title: "Corporate websites", description: "Company profile, services, team pages, blog." },
          { title: "E-commerce", description: "Cart, payment gateway, inventory, order tracking." },
          { title: "Portfolio websites", description: "For designers, photographers, artists." },
          { title: "Custom web apps", description: "CRM, project management, booking systems, dashboards." },
          { title: "Landing pages", description: "High-converting with lead capture and A/B testing." },
          { title: "Progressive web apps", description: "App-like experience with offline support and push notifications." },
        ],
      },
      {
        heading: "Key features implemented",
        items: [
          { title: "Mobile-responsive design across all devices" },
          { title: "Fast loading (under 2 seconds)" },
          { title: "SEO optimization to rank on Google" },
          { title: "Contact forms with email notifications" },
          { title: "Google Maps and social media integration" },
          { title: "SSL security (HTTPS)" },
          { title: "Analytics (Google Analytics, Facebook Pixel)" },
          { title: "Live chat integration" },
          { title: "Blog/CMS for content management" },
          { title: "Payment gateway integration" },
          { title: "User registration and login" },
        ],
      },
      {
        heading: "SEO & performance",
        items: [
          { title: "Keyword research and on-page optimization" },
          { title: "Meta tag (title, description) optimization" },
          { title: "Image compression and lazy loading" },
          { title: "Code minification and browser caching" },
          { title: "CDN integration for global fast loading" },
          { title: "Mobile-first indexing" },
          { title: "Schema markup for rich snippets" },
          { title: "Core Web Vitals optimization" },
        ],
      },
    ],
    stack: [
      { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
      { group: "Backend", items: ["Node.js", "PHP (Laravel)", "Python (Django)", "Java Spring Boot"] },
      { group: "CMS", items: ["WordPress", "Custom CMS", "Strapi", "Contentful"] },
      { group: "E-commerce", items: ["WooCommerce", "Shopify", "Custom solutions", "Magento"] },
    ],
  },
  {
    slug: "mobile-app-development",
    num: "03",
    name: "Mobile App Development",
    icon: "📱",
    short: "Native & cross-platform for iOS and Android.",
    tagline:
      "Native and cross-platform apps, from concept to App Store and Play Store launch.",
    metaDescription:
      "From idea to the App Store. SmartGrow Infotech builds native and cross-platform mobile apps (iOS, Android, React Native, Flutter) with payments, push, chat, offline mode and an admin dashboard, handling design, development, testing and store launch. Book a call to start your app.",
    audience: "Consumer & enterprise apps",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "Native and cross-platform applications delivering exceptional user experiences, everything from concept to App Store and Play Store launch, for a mobile-first world.",
    ],
    sections: [
      {
        heading: "Types of apps we build",
        items: [
          { title: "iOS apps", description: "Native Swift/SwiftUI for iPhone and iPad." },
          { title: "Android apps", description: "Native Kotlin/Java." },
          { title: "Cross-platform", description: "Single codebase for iOS & Android using React Native or Flutter." },
          { title: "Hybrid apps", description: "Cost-effective solutions using web technologies." },
          { title: "Enterprise apps", description: "Internal apps for employee productivity." },
          { title: "Consumer apps", description: "B2C for retail, services, entertainment." },
        ],
      },
      {
        heading: "Popular categories",
        items: [
          { title: "E-commerce & shopping" },
          { title: "On-demand services (taxi, food, home services)" },
          { title: "Social networking" },
          { title: "FinTech (banking, payments, investment, crypto)" },
          { title: "Healthcare & telemedicine" },
          { title: "Education & learning" },
          { title: "Food, restaurant & delivery" },
          { title: "Travel & booking" },
          { title: "Entertainment & streaming" },
        ],
      },
      {
        heading: "Key features implemented",
        items: [
          { title: "Authentication (email, phone, social login)" },
          { title: "Push notifications" },
          { title: "In-app payments (Google Pay, Apple Pay, Stripe)" },
          { title: "Real-time chat and messaging" },
          { title: "GPS and location services" },
          { title: "Camera and gallery integration" },
          { title: "Barcode/QR scanning" },
          { title: "Offline functionality" },
          { title: "Social sharing" },
          { title: "Analytics and crash reporting" },
          { title: "Admin dashboard" },
        ],
      },
    ],
    processHeading: "Development process",
    process: [
      { title: "Discovery", points: ["Requirement analysis", "Competitor research", "Feature planning", "Wireframing"] },
      { title: "Design", points: ["UI/UX & prototypes", "User flow", "Design system"] },
      { title: "Development", points: ["Agile build", "API integration", "Backend setup", "Regular updates"] },
      { title: "Testing", points: ["Multi-device QA: functional, device, performance, beta"] },
      { title: "Launch", points: ["App Store and Play Store submission and approval"] },
      { title: "Post-launch", points: ["Maintenance: monitoring, updates, bug fixes, new features"] },
    ],
    stack: [
      { group: "iOS", items: ["Swift", "SwiftUI", "Xcode", "CocoaPods"] },
      { group: "Android", items: ["Kotlin", "Java", "Android Studio", "Gradle"] },
      { group: "Cross-platform", items: ["React Native", "Flutter", "Xamarin"] },
      { group: "Backend", items: ["Node.js", "Spring Boot", "Firebase", "AWS Amplify"] },
      { group: "Database", items: ["SQLite", "Realm", "Firebase Realtime Database", "PostgreSQL"] },
      { group: "Cloud", items: ["AWS", "Google Firebase", "Azure Mobile Services"] },
    ],
    engagementNote:
      "Single-platform through multi-platform enterprise builds. Scope and timeline are agreed per project, on the call.",
  },
  {
    slug: "crt-training",
    num: "04",
    name: "CRT Training Program",
    icon: "🎯",
    short: "60-day campus recruitment training program.",
    tagline:
      "A 60-day program that turns engineering students into placement-ready professionals.",
    metaDescription:
      "Get placement-ready in 60 days. SmartGrow Infotech's Campus Recruitment Training covers DSA, core programming, system design, aptitude and interview skills, with 500+ problems, real mock interviews and an 87% placement rate (avg ₹4.5 LPA). Limited to 30 seats per batch. Book a call to enroll.",
    audience: "Students preparing for placements",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "The Campus Recruitment Training (CRT) program is our flagship training initiative, placement-ready in 60 days, with an 87% placement success rate, covering Data Structures & Algorithms through soft skills and mock interviews.",
      "Practical and interview-oriented: solving problems under pressure, explaining your approach clearly, and presenting confidently in every round.",
    ],
    sections: [
      {
        heading: "Why students choose CRT",
        items: [
          { title: "87% placement rate", description: "Against a 40–60% industry average." },
          { title: "Average package ₹4.5 LPA", description: "Significantly higher than non-trained students." },
          { title: "Expert faculty", description: "Industry professionals with 8+ years' experience." },
          { title: "Small batches", description: "Maximum 30 students per batch." },
          { title: "Practical focus", description: "70% hands-on practice vs 30% theory." },
          { title: "500+ coding problems", description: "Curated to cover all interview patterns." },
          { title: "Real mock interviews", description: "Simulated environment with detailed feedback." },
          { title: "Career support", description: "ATS-friendly resume, LinkedIn optimisation, placement assistance." },
        ],
      },
      {
        heading: "Mock interviews",
        note: "Each runs 45–60 minutes, is video-recorded for self-review, with a detailed feedback report and personalised improvement plan.",
        items: [
          { title: "Week 3", description: "DSA basics assessment." },
          { title: "Week 5", description: "DSA + programming combined." },
          { title: "Week 7", description: "Complete technical round." },
          { title: "Week 8", description: "HR/behavioural." },
        ],
      },
      {
        heading: "Learning resources",
        items: [
          { title: "Comprehensive PDF notes and presentations" },
          { title: "Lifetime access to session recordings" },
          { title: "500+ curated practice problems with solutions" },
          { title: "Cheat sheets and quick reference guides" },
          { title: "Company-wise previous-year interview questions" },
          { title: "LeetCode Premium access (worth ₹3,000/year)" },
          { title: "Dedicated WhatsApp doubt-resolution group" },
          { title: "Two one-on-one mentorship sessions" },
        ],
      },
      {
        heading: "Batch details",
        items: [
          { title: "Duration", description: "60 days (8 weeks), Monday to Saturday." },
          { title: "Training hours", description: "240+ hours (4 hours/day)." },
          { title: "Batch size", description: "Maximum 30 students." },
          { title: "Mode", description: "Hybrid: offline (Hyderabad) + online live sessions." },
          { title: "Timings", description: "Morning (9 AM–1 PM) or evening (5 PM–9 PM)." },
        ],
      },
    ],
    processHeading: "60-day curriculum",
    process: [
      {
        title: "Data Structures & Algorithms",
        period: "Week 1–3 · 24 days",
        points: [
          "Foundations: arrays, strings, hashing, two-pointer, sliding window, binary search",
          "Intermediate: linked lists, stacks, queues, trees, traversals",
          "Advanced: graphs, heaps, DP, backtracking, greedy",
          "Daily practice of 5–10 problems",
        ],
      },
      {
        title: "Programming languages",
        period: "Week 4–5 · 12 days",
        points: [
          "Java track: OOP, collections, exceptions, Java 8",
          "Python track: fundamentals, comprehensions, OOP, libraries",
          "50+ coding problems and optimisation techniques",
        ],
      },
      {
        title: "System design fundamentals",
        period: "Week 6 · 6 days",
        points: [
          "Scalability, load balancing, caching",
          "SQL vs NoSQL, API design, microservices",
          "Sample designs: URL shortener, Twitter feed, Instagram stories",
        ],
      },
      {
        title: "Aptitude & reasoning",
        period: "Week 7 · 6 days",
        points: ["Quantitative aptitude and logical reasoning with 200+ problems and mock tests"],
      },
      {
        title: "Soft skills & communication",
        period: "Week 8 · 6 days",
        points: ["Communication", "Group discussion", "HR interview (STAR method)", "Personal branding"],
      },
    ],
    engagementNote:
      "Outcome: trained students' average package moves from ₹3.5L to ₹4.5L, about ₹8,333 extra per month.",
    stories: [
      { title: "250+ students trained", description: "87% placement rate across batches." },
      { title: "₹4.5L average package", description: "Versus ₹3.5L for untrained students." },
      { title: "₹12L highest package", description: "Placed at Amazon." },
    ],
  },
  {
    slug: "internship-program",
    num: "05",
    name: "Internship Program",
    icon: "🚀",
    short: "Five tracks of real, production-grade work.",
    tagline:
      "Real, production-grade work across five tracks, with mentorship and PPO opportunities.",
    metaDescription:
      "Work like a real developer, not a student. SmartGrow Infotech offers hands-on internships across Full-Stack, Mobile, Data Engineering, DevOps and AI/ML, real client projects, daily mentorship and code reviews, a certificate and recommendation, and a 60% PPO conversion rate. Stipend ₹5,000–₹15,000/month. Apply: info@smartgrowinfotech.com",
    audience: "2nd/3rd/final-year engineering students",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "Interns here are junior developers, not coffee-fetchers, real client projects, production-ready code, and learning from experienced professionals. Hands-on experience that builds a resume and prepares you for full-time roles.",
      "Five in-demand tracks; top performers receive Pre-Placement Offers (PPO) to join full-time after graduation.",
    ],
    sections: [
      {
        heading: "Internship tracks",
        items: [
          { title: "Full-Stack Development", description: "Java, Spring Boot, React.js, PostgreSQL, AWS, Docker, REST APIs, responsive UIs, database design, AWS deployment, Git, code reviews. Stipend ₹8,000–₹15,000/month." },
          { title: "Mobile App Development", description: "React Native, Flutter, Firebase, REST APIs, cross-platform apps, API integration, push notifications, store deployment, testing. Stipend ₹7,000–₹12,000/month." },
          { title: "Data Engineering", description: "Python, Kafka, Airflow, Spark, AWS, PostgreSQL, data pipelines, real-time processing, ETL, query optimisation, dashboards. Stipend ₹10,000–₹15,000/month." },
          { title: "DevOps & Cloud", description: "AWS, Docker, Kubernetes, Jenkins, Terraform, Linux, CI/CD, containerisation, cluster management, monitoring, infrastructure automation. Stipend ₹8,000–₹15,000/month." },
          { title: "AI/ML Engineering", description: "Python, TensorFlow, PyTorch, scikit-learn, Pandas, NumPy, ML models, NLP and computer vision, data preprocessing, model deployment. Stipend ₹10,000–₹15,000/month." },
        ],
      },
      {
        heading: "What makes it different",
        items: [
          { title: "Real projects", description: "Actual client projects that go to production, not toy apps." },
          { title: "Experienced mentors", description: "Developers with 8+ years of industry experience." },
          { title: "Daily code reviews", description: "Best practices and clean code." },
          { title: "Daily standups", description: "Real Agile methodology and team sync-ups." },
          { title: "Portfolio building", description: "3–5 professional projects for the resume." },
          { title: "Certificate & recommendation", description: "Valued by recruiters and HR managers." },
          { title: "PPO opportunity", description: "60% of top performers get full-time offers." },
          { title: "Alumni network", description: "A community of 250+ alumni in top companies." },
        ],
      },
      {
        heading: "Requirements to apply",
        items: [
          { title: "Currently in 2nd, 3rd, or final year of engineering" },
          { title: "Basic programming in any language (Java/Python/JavaScript)" },
          { title: "Commitment to full-time work (6 days/week) during the internship" },
          { title: "A hunger to learn and grow as a developer" },
          { title: "Good communication skills (English)" },
          { title: "Own laptop required" },
        ],
      },
      {
        heading: "Compensation",
        items: [
          { title: "Stipend range ₹5,000–₹15,000/month", description: "Based on performance and track." },
          { title: "Monthly performance reviews", description: "Reviews can increase the stipend." },
          { title: "60% PPO conversion", description: "Of top performers." },
          { title: "Full-time salary ₹3.5–6 LPA", description: "After PPO conversion." },
        ],
      },
      {
        heading: "How to apply",
        note: "Intake is year-round (continuous), with flexible start dates.",
        items: [
          { title: "Email info@smartgrowinfotech.com" },
          { title: 'Subject line: "Internship Application – [Your Track] – [Your Name]"' },
          { title: "Attach a resume and a cover letter on why you want to intern" },
        ],
      },
    ],
    processHeading: "Internship structure",
    process: [
      {
        title: "Onboarding & training",
        period: "Week 1–2",
        points: ["Company processes and tools", "Git training", "Code-review standards", "Environment setup", "Starter tasks"],
      },
      {
        title: "Active development",
        period: "Week 3–8",
        points: ["Assigned to real client projects, features, bug fixes, code reviews", "Daily standups", "Weekly mentor reviews"],
      },
      {
        title: "Advanced work",
        period: "Week 9–12",
        points: ["Own complete features", "Lead small modules", "Present work", "Prepare a final presentation"],
      },
    ],
    stories: [
      { title: "Selection process", description: "1 Application (online, with resume) · 2 Coding test (online DSA and programming) · 3 Technical interview (problem-solving and fundamentals) · 4 HR interview (communication and commitment) · 5 Offer & onboarding." },
    ],
    testimonials: [
      {
        name: "Karthik Rao",
        org: "MGIT",
        quote:
          "The internship at SmartGrow was life-changing. I learned more in 3 months than in 3 years of college. Got a PPO and now work as a Junior Developer.",
      },
      {
        name: "Anjali Reddy",
        org: "CBIT",
        quote:
          "Best decision ever. I worked on a real e-commerce project used by thousands of users, my resume looked amazing in placements.",
      },
    ],
  },
  {
    slug: "technology-consultancy",
    num: "06",
    name: "Technology Consultancy",
    icon: "💡",
    short: "CTO-level architecture, audits & strategy.",
    tagline:
      "CTO-level guidance on architecture, scaling, security and tech strategy, without a full-time hire.",
    metaDescription:
      "Get CTO-level guidance without hiring a CTO. SmartGrow Infotech advises on architecture, tech-stack selection, scaling, security, cloud migration, performance and DevOps, delivered as clear reports and roadmaps. First 30-minute consultation free. Book a call.",
    audience: "Founders & teams needing CTO guidance",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "The right technology decisions save months of development time and lakhs of rupees. We provide expert guidance from professionals who have built, scaled, and maintained systems handling millions of users, helping startups and businesses decide on architecture, stack, scaling, security, and more.",
    ],
    sections: [
      {
        heading: "When you need it",
        items: [
          { title: "Starting a new project, unsure about the tech stack" },
          { title: "An existing system is slow and you don't know why" },
          { title: "Planning to scale from 1,000 to 100,000+ users" },
          { title: "Getting conflicting advice from different developers" },
          { title: "Need to pass a security audit for compliance" },
          { title: "Considering microservices but unsure if it fits" },
          { title: "Hiring a technical team and need to evaluate candidates" },
          { title: "A product has too much technical debt" },
          { title: "Want to migrate to cloud but don't know where to start" },
          { title: "Need a CTO perspective without a full-time CTO" },
        ],
      },
      {
        heading: "Consulting services",
        items: [
          { title: "Technology stack selection", description: "Evaluate requirements; recommend frontend, backend, database, cloud with justification. Deliverable: stack recommendation document." },
          { title: "Architecture review & design", description: "Bottlenecks, greenfield design, microservices vs monolith, schema review, API strategy, caching. Deliverable: diagrams, design docs, roadmap." },
          { title: "Code review & quality audit", description: "Quality, security, performance review; technical debt; OWASP checks. Deliverable: prioritised audit report." },
          { title: "Performance optimization", description: "Profile bottlenecks, optimise queries, tune frontend, caching, CDN, load testing. Deliverable: optimisation report with fixes." },
          { title: "Security assessment", description: "OWASP Top 10, auth and encryption review, API security, pen-test recommendations. Deliverable: assessment with remediation steps." },
          { title: "Cloud migration strategy", description: "Readiness, provider choice, architecture, cost estimation, roadmap. Deliverable: migration plan with timelines." },
          { title: "Scaling strategy", description: "Bottlenecks, horizontal/vertical scaling, DB scaling, load balancing, caching, queues. Deliverable: scaling roadmap." },
          { title: "Team capability assessment", description: "Skills, code quality, training needs, hiring plan. Deliverable: team report with recommendations." },
          { title: "DevOps implementation", description: "CI/CD, Docker, Kubernetes, Terraform, monitoring, automated testing. Deliverable: implementation plan." },
          { title: "Technical due diligence", description: "Codebase, debt, team, scalability, security and risk review for investors. Deliverable: due-diligence report." },
        ],
      },
    ],
    processHeading: "Our approach",
    process: [
      { title: "Discovery call", period: "Step 1 · Free, 30 min", points: ["Situation, challenges, goals, this step is the Book a Call booking."] },
      { title: "Proposal & scope", period: "Step 2", points: ["Scope, timeline, pricing."] },
      { title: "Deep-dive analysis", period: "Step 3", points: ["Systems, code, documentation, team."] },
      { title: "Recommendations & roadmap", period: "Step 4", points: ["Detailed recommendations with an implementation plan."] },
      { title: "Q&A session", period: "Step 5", points: ["Clarify recommendations."] },
      { title: "Follow-up support", period: "Step 6 · Optional", points: ["Implementation help or ongoing advisory."] },
    ],
    engagementNote:
      "First consultation is free (30 minutes), no obligation. Engagement formats: hourly consultations, project-based reviews/strategy documents, and monthly CTO-level advisory retainers.",
    stories: [
      { title: "Startup saved ₹8 lakhs", description: "Advised against microservices for a 10-user MVP; a simpler monolith saved six months of over-engineering." },
      { title: "E-commerce site 10× faster", description: "N+1 query problem and improper caching identified; load time dropped from 8 seconds to 0.8." },
      { title: "Passed a security audit first try", description: "Guided fixes for all OWASP vulnerabilities; the client passed a SOC 2 audit." },
    ],
    ctaLabel: "Book your free 30-minute discovery call",
  },
  {
    slug: "digital-marketing",
    num: "07",
    name: "Digital Marketing",
    icon: "📈",
    short: "SEO, ads, social, content & CRO.",
    tagline:
      "Data-driven marketing across every channel, built by people who understand technology businesses.",
    metaDescription:
      "Marketing that understands technology businesses. SmartGrow Infotech runs SEO, Google Ads, social, content, email, LinkedIn, WhatsApp and CRO, data-driven, fully reported, and tied to revenue. Performance-based option available. Book a call to grow your pipeline.",
    audience: "Businesses needing leads & growth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "A great product is only half the battle, customers need to know about it. We help businesses reach their audience, generate qualified leads, and convert them into paying customers, using data-driven strategies across channels to maximise ROI.",
      "Unlike generic agencies, our team understands technology businesses deeply and markets to both technical and non-technical audiences.",
    ],
    sections: [
      {
        heading: "Marketing services",
        items: [
          { title: "Search Engine Optimization (SEO)", description: "Keyword research, on-page and technical SEO, content strategy, link building, local SEO, competitor analysis, monthly reporting. Typical ROI 300–500%." },
          { title: "Social Media Marketing", description: "Platform strategy, content creation, a 30–60 post calendar, community management, paid social, influencer marketing, analytics across LinkedIn, Instagram, Facebook, Twitter, YouTube." },
          { title: "Google Ads (PPC)", description: "Search, display and remarketing campaigns, keyword selection, ad copy, landing pages, bid management, A/B testing, conversion tracking. Typically 2–4× ROI." },
          { title: "Content Marketing", description: "4–8 SEO blog posts/month, case studies, white papers and e-books, infographics, video, newsletters, guest posting." },
          { title: "Email Marketing", description: "List building, automated sequences, responsive templates, segmentation, A/B testing, analytics. Typical 20–30% open and 3–5% click rates." },
          { title: "LinkedIn Marketing (B2B)", description: "Profile optimisation, content strategy, lead generation, LinkedIn Ads, employee advocacy, groups, best for SaaS, B2B services, enterprise software." },
          { title: "WhatsApp Marketing", description: "Broadcast lists, WhatsApp Business, automated responses, rich media, status updates, group marketing. 98% open and 45–60% response rates." },
          { title: "Conversion Rate Optimization (CRO)", description: "Website audits, A/B testing, landing page design, form optimisation, heat maps, funnel analysis. Typically a 20–50% lift in conversion." },
        ],
      },
      {
        heading: "Industries served",
        items: [
          { title: "Technology & SaaS" },
          { title: "Education" },
          { title: "E-commerce" },
          { title: "Healthcare" },
          { title: "Real estate" },
          { title: "Professional services" },
          { title: "Manufacturing" },
        ],
      },
      {
        heading: "Engagement tiers",
        note: "A performance-based option is available (base fee plus a percentage of revenue generated). Pricing is discussed on the call.",
        items: [
          { title: "Startup", description: "Basic SEO, 2 social platforms, 4 blog posts, monthly report." },
          { title: "Growth", description: "Advanced SEO, 3 platforms, Google Ads, 8 posts, email, bi-weekly calls." },
          { title: "Enterprise", description: "Full-service, all channels, dedicated manager, weekly calls, CRO." },
        ],
      },
      {
        heading: "Metrics we track",
        items: [
          { title: "Website traffic (organic & paid)" },
          { title: "Keyword rankings (top-10 positions)" },
          { title: "Lead generation (forms, calls, emails)" },
          { title: "Cost per lead (CPL)" },
          { title: "Conversion rate" },
          { title: "Return on ad spend (ROAS)" },
          { title: "Social engagement" },
          { title: "Email open and click rates" },
          { title: "Revenue generated" },
        ],
      },
      {
        heading: "Typical results",
        items: [
          { title: "SEO", description: "100–300% increase in organic traffic; 50–100 qualified leads/month." },
          { title: "Google Ads", description: "2–4× ROI; ₹50–200 cost per lead depending on industry." },
          { title: "Social media", description: "50–100% follower growth; 5–10 organic leads/week." },
          { title: "Content marketing", description: "3–5× website traffic and established authority." },
        ],
      },
    ],
    processHeading: "Our process",
    process: [
      {
        title: "Research & setup",
        period: "Phase 1",
        points: ["Business and audience research", "Competitor analysis", "Strategy", "Account setup and tracking", "First campaigns"],
      },
      {
        title: "Execution & optimization",
        period: "Phase 2",
        points: ["Content creation", "Campaign monitoring", "A/B testing", "Weekly performance reviews"],
      },
      {
        title: "Scaling & growth",
        period: "Phase 3",
        points: ["Scale what works", "Expand channels", "Advanced strategies", "Continuous optimisation"],
      },
    ],
  },
  {
    slug: "ai-ml",
    num: "08",
    name: "AI / ML Projects & Training",
    icon: "🤖",
    short: "Training programs plus custom AI builds.",
    tagline:
      "A hands-on AI/ML training program plus custom AI solution development for businesses.",
    metaDescription:
      "Build AI skills or build AI products. SmartGrow Infotech runs a hands-on 3-month AI/ML program (Python, ML, deep learning, NLP, computer vision, 5 real projects, certificate, referrals) and builds custom AI: predictive analytics, NLP, computer vision, recommendations and anomaly detection. Book a call to talk to us.",
    audience: "Students & businesses adopting AI",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "AI and ML are transforming every industry. SmartGrow offers both a training program for students building AI skills and custom AI development for businesses, practical and hands-on, covering not just theory but how to build and deploy real AI systems.",
      "The AI/ML training program is a 3-month intensive that takes beginners to job-ready AI engineers, 80% practical projects, 20% theory. Duration 12 weeks · live online + offline (Hyderabad) · 3 days/week, 2 hours/session, 72 hours total · maximum 20 students per batch.",
    ],
    sections: [
      {
        heading: "Hands-on projects",
        items: [
          { title: "House price prediction", description: "Linear regression." },
          { title: "Customer churn prediction", description: "Classification." },
          { title: "Sentiment analysis of product reviews", description: "NLP." },
          { title: "Face mask detection using CNN", description: "Computer vision." },
          { title: "Recommendation system", description: "Collaborative filtering." },
        ],
      },
      {
        heading: "What's included",
        note: "Career outcome: AI/ML engineers earn ₹6–12 LPA starting salary.",
        items: [
          { title: "72 hours of live training" },
          { title: "Lifetime access to recorded videos" },
          { title: "Study materials (PDFs, code, datasets)" },
          { title: "Google Colab Pro subscription (₹5,000 value)" },
          { title: "5 industry-grade projects with code" },
          { title: "GitHub portfolio setup" },
          { title: "Certificate of completion" },
          { title: "3 mock interviews for AI/ML roles" },
          { title: "Job referrals" },
          { title: "Lifetime WhatsApp support group" },
        ],
      },
      {
        heading: "Custom AI solutions we build",
        items: [
          { title: "Predictive analytics", description: "Sales forecasting, demand prediction, customer lifetime value, churn, risk models." },
          { title: "Natural language processing", description: "Chatbots, sentiment analysis, document classification, summarisation, translation, Q&A." },
          { title: "Computer vision", description: "Object detection, face recognition, OCR, defect detection, classification, video analytics." },
          { title: "Recommendation systems", description: "Product, content and job-matching recommendations; personalised marketing." },
          { title: "Anomaly detection", description: "Fraud detection, intrusion detection, manufacturing QC, healthcare alerts." },
        ],
      },
      {
        heading: "AI development process",
        items: [
          { title: "Discovery & data", description: "Understand the problem, collect and explore data, assess feasibility, define metrics." },
          { title: "Model development", description: "Cleaning, feature engineering, training, tuning, evaluation." },
          { title: "Deployment", description: "API development (Flask/FastAPI), cloud deployment, frontend integration, monitoring, documentation." },
        ],
      },
    ],
    processHeading: "Training curriculum (3 months)",
    process: [
      {
        title: "Python & data science foundations",
        period: "Month 1",
        points: [
          "Python mastery, NumPy, Pandas, visualisation (Matplotlib/Seaborn), Jupyter/Colab",
          "Statistics, probability, distributions, hypothesis testing",
          "Linear algebra and calculus for ML",
        ],
      },
      {
        title: "Machine learning",
        period: "Month 2",
        points: [
          "Supervised learning: regression, logistic, decision trees, random forests, SVM, KNN, evaluation metrics",
          "Advanced ML: clustering, PCA/t-SNE, ensembles/XGBoost, feature engineering, imbalanced data, hyperparameter tuning",
        ],
      },
      {
        title: "Deep learning & specialisations",
        period: "Month 3",
        points: [
          "Neural networks, TensorFlow/Keras, CNNs, RNNs, transfer learning",
          "NLP: embeddings, sentiment, NER",
          "Computer vision: OpenCV, object detection, face recognition, segmentation",
        ],
      },
    ],
    stories: [
      { title: "Customer churn prediction", description: "A churn model for a telecom client reduced churn by 25% and saved ₹50L annually." },
      { title: "OCR invoice processing", description: "Handles 10,000+ invoices/month, saving 200 man-hours." },
    ],
    testimonials: [
      {
        name: "Srikanth",
        org: "JNTUH",
        quote:
          "Completed the AI/ML training, built 5 projects, and got placed at Accenture as an ML Engineer at ₹8 LPA.",
      },
    ],
  },
  {
    slug: "us-it-staffing",
    num: "09",
    name: "US IT Staffing",
    icon: "",
    short: "Pre-vetted Indian developers for US teams.",
    tagline:
      "Pre-vetted Indian developers for US companies, at 40–60% lower cost, without quality compromise.",
    metaDescription:
      "Hire pre-vetted Indian developers at 40–60% lower cost. SmartGrow Infotech provides remote contractors (top 5% of applicants) across full-stack, data, cloud/DevOps and specialised roles, with US time-zone overlap, a 2-week trial, free replacement and a standard MSA. Profiles in 48 hours. Book a call.",
    audience: "US companies hiring remote developers",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
    overview: [
      "We connect US companies seeking tech talent with highly qualified Indian developers who work as remote contractors, significant cost savings without compromising quality.",
      "Developers work in US time zones, communicate fluently in English, follow US business practices, and deliver to US quality standards, all at 40–60% lower cost than hiring locally in the US.",
    ],
    sections: [
      {
        heading: "Cost savings without quality compromise",
        items: [
          { title: "40–60% cost reduction", description: "Versus typical US developer rates of $120–180/hour." },
          { title: "No benefits overhead", description: "No health insurance, 401k, or other employee benefits." },
          { title: "No recruitment costs", description: "Sourcing, screening, interviews handled." },
          { title: "Flexible scaling", description: "Ramp up or down without severance concerns." },
          { title: "No infrastructure costs", description: "Developers work from their own setup." },
        ],
      },
      {
        heading: "Quality & reliability",
        items: [
          { title: "Pre-vetted talent", description: "Only the top 5% of applicants pass screening." },
          { title: "Proven experience", description: "3–10+ years hands-on." },
          { title: "Strong communication", description: "Fluent English, experienced with US teams." },
          { title: "Time-zone overlap", description: "Minimum 4–5 hours with EST/PST." },
          { title: "Accountability", description: "Performance managed, issues handled." },
        ],
      },
      {
        heading: "Technical expertise provided",
        items: [
          { title: "Software development", description: "Full-stack, backend, frontend, mobile engineers." },
          { title: "Data & analytics", description: "Data engineers, data scientists, analysts, ML engineers." },
          { title: "Cloud & DevOps", description: "DevOps engineers, cloud architects, SREs, security engineers." },
          { title: "Specialised roles", description: "QA/test engineers, UI/UX designers, business analysts, technical project managers." },
        ],
      },
      {
        heading: "Contract types",
        note: "Experience levels junior through architect/lead available; rates are discussed on the call.",
        items: [
          { title: "Full-time · 40 hrs/week", description: "Dedicated resource for long-term projects." },
          { title: "Part-time · 20 hrs/week", description: "Maintenance, support, small projects." },
          { title: "Project-based", description: "Fixed scope and timeline." },
          { title: "Staff augmentation", description: "Integrate with your existing team." },
        ],
      },
      {
        heading: "Billing terms",
        items: [
          { title: "Invoicing", description: "Monthly, based on hours worked." },
          { title: "Time tracking", description: "Hubstaff, Jira, or your preferred tool." },
          { title: "Payment", description: "Wire transfer, PayPal, or Wise (USD)." },
          { title: "Contract", description: "Standard MSA." },
          { title: "Minimum commitment", description: "3 months after the trial." },
        ],
      },
      {
        heading: "Quality guarantees",
        items: [
          { title: "Two-week trial before long-term commitment" },
          { title: "Free replacement if a developer doesn't work out" },
          { title: "Performance management of underperformance" },
          { title: "Guaranteed 4–5 hours daily overlap" },
          { title: "Response within 4 business hours" },
          { title: "NDAs and IP-assignment agreements" },
          { title: "Backup resources for continuity" },
        ],
      },
      {
        heading: "For Indian developers, join the talent pool",
        items: [
          { title: "Higher earnings", description: "Than typical Indian-company salaries (₹60–80K/month) with US contract work." },
          { title: "Work-life balance", description: "Remote work with flexible hours and some US overlap." },
          { title: "International exposure", description: "Cutting-edge US projects and world-class teams." },
          { title: "Stable income", description: "Long-term contracts and reliable payments." },
        ],
      },
    ],
    processHeading: "How it works",
    process: [
      { title: "Profiles", period: "Within 48 hours", points: ["3–5 pre-screened candidate profiles."] },
      { title: "Interview", points: ["Interview candidates directly, with assistance if needed."] },
      { title: "Trial", period: "2 weeks · paid", points: ["A two-week paid trial to evaluate fit."] },
      { title: "Onboard", points: ["Sign the contract, the developer starts."] },
      { title: "Ongoing", points: ["Payroll, performance, and issues managed for you."] },
    ],
    stories: [
      { title: "Vetting process", description: "1 Resume screening (experience, technologies, English proficiency, US exposure) · 2 Technical assessment (coding tests, system design, 95% filtered out here) · 3 Technical interview (1-hour deep dive) · 4 Communication assessment · 5 Background verification. Result: only 5% of applicants make it into the talent pool." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Service categories (navbar dropdown + /services pages)              */
/* ------------------------------------------------------------------ */

export type ServiceCategory = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  serviceSlugs: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "branding",
    name: "Branding",
    tagline: "How your business looks and reads online.",
    description:
      "Your website is your brand's first impression. We design and build sites that look sharp, load fast, and say the right things.",
    serviceSlugs: ["web-development"],
  },
  {
    slug: "technology",
    name: "Technology",
    tagline: "Software built, scaled, and staffed.",
    description:
      "Products, apps, AI systems, expert guidance, and vetted developers. If it involves engineering, it lives here.",
    serviceSlugs: [
      "product-development",
      "mobile-app-development",
      "technology-consultancy",
      "ai-ml",
      "us-it-staffing",
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    tagline: "Getting your product in front of people.",
    description:
      "Data-driven campaigns across SEO, ads, social, content, and email. Every rupee tracked, every result reported.",
    serviceSlugs: ["digital-marketing"],
  },
  {
    slug: "training",
    name: "Training",
    tagline: "Turning students into working engineers.",
    description:
      "Placement training, real internships, and hands-on AI/ML programs. 1000+ students trained, 87% placed.",
    serviceSlugs: ["crt-training", "internship-program", "ai-ml"],
  },
];

export function getCategory(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Our Work (home #our-works)                                          */
/* ------------------------------------------------------------------ */

export const caseStudies = [
  {
    title: "bharatbuild.ai",
    description:
      "An AI coding workspace, in the same family as tools like Antigravity. It plans the work, writes the code, and reviews it with the developer.",
    tag: "AI Dev Tool",
    media: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "myleadx.ai",
    description:
      "A CRM with AI built in. It scores every lead, drafts the follow-ups, and keeps the pipeline clean, so sales teams spend their time selling.",
    tag: "AI Integrated CRM",
    media: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Derivestems",
    description:
      "A content marketing agency. We built and run their web platform, publishing workflow, and analytics, so their team can focus on the content.",
    tag: "Content Marketing Agency",
    media: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Inboxtales",
    description:
      "A digital creative agency. We handle their site, campaign tooling, and everything technical behind the creative work.",
    tag: "Digital Creative Agency",
    media: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
  },
] as const;

export const clientTestimonials: Testimonial[] = [
  {
    name: "Kishore",
    org: "bharatbuild.ai",
    quote:
      "SmartGrow built our AI coding workspace end to end. They understood the product from day one and the quality never slipped.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Madhav Reddy",
    org: "Derivestems",
    quote:
      "They run our tech while we run our agency. The platform, the tooling, the automation, all of it just works.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Kiran Kumar",
    org: "MyleadXai",
    quote:
      "Our CRM went from an idea to a product our sales teams rely on every day. Clean work and honest communication.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Snehith Chalsani",
    org: "Inboxtales",
    quote:
      "Every request lands with people who get both design and engineering. That's a rare combination and a great partner.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop",
  },
];

/* ------------------------------------------------------------------ */
/* Achievements (home #achievements)                                   */
/* ------------------------------------------------------------------ */

export const achievementHeadlines = [
  "500+ projects delivered.",
  "1000+ students trained.",
  "87% placement rate.",
] as const;

export const companyAchievements = [
  { value: "500+", label: "Projects delivered" },
  { value: "50+", label: "Business clients" },
  { value: "1000+", label: "Students trained" },
  { value: "87%", label: "Placement rate" },
  { value: "15+", label: "Years of combined industry experience" },
  { value: "99.9%", label: "Satisfaction" },
  { value: "95%", label: "Projects delivered within agreed timelines" },
  { value: "24/7", label: "Dedicated support" },
] as const;

export const trainingAchievements = [
  { value: "250+", label: "CRT students trained" },
  { value: "₹4.5L", label: "Average package (vs ₹3.5L untrained)" },
  { value: "₹12L", label: "Highest package (Amazon)" },
  { value: "60%", label: "Of top intern performers receive a PPO" },
  { value: "250+", label: "Alumni in top companies" },
] as const;

export const hiringCompanies = [
  "TCS", "Wipro", "Infosys", "Capgemini", "Accenture", "Cognizant",
  "Tech Mahindra", "HCL", "Mindtree", "Amazon", "Microsoft", "Flipkart", "Paytm",
] as const;

/* ------------------------------------------------------------------ */
/* FAQs (home #faq), drafted per blueprint D4/M13                     */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    id: 1,
    question: "What does SmartGrow Infotech do?",
    answer:
      "Software products, web & mobile development, AI/ML, digital marketing, consultancy, training & US IT staffing. Founded 2021, based in Madhapur, Hyderabad, India.",
  },
  {
    id: 2,
    question: "Who do you work with?",
    answer:
      "Early-stage startups, SMBs, established enterprises, educational institutions, and individual students preparing for corporate careers.",
  },
  {
    id: 3,
    question: "What technologies do you use?",
    answer:
      "Current stacks: React, Spring Boot, Flutter, AI/ML, AWS/Azure, full index on the Technology page.",
  },
  {
    id: 4,
    question: "How is pricing decided?",
    answer:
      "Pricing is scoped per engagement and discussed on a call; book one via the Book a Call button. The first consultation is free (30 minutes, no obligation).",
  },
  {
    id: 5,
    question: "Do you provide support after launch?",
    answer:
      "Yes: end-to-end from ideation to deployment, maintenance, and scaling, with a dedicated 24/7 support team; 95% of projects deliver within agreed timelines.",
  },
  {
    id: 6,
    question: "How does the CRT program run?",
    answer:
      "60 days (8 weeks), Monday–Saturday, 240+ hours; hybrid (offline Hyderabad + online live); maximum 30 students; morning (9 AM–1 PM) or evening (5 PM–9 PM) batches.",
  },
  {
    id: 7,
    question: "How do I apply for an internship?",
    answer:
      'Email info@smartgrowinfotech.com with subject "Internship Application – [Your Track] – [Your Name]", attaching a resume and cover letter; intake is year-round.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Company page                                                        */
/* ------------------------------------------------------------------ */

export const company = {
  purpose:
    "Who SmartGrow Infotech is, why it exists, and the principles that govern how it works.",
  overview: [
    "SmartGrow Infotech is a technology solutions and training company based in Hyderabad, India. Established in 2021, it has grown into a partner for businesses, startups, and students seeking software solutions and professional skill development.",
    "Its purpose is to bridge the gap between academic learning and industry requirements while delivering software products that drive business growth. Clientele ranges from early-stage startups to established enterprises, educational institutions, and individual students preparing for corporate careers.",
  ],
  vision:
    "To be the most trusted technology partner in India, known for innovative solutions that transform businesses and empower individuals with future-ready skills. The company envisions a future where every business has access to affordable, high-quality technology, and every engineering student is job-ready on graduation.",
  mission: [
    "Deliver exceptional software products that exceed client expectations.",
    "Bridge the skill gap between academic education and industry requirements.",
    "Empower students with practical, job-ready technical and soft skills.",
    "Provide cost-effective technology solutions to startups and SMBs.",
    "Foster innovation and excellence in everything the company does.",
    "Build long-term relationships based on trust, transparency, and results.",
  ],
  values: [
    { title: "Excellence", description: "Striving for perfection in every project and training program delivered." },
    { title: "Integrity", description: "Operating with complete transparency and honesty in all dealings." },
    { title: "Innovation", description: "Continuously adopting the latest technologies and methodologies." },
    { title: "Customer Success", description: "Measuring success by the success of clients and students." },
    { title: "Empowerment", description: "Enabling people with knowledge, skills, and opportunities." },
    { title: "Commitment", description: "Delivering on promises, every single time." },
  ],
  whyChoose: [
    { title: "Proven track record", description: "500+ successful projects, 1000+ students trained, 87% placement rate." },
    { title: "Expert team", description: "15+ years of combined industry experience across technologies and domains." },
    { title: "Quality assurance", description: "Industry-standard practices, rigorous testing, 99.9% satisfaction." },
    { title: "Cost-effective", description: "Competitive pricing without compromising on quality." },
    { title: "Modern technology", description: "Current stacks, React, Spring Boot, Flutter, AI/ML, AWS/Azure." },
    { title: "On-time delivery", description: "95% of projects delivered within agreed timelines." },
    { title: "24/7 support", description: "A dedicated support team for all clients." },
    { title: "End-to-end", description: "From ideation to deployment, maintenance, and scaling." },
    { title: "Student-centric", description: "A distinctive focus on making students job-ready." },
    { title: "Long-term partnership", description: "Lasting relationships, not one-off deliveries." },
  ],
} as const;

export const footerAbout =
  "SmartGrow Infotech is a technology solutions and training company based in Hyderabad, India. Established in 2021, we partner with startups, small and medium-sized businesses, enterprises, and students to deliver reliable, scalable, business-focused technology, and to develop future technology professionals through internships, industry-oriented training, and hands-on project experience. Our services span product development, web and mobile applications, AI/ML, digital marketing, technology consultancy, and US IT staffing.";

/* ------------------------------------------------------------------ */
/* Technology page                                                     */
/* ------------------------------------------------------------------ */

export const techIndex = [
  { group: "Frontend", items: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "Material-UI"] },
  { group: "Backend", items: ["Spring Boot (Java)", "Node.js", "Python (Django)", "Python (FastAPI)", "Python (Flask)", ".NET Core", "PHP (Laravel)"] },
  { group: "Mobile", items: ["Swift / SwiftUI", "Kotlin", "Java (Android)", "React Native", "Flutter", "Xamarin"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "SQLite", "Realm", "Firebase Realtime DB"] },
  { group: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Terraform", "GitHub Actions", "Heroku", "Netlify", "Vercel"] },
  { group: "AI / ML", items: ["Python", "TensorFlow", "PyTorch", "Keras", "scikit-learn", "Pandas", "NumPy", "OpenCV", "NLTK", "XGBoost"] },
  { group: "IoT & embedded", items: ["Arduino", "Raspberry Pi", "ESP8266", "NodeMCU", "Sensors"] },
  { group: "Blockchain", items: ["Solidity", "Ethereum", "Hyperledger", "Web3.js"] },
  { group: "Integrations & messaging", items: ["GraphQL", "WebSockets", "Kafka", "Apache Airflow", "Apache Spark", "Stripe", "Razorpay", "Google Pay", "Apple Pay"] },
  { group: "CMS & commerce", items: ["WordPress", "Strapi", "Contentful", "WooCommerce", "Shopify", "Magento"] },
] as const;
