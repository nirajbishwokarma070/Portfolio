import { ArrowDown, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center pt-16 md:min-h-screen"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center md:px-8 md:py-24">
        <div className="reveal">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Hello, I&apos;m
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight text-primary md:text-6xl lg:text-[68px]">
            Niraj
            <br />
            Bishwokarma
          </h1>
          <p className="mt-6 text-lg font-medium text-primary">
            Junior Web Developer <span className="text-accent">|</span> Laravel Developer
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-secondary">
            I&apos;m a BIT graduate and aspiring web developer passionate about
            building functional, responsive, and user-friendly web applications.
            I enjoy turning ideas into practical digital solutions through clean
            code and thoughtful design.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-[#0B0D12] transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={17} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-5 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#69B88A]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#69B88A]" />
            </span>
            Open to Junior Developer &amp; Internship Opportunities
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] reveal md:mx-0 md:ml-auto">
          <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-secondary-bg">
            <div className="relative flex h-full items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,#171B25_0%,#10131A_100%)]" />
              <div className="relative text-center">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-border bg-background text-3xl font-semibold text-accent">
                  NB
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-secondary">
                  Profile Photo
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden border-l border-b border-accent/50 pb-4 pl-4 text-xs uppercase tracking-[0.16em] text-secondary md:block">
            Bharatpur, Nepal
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.18em] text-secondary md:flex"
      >
        Scroll
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
