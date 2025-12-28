# 🐸 Froggy Portfolio

A clean, minimal portfolio template built with Next.js 16, React 19, and TypeScript. Perfect for developers who want to showcase their work without unnecessary complexity.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## How to Update Your Portfolio

### 1. **Update Site Information** (`app/config/settings.ts`)

This is your main configuration file. Update everything here:

```typescript
siteInfo: {
  name: "Your Name",              // Replace with your name
  title: "Your Title",            // e.g., "Full Stack Developer"
  description: "Your bio...",     // Short description
  logo: "YourLogo",               // Text logo
  logoImage: "/logo.png",         // Path to logo image
}
```

### 2. **Update Contact Information** (`app/config/settings.ts`)

```typescript
contact: {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
}
```

### 3. **Update Stats** (`app/config/settings.ts`)

```typescript
stats: {
  experience: "5+",    // Years of experience
  projects: "50+",     // Number of projects
  clients: "30+",      // Happy clients
}
```

### 4. **Update Tech Stack** (`app/config/settings.ts`)

```typescript
techStack: [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  // Add your technologies here
]
```

### 5. **Update About Bio** (`app/config/settings.ts`)

```typescript
about: {
  showCV: true,              // Show/hide CV viewer
  cvUrl: "/data/cv.pdf",     // Path to CV file
  fullBio: `
    Write your full bio here.
    This appears on the /about page.
    You can use multiple lines.
  `,
}
```

### 6. **Add Your Projects** (`app/data/projects.ts`)

Replace the sample projects with your own:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of your project',
    image: '🚀',              // Emoji or icon
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://yourproject.com',
    github: 'https://github.com/you/project',  // Optional
    featured: true,           // Show on homepage
  },
  // Add more projects...
]
```

### 7. **Add Your CV** (`public/data/cv.pdf`)

1. Place your CV PDF file in `public/data/`
2. Rename it to `cv.pdf` (or update the path in settings)
3. The CV viewer will automatically work

### 8. **Add Your Logo** (`public/logo.png`)

1. Place your logo image in `public/`
2. Rename it to `logo.png` (or update the path in settings)
3. Recommended size: 40x40px or larger

### 9. **Update Site Metadata** (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your portfolio description",
};
```

### 10. **Customize Colors** (`app/config/settings.ts`)

```typescript
colors: {
  primary: "#00ff88",           // Main accent color
  primaryDark: "#00cc6a",       // Darker shade
  background: "#0a0a0a",        // Page background
  backgroundSecondary: "#1a1a1a",
  text: "#ffffff",
  textSecondary: "#9ca3af",
}
```

---

## Pages Included

1. **Homepage** (`/`)
   - Hero section with introduction
   - About preview
   - Featured projects (first 3)
   - Contact section
   - Footer

2. **About Page** (`/about`)
   - Full bio
   - Stats (experience, projects, clients)
   - Complete tech stack
   - CV viewer & download

3. **Projects Page** (`/projects`)
   - All projects with pagination
   - 9 projects per page
   - Filterable by featured status

---

## Advanced Customization

### Change Pagination

Edit `app/config/settings.ts`:

```typescript
pagination: {
  projectsPerPage: 9,   // Projects per page
}
```

### Add Navigation Links

Edit `app/config/settings.ts`:

```typescript
navigation: [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
  // Add more links here
]
```

### Modify Global Styles

Edit `app/globals.css` to change CSS variables:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --primary-green: #00ff88;
  --primary-green-dark: #00cc6a;
  --secondary-gray: #1a1a1a;
}
```

---

## Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Static Export

If you need a static site:

1. Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
};
```

2. Build: `npm run build`
3. Deploy the `out` folder

---

## Dependencies

### Core
- **Next.js 16.1.1** - React framework
- **React 19.2.3** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4** - Styling
---

## Features

✅ Fully responsive design  
✅ Dark theme with customizable colors  
✅ CV viewer with download option  
✅ Project showcase with pagination  
✅ TypeScript strict mode  
✅ SEO optimized  
✅ Fast builds with Turbopack  
✅ Zero configuration needed  

---

## 📄 License

Free to use for personal and commercial projects.

---

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize
- Report issues
- Suggest improvements

---

**Made with 💚 by Froggy Portfolio Template**