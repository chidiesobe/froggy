export const siteSettings = {
  // Colors
  colors: {
    primary: "#00ff88",
    primaryDark: "#00cc6a",
    background: "#0a0a0a",
    backgroundSecondary: "#1a1a1a",
    text: "#ffffff",
    textSecondary: "#9ca3af",
  },

  // Site Info
  siteInfo: {
    name: "Froggy Portfolio",
    title: "Portfolio",
    description:
      "I build exceptional digital experiences and share my journey through insightful projects. Passionate about clean code and meaningful content.",
    logo: "Froggy",
    logoImage: "/logo.png", // Set to empty string '' if no logo image
  },

  // Pagination
  pagination: {
    projectsPerPage: 9,
  },

  // Content Paths
  paths: {
    projectsData: "app/data/projects.ts", // Where project data is stored
  },

  // About Page
  about: {
    showCV: true, // Set to false to hide CV download button
    cvUrl: "/data/cv.pdf", // Path to your CV file in /public folder
    fullBio: `
        Froggy is a clean, minimal portfolio template built for developers who want to showcase their work without unnecessary complexity. It focuses on clarity, performance, and structure making it easy to present projects, experience, and technical skills in a straightforward way.

        The template is designed to stay out of the way, letting your work speak for itself. It avoids heavy abstractions and over-engineered features, favoring simple components, readable layouts, and a flexible structure that can be adapted to different needs.

        Froggy is ideal for personal portfolios, lightweight project showcases, and developer-focused sites where simplicity, maintainability, and clarity matter more than flashy features.
    `,
  },

  // About Stats
  stats: {
    experience: "5+",
    projects: "50+",
    clients: "30+",
  },

  // Tech Stack
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],

  // Contact Info
  contact: {
    email: "your.email@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ],
};
