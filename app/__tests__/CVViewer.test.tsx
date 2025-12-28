import { render, screen, fireEvent } from '@testing-library/react';
import CVViewer from '../components/CVViewer';
import { siteSettings } from '../config/settings';

describe('CVViewer Component', () => {
  it('renders CV button when showCV is true', () => {
    render(<CVViewer />);
    if (siteSettings.about.showCV && siteSettings.about.cvUrl) {
      expect(screen.getByRole('button', { name: /My Curriculum Vitae/i })).toBeInTheDocument();
    }
  });

  it('returns null when showCV is false', () => {
    const originalShowCV = siteSettings.about.showCV;
    siteSettings.about.showCV = false;
    
    const { container } = render(<CVViewer />);
    expect(container.firstChild).toBeNull();
    
    siteSettings.about.showCV = originalShowCV;
  });

  it('returns null when cvUrl is empty', () => {
    const originalCvUrl = siteSettings.about.cvUrl;
    const originalShowCV = siteSettings.about.showCV;
    siteSettings.about.cvUrl = '';
    siteSettings.about.showCV = true;
    
    const { container } = render(<CVViewer />);
    expect(container.firstChild).toBeNull();
    
    siteSettings.about.cvUrl = originalCvUrl;
    siteSettings.about.showCV = originalShowCV;
  });

  it('closes modal when Close button is clicked', () => {
    render(<CVViewer />);
    if (siteSettings.about.showCV && siteSettings.about.cvUrl) {
      const openButton = screen.getByRole('button', { name: /My Curriculum Vitae/i });
      fireEvent.click(openButton);
      
      const closeButton = screen.getByRole('button', { name: /Close/i });
      fireEvent.click(closeButton);
      
      expect(screen.queryByText('CV Preview')).not.toBeInTheDocument();
    }
  });

  it('renders iframe with correct src in modal', () => {
    render(<CVViewer />);
    if (siteSettings.about.showCV && siteSettings.about.cvUrl) {
      const openButton = screen.getByRole('button', { name: /My Curriculum Vitae/i });
      fireEvent.click(openButton);
      
      const iframe = screen.getByTitle('CV Preview');
      expect(iframe).toHaveAttribute('src', `${siteSettings.about.cvUrl}#view=FitH`);
    }
  });

  it('renders download link with correct href in modal', () => {
    render(<CVViewer />);
    if (siteSettings.about.showCV && siteSettings.about.cvUrl) {
      const openButton = screen.getByRole('button', { name: /My Curriculum Vitae/i });
      fireEvent.click(openButton);
      
      const downloadLink = screen.getByRole('link', { name: /Download/i });
      expect(downloadLink).toHaveAttribute('href', siteSettings.about.cvUrl);
      expect(downloadLink).toHaveAttribute('download');
    }
  });
});
