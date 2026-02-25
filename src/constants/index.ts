import {
  arrowRight,
  mail,
  taskAlt,
  freeCCSolid,
  githubSolid,
  linkedinSolid,
  discordSolid,
  arrowUpBracketSolid,
  MindfulSpace,
  EGALogo,
  EGALogoXTag,
  EGAMocks1,
  eliteEngRe,
  MindfulSpaceLogo,
  mpkidsTag,
  mpkLogo,
  smmcWebDes,
} from '@/assets/';

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Work",
    url: "#work",
  },
  {
    id: "2",
    title: "Say hi!",
    url: "#sayhi",
  },
];

export const socials = [
  {
    id: "0",
    title: "Email",
    iconUrl: mail,
    url: "mailto:ameera.gahussain@gmail.com",
  },
  {
    id: "1",
    title: "Github",
    iconUrl: githubSolid,
    url: "https://github.com/ameera-gahussain",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedinSolid,
    url: "https://www.linkedin.com/in/ameeragahussain",
  },
  {
    id: "3",
    title: "Discord",
    iconUrl: discordSolid,
    url: "https://discordapp.com/users/knightowl87",
  },
  {
    id: "4",
    title: "freeCodeCamp",
    iconUrl: freeCCSolid,
    url: "https://www.freecodecamp.org/redknightowl",
  },
];

export const about = [
  {
    id: "0",
    title: "About Me",
    text: "I’m a frontend-focused engineer with a background in education and content design, bringing over a decade of experience in building structured systems and meaningful user journeys; first in classrooms, now in code.",
    text2:
      "My transition into tech wasn’t a leap, but an evolution. I’ve always designed experiences, from learning frameworks and curriculum to digital interfaces and internal tools. Today, I build responsive, user-centered products with a strong foundation in empathy, storytelling, and thoughtful structure.",
    text3:
      "I care about clarity in communication, in design, and in code. Whether crafting UI components or shaping product flows, I approach development with systems thinking and attention to detail",
    text4:"I’m excited by work that bridges product, design, and engineering and by building things that feel as good as they function.",
  },
];

export const techSkills = [
  {
    id: "0",
    skill: "React.js",
  },
  {
    id: "1",
    skill: "Javascript ES6+",
  },
  {
    id: "2",
    skill: "Python",
  },
  {
    id: "3",
    skill: "HTML, CSS",
  },
  {
    id: "4",
    skill: "Vite",
  },
  {
    id: "5",
    skill: "Figma",
  },
  {
    id: "6",
    skill: "Webflow",
  },
  {
    id: "7",
    skill: "Adobe Photoshop",
  },
  {
    id: "8",
    skill: "Adobe Illustrator",
  },
  {
    id: "9",
    skill: "Procreate",
  },
];

export const work = [
  {
    id: "0",
    title: "Rooftop Energy – Internal CRM & Site Management",
    tasks: "Frontend Development",
    skills: "React, Tailwind CSS, Vite, Git",
    details:
      "Conceptualised and maintained internal CRM and site management modules, integrating frontend with backend APIs and contributing to feature planning and system-level architecture.",
    image: "",
  },
  {
    id: "1",
    title: "Social Media Marketing Consultant Website",
    tasks: "Website concept design",
    skills: "Figma, Webflow",
    details:
      "A sleek and professional website designed for a social media marketing consultant to showcase services, build credibility, and attract new clients.",
    image: smmcWebDes,
  },
  {
    id: "2",
    title: "Elite Global Academy Logo Design",
    tasks: "Logo design",
    skills: "Adobe Fresco, Adobe Illustrator",
    details:
      "Designed the brand identity for this ambitious new academy—helping them launch their first center with modern, aspirational visuals.",
    image: EGALogo,
  },
  {
    id: "3",
    title: "English Learning Resources",
    tasks: "Brochure design",
    skills: "Canva, Adobe Illustrator",
    details:
      "Fun, CEFR-aligned English materials for students, packed with useful information and guides for parents.",
    image: eliteEngRe,
  },
  {
    id: "4",
    title: "MoveParkour & MoveParkour Kids Logo Design",
    tasks: "Logo design",
    skills: "Adobe Photoshop, Adobe Illustrator",
    details:
      "Designed dynamic logos for two Parkour brands — one for energetic kids, the other for thrill-seeking adults. Movement has never looked so stylish!",
    image: mpkLogo,
  },
  {
    id: "5",
    title: "Mindful Space Logo Design",
    tasks: "Logo design",
    skills: "Adobe Illustrator, Adobe Photoshop",
    details:
      "Developed a calming, clean logo for a psychology-based company focused on mental wellness, reflection, and creating a peaceful space for growth.",
    image: MindfulSpaceLogo,
  },
];

