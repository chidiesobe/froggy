import { render, screen } from '@testing-library/react';
import AboutPage from '../about/page';
import { siteSettings } from '../config/settings';

jest.mock('../components/Navigation', () => {
  return function Navigation() {
    return <div data-testid="navigation">Navigation</div>;
  };
});

jest.mock('../components/Footer', () => {
  return function Footer() {
    return <div data-testid="footer">Footer</div>;
  };
});

jest.mock('../components/CVViewer', () => {
  return function CVViewer() {
    return <div data-testid="cv-viewer">CVViewer</div>;
  };
});

describe('AboutPage', () => {
  it('renders About Me heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  });

  it('displays full bio', () => {
    render(<AboutPage />);
    expect(screen.getByText(new RegExp(siteSettings.about.fullBio.trim().substring(0, 50)))).toBeInTheDocument();
  });

  it('displays all stats', () => {
    render(<AboutPage />);
    expect(screen.getByText(siteSettings.stats.experience)).toBeInTheDocument();
    expect(screen.getByText(siteSettings.stats.projects)).toBeInTheDocument();
    expect(screen.getByText(siteSettings.stats.clients)).toBeInTheDocument();
  });

  it('displays years experience label', () => {
    render(<AboutPage />);
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
  });

  it('displays projects done label', () => {
    render(<AboutPage />);
    expect(screen.getByText('Projects Done')).toBeInTheDocument();
  });

  it('displays happy clients label', () => {
    render(<AboutPage />);
    expect(screen.getByText('Happy Clients')).toBeInTheDocument();
  });

  it('displays Tech Stack heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'Tech Stack' })).toBeInTheDocument();
  });

  it('renders all tech stack items', () => {
    render(<AboutPage />);
    siteSettings.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders Navigation component', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders CVViewer component', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('cv-viewer')).toBeInTheDocument();
  });
});
