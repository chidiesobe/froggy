import { siteSettings } from '../config/settings';

describe('siteSettings', () => {
  describe('colors', () => {
    it('has primary color defined', () => {
      expect(siteSettings.colors.primary).toBe('#00ff88');
    });

    it('has primaryDark color defined', () => {
      expect(siteSettings.colors.primaryDark).toBe('#00cc6a');
    });

    it('has background color defined', () => {
      expect(siteSettings.colors.background).toBe('#0a0a0a');
    });

    it('has backgroundSecondary color defined', () => {
      expect(siteSettings.colors.backgroundSecondary).toBe('#1a1a1a');
    });

    it('has text color defined', () => {
      expect(siteSettings.colors.text).toBe('#ffffff');
    });

    it('has textSecondary color defined', () => {
      expect(siteSettings.colors.textSecondary).toBe('#9ca3af');
    });
  });

  describe('siteInfo', () => {
    it('has name defined', () => {
      expect(siteSettings.siteInfo.name).toBe('Froggy Portfolio');
    });

    it('has title defined', () => {
      expect(siteSettings.siteInfo.title).toBe('Portfolio');
    });

    it('has description defined', () => {
      expect(siteSettings.siteInfo.description).toBeTruthy();
      expect(typeof siteSettings.siteInfo.description).toBe('string');
    });

    it('has logo defined', () => {
      expect(siteSettings.siteInfo.logo).toBe('Froggy');
    });

    it('has logoImage defined', () => {
      expect(siteSettings.siteInfo.logoImage).toBe('/logo.png');
    });
  });

  describe('pagination', () => {
    it('has projectsPerPage defined', () => {
      expect(siteSettings.pagination.projectsPerPage).toBe(9);
    });

    it('projectsPerPage is a positive number', () => {
      expect(siteSettings.pagination.projectsPerPage).toBeGreaterThan(0);
    });
  });

  describe('paths', () => {
    it('has projectsData path defined', () => {
      expect(siteSettings.paths.projectsData).toBe('app/data/projects.ts');
    });
  });

  describe('about', () => {
    it('has showCV defined', () => {
      expect(typeof siteSettings.about.showCV).toBe('boolean');
    });

    it('has cvUrl defined', () => {
      expect(typeof siteSettings.about.cvUrl).toBe('string');
    });

    it('has fullBio defined', () => {
      expect(siteSettings.about.fullBio).toBeTruthy();
      expect(typeof siteSettings.about.fullBio).toBe('string');
    });
  });

  describe('stats', () => {
    it('has experience defined', () => {
      expect(siteSettings.stats.experience).toBe('5+');
    });

    it('has projects defined', () => {
      expect(siteSettings.stats.projects).toBe('50+');
    });

    it('has clients defined', () => {
      expect(siteSettings.stats.clients).toBe('30+');
    });
  });

  describe('techStack', () => {
    it('is an array', () => {
      expect(Array.isArray(siteSettings.techStack)).toBe(true);
    });

    it('contains expected technologies', () => {
      expect(siteSettings.techStack).toContain('React');
      expect(siteSettings.techStack).toContain('Next.js');
      expect(siteSettings.techStack).toContain('TypeScript');
    });

    it('has 8 technologies', () => {
      expect(siteSettings.techStack).toHaveLength(8);
    });
  });

  describe('contact', () => {
    it('has email defined', () => {
      expect(siteSettings.contact.email).toBe('your.email@example.com');
    });

    it('has github URL defined', () => {
      expect(siteSettings.contact.github).toBe('https://github.com');
    });

    it('has linkedin URL defined', () => {
      expect(siteSettings.contact.linkedin).toBe('https://linkedin.com');
    });
  });

  describe('navigation', () => {
    it('is an array', () => {
      expect(Array.isArray(siteSettings.navigation)).toBe(true);
    });

    it('has 4 navigation items', () => {
      expect(siteSettings.navigation).toHaveLength(4);
    });

    it('contains Home link', () => {
      const homeLink = siteSettings.navigation.find((item) => item.name === 'Home');
      expect(homeLink).toBeDefined();
      expect(homeLink?.href).toBe('/#home');
    });

    it('contains About link', () => {
      const aboutLink = siteSettings.navigation.find((item) => item.name === 'About');
      expect(aboutLink).toBeDefined();
      expect(aboutLink?.href).toBe('/#about');
    });

    it('contains Projects link', () => {
      const projectsLink = siteSettings.navigation.find((item) => item.name === 'Projects');
      expect(projectsLink).toBeDefined();
      expect(projectsLink?.href).toBe('/#projects');
    });

    it('contains Contact link', () => {
      const contactLink = siteSettings.navigation.find((item) => item.name === 'Contact');
      expect(contactLink).toBeDefined();
      expect(contactLink?.href).toBe('/#contact');
    });
  });
});