export const projectDetails = {
  0: {
    title: "Rooftop Energy – Internal CRM & Site Management",
    summary: {
      text: "Built and maintained internal CRM and site management modules for a renewable energy company, handling both desktop and mobile interfaces.",
      images: [],
    },
    goalsIntro: "Develop frontend solutions to:",
    goals: [
      "Conceptualise and maintain internal CRM and site management modules for desktop and mobile",
      "Integrate frontend seamlessly with backend APIs and data flows",
      "Participate in code reviews, Git workflows, and production handover",
    ],
    process: {
      text: "Implemented frontend features using React, Tailwind CSS, and Vite. Leveraged AI tools to accelerate development while retaining full code ownership. Contributed to feature planning and system-level thinking.",
      images: [],
    },
    tools: "React, Tailwind CSS, Vite, Git",
    outcome: [
      "Learned: How to integrate frontend with backend APIs effectively, and how to use AI tools responsibly to accelerate development.",
      "Impact: Delivered production-ready modules that improved internal workflows for the company's operations team.",
    ],
  },
  1: {
    title: "Social Media Marketing Consultant Website",
    summary: {
      text: "A sleek, conversion-focused website designed to attract new clients by clearly presenting services, expertise, and social proof—turning visitors into booked calls.",
      images: [],
      downloadUrl:
        "https://preview.webflow.com/preview/johndoeconsulting?utm_medium=preview_link&utm_source=designer&utm_content=johndoeconsulting&preview=1e1e5b3fba806f0da1d01f46fab5de6c&workflow=preview",
      downloadUrlLabel: "See how it looks like here",
    },
    goalsIntro: "Create an inviting, informative website to:",
    goals: [
      "Clearly display core services (e.g., content strategy, ad management, analytics)",
      "Showcase previous clients and work experience",
    ],
    process: {
      text: "Started with wireframes, moved into mockups in Figma, and iterated based on feedback.",
      images: [],
    },
    tools: "Figma, Webflow",
    outcome: [
      "Learned: Short, punchy service descriptions, using tabs for displaying wok experience and studying newspaper print design to achieve the current first draft aesthetic.",
      "Client Response: Client loved the clean layout draft and how it clearly displays services offered and analytics.",
    ],
  },
  2: {
    title: "Elite Global Academy Logo Design",
    summary: {
      text: "A bold visual identity created for the launch of Elite Global Academy, a new education center with a focus on excellence and innovation.",
      images: [EGALogoXTag],
    },
    goalsIntro: "Develop a brand identity to:",
    goals: [
      "Position Elite Global as a premium, future-focused institution",
      "Support their flagship center launch with cohesive print/digital assets",
    ],
    process: {
      text: "Initial sketches explored shapes inspired by books, shields, and abstract E motifs. After client feedback, I refined one concept that communicated experience and trust, paired with a modern typeface.",
      images: [EGAMocks1],
    },
    tools: "Adobe Fresco, Adobe Illustrator",
    outcome: [
      "Learned: Startups value flexibility so I designed alternate logo mockups for different use cases.",
      "Client Response: The logo was received with enthusiasm by the client and their partners. It gave their launch materials a cohesive and professional look.",
    ],
  },
  3: {
    title: "English Learning Resources for Students",
    summary: {
      text: "A bright, engaging brochure created for parents and students, packed with English learning resources based on CEFR levels.",
      images: [],
      downloadUrl: "/resources/engPriRes.pdf",
      downloadUrlLabel: "Download the PDF file here",
    },
    goalsIntro: "Design printable/digital resources to:",
    goals: [
      "Align with CEFR standards",
      "Engage students (ages 6–17) with visuals and clickable links",
      "Simplify parent involvement with clear information and resources",
    ],
    process: {
      text: "Started with basic wireframes in Canva to organize content effectively. Concepts played with colorful illustrations and icons. The final version featured bite-sized tips and resource suggestions, wrapped in a friendly design.",
      images: [],
    },
    tools: "Canva, Adobe Illustrator",
    outcome: [
      "Learned: How to design to appeal to both parents and students.",
      "Client Response: Parents appreciated the clarity and usefulness of the content. Students loved the colors and visuals.",
    ],
  },
  4: {
    title: "MoveParkour & MoveParkour Kids Logo Design",
    summary: {
      text: "Two energetic logos crafted for a Parkour company’s adult and kids’ branches — designed to represent agility, motion, and community.",
      images: [mpkLogo, mpkidsTag],
    },
    goalsIntro: "Create distinct but connected logos to:",
    goals: [
      "Differentiate adult/kid audiences",
      "Capture parkour’s dynamism without clichés (no stick-figure backflips!)",
    ],
    process: {
      text: "Started with fluid shapes and bold lines to represent movement. For the kids’ version, I added playful elements and rounded edges. The final designs are visually connected but unique.",
      images: [],
    },
    tools: "Adobe Photoshop, Adobe Illustrator",
    outcome: [
      "Learned: To create subtle changes in logo to maintain consistency with the parent brand.",
      "Client Response: The client loved the energy and versatility of the designs. The adult and kids’ communities responded positively, especially when the logos were used on merchandise.",
    ],
  },
  5: {
    title: "MindfulSpace Logo Design",
    summary: {
      text: "A minimalist and calming logo for a psychology-based company focused on creating supportive mental health environments.",
      images: [MindfulSpace],
    },
    goalsIntro: "Design a logo to:",
    goals: [
      "Avoid overused zen symbols (lotus flowers, om signs)",
      "Evoke safety and growth",
      "Work across therapy materials",
    ],
    process: {
      text: "Initial concepts explored organic shapes and subtle color schemes. The final design used soft curves and balanced symmetry to evoke peace and mindfulness.",
      images: [],
    },
    tools: "Adobe Illustrator, Adobe Photoshop",
    outcome: [
      "Learned: Gained insight into how visual design can support mental health messaging via simple shapes that deliver complex messaging.",
      "Client Response: The client was very pleased with the sense of calm the logo conveyed. It gave the brand a polished yet empathetic visual identity.",
    ],
  },
};

