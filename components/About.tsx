import SectionHeading from "./SectionHeading";

const details = [
  ["Education", "Bachelor of Information Technology"],
  ["Institution", "Birendra Multiple Campus"],
  ["Location", "Nepal"],
  ["Laravel Training", "Softworica – 3 Months"],
  ["Internship", "Technology Sewa Pvt. Ltd."],
  ["Interest", "Web Development & Software Engineering"],
];

export default function About() {
  return (
    <section id="about" className="section-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="About" title="A Little About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div className="space-y-5 text-base leading-8 text-secondary">
            <p>
              I&apos;m Niraj Bishwokarma, a Bachelor of Information Technology
              graduate from Birendra Multiple Campus, Bharatpur, Nepal.
            </p>
            <p>
              My interest in technology led me to explore programming, web
              development, and software engineering. I have completed three
              months of Laravel training at Softworica, where I gained practical
              knowledge of PHP, Laravel, MVC architecture, database management,
              and dynamic web application development.
            </p>
            <p>
              I also gained internship experience at Technology Sewa Pvt. Ltd.,
              working in UI/UX and graphic design. During this experience, I
              worked with Figma and Canva to create user interfaces, application
              designs, social media templates, and promotional graphics.
            </p>
            <p>
              I enjoy building practical applications, solving technical
              problems, and continuously learning new technologies. My current
              focus is improving my Laravel, PHP, JavaScript, and frontend
              development skills while growing as a professional web developer.
            </p>
          </div>

          <dl className="border-t border-border">
            {details.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-4 text-sm"
              >
                <dt className="text-secondary">{label}</dt>
                <dd className="font-medium text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
