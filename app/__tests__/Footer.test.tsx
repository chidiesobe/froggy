import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('renders footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays copyright year', () => {
    render(<Footer />);
    expect(screen.getByText(/2025/i)).toBeInTheDocument();
  });

  it('renders Froggy link with correct href and target', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Powered by Froggy/i });
    expect(link).toHaveAttribute('href', 'https://github.com/chidiesobe/froggy');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('displays copyright symbol', () => {
    render(<Footer />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });
});
