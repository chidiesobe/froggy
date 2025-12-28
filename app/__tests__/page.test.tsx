import { render, screen } from '@testing-library/react';
import Home from '../page';

jest.mock('../components/Navigation', () => {
  return function Navigation() {
    return <div data-testid="navigation">Navigation</div>;
  };
});

jest.mock('../components/Hero', () => {
  return function Hero() {
    return <div data-testid="hero">Hero</div>;
  };
});

jest.mock('../components/About', () => {
  return function About() {
    return <div data-testid="about">About</div>;
  };
});

jest.mock('../components/Portfolio', () => {
  return function Portfolio() {
    return <div data-testid="portfolio">Portfolio</div>;
  };
});

jest.mock('../components/Contact', () => {
  return function Contact() {
    return <div data-testid="contact">Contact</div>;
  };
});

jest.mock('../components/Footer', () => {
  return function Footer() {
    return <div data-testid="footer">Footer</div>;
  };
});

describe('Home Page', () => {
  it('renders all main components', () => {
    render(<Home />);
    
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('portfolio')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('has correct root container classes', () => {
    const { container } = render(<Home />);
    const rootDiv = container.firstChild;
    
    expect(rootDiv).toHaveClass('min-h-screen');
    expect(rootDiv).toHaveClass('bg-black');
    expect(rootDiv).toHaveClass('text-white');
  });
});
