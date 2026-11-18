import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Skills" title="Technologies I Work With" />
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.title} className="bg-background p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Icon size={18} className="text-accent" aria-hidden="true" />
                  <h3 className="font-semibold text-primary">{category.title}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-l border-border pl-3 text-sm text-secondary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
