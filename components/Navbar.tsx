"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (!section) return;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: "-35% 0px -55% 0px" },
      );
      observer.observe(section);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-background/70"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-bold tracking-[0.18em] text-primary"
        >
          NIRAJ.
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link text-sm transition-colors ${
                active === id ? "text-primary" : "text-secondary hover:text-primary"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
            download
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className={`border-b border-border py-3 text-sm ${
                  active === id ? "text-accent" : "text-secondary"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              onClick={closeMenu}
              className="mt-4 flex h-11 items-center justify-center rounded-md border border-accent text-sm font-medium text-accent"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
