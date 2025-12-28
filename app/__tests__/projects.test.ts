import { projects, Project } from '../data/projects';

describe('projects data', () => {
  it('is an array', () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  it('has 6 projects', () => {
    expect(projects).toHaveLength(6);
  });

  describe('project structure', () => {
    it('each project has required fields', () => {
      projects.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('tags');
        expect(project).toHaveProperty('featured');
      });
    });

    it('each project has valid id', () => {
      projects.forEach((project) => {
        expect(typeof project.id).toBe('number');
        expect(project.id).toBeGreaterThan(0);
      });
    });

    it('each project has unique id', () => {
      const ids = projects.map((p) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(projects.length);
    });

    it('each project has non-empty title', () => {
      projects.forEach((project) => {
        expect(typeof project.title).toBe('string');
        expect(project.title.length).toBeGreaterThan(0);
      });
    });

    it('each project has non-empty description', () => {
      projects.forEach((project) => {
        expect(typeof project.description).toBe('string');
        expect(project.description.length).toBeGreaterThan(0);
      });
    });

    it('each project has tags array', () => {
      projects.forEach((project) => {
        expect(Array.isArray(project.tags)).toBe(true);
        expect(project.tags.length).toBeGreaterThan(0);
      });
    });

    it('each project has boolean featured flag', () => {
      projects.forEach((project) => {
        expect(typeof project.featured).toBe('boolean');
      });
    });
  });

  describe('specific projects', () => {
    it('contains E-Commerce Platform', () => {
      const ecommerce = projects.find((p) => p.title === 'E-Commerce Platform');
      expect(ecommerce).toBeDefined();
      expect(ecommerce?.id).toBe(1);
      expect(ecommerce?.featured).toBe(true);
    });

    it('contains Task Management App', () => {
      const taskApp = projects.find((p) => p.title === 'Task Management App');
      expect(taskApp).toBeDefined();
      expect(taskApp?.id).toBe(2);
    });

    it('contains Portfolio Website', () => {
      const portfolio = projects.find((p) => p.title === 'Portfolio Website');
      expect(portfolio).toBeDefined();
      expect(portfolio?.id).toBe(3);
    });

    it('contains Weather Dashboard', () => {
      const weather = projects.find((p) => p.title === 'Weather Dashboard');
      expect(weather).toBeDefined();
      expect(weather?.id).toBe(4);
    });

    it('contains Social Media App', () => {
      const social = projects.find((p) => p.title === 'Social Media App');
      expect(social).toBeDefined();
      expect(social?.id).toBe(5);
    });

    it('contains Blog Platform', () => {
      const blog = projects.find((p) => p.title === 'Blog Platform');
      expect(blog).toBeDefined();
      expect(blog?.id).toBe(6);
    });
  });

  describe('featured projects', () => {
    it('has at least 3 featured projects', () => {
      const featuredProjects = projects.filter((p) => p.featured);
      expect(featuredProjects.length).toBeGreaterThanOrEqual(3);
    });

    it('E-Commerce Platform is featured', () => {
      const ecommerce = projects.find((p) => p.title === 'E-Commerce Platform');
      expect(ecommerce?.featured).toBe(true);
    });

    it('Portfolio Website is featured', () => {
      const portfolio = projects.find((p) => p.title === 'Portfolio Website');
      expect(portfolio?.featured).toBe(true);
    });

    it('Weather Dashboard is featured', () => {
      const weather = projects.find((p) => p.title === 'Weather Dashboard');
      expect(weather?.featured).toBe(true);
    });
  });

  describe('optional fields', () => {
    it('some projects have images', () => {
      const projectsWithImages = projects.filter((p) => p.image);
      expect(projectsWithImages.length).toBeGreaterThan(0);
    });

    it('some projects have icons', () => {
      const projectsWithIcons = projects.filter((p) => p.icon);
      expect(projectsWithIcons.length).toBeGreaterThan(0);
    });

    it('some projects have links', () => {
      const projectsWithLinks = projects.filter((p) => p.link);
      expect(projectsWithLinks.length).toBeGreaterThan(0);
    });

    it('some projects have github links', () => {
      const projectsWithGithub = projects.filter((p) => p.github);
      expect(projectsWithGithub.length).toBeGreaterThan(0);
    });
  });
});
