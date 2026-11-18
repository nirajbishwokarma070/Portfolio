"use client";

import { FormEvent, useState } from "react";
import { Link2, Mail, MapPin } from "lucide-react";
import { personal } from "@/data/personal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete all required fields with valid information.");
      return;
    }

    setStatus(
      "Your message is ready. Email delivery is not configured yet, so no message has been sent.",
    );
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together."
          description="I'm currently looking for junior web developer opportunities, Laravel internships, and opportunities to gain practical experience. If you have an interesting project or opportunity, I'd love to connect."
        />

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <div className="border-t border-border">
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 border-b border-border py-5 text-sm text-secondary transition-colors hover:text-accent"
                >
                  <Mail size={18} />
                  Email
                </a>
              )}
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border-b border-border py-5 text-sm text-secondary transition-colors hover:text-accent"
                >
                  <Link2 size={18} />
                  GitHub
                </a>
              )}
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border-b border-border py-5 text-sm text-secondary transition-colors hover:text-accent"
                >
                  <Link2 size={18} />
                  LinkedIn
                </a>
              )}
              <div className="flex items-center gap-4 border-b border-border py-5 text-sm text-secondary">
                <MapPin size={18} />
                Location: {personal.location}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-secondary">
              Name
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-2 h-12 w-full border border-border bg-secondary-bg/30 px-4 text-primary outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="text-sm text-secondary">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 h-12 w-full border border-border bg-secondary-bg/30 px-4 text-primary outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="text-sm text-secondary sm:col-span-2">
              Subject
              <input
                name="subject"
                type="text"
                required
                className="mt-2 h-12 w-full border border-border bg-secondary-bg/30 px-4 text-primary outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="text-sm text-secondary sm:col-span-2">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-y border border-border bg-secondary-bg/30 px-4 py-3 text-primary outline-none transition-colors focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="h-12 rounded-md bg-accent px-6 text-sm font-semibold text-[#0B0D12] transition-transform hover:-translate-y-0.5 sm:w-fit"
            >
              Send Message
            </button>
            {status && (
              <p
                role="status"
                className="self-center text-sm leading-6 text-secondary sm:col-span-1"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
