import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsPage from '../projects/page';
import { projects } from '../data/projects';
import { siteSettings } from '../config/settings';

jest.mock('../components/Navigation', () => {
  return function Navigation() {
    return <div data-testid="navigation">Navigation</div>;
  };
});

describe('ProjectsPage', () => {
  it('renders All Projects heading', () => {
    render(<ProjectsPage />);
    expect(screen.getByRole('heading', { name: /All Projects/i })).toBeInTheDocument();
  });

  it('renders Navigation component', () => {
    render(<ProjectsPage />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('displays projects on first page', () => {
    render(<ProjectsPage />);
    const projectsPerPage = siteSettings.pagination.projectsPerPage;
    const firstPageProjects = projects.slice(0, projectsPerPage);
    
    firstPageProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });



  it('renders View Project links', () => {
    render(<ProjectsPage />);
    const viewLinks = screen.getAllByText(/View Project →/i);
    expect(viewLinks.length).toBeGreaterThan(0);
  });

  it('renders GitHub links when available', () => {
    render(<ProjectsPage />);
    const projectsPerPage = siteSettings.pagination.projectsPerPage;
    const firstPageProjects = projects.slice(0, projectsPerPage);
    const projectsWithGithub = firstPageProjects.filter((p) => p.github);
    
    if (projectsWithGithub.length > 0) {
      const githubLinks = screen.getAllByText(/GitHub →/i);
      expect(githubLinks.length).toBe(projectsWithGithub.length);
    }
  });

  it('renders pagination when there are multiple pages', () => {
    render(<ProjectsPage />);
    const totalPages = Math.ceil(projects.length / siteSettings.pagination.projectsPerPage);
    
    if (totalPages > 1) {
      expect(screen.getByRole('button', { name: /Previous/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
    }
  });

  it('disables Previous button on first page', () => {
    render(<ProjectsPage />);
    const totalPages = Math.ceil(projects.length / siteSettings.pagination.projectsPerPage);
    
    if (totalPages > 1) {
      const prevButton = screen.getByRole('button', { name: /Previous/i });
      expect(prevButton).toBeDisabled();
    }
  });

  it('navigates to next page when Next button is clicked', () => {
    render(<ProjectsPage />);
    const totalPages = Math.ceil(projects.length / siteSettings.pagination.projectsPerPage);
    
    if (totalPages > 1) {
      const nextButton = screen.getByRole('button', { name: /Next/i });
      fireEvent.click(nextButton);
      
      const prevButton = screen.getByRole('button', { name: /Previous/i });
      expect(prevButton).not.toBeDisabled();
    }
  });

  it('renders page number buttons', () => {
    render(<ProjectsPage />);
    const totalPages = Math.ceil(projects.length / siteSettings.pagination.projectsPerPage);
    
    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        expect(screen.getByRole('button', { name: String(i) })).toBeInTheDocument();
      }
    }
  });

  it('changes page when page number button is clicked', () => {
    render(<ProjectsPage />);
    const totalPages = Math.ceil(projects.length / siteSettings.pagination.projectsPerPage);
    
    if (totalPages > 1) {
      const page2Button = screen.getByRole('button', { name: '2' });
      fireEvent.click(page2Button);
      
      const projectsPerPage = siteSettings.pagination.projectsPerPage;
      const secondPageProjects = projects.slice(projectsPerPage, projectsPerPage * 2);
      
      secondPageProjects.forEach((project) => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
    }
  });
});
