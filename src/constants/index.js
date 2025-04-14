import {
  c,
  python,
  java,
  cpp,
  javascript,
  Typescript,
  Next,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  // **********
  bgPhoto,
  bgPhoto2,
  bgPhoto3,
  bgPhoto4,
  bgPhoto5,
  bgPhoto6,
  bgPhoto7,
  bgPhoto8,
  bgPhoto9,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  gitHub,
  faceBook,
  whatsApp,
  gmail,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// {/* ############# start services */}
export const services = [
  { title: "Javascript", icon: javascript },
  { title: "Typescript", icon: Typescript },
  { title: "Next.JS", icon: Next },
  { title: "React", icon: reactjs },
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
];
// {/* ############# end services */}
// {/* ############# start technologies */}
export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Typescript", icon: Typescript },
  { name: "Next", icon: Next },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  // { name: "vite", icon: vite },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];
// {/* ############# end technologies */}
// {/* ############# start contact */}
export const contact = [
  { name: "gitHub",navLink:'https://github.com/Amr-7246', icon: gitHub },
  { name: "faceBook",navLink:'https://www.facebook.com/profile.php?id=100072170876178&locale=ar_AR', icon: faceBook },
  { name: "whatsApp",navLink:'https://web.whatsapp.com/',icon: whatsApp },
  { name: "gmail",navLink:'https://mail.google.com/mail/u/0/#inbox', icon: gmail },
];
    // {/* ############# end contact */}
    // {/* ############# start experiences */}
export const experiences = [
  {
    bgPhoto: bgPhoto9,
    title: "Some Skills",
    link: "https://raise-skills.vercel.app/",
    company_name: "",
    icon: icon1,
    iconBg: "#161329",
    date: "",
    points: [
      "Here are snippets of mini projects that highlight different skills."
    ],
  },
  {
    bgPhoto: bgPhoto7,
    title: "Hotels App",
    link: "https://hotels-app-218g.vercel.app/",
    company_name: "",
    icon: icon7,
    iconBg: "#1d1e20",
    date: "",
    points: [
      "It`s Hotel App for show some search and filter logics  ",
    ],
  },
  {
    bgPhoto: bgPhoto8,
    title: "Name Generation",
    link: "https://amr-7246.github.io/Baby-Name-Generator/",
    company_name: "",
    icon: icon8,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "A simple name generation algorithm with basic options and AI integration, but inactive due to being serverless.",
    ],
  },
  {
    bgPhoto: bgPhoto2,
    title: "IPhone 15 Pro",
    link: "https://amr-7246.github.io/ApplePage/",
    company_name: "",
    icon: icon2,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "it`s just a simple clone for apple market page without any functionlty ",
    ],
  },
  {
    bgPhoto: bgPhoto,
    title: "BrainWave",
    link: "https://amr-7246.github.io/Brainwave/",
    company_name: "",
    icon: icon1,
    iconBg: "#161329",
    date: "",
    points: [
      "It`s a simple front-end interface to just show a gradient color schemes without any functionlty ",
    ],
  },
  // {
  //   bgPhoto: bgPhoto3,
  //   title: "NETFLIX",
  //   link: "https://amr-7246.github.io/Brainwave/",
  //   company_name: "",
  //   icon: icon3,
  //   iconBg: "#161329",
  //   date: "June 2023 - July 2023",
  //   points: [
  //     "it`s a Netflix clone for show the responseve layout",
  //   ],
  // },
  
  {
    bgPhoto: bgPhoto5,
    title: "FitnessApp",
    link: "https://amr-7246.github.io/FitnessApp/",
    company_name: "",
    icon: icon5,
    iconBg: "#1d1e20",
    date: "",
    points: [
      "It`s front-end layout with API handling",
    ],
  },
  {
    bgPhoto: bgPhoto4,
    title: "BusinessApp",
    link: "https://amr-7246.github.io/BusinessApp/",
    company_name: "",
    icon: icon4,
    iconBg: "#1d1e20",
    date: "",
    points: [
      "It`s just front-end layout for a business page without any functionlty  ",
    ],
  },
  {
    bgPhoto: bgPhoto6,
    title: "FoodApp",
    link: "https://amr-7246.github.io/FoodApp/",
    company_name: "",
    icon: icon6,
    iconBg: "#1d1e20",
    date: "",
    points: [
      "It`s front-end layout for a FoodApp page without any functionlty  ",
    ],
  },
  
];
    // {/* ############# end experiences */}
export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
