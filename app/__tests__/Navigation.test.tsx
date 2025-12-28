import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';
import { siteSettings } from '../config/settings';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Navigation Component', () => {
  it('renders navigation element', () => {
    render(<Navigation />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays site logo text', () => {
    render(<Navigation />);
    expect(screen.getByText(siteSettings.siteInfo.logo)).toBeInTheDocument();
  });

  it('renders home link with correct href', () => {
    render(<Navigation />);
    const homeLink = screen.getByRole('link', { name: new RegExp(siteSettings.siteInfo.logo, 'i') });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders all navigation links', () => {
    render(<Navigation />);
    siteSettings.navigation.forEach((navItem) => {
      const link = screen.getByRole('link', { name: navItem.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', navItem.href);
    });
  });

  it('has correct number of navigation links', () => {
    render(<Navigation />);
    const navLinks = siteSettings.navigation.map((item) =>
      screen.getByRole('link', { name: item.name })
    );
    expect(navLinks).toHaveLength(siteSettings.navigation.length);
  });
});
