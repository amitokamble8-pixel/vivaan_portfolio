/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ------------------------------------------------------------------
   LINKS
   ------------------------------------------------------------------
   Every section below supports links. Fill one in and it appears on the
   site; leave it "" or [] and nothing renders. Nothing breaks either way.

     link    ""  →  nothing is clickable
             "/work/slug"        internal route (uses the router)
             "https://…"         external (opens in a new tab)
             "/certificates/x.pdf"  a file in /public

             On a card, this makes the WHOLE card clickable.
             On an award or interest row, the whole row.

     links   []  →  no link row
             [{ label: "Watch the clip", href: "https://…" }]

             A row of one or more named links at the bottom of the item.
             Use this when something has several destinations, or when
             the label matters ("Certificate", "Live site", "Highlights").

   `link` and `links` can both be used on the same item — the card-wide
   link sits underneath, the named links sit on top and win the click.
   ------------------------------------------------------------------
   RESUME MERGE — October 2026
   ------------------------------------------------------------------
   Everything in Vivaan's resume has been folded in; nothing was removed.
   Where the resume and the earlier portfolio text disagree, BOTH are
   noted in a CONFLICT comment and the portfolio wording was kept, so
   nothing changes on the site until you decide. Search "CONFLICT" to
   find all nine. Search "RESUME TODO" for dates the resume left blank.
   ================================================================== */

