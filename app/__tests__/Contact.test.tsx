import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import { siteSettings } from '../config/settings';

describe('Contact Component', () => {


  it('displays Get In Touch heading', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /Get In Touch/i })).toBeInTheDocument();
  });

  it('displays contact description', () => {
    render(<Contact />);
    expect(screen.getByText(/Have a project in mind/i)).toBeInTheDocument();
  });

  it('renders email link with correct href', () => {
    render(<Contact />);
    const emailLinks = screen.getAllByText(siteSettings.contact.email);
    expect(emailLinks[0]).toBeInTheDocument();
    expect(emailLinks[0].closest('a')).toHaveAttribute('href', `mailto:${siteSettings.contact.email}`);
  });

  it('renders GitHub link with correct href', () => {
    render(<Contact />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', siteSettings.contact.github);
  });

  it('renders LinkedIn link with correct href', () => {
    render(<Contact />);
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', siteSettings.contact.linkedin);
  });

  it('renders Send Message button with mailto link', () => {
    render(<Contact />);
    const sendButton = screen.getByRole('link', { name: /Send Message/i });
    expect(sendButton).toHaveAttribute('href', `mailto:${siteSettings.contact.email}`);
  });

  it('displays contact icons', () => {
    render(<Contact />);
    expect(screen.getByText('📧')).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
    expect(screen.getByText('💼')).toBeInTheDocument();
  });
});