export const experience = [
  {
    id: "0",
    company: "Web Designer/Web Developer",
    job: "Freelancer",
    duration: "Present",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    id: "1",
    company: "Freelance Tutor",
    job: "English Tutor",
    duration: "June 2020 - Present",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    id: "2",
    company: "Sky Academy",
    job: "Syllabus Designer",
    duration: "September 2023 - November 2023",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    id: "3",
    company: "Tzu Chi International School KL",
    job: "Homeroom teacher + English teacher",
    duration: "December 2019 - May 2020",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    id: "4",
    company: "Sri Emas International School",
    job: "English teacher + History teacher",
    duration: "January 2017 - November 2019",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    id: "5",
    company: "Other",
    job: "Homeroom teacher + English teacher",
    duration: "December 2019 - May 2020",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
];

export const projectIcons = [arrowRight, taskAlt];

export const projects = [
  {
    id: "0",
    title: "Social Media Marketing Portfolio",
    description:
      "A commissioned project for a social media marketing consultant.",
    techUsed: "Figma, webflow, Adobe",
    status: "In  progress",
  },
  {
    id: "1",
    title: "SparkTech",
    description:
      "A short, live challenge requiring participants to design and put together a website within 2 hours.",
    status: "done",
  },
  {
    id: "2",
    title: "The Palindrome Checker",
    description:
      "A certification project on freeCodeCamp for a web-app that checks whether text entered is a palindrome.",
    status: "done",
  },
  {
    id: "3",
    title: "Survey Form",
    description:
      "Mini project for freeCodeCamp to create a survey form to practice HTML and CSS.",
    status: "done",
  },
  {
    id: "4",
    title: "Technical Documentation",
    description: "Certification  project for freeCodeCamp.",
    status: "done",
  },
  {
    id: "5",
    title: "Product Landing Page",
    description:
      "Certification  project for freeCodeCamp to design your own product landing page utilising...",
    status: "done",
  },
];

export const projectPageIcons = [
  {
    id: "0",
    title: "Github",
    iconUrl: githubSolid,
    url: "#",
  },
  {
    id: "1",
    title: "Preview",
    iconUrl: arrowUpBracketSolid,
    url: "#",
  },
];