export const PROFILE = {
  first: "Vivaan",
  last: "Ghosal",
  fullName: "Vivaan Kumar Ghosal",
  tagline: "Builder • Athlete • Curious Mind",
  // The resume's own headline, kept here in case you prefer it:
  // "Aspiring Computer Science Engineer"
  altTagline: "Aspiring Computer Science Engineer",
  location: "Kolkata, India",
  email: "", // TODO: not stated in either source
  phone: "", // TODO: not stated in either source
  bio: [
    "I like understanding how things work — and then trying to build them myself. From robotics, autonomous UAVs, and DIY mechanical systems to football, music, and debate, I have always been drawn to things that demand both curiosity and persistence. My interests often begin outside the classroom: learning a new concept, taking something apart, writing code, or turning an idea into a working prototype.",
    "I'm currently pursuing the IB Diploma at Modern High School International, studying Physics, Chemistry, Mathematics, and Economics, after finishing my IGCSEs with three A*s and an ICE distinction. My approach to learning is largely hands-on — I've built a force plate and stabilogram system for detecting shifts in centre of pressure, a self-correcting plane using computer vision, a combat robot, and a multi-lingual civic website, and I'm working on a long-term research paper on non-destructive testing of 3D-printed polymers.",
    "Being the youngest in my class and in tournaments pushed me to adapt early — chairing an MUN at an age when most are still delegates, and training for national-level football through my IGCSE mocks rather than choosing between the two. Outside technology, football has been a major part of my life: I represented Team India at the FC Barcelona Academy World Cup in Spain, play for Mohammedan Sporting Club's academy, captain my school team, and coached girls' football with the All Bengal Women's Union. Drums, guitar, debate, and MUN have given me different ways to communicate and create.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    achievement: "https://www.instagram.com/p/DP-2hPqCVAF/?img_index=5&exln=MXI2ODk5bXFjZnJ2YQ%3D%3D",
    wespa: "",
    twitter: "",
    youtube: "",
    instagram: "",
  },
  cv: "/cv.pdf", // TODO: add the resume PDF here
  photo: "/placeholder.png",
  aboutPhoto: "/about_photo.jpeg",
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

  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience & engagement (renders as "Work Experience" cards) ----
   The whole card already links to /work/{slug}. Use `links` for anything
   extra: a write-up, a certificate, a video. ---- */

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
      "Fixed-wing UAV for hyperspectral crop-health imaging at roughly 1/30th the cost of industry systems — provisional patent pending.",
      "Force plate and stabilogram system detecting centre-of-pressure shifts — a low-cost route to early diagnosis of muscular-control issues.",
      "GPS-denied autonomous fixed-wing UAV, and a self-correcting plane using computer vision to hold a level horizon.",
      "Six-gear and reverse LEGO car built without instructions; full restoration of an old Rover Ambassador.",
      "Hexapod walking robot in progress; combat robot built and programmed for Bosco Quantum-Qubit.",
      "National Robotics League · Young Creators League · World Series of Innovation.",
    ],
    tags: ["Robotics", "UAVs", "Computer Vision", "Raspberry Pi", "Arduino", "Prototyping"],
    links: [], // e.g. { label: "Build log", href: "https://…" }
    featured: true,
  },
  {
    slug: "fc-barcelona-academy-world-cup",
    role: "Team India Representative",
    org: "FC Barcelona Academy World Cup, Spain",
    logo: "",
    location: "Spain",
    dates: "", // RESUME TODO: resume shows [Mon 'YY]
    meta: "Spain ·",
    badge: "National Selection",
    desc: "Selected to represent Team India at the FC Barcelona Academy World Cup, competing against national academy sides from across three continents.",
    bullets: [
      "Chosen from roughly 100 candidates nationally — one of only two selected from Kolkata",
      "Earned a starting XI place after a five-day selection camp in Mumbai",
      "Competed against national academy sides from Colombia, the Philippines, Belgium, Luxembourg, Spain and Ecuador",
    ],
    tags: ["Football", "International Competition", "Team India"],
    links: [],
    featured: true,
  },
  {
    slug: "mun-debate-head-delegate",
    role: "Head Delegate & Chair",
    org: "MHSI MUN Delegation",
    logo: "",
    location: "India",
    dates: "2022 – 2026",
    meta: "2022 – 2026 · India ·",
    badge: "Head Delegate",
    desc: "Public speaking has been a significant part of my development since middle school, pursued through MUN and debate as both delegate and chair.",
    bullets: [
      "Head Delegate of the SSAMUN MHSI delegation (2025–26), and working to establish MHSI's first standing Model UN team",
      "Co-Chairperson of the UNEP committee at the JOAN MUN 2022 Digital Conference, St. Joan of Arc International School",
      "Secured a 1st place Special Mention at LMC MUN 2024 and first place at the iLead Jefferson Junior Debate 2025, held by the US Consulate and iLead",
      "Working to inculcate the spirit of MUN and debate in juniors across the school",
    ],
    tags: ["Model UN", "Debate", "Public Speaking", "Chairing"],
    links: [],
    featured: true,
  },
  {
    slug: "plaksha-research",
    role: "Student Researcher",
    org: "Plaksha University — with Dr. Arshdeep Sidhu",
    logo: "/logos/plaksha.png",
    location: "India",
    dates: "May 2025 – Jun 2025",
    meta: "May – Jun 2025 · India ·",
    badge: "Research",
    desc: "Laboratory research at Plaksha University alongside completion of the Young Technology Scholars programme.",
    bullets: [
      "Worked with Dr. Arshdeep Sidhu on a DNA extraction project, isolating his own DNA from white blood cells to deepen his knowledge of biotechnology",
      "Completed the Plaksha Young Technology Scholars programme, held 25 May – 7 June 2025",
      "Earned the attention of professors as a 14-year-old competing for their time alongside near-adult participants",
      // RESUME TODO: the resume leaves the YTS syllabus as "[topics, e.g. AI, robotics, design]"
    ],
    tags: ["Biotechnology", "DNA Extraction", "Research"],
    links: [],
    featured: true,
  },
  {
    slug: "mohammedan-sporting-academy",
    role: "Academy Player",
    org: "Mohammedan Sporting Club Football Academy",
    logo: "",
    location: "Kolkata, India",
    dates: "Present",
    meta: "Kolkata, India ·",
    badge: "I-League Club",
    desc: "Training and playing with the academy squad of Mohammedan Sporting Club, an I-League side, nationally registered with the All India Football Federation.",
    bullets: [
      // CONFLICT: portfolio says U17, resume says [U19]. Confirm the squad.
      "Trains and plays with the Mohammedan SC academy squad; nationally registered with the AIFF",
      "Previously played for Southern Samity FC (U15) in the Reliance Foundation Youth Development League",
      "Selected for D'Souza Football Academy's AIFF National Youth League team and trained with the academy in Mumbai",
    ],
    tags: ["Football", "Academy Football", "AIFF"],
    links: [],
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
    links: [],
    featured: true,
  },
  {
    slug: "robotics-team-technical-lead",
    role: "Technical Lead",
    org: "Team Error404 — National Robotics League",
    logo: "",
    location: "India",
    dates: "2025",
    meta: "2025 · National Robotics League ·",
    badge: "Technical Lead",
    desc: "Technical lead of Team Error404, responsible for the build and engineering side of the team's competition work at the National Robotics League.",
    bullets: [
      "Technical Lead, Team Error404, National Robotics League 2025",
      "Programmed and built a combat robot from scratch for the Bosco Quantum-Qubit competition",
    ],
    tags: ["Robotics", "Technical Leadership", "Team Leadership", "Combat Robotics"],
    links: [],
    featured: false,
  },
  {
    slug: "abwu-football-coach",
    role: "Girls' Football Coach",
    org: "All Bengal Women's Union",
    logo: "",
    location: "Kolkata, India",
    dates: "", // RESUME TODO: resume shows [Mon 'YY] – [Mon 'YY]
    meta: "Kolkata, India ·",
    badge: "Volunteer",
    desc: "Coached girls' football for a women's welfare organisation, and worked to remove the equipment barrier that kept players off the pitch.",
    bullets: [
      "Coached girls' football for roughly 180 hours across seven months",
      "Helped organise and distribute free jerseys, shorts and boots so participants could play",
    ],
    tags: ["Coaching", "Community Service", "Football"],
    links: [],
    featured: false,
  },
  {
    slug: "dalhousie-institute-fc",
    role: "Player",
    org: "Dalhousie Institute Football Club",
    logo: "",
    location: "Kolkata, India",
    dates: "Present",
    meta: "Kolkata, India ·",
    badge: "Club Football",
    desc: "Playing adult club football in city-wide tournaments while still at school.",
    bullets: [
      "Youngest player fielded in adult city-wide tournaments, including the CC&FC Invitational 7s (U25)",
      "Winner, Calcutta Parsee Club U17 Tournament",
    ],
    tags: ["Football", "Club Football"],
    links: [],
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
    links: [],
    featured: false,
  },
];

