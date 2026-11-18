"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 text-xs text-secondary md:px-8">
        <p>Niraj Bishwokarma © 2026. Built with Next.js &amp; Tailwind CSS.</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-10 w-10 place-items-center border border-border text-primary transition-colors hover:border-accent hover:text-accent"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
