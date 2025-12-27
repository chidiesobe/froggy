export const siteSettings = {
  // Colors
  colors: {
    primary: '#00ff88',
    primaryDark: '#00cc6a',
    background: '#0a0a0a',
    backgroundSecondary: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#9ca3af',
  },

  // Site Info
  siteInfo: {
    name: 'Froggy Blog',
    title: 'Portfolio & Blog',
    description: 'I build exceptional digital experiences and share my journey through insightful blog posts. Passionate about clean code and meaningful content.',
    logo: 'Froggy',
    logoImage: '/logo.png', // Set to empty string '' if no logo image
  },

  // Pagination
  pagination: {
    postsPerPage: 9,
    projectsPerPage: 9,
  },

  // Content Paths
  paths: {
    blogContent: 'content/blog', // Where blog markdown files are saved
    projectsData: 'app/data/projects.ts', // Where project data is stored
  },

  // About Page
  about: {
    showCV: true, // Set to false to hide CV download button
    cvUrl: '/cv.pdf', // Path to your CV file in /public folder
    fullBio: `
      I'm a passionate developer with expertise in building modern web applications. 
      I love turning complex problems into simple, beautiful, and intuitive solutions.
      
      When I'm not coding, you'll find me writing blog posts about technology, 
      best practices, and sharing insights from my development journey.
      
      Over the years, I've worked with various technologies and frameworks, constantly 
      learning and adapting to new challenges. My goal is to create meaningful digital 
      experiences that make a difference.
    `,
  },

  // About Stats
  stats: {
    experience: '5+',
    projects: '50+',
    blogPosts: '100+',
    clients: '30+',
  },

  // Tech Stack
  techStack: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'PostgreSQL',
    'Docker',
    'AWS',
  ],

  // Contact Info
  contact: {
    email: 'your.email@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },

  // Navigation Links
  navigation: [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ],
};
