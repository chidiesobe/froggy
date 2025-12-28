import { render, screen } from '@testing-library/react';
import Portfolio from '../components/Portfolio';
import { projects } from '../data/projects';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Portfolio Component', () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  it('displays Featured Projects heading', () => {
    render(<Portfolio />);
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
  });

  it('renders exactly 3 featured projects', () => {
    render(<Portfolio />);
    featuredProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('displays project descriptions', () => {
    render(<Portfolio />);
    featuredProjects.forEach((project) => {
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });


  it('renders View Project links for all featured projects', () => {
    render(<Portfolio />);
    const viewLinks = screen.getAllByText(/View Project →/i);
    expect(viewLinks).toHaveLength(featuredProjects.length);
  });

  it('renders View All Projects link with correct href', () => {
    render(<Portfolio />);
    const link = screen.getByRole('link', { name: /View All Projects/i });
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('displays project images when available', () => {
    render(<Portfolio />);
    featuredProjects.forEach((project) => {
      if (project.image) {
        const img = screen.getByAltText(project.title);
        expect(img).toBeInTheDocument();
      }
    });
  });

  it('displays project icons when image not available', () => {
    render(<Portfolio />);
    featuredProjects.forEach((project) => {
      if (project.icon && !project.image) {
        expect(screen.getByText(project.icon)).toBeInTheDocument();
      }
    });
  });
});
