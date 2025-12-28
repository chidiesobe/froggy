import { render, screen } from '@testing-library/react';
import About from '../components/About';
import { siteSettings } from '../config/settings';

describe('About Component', () => {
  it('displays About Me heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  });

  it('displays developer description paragraphs', () => {
    render(<About />);
    expect(screen.getByText(/I'm a passionate developer/i)).toBeInTheDocument();
    expect(screen.getByText(/When I'm not coding/i)).toBeInTheDocument();
  });

  it('renders Read More link with correct href', () => {
    render(<About />);
    const link = screen.getByRole('link', { name: /Read More About Me/i });
    expect(link).toHaveAttribute('href', '/about');
  });

  it('displays years experience stat', () => {
    render(<About />);
    expect(screen.getByText(siteSettings.stats.experience)).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
  });

  it('displays projects done stat', () => {
    render(<About />);
    expect(screen.getByText(siteSettings.stats.projects)).toBeInTheDocument();
    expect(screen.getByText('Projects Done')).toBeInTheDocument();
  });

  it('displays happy clients stat', () => {
    render(<About />);
    expect(screen.getByText(siteSettings.stats.clients)).toBeInTheDocument();
    expect(screen.getByText('Happy Clients')).toBeInTheDocument();
  });

  it('displays Tech Stack heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: 'Tech Stack' })).toBeInTheDocument();
  });

  it('renders all tech stack items', () => {
    render(<About />);
    siteSettings.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders correct number of tech stack items', () => {
    render(<About />);
    const techItems = siteSettings.techStack.map((tech) => screen.getByText(tech));
    expect(techItems).toHaveLength(siteSettings.techStack.length);
  });
});
