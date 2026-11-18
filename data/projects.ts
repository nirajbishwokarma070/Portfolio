export interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Narayani Hotel Booking System",
    category: "Web application",
    description:
      "A hotel booking web application designed to simplify room reservations and hotel management.",
    features: [
      "Room listing and details",
      "Booking form",
      "Booking management",
      "Admin dashboard",
      "Customer information management",
      "Booking status tracking",
    ],
    technologies: ["Laravel", "PHP", "SQLite", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/narayani-hotel.svg",
  },
  {
    title: "CineGo Movie Ticket Booking",
    category: "Web application",
    description:
      "A movie ticket booking platform for exploring movies and booking cinema tickets.",
    features: [
      "Movie listings",
      "Movie details",
      "Booking interface",
      "Showtime presentation",
      "Admin dashboard",
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/cinego.svg",
  },
  {
    title: "Maharaja Saving & Credit",
    category: "Co-operative website",
    description:
      "A cooperative website providing an organized online presence and accessible institutional information.",
    features: [
      "Professional homepage",
      "Member portal interface",
      "About and information pages",
      "Responsive navigation",
      "Website customization",
    ],
    technologies: ["Laravel", "PHP", "Blade", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/maharaja.svg",
  },
  {
    title: "UI/UX Design Projects",
    category: "Interface & graphic design",
    description:
      "A collection of interface and graphic design work created during a UI/UX and graphic design internship.",
    features: [
      "To-Do List application interface",
      "Weather application interface",
      "Social media post templates",
      "Event poster design",
    ],
    technologies: ["Figma", "Canva"],
    image: "/images/projects/uiux-design.svg",
  },
];
