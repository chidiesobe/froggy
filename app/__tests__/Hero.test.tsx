import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import { siteSettings } from '../config/settings';

describe('Hero Component', () => {

  it('displays site name', () => {
    render(<Hero />);
    expect(screen.getByText(siteSettings.siteInfo.name)).toBeInTheDocument();
  });

  it('displays site title', () => {
    render(<Hero />);
    expect(screen.getByText(siteSettings.siteInfo.title)).toBeInTheDocument();
  });

  it('displays site description', () => {
    render(<Hero />);
    expect(screen.getByText(siteSettings.siteInfo.description)).toBeInTheDocument();
  });

  it('displays greeting text', () => {
    render(<Hero />);
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
  });

  it('renders View Projects link with correct href', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /View Projects/i });
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('renders Contact Me link with correct href', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /Contact Me/i });
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('displays code emoji', () => {
    render(<Hero />);
    expect(screen.getByText('👨‍💻')).toBeInTheDocument();
  });

  it('displays tagline', () => {
    render(<Hero />);
    expect(screen.getByText('code & create')).toBeInTheDocument();
  });
});
