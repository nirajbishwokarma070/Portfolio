import { Code2, Database, Palette, Server } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: typeof Server;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: Server,
    skills: ["PHP", "Laravel", "MVC Architecture", "CRUD Operations", "Authentication"],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQLite"],
  },
  {
    title: "Tools & Design",
    icon: Palette,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Vite"],
  },
];
