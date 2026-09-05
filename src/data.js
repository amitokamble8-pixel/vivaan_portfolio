/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Vivaan",
  last: "Ghosal",
  fullName: "Vivaan Ghosal",
  tagline: "Builder • Athlete • Curious Mind",
  location: "", // TODO: not stated in the source
  email: "", // TODO: not stated in the source
  phone: "", // TODO: not stated in the source
  bio: [
    "I like understanding how things work — and then trying to build them myself. From robotics, autonomous UAVs, and DIY mechanical systems to football, music, and debate, I have always been drawn to things that demand both curiosity and persistence. My interests often begin outside the classroom: learning a new concept, taking something apart, writing code, or turning an idea into a working prototype.",
    "I'm currently pursuing the IB Diploma at Modern High School International, studying Physics, Chemistry, Mathematics, and Economics while continuing to explore robotics, computer science, engineering, and applied technology independently. My approach to learning is largely hands-on — I've experimented with Raspberry Pi, robotics, autonomous flight systems, mechanical builds, and coding, while competing in events that challenge me to turn ideas into functioning solutions.",
    "Outside technology, football has been a major part of my life. I've played competitively at academy level, captained my school team, and teach football to underprivileged girls three times a week. Debate, MUN, drums, and guitar have given me different ways to communicate and create.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "", // TODO: add a CV
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Community & Leadership", to: "/volunteering",
  },

  { label: "Activities", to: "/sports" },
];