/* ---- Projects ----
   `link` makes the whole card clickable (a live site, a repo, a paper).
   `links` adds a named row instead — use it when there are several. ---- */

export const PROJECTS = [
  {
    name: "Hyperspectral Crop-Health Imaging UAV",
    org: "Robotics & Precision Agriculture · Provisional patent pending",
    meta: "In progress",
    desc: "A low-cost fixed-wing UAV for hyperspectral crop-health imaging, built at roughly 1/30th to 1/40th the cost of industry-standard systems. Data is presented in a format accessible to non-literate farmers, with the aim of reducing pesticide overuse. Reached the Top 6 of more than 350 teams — including international and funded entries — at the IIT-Kharagpur Young Innovators Programme.",
    tags: ["UAV", "Hyperspectral Imaging", "Precision Agriculture", "Patent Pending", "Award-winning"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Force Plate & Stabilogram System",
    org: "Independent Project",
    meta: "Robotics & Biomechanics · In progress",
    desc: "An Arduino-based force plate and stabilogram system that detects fluctuations in centre of pressure (COP), making it possible to diagnose neural issues related to muscular control early — and at a far lower cost than existing alternatives. Serial-monitor output captures COP shifts live as the plate is loaded.",
    tags: ["Biomechanics", "Sensors", "Arduino", "Diagnostics", "Robotics"],
    link: "",
    links: [], // the serial-monitor demo video would fit well here
    featured: true,
  },
  {
    name: "Non-Destructive Testing of 3D-Printed Polymers",
    org: "Long-Term Research Paper",
    meta: "Ongoing",
    desc: "An ongoing research paper investigating non-destructive testing of 3D-printed polymers based on internal microstructure, using light. So far it includes a machine learning program that analyses incident and reflected rays and maps their paths, simplifying what would otherwise be manual data collection.",
    tags: ["Research", "Machine Learning", "Materials", "Optics"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Community Forum — Pune Civic Platform",
    org: "Goethe-Institut Pune Youth Leaders Congress",
    meta: "Award-winning",
    // CONFLICT: portfolio says "First Place Judiciary Award"; the resume says
    // "Honorary Award, presented by a German Consulate representative".
    // Portfolio wording kept below — confirm which is accurate.
    desc: "A multi-lingual website bridging the gap between the communities of Pune and the local municipality, letting residents post issues and suggestions and increasing communication between people and government. Won a first place judiciary award from the Goethe-Institut Pune at the Youth Leaders Congress, and was received as a model for communities with no such bridge in place.",
    tags: ["Civic Technology", "Web Development", "Multi-lingual", "Award-winning"],
    link: "", // the live site, if still hosted
    links: [{ label: "Pune Goethe Camp", href: "https://mhsi.edu.in/pune-goethe-camp/" }],
    featured: true,
  },
  {
    name: "GPS-Denied Autonomous Fixed-Wing UAV",
    org: "Independent Project",
    meta: "Robotics & Autonomous Systems",
    desc: "An autonomous fixed-wing UAV built to operate without GPS, developed through independent experimentation with autonomous flight systems, coding, and mechanical build.",
    tags: ["UAV", "Autonomous Systems", "Robotics"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Self-Correcting Plane",
    org: "Independent Project",
    meta: "Computer Vision & Machine Learning",
    desc: "A plane that maintains level flight using computer vision and machine learning — specifically Otsu's binarization to find the horizon — without relying on GPS. Presented at the Get Set Learn national educators' conference.",
    tags: ["Computer Vision", "Machine Learning", "Otsu's Binarization", "Flight Systems"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Sound Energy to Electricity",
    org: "Cambridge Upper Secondary Science Competition",
    meta: "Silver Award · 2023",
    desc: "A project converting sound energy into electricity, which won a Silver certificate at the Cambridge Upper Secondary Science Competition supported by Cambridge Assessment International Education.",
    tags: ["Physics", "Energy", "Award-winning"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Six-Gear & Reverse LEGO Car",
    org: "Independent Project",
    meta: "Mechanical Build",
    desc: "A motorised six-gear and reverse LEGO car built without instructions, specifically to learn more about gear ratios and transmission design hands-on.",
    tags: ["Mechanics", "Mechanical Design", "Prototyping"],
    link: "",
    links: [],
    featured: false,
  },
  {
    name: "Rover Ambassador Restoration",
    org: "Independent Project",
    meta: "Mechanical Repair",
    desc: "A repair project on an old Rover Ambassador, covering extraction of the gearbox, fixing the pistons, and cleaning out the dysfunctional wiring.",
    tags: ["Automotive", "Mechanical Repair", "Restoration"],
    link: "",
    links: [],
    featured: false,
  },
  {
    name: "Hexapod Walking Robot",
    org: "Independent Project",
    meta: "In progress",
    desc: "A six-legged walking robot, started purely as a way to learn more about robotics and legged locomotion.",
    tags: ["Robotics", "Locomotion", "Prototyping"],
    link: "",
    links: [],
    featured: false,
  },
  {
    name: "Combat Robotics — Bosco Quantum-Qubit",
    org: "Team Error404",
    meta: "Competition Entry",
    desc: "A combat robot programmed and built from scratch for Bosco Quantum-Qubit, entered as a first attempt at competitive combat robotics with Team Error404.",
    tags: ["Combat Robotics", "Programming", "Competition"],
    link: "",
    links: [{ label: "Robotics Conclave", href: "https://mhsi.edu.in/robotics-conclave/" }],
    featured: false,
  },
  {
    name: "National Robotics Competitions",
    org: "National Robotics League · Young Creators League · World Series of Innovation",
    meta: "Ongoing",
    desc: "Participating in national-level robotics and innovation competitions that challenge me to turn ideas into functioning solutions.",
    tags: ["Robotics", "Competitions", "Innovation"],
    link: "",
    links: [],
    featured: false,
  },
];

/* ---- Achievements ----
   `link` makes the whole row clickable. `links` adds named links below
   the description — handy for "Certificate" plus "Write-up". ---- */

export const AWARDS = [
  {
    icon: "🎓",
    title: "IGCSE — 3 A*s with ICE Distinction",
    meta: "IGCSE Boards",
    detail: "Achieved three A*s and all As other than French in the IGCSE boards, earning an ICE distinction.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🛩️",
    title: "Top 6 of 350+ Teams — IIT-Kharagpur Young Innovators Programme",
    meta: "Hyperspectral Crop-Health UAV",
    detail: "Placed in the top 6 of more than 350 teams, including international and funded entries, for a low-cost fixed-wing UAV for hyperspectral crop-health imaging.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🥉",
    title: "Bronze Medal — Plaksha Young Creators League",
    meta: "India-wide Top 50",
    detail: "Bronze medal at the Plaksha Young Creators League, placing in the top 50 nationally.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🏅",
    title: "Certificate of Achievement — Computer Science & French",
    meta: "MHSI · 2023–24",
    detail: "Awarded by Modern High School International in recognition of enthusiasm and a high level of attainment in French and Computer Science.",
    link: "", // e.g. "/certificates/mhsi-cs-french.pdf"
    links: [],
    featured: true,
  },
  {
    icon: "💡",
    title: "Learner Attribute Award — Innovative Learner",
    meta: "MHSI · 2023–24",
    detail: "Presented for being an innovative learner during the 2023–24 academic year.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🔬",
    title: "Cambridge Upper Secondary Science Competition — Silver",
    meta: "2023",
    detail: "Silver certificate from Cambridge Assessment International Education for a project converting sound energy into electricity.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🌐",
    // CONFLICT: portfolio title says "1st Place Judiciary Award"; the resume
    // says "Honorary Award". Portfolio wording kept — confirm which is right.
    title: "Goethe-Institut Pune Youth Leaders Congress — 1st Place Judiciary Award",
    meta: "Civic Technology",
    detail: "First place judiciary award for a multi-lingual website bridging the communities of Pune and the local municipality, presented by a German Consulate representative.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🎤",
    title: "iLead Jefferson Junior Debate — 1st Place",
    meta: "28 April 2025 · US Consulate & iLead",
    detail: "Winner of the Jefferson Junior Debates 2025, held by the US Consulate in partnership with iLead.",
    link: "",
    links: [{ label: "Jefferson Junior Debate 2025", href: "https://mhsi.edu.in/jefferson-junior-debate/" }],
    featured: true,
  },
  {
    icon: "🏆",
    title: "LMC MUN 2024 — 1st Place Special Mention",
    meta: "La Martiniere Calcutta Model United Nations",
    detail: "Certificate of Merit and a first place Special Mention in the UN General Assembly Fourth Committee (SPECPOL) at LMC MUN 2024.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🇪🇸",
    title: "FC Barcelona Academy World Cup — Team India",
    meta: "Spain · National Selection",
    detail: "Selected from roughly 100 candidates nationally — one of two from Kolkata — to represent Team India, earning a starting XI place after a five-day camp in Mumbai and competing against academy sides from Colombia, the Philippines, Belgium, Luxembourg, Spain and Ecuador.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "⚽",
    title: "EXACT All-American Team — Selected for Spain",
    meta: "Top 2–3% of athletes",
    detail: "Selected as a standout athlete from the X1 Showcase Camp for the All-American team travelling to Spain, placing him in the top 2–3% of high school athletes nationally.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🏟️",
    title: "Mohammedan SC · AIFF National Youth League",
    meta: "I-League club · Nationally registered with AIFF",
    // CONFLICT: portfolio says U17, resume says [U19].
    detail: "Plays for the Mohammedan SC academy, an I-League club, nationally registered with the AIFF. Also selected to play in the AIFF National Youth League team of D'Souza Football Academy and trained with the academy in Mumbai, and previously played for Southern Samity FC (U15) in the Reliance Foundation Youth Development League.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🇺🇸",
    title: "Connecticut Showcase — Two Goals",
    meta: "International Showcase, USA",
    detail: "Scored two goals against international competition from the US, Canada and elsewhere, playing in front of coaches from Brown, UConn, Sarah Lawrence and other top institutions. Received written praise from Brown University's head coach, who described him as a standout midfielder with strong game-reading, passing and natural leadership.",
    link: "",
    links: [], // the goal clips would fit here
    featured: true,
  },
  {
    icon: "🏆",
    title: "Winner — Calcutta Parsee Club U17 Football Tournament",
    meta: "Dalhousie Institute FC",
    detail: "Tournament winner with Dalhousie Institute Football Club.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🥇",
    title: "MHSI Sports Day — Individual Champion",
    meta: "Grade 10 · Phoenix House",
    detail: "Individual champion of sports day with numerous awards: 1st in inter-house football scoring 15 goals in 3 games, 1st in kho-kho and badminton, and 2nd place in chess.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🎖️",
    title: "Special Achievement Award for Sporting Pursuit",
    meta: "Modern High School International", // RESUME TODO: resume shows "[School Name]"
    detail: "Awarded for sporting pursuit.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🥁",
    title: "Trinity College London — Grade 4 Drum Kit, Distinction",
    meta: "April 2025 · Kolkata",
    detail: "Level 2 Certificate in Graded Examination in Music Performance, passed with the highest grade — a distinction. Grades 1–3 passed with Merit.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🎓",
    title: "Plaksha Young Technology Scholars",
    meta: "25 May – 7 June 2025",
    detail: "Completed the Young Technology Scholars programme at Plaksha University.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🎖️",
    title: "School Leadership Positions",
    meta: "2023 – 2027",
    detail: "School Sports Captain (2026–27); House Vice-Captain and Football Society Captain (2025–26); Football Society Vice-Captain (2023–25); Student Council Member (2023–24); Event Head, Showcase '26 — and the only ninth grader selected for two school leadership positions at the time.",
    link: "",
    links: [],
    featured: false,
  },
];

/* ---- Areas of interest & independent learning ---- */

export const ARTICLES = [
  {
    title: "Engineering & Robotics",
    outlet: "Building, prototyping, coding, and understanding physical systems — from force plates and UAVs to combat robots and hexapods",
    link: "",
    links: [],
  },
  {
    title: "Physics & Mathematics",
    outlet: "Concepts beyond the IB curriculum, including mechanics, linear algebra, and calculus",
    link: "",
    links: [],
  },
  {
    title: "Computer Science",
    outlet: "Python, machine learning, computer vision, Raspberry Pi, CS50, LeetCode, and problem-solving through programming",
    link: "",
    links: [],
  },
  {
    title: "Precision Agriculture & Remote Sensing",
    outlet: "Hyperspectral imaging, low-cost UAV platforms, and making technical data usable by farmers who cannot read",
    link: "",
    links: [],
  },
  {
    title: "Biotechnology & Lab Science",
    outlet: "DNA extraction and electrophoresis through work at Plaksha University and the Birla Industrial & Technological Museum",
    link: "",
    links: [],
  },
  {
    title: "Civic Technology",
    outlet: "Multi-lingual platforms that connect communities with local government, developed through the Goethe-Institut Youth Leaders Congress",
    link: "",
    links: [],
  },
  {
    title: "Sports & Leadership",
    outlet: "Competitive football, team leadership, mentoring, and creating opportunities for others",
    link: "",
    links: [],
  },
];

/* ---- Leadership, service & activities ----
   Stats take a single `link` (the chip becomes clickable).
   Orgs take `link` for the whole card and `links` for named links. ---- */

export const VOLUNTEER = {
  stats: [
    // The resume supplies two genuine service numbers; swap any of these in.
    // { value: "180 hrs", label: "Coaching Girls' Football" },
    // { value: "7 mths", label: "With All Bengal Women's Union" },
    { value: "3 A*s", label: "IGCSE with ICE Distinction", link: "" },
    { value: "Top 2–3%", label: "Athlete Selection, All-American", link: "" },
    { value: "15", label: "Goals in 3 Inter-House Games", link: "" },
  ],
  orgs: [
    {
      name: "All Bengal Women's Union",
      role: "Girls' Football Coach",
      // CONFLICT: portfolio describes this as ongoing, three times a week;
      // the resume describes it as ~180 hours over seven months, in the past.
      desc: "Coached girls' football for roughly 180 hours over seven months, and helped organise and distribute free jerseys, shorts and boots so participants could play. What began as a way to share a sport I enjoy also became an opportunity to help younger players build confidence, stay active, and enjoy their time together.",
      link: "",
      links: [],
    },
    {
      name: "MHSI Football",
      role: "School Sports Captain & Football Captain · 2023 – 2027",
      desc: "Founded and captained the school football team, building it from a losing record to national-level TAISI competition and consistent wins, and scored the school's first tournament goals. School Sports Captain (2026–27), House Vice-Captain and Football Society Captain (2025–26), Football Society Vice-Captain (2023–25). Currently aiming to captain MHSI at the ISSO U17 football games.",
      link: "",
      links: [],
    },
    {
      name: "Phoenix House",
      role: "House Vice-Captain",
      desc: "Interacts closely with the house community and guides juniors, now using their opinions as house vice-captain to facilitate positive change.",
      link: "",
      links: [],
    },
    {
      name: "Sci-Spire & Brain Rain",
      role: "Co-Founder & Core Team · 2025 – 2027",
      // CONFLICT: portfolio says he holds no leadership role and the fest is a
      // proposal under review; the resume says Co-Founder and Core Team.
      // Resume wording used here — confirm before publishing.
      desc: "Co-founded the school's first intra-school science competition, in partnership with the NGO Disappearing Dialogues, to bring robotics projects to the East Kolkata Wetlands. Also working on Brain Rain, MHSI's annual robotics fest.",
      link: "",
      links: [{ label: "Sci Spire", href: "https://www.instagram.com/reels/DRWuE29CRJJ/" }],
    },
    {
      name: "MHSI Radio",
      role: "Co-starter & Presenter",
      desc: "Helped start the MHSI radio with senior Anvita, and continued with the radio the following year as a presenter speaking on air.",
      link: "",
      links: [],
    },
    {
      name: "Fundraising Bake Sales",
      role: "Volunteer",
      desc: "Helps run bake sales for community causes, most recently raising funds for the Cuddles Foundation.",
      link: "",
      links: [],
    },
    {
      name: "Showcase '26",
      role: "Event Head",
      desc: "Event Head for Showcase '26, MHSI's school-wide showcase.",
      link: "",
      links: [],
    },
  ],
};

/* ---- Sport, music & activities (renders on the /sports route) ----
   `links` is the useful one here — clubs, performance videos,
   certificates — since one activity usually has several. ---- */

export const SPORTS = [
  {
    icon: "⚽",
    name: "Competitive Football",
    desc: "Represented Team India at the FC Barcelona Academy World Cup in Spain, selected from roughly 100 candidates nationally. Plays for the Mohammedan Sporting Club academy, an I-League side nationally registered with the AIFF, and turns out for Dalhousie Institute as the youngest player in adult city-wide tournaments. Previously with Southern Samity FC (U15) in the Reliance Foundation Youth Development League and selected for D'Souza Football Academy's AIFF National Youth League team. Scored twice at a Connecticut showcase in front of coaches from Brown, UConn and Sarah Lawrence, and was picked from the X1 Showcase Camp for the EXACT All-American team. Founded and captained the MHSI team, taking it from a losing record to national-level TAISI competition.",
    link: "",
    links: [],
  },
  {
    icon: "🥁",
    name: "Drums",
    // CONFLICT: portfolio says five years of drumming; resume says six.
    desc: "Drummer of the school band, performing at the ShowCASe closing ceremony, Exuberance, Bosco Fest 2026, La Concurrence 2024, and the foundation course show 'The River Remembers'. Has played multiple concerts at the Calcutta School of Music, including the Students' Concerts of November 2023 and May 2025. Trinity College London: Grades 1–3 Merit, Grade 4 Drum Kit Distinction after six years of training.",
    link: "",
    links: [], // the Exuberance performance video would fit here
  },
  {
    icon: "🏅",
    name: "Inter-House & Sports Day",
    desc: "Individual champion of sports day at MHSI, winning inter-house football with 15 goals across 3 games, taking first in kho-kho and badminton, and placing second in chess.",
    link: "",
    links: [],
  },
  {
    icon: "🎸",
    name: "Guitar",
    // CONFLICT: portfolio says "many months"; resume says 1.5 years.
    desc: "Self-taught for a year and a half and still learning, steadily taking on harder pieces. Plays in group settings and uses it to connect people through music.",
    link: "",
    links: [],
  },
  {
    icon: "🔬",
    name: "Academic Competitions",
    desc: "Academic and technology competitions combining scientific thinking, problem-solving, and creativity. Highlights: Top 6 of 350+ teams at the IIT-Kharagpur Young Innovators Programme, a Bronze Medal at the Plaksha Young Creators League (India-wide top 50), the Cambridge Upper Secondary Science Competition Silver Award, Plaksha Young Technology Scholars, and the Goethe-Institut Pune Youth Leaders Congress award.",
    link: "",
    links: [],
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Engineering & Robotics",
    items: ["Robotics", "UAV Design", "Autonomous Flight Systems", "Hyperspectral Imaging", "PID Control", "Arduino", "FPV & Nanodrones", "Combat Robotics", "Mechanical Builds", "Mechanical Repair & Restoration", "Prototyping", "Raspberry Pi"],
  },
  {
    group: "Programming & Computer Science",
    items: ["Python", "Machine Learning", "Computer Vision", "Otsu's Binarization", "Web Development", "CS50", "LeetCode", "Problem Solving"],
    // RESUME TODO: the resume leaves "[Programming languages – confirm]" blank.
    // Python is carried over from the portfolio — confirm the full list.
  },
  {
    group: "Physics & Mathematics",
    items: ["Mechanics", "Linear Algebra", "Partial Derivatives", "Calculus", "Optics"],
  },
  {
    group: "Science & Research",
    items: ["Biotechnology", "DNA Extraction & Electrophoresis", "Materials Testing", "Non-Destructive Testing", "Research Writing"],
  },
  {
    group: "Speaking & Leadership",
    items: ["Public Speaking", "Debate", "Model United Nations", "Chairing Committees", "Team Leadership", "Coaching", "Mentoring"],
  },
  {
    group: "Music",
    items: ["Drums (Trinity Grade 4 Distinction)", "Guitar"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi", "Bengali", "German (IB SL)", "French (IGCSE)"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Modern High School International",
    location: "Kolkata, India",
    level: "International Baccalaureate (IB) Diploma Programme",
    dates: "Expected May 2027",
    gpa: "", // RESUME TODO: resume shows "Predicted Score: [XX/45]"
    coursework: [
      "Physics HL",
      "Chemistry HL",
      "Mathematics: Analysis & Approaches HL",
      "Economics SL",
      // CONFLICT: portfolio said "German Ab Initio" and "English SL";
      // the resume says "German B SL" and "English A". Resume used here.
      "German B SL",
      "English A SL",
    ],
    link: "",
    links: [],
  },
  {
    school: "Modern High School International",
    location: "Kolkata, India",
    level: "Cambridge IGCSE (Grades 9–10)",
    dates: "", // RESUME TODO: resume shows "[Mon 'YY]"
    gpa: "3 A*s · As in all other subjects except French · Cambridge ICE Distinction",
    // RESUME TODO: resume also shows "Final Grade: [XX%]"
    coursework: [],
    link: "",
    links: [],
  },
];

/* ---- Test scores — no standardised test results appear in either source.
   IGCSE grades and the IB predicted score live under EDUCATION instead.
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
  { label: "Beyond Academics", to: "/sports" },
];

/* Entries with an empty href are filtered out by the Footer. */
export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "GitHub", href: PROFILE.socials.github },
  { label: "YouTube", href: PROFILE.socials.youtube },
  { label: "Instagram", href: PROFILE.socials.instagram },
  { label: "MHSI Special Achievements Award", href: PROFILE.socials.achievement },
];
