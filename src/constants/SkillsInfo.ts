// Import all your skill logos here
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import javascriptLogo from "../assets/skills/javascript.png";
import reactjsLogo from "../assets/skills/reactjs.png";
import reduxLogo from "../assets/skills/redux.png";
import nextjsLogo from "../assets/skills/nextjs.png";
import tailwindcssLogo from "../assets/skills/tailwindcss.png";
import materialuiLogo from "../assets/skills/materialui.png";
import bootstrapLogo from "../assets/skills/bootstrap.png";

import nodejsLogo from "../assets/skills/nodejs.png";
import expressjsLogo from "../assets/skills/express.png";
import mysqlLogo from "../assets/skills/mysql.png";
import mongodbLogo from "../assets/skills/mongodb.png";
import firebaseLogo from "../assets/skills/firebase.png";
import postgreLogo from "../assets/skills/postgre.png";

import cLogo from "../assets/skills/c.png";
import cppLogo from "../assets/skills/cpp.png";
import javaLogo from "../assets/skills/java.png";
import pythonLogo from "../assets/skills/python.png";
import typescriptLogo from "../assets/skills/typescript.png";

import gitLogo from "../assets/skills/git.png";
import githubLogo from "../assets/skills/github.png";
import vscodeLogo from "../assets/skills/vscode.png";
import postmanLogo from "../assets/skills/postman.png";
import mcLogo from "../assets/skills/mongodb.png"; // MongoDB Compass
import vercelLogo from "../assets/skills/vercel.png";
import netlifyLogo from "../assets/skills/netlify.png";

// ----------------- Types -----------------
export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// ----------------- Data -----------------
export const SkillsInfo: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];