/* ---- Experience & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "independent-robotics",
    role: "Independent Builder",
    org: "Independent Robotics & Technology Projects",
    logo: "/logos/robotics.png",
    location: "India",
    dates: "2016 – Present",
    meta: "2016 – Present · India ·",
    badge: "Self-directed",
    desc: "An interest in robotics that began early and has developed through years of experimentation, coding, and hands-on building across Raspberry Pi, mechanics, programming, and machine learning.",
    bullets: [
      "Built a GPS-denied autonomous fixed-wing UAV, a DIY six-speed LEGO engine system, and a stabilogram",
      "Developed projects outside the classroom spanning robotics, mechanics, programming, and machine learning",
      "Participating in national-level robotics competitions including the National Robotics League, Young Creators League, and World Series of Innovation",
    ],
    tags: ["Robotics", "UAVs", "Raspberry Pi", "Prototyping"],
    featured: true,
  },
  {
    slug: "fpv-nanodrone-internship",
    role: "Intern",
    org: "FPV & Nanodrone Internship",
    logo: "/logos/fpv.png",
    location: "India",
    dates: "2025",
    meta: "2025 · India ·",
    badge: "Internship",
    desc: "An internship focused on FPV systems and nanodrones, working with the technology in a practical environment.",
    bullets: [
      "Worked hands-on with FPV systems and nanodrone hardware",
      "Learned how ideas are developed, tested, modified, and made to work in the real world",
    ],
    tags: ["FPV", "Nanodrones", "Applied Engineering"],
    featured: true,
  },
  {
    slug: "mun-debate-head-delegate",
    role: "Head Delegate",
    org: "School MUN Faction",
    logo: "",
    location: "India",
    dates: "2021 – Present",
    meta: "2021 – Present · India ·",
    badge: "Head Delegate",
    desc: "Public speaking has been a significant part of my development since middle school, pursued through MUN and debate.",
    bullets: [
      "Head Delegate for the school's MUN faction",
      "Competed at national-level events against students from schools across India",
    ],
    tags: ["Model UN", "Debate", "Public Speaking"],
    featured: false,
  },
  {
    slug: "community-football",
    role: "Volunteer Coach",
    org: "Community Football",
    logo: "",
    location: "India",
    dates: "2025 – Present",
    meta: "2025 – Present · India ·",
    badge: "Volunteer",
    desc: "Teaching football to underprivileged girls three times a week, using the sport to encourage participation, confidence, and teamwork.",
    bullets: [
      "Runs coaching sessions three times a week",
      "Helps younger players build confidence, stay active, and enjoy their time together",
    ],
    tags: ["Coaching", "Community Service", "Football"],
    featured: false,
  },
  {
    slug: "bitm-biotech-lab",
    role: "Lab Participant",
    org: "Birla Industrial & Technological Museum",
    logo: "",
    location: "India",
    dates: "2022",
    meta: "2022 · India ·",
    badge: "Lab Experience",
    desc: "A short laboratory experience introducing practical biotechnology and experimental process.",
    bullets: [
      "Worked on experiments including DNA electrophoresis",
      "Gained first-hand exposure to laboratory techniques and experimental processes",
    ],
    tags: ["Biotechnology", "Laboratory Work"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "GPS-Denied Autonomous Fixed-Wing UAV",
    org: "Independent Project",
    meta: "Robotics & Autonomous Systems",
    desc: "An autonomous fixed-wing UAV built to operate without GPS, developed through independent experimentation with autonomous flight systems, coding, and mechanical build.",
    tags: ["UAV", "Autonomous Systems", "Robotics"],
    featured: true,
  },
  {
    name: "DIY Six-Speed LEGO Engine System",
    org: "Independent Project",
    meta: "Mechanical Build",
    desc: "A working six-speed engine system built from LEGO, exploring gearing, transmission, and mechanical design hands-on.",
    tags: ["Mechanics", "Mechanical Design", "Prototyping"],
    featured: true,
  },
  {
    name: "Stabilogram",
    org: "Independent Project",
    meta: "Robotics",
    desc: "A stabilogram developed as part of ongoing robotics work.",
    tags: ["Robotics", "Instrumentation", "Sensors"],
    featured: true,
  },
  {
    name: "National Robotics Competitions",
    org: "National Robotics League · Young Creators League · World Series of Innovation",
    meta: "Ongoing",
    desc: "Participating in national-level robotics and innovation competitions that challenge me to turn ideas into functioning solutions.",
    tags: ["Robotics", "Competitions", "Innovation"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🥇",
    title: "Thomas Jefferson US Consulate Debate — 1st Place",
    meta: "Debate",
    detail: "First place at the Thomas Jefferson US Consulate debate competition.",
    link: "",
    featured: true,
  },
  {
    icon: "🏆",
    title: "LMC MUN — Special Mention & 1st Place",
    meta: "Model United Nations",
    detail: "Awarded both a Special Mention and 1st Place at LMC MUN.",
    link: "",
    featured: true,
  },
  {
    icon: "🎤",
    title: "iLead Debate — 1st Place",
    meta: "Debate",
    detail: "First place at the iLead debate competition.",
    link: "",
    featured: true,
  },
  {
    icon: "🔬",
    title: "Cambridge Upper Secondary Science Competition — Silver Award",
    meta: "Science Competition",
    detail: "Silver Award in the Cambridge Upper Secondary Science Competition.",
    link: "",
    featured: true,
  },
  {
    icon: "⚽",
    title: "2026 Academy World Cup — Selected",
    meta: "Football",
    detail: "Selected for the 2026 Academy World Cup.",
    link: "",
    featured: true,
  },
  {
    icon: "🏟️",
    title: "Reliance Foundation Youth League — Selection",
    meta: "Football",
    detail: "Selected for the Reliance Foundation Youth League; plays at academy level with Mohammedan Sporting academy U17.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Plaksha Young Tech Scholars",
    meta: "Technology Programme",
    detail: "Selected participant in the Plaksha Young Tech Scholars programme.",
    link: "",
    featured: false,
  },
  {
    icon: "🌐",
    title: "Goethe-Institut Pune Youth Leadership Congress — Website Award",
    meta: "Youth Leadership Congress",
    detail: "Received the website award at the Goethe-Institut Pune Youth Leadership Congress.",
    link: "",
    featured: false,
  },
  {
    icon: "🥁",
    title: "Trinity College London — Drums",
    meta: "Grades 1–4",
    detail: "Merit in Grades 1–3 and Distinction in Grade 4.",
    link: "",
    featured: false,
  },
  {
    icon: "🎖️",
    title: "School Leadership Positions",
    meta: "2023 – Present",
    detail: "Football Captain and House Vice-Captain — the only ninth grader selected for two school leadership positions at the time.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of interest & independent learning ---- */

export const ARTICLES = [
  {
    title: "Engineering & Robotics",
    outlet: "Building, prototyping, coding, and understanding physical systems",
    link: "",
  },
  {
    title: "Physics & Mathematics",
    outlet: "Concepts beyond the IB curriculum, including mechanics, linear algebra, and calculus",
    link: "",
  },
  {
    title: "Computer Science",
    outlet: "Python, machine learning, Raspberry Pi, CS50, LeetCode, and problem-solving through programming",
    link: "",
  },
  {
    title: "Sports & Leadership",
    outlet: "Competitive football, team leadership, mentoring, and creating opportunities for others",
    link: "",
  },
];

/* ---- Leadership, service & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "3×", label: "Coaching Sessions a Week" },
    { value: "2 yrs", label: "As Football Vice-Captain" },
    { value: "1st", label: "Inter-House Science Fair Organised" },
  ],
  orgs: [
    {
      name: "Community Football",
      role: "Volunteer Coach · Since 2025",
      desc: "Teaches football to underprivileged girls three times a week. What began as a way to share a sport I enjoy has also become an opportunity to help younger players build confidence, stay active, and enjoy their time together.",
    },
    {
      name: "School Football Team",
      role: "Captain · Since 2025",
      desc: "Captain after two years as vice-captain, having helped establish the school's first football team and taken on responsibility for building a stronger team culture while playing competitively at academy level.",
    },
    {
      name: "Student Council",
      role: "Member · House Vice-Captain · Since 2023",
      desc: "Joined the student council in 2023 and has since taken on multiple leadership responsibilities across school activities and sport, including being the only ninth grader selected for two school leadership positions at the time.",
    },
    {
      name: "MUN & Debate",
      role: "Head Delegate",
      desc: "Represents the school at MUN and debate events, competing at national level against students from schools across India, and leads the school's MUN faction as Head Delegate.",
    },
    {
      name: "Inter-House Science Fair",
      role: "Core Organising Team",
      desc: "Part of the core team behind the school's first-ever inter-house science fair, helping create an opportunity for students to present and engage with scientific ideas beyond their regular classes.",
    },
  ],
};

/* ---- Sport, music & activities (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "⚽",
    name: "Competitive Football",
    desc: "Playing since 2019 and one of my biggest commitments outside academics. School captain after two years as vice-captain, continuing to play competitively at academy level. Highlights: Reliance Foundation Youth League selection, Mohammedan Sporting academy U17, selection for the 2026 Academy World Cup.",
  },
  {
    icon: "🥁",
    name: "Drums",
    desc: "Five years of drumming and three years in the school band, with performances at school festivals and individual concerts including events organised by the Calcutta School of Music. Trinity: Grades 1–3 Merit, Grade 4 Distinction.",
  },
  {
    icon: "🔬",
    name: "Academic Competitions",
    desc: "Academic and technology competitions combining scientific thinking, problem-solving, and creativity. Highlights: Cambridge Upper Secondary Science Competition Silver Award, Plaksha Young Tech Scholars, Goethe-Institut Pune Youth Leadership Congress website award.",
  },
  {
    icon: "🧪",
    name: "Science Fair",
    desc: "Core organising team for the school's first inter-house science fair, helping plan and execute a new platform for students to present scientific projects.",
  },
  {
    icon: "🎸",
    name: "Guitar",
    desc: "Started by experimenting with my sister's classical guitar and later moved to electric guitar. Currently learning independently and playing songs I enjoy.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Engineering & Robotics",
    items: ["Robotics", "Autonomous Flight Systems", "UAV Design", "FPV & Nanodrones", "Mechanical Builds", "Prototyping", "Raspberry Pi"],
  },
  {
    group: "Programming & Computer Science",
    items: ["Python", "Machine Learning", "CS50", "LeetCode", "Problem Solving"],
  },
  {
    group: "Physics & Mathematics",
    items: ["Mechanics", "Linear Algebra", "Partial Derivatives", "Calculus"],
  },
  {
    group: "Speaking & Leadership",
    items: ["Public Speaking", "Debate", "Model United Nations", "Team Leadership", "Mentoring"],
  },
  {
    group: "Music",
    items: ["Drums (Trinity Grade 4 Distinction)", "Guitar"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi", "Bengali", "German", "French"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Modern High School International",
    location: "Kolkata, West Bengal, India", // TODO: not stated in the source
    level: "IB Diploma Programme",
    dates: "", // TODO: not stated in the source
    gpa: "", // TODO: not stated in the source
    coursework: [
      "Physics HL",
      "Chemistry HL",
      "Mathematics AA HL",
      "Economics SL",
      "English SL",
      "German Ab Initio",
    ],
  },
];

/* ---- Test scores — no standardised test results appear in the source.
   Export kept so any component importing it does not break. ---- */

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
