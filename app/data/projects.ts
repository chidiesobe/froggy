export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, product management, and admin dashboard.',
    image: '🛒',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    link: '#',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management application with drag-and-drop functionality.',
    image: '📋',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: '#',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with blog functionality and CMS integration.',
    image: '💼',
    tags: ['Next.js', 'MDX', 'Vercel'],
    link: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasts and historical data.',
    image: '🌤️',
    tags: ['React', 'API', 'Charts.js'],
    link: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Social networking platform with posts, comments, likes, and real-time notifications.',
    image: '📱',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Content management system with markdown support and SEO optimization.',
    image: '✍️',
    tags: ['Next.js', 'Markdown', 'SEO'],
    link: '#',
    featured: false,
  },
];
