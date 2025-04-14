import {
  arrowRight,
  close,
  home,
  mail,
  menu,
  taskAlt,
  freeCCSolid,
  githubSolid,
  linkedinSolid,
  discordSolid,
  arrowUpBracketSolid,
  EliteLogoPNG01,
  EliteLogoPNG02,
  MindfulSpace,
  MPOriginal,
  readingResource,
} from "../assets";

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
    url: "https://discordapp.com/users/YOUR_USER_ID",
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
    text: "Hey there! I'm Ameera, a web developer, designer, and graphic artist passionate about bringing creative visions to life online. My journey into code and design began with curiosity and a whole lot of self-driven exploration—think late nights, countless tutorials, and an unstoppable drive to learn. This independent learning style has shaped my diverse skill set, sharpened my problem-solving abilities, and fueled my love for tackling new challenges. I’m always eager to grow, stay ahead of trends, and push creative boundaries. Whether you need a sleek website, a standout logo, or a full brand refresh, let’s collaborate and create something amazing!",
    text2:
      "When I'm not working, I go for long drives, coffee in cafes, madness with my cats and a good curl up with a book.",
    text3: "Currently working hard for a Triumph Speed 400.",
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
    skill: "HTML",
  },
  {
    id: "4",
    skill: "CSS",
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
    title: "Sky Academy Website Design",
    tasks: "Website concept design",
    skills: "Figma",
    details:
      "Celebrating Sky Academy’s reopening with a fresh website—featuring their exciting new Barista Course (because caffeine + education = the perfect blend!).",
    image: EliteLogoPNG02,
  },
  {
    id: "1",
    title: "Elite Global Academy Logo Design",
    tasks: "Logo design",
    skills: "Adobe Fresco, Adobe Illustrator",
    details:
      "Designed the brand identity for this ambitious new academy—helping them launch their first center with sleek, aspirational visuals.",
    image: EliteLogoPNG01,
  },
  {
    id: "2",
    title: "English Learning Resources",
    tasks: "Brochure design",
    skills: "Canva, Adobe Illustrator",
    details:
      "Fun, CEFR-aligned English materials for students—packaged for parents to say, ‘Here’s homework you’ll actually want to do!’",
    image: readingResource,
  },
  {
    id: "3",
    title: "MoveParkour & MoveParkour Kids Logo Design",
    tasks: "Logo design",
    skills: "Adobe Photoshop, Adobe Illustrator",
    details:
      "Designed dynamic logos for two Parkour brands — one for energetic kids, the other for thrill-seeking adults. Movement has never looked so stylish!",
    image: MPOriginal,
  },
  {
    id: "4",
    title: "Mindful Space Logo Design",
    tasks: "Logo design",
    skills: "Adobe Illustrator, Adobe Photoshop",
    details:
      "Developed a calming, clean logo for a psychology-based company focused on mental wellness, reflection, and creating a peaceful space for growth.",
    image: MindfulSpace,
  },
];

export const projectDetails = {
  0: {
    title: "Sky Academy Website Design",
    summary:
      "A fresh concept for Sky Academy’s relaunch, including their new Barista Course announcement.",
    goals:
      "To design a website celebrating the reopening of Sky Academy and introduce the exciting Barista Course.",
    process:
      "Started with wireframes, moved into mockups in Figma, and iterated based on feedback.",
    tools: "Figma",
    outcome:
      "Client loved the clean layout and how it clearly conveyed the course info. I refined my layout and copy balance.",
  },
  1: {
    title: "Elite Global Academy Logo Design",
    summary:
      "A bold visual identity created for the launch of Elite Global Academy, a new education center with a focus on excellence and innovation.",
    goals:
      "The client needed a logo to capture the prestige and ambition of their newly launched academy. The design had to be memorable, professional, and suitable for both digital and printed media.",
    process:
      "Initial sketches explored shapes inspired by books, shields, and abstract E motifs. After client feedback, we refined one concept that communicated strength and trust, paired with a modern typeface.",
    tools: "Adobe Fresco, Adobe Illustrator",
    outcome:
      "The logo was received with enthusiasm by the client and their partners. It gave their launch materials a cohesive and professional look. I deepened my understanding of branding for new ventures.",
  },
  2: {
    title: "English Learning Resources for Students",
    summary:
      "A bright, engaging brochure created for parents, packed with English learning resources for students based on CEFR levels.",
    goals:
      "This brochure was intended to help parents support their children’s English development outside of class. The materials needed to be easy to follow, CEFR-aligned, and visually engaging for kids.",
    process:
      "Started with basic wireframes to organize content effectively. Concepts played with colorful illustrations and icons. The final version featured bite-sized tips and resource suggestions, wrapped in a friendly design.",
    tools: "Canva, Adobe Illustrator",
    outcome:
      "Parents appreciated the clarity and usefulness of the content. The kids loved the colors and visuals. I learned how to better present educational information in a parent-friendly format.",
  },
  3: {
    title: "MoveParkour & MoveParkour Kids Logo Design",
    summary:
      "Two energetic logos crafted for a Parkour company’s adult and kids’ branches — designed to represent agility, motion, and community.",
    goals:
      "The client wanted two distinct yet cohesive logos — one for adults, one for kids. Both needed to reflect the movement and energy of Parkour while being adaptable across apparel and marketing materials.",
    process:
      "Started with fluid shapes and bold lines to represent movement. For the kids’ version, we added playful elements and rounded edges. The final designs are visually connected but unique.",
    tools: "Adobe Photoshop, Adobe Illustrator",
    outcome:
      "The client loved the energy and versatility of the designs. The adult and kids’ communities responded positively, especially when the logos were used on merch. I learned how to tailor design tone for different age groups under one brand umbrella.",
  },
  4: {
    title: "MindfulSpace Logo Design",
    summary:
      "A minimalist and calming logo for a psychology-based company focused on creating supportive mental health environments.",
    goals:
      "The founder wanted a logo that communicated trust, calmness, and introspection. It needed to appeal to adults seeking mental health support while staying modern and professional.",
    process:
      "Initial concepts explored organic shapes and subtle color schemes. The final design used soft curves and balanced symmetry to evoke peace and mindfulness.",
    tools: "Adobe Illustrator, Adobe Photoshop",
    outcome:
      "The client was very pleased with the sense of calm the logo conveyed. It gave the brand a polished yet empathetic visual identity. I gained insight into how visual design can support mental health messaging.",
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
