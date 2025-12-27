export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with the latest features of Next.js 14.',
    content: 'Full blog post content goes here...',
    date: '2024-12-20',
    author: 'Your Name',
    image: '📝',
    tags: ['Next.js', 'React', 'Tutorial'],
    featured: true,
  },
  {
    id: 2,
    title: 'Mastering TypeScript in 2024',
    excerpt: 'A comprehensive guide to TypeScript best practices and advanced patterns.',
    content: 'Full blog post content goes here...',
    date: '2024-12-18',
    author: 'Your Name',
    image: '📘',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    featured: true,
  },
  {
    id: 3,
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Best practices for designing and implementing RESTful APIs that scale.',
    content: 'Full blog post content goes here...',
    date: '2024-12-15',
    author: 'Your Name',
    image: '🚀',
    tags: ['Node.js', 'API', 'Backend'],
    featured: true,
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'Understanding the differences and use cases for modern CSS layout systems.',
    content: 'Full blog post content goes here...',
    date: '2024-12-10',
    author: 'Your Name',
    image: '🎨',
    tags: ['CSS', 'Web Design', 'Frontend'],
    featured: false,
  },
  {
    id: 5,
    title: 'State Management in React 2024',
    excerpt: 'Exploring different state management solutions for React applications.',
    content: 'Full blog post content goes here...',
    date: '2024-12-05',
    author: 'Your Name',
    image: '⚛️',
    tags: ['React', 'State Management', 'Redux'],
    featured: false,
  },
  {
    id: 6,
    title: 'Docker for Beginners',
    excerpt: 'A beginner-friendly introduction to containerization with Docker.',
    content: 'Full blog post content goes here...',
    date: '2024-12-01',
    author: 'Your Name',
    image: '🐳',
    tags: ['Docker', 'DevOps', 'Tutorial'],
    featured: false,
  },
  {
    id: 7,
    title: 'Optimizing Web Performance',
    excerpt: 'Techniques and tools for improving website speed and user experience.',
    content: 'Full blog post content goes here...',
    date: '2024-11-28',
    author: 'Your Name',
    image: '⚡',
    tags: ['Performance', 'Web Development', 'Optimization'],
    featured: false,
  },
  {
    id: 8,
    title: 'Introduction to GraphQL',
    excerpt: 'Learn how GraphQL can improve your API design and data fetching.',
    content: 'Full blog post content goes here...',
    date: '2024-11-25',
    author: 'Your Name',
    image: '🔷',
    tags: ['GraphQL', 'API', 'Backend'],
    featured: false,
  },
  {
    id: 9,
    title: 'Testing React Applications',
    excerpt: 'Best practices for testing React components with Jest and React Testing Library.',
    content: 'Full blog post content goes here...',
    date: '2024-11-20',
    author: 'Your Name',
    image: '🧪',
    tags: ['Testing', 'React', 'Jest'],
    featured: false,
  },
  {
    id: 10,
    title: 'Serverless Architecture Explained',
    excerpt: 'Understanding serverless computing and when to use it in your projects.',
    content: 'Full blog post content goes here...',
    date: '2024-11-15',
    author: 'Your Name',
    image: '☁️',
    tags: ['Serverless', 'Cloud', 'AWS'],
    featured: false,
  },
];
