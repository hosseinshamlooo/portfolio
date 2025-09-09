export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link:"#contact"}
];

export const gridItems = [
  {
    id: 1,
    title: "I value collaboration and believe in clear, open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover absolute inset-0",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I adapt easily to different time zones and schedules.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Consistently aiming to improve.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate developer and lifelong tech enthusiast.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a JavaScript animation library.",
    description: "A behind-the-scenes look at my ongoing project.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Noteha",
    des: "An AI-powered study assistant that summarizes notes, generates quizzes, and accelerates learning using GPT-4o-mini.",
    img: "./prj1.png",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg"],
    link: "https://github.com/hosseinshamlooo/exam-prep-ai",
  },
  {
    id: 2,
    title: "Habit Tracker",
    des: "A minimal, intuitive app designed to help users build habits, stay consistent, and visualize daily progress over time.",
    img: "./prj2.png",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg"],
    link: "https://github.com/hosseinshamlooo/habit-tracker",
  },
  {
    id: 3,
    title: "Lexico Academy",
    des: "A gamified IELTS prep platform with an XP system, AI-powered practice tools, and bite-sized video lessons to boost engagement.",
    img: "./prj3.png",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./c.svg"],
    link: "https://github.com/hosseinshamlooo/lexico_academy",
  },
  {
    id: 4,
    title: "FitMii",
    des: "A gamified fitness app where users level up evolving characters by completing workouts, designed to keep motivation high.",
    img: "./prj4.png",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg"],
    link: "https://github.com/hosseinshamlooo/fitmii",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Developed a responsive personal portfolio using TypeScript and the Aceternity UI library. Focused on clean design, performance, and accessibility while showcasing my projects and skills.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "AI Integration Developer",
    desc: "Implemented AI-powered writing assistance features for Lexico Academy, an educational platform. Designed and integrated interactive learning tools to improve user engagement.",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    desc: "Built Fitmii and a habit tracker app using Expo and React Native, focusing on cross-platform functionality and smooth user experience.",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    desc: "Created wireframes and interactive prototypes for web and mobile apps. Experienced with Figma and Framer, applying modern design principles for intuitive interfaces.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/hosseinshamlooo",
    name: "GitHub"
  },
  {
    id: 2,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/hossein-shamloo-a35a75206/",
    name: "LinkedIn"
  },
];