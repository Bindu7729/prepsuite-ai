import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import About from '../About';

describe('About Page Component', () => {
  it('renders mission portfolio badge and page heading', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.getByText('MISSION PORTFOLIO')).toBeInTheDocument();
    expect(screen.getByText('The PrepSuite AI Vision.')).toBeInTheDocument();
  });

  it('renders navigation links to Home, Login and Register', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/BACK TO HOME/i);
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');

    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toHaveAttribute('href', '/login');

    const getStartedLink = screen.getByRole('link', { name: /get started/i });
    expect(getStartedLink).toHaveAttribute('href', '/register');
  });

  it('renders mission statement content paragraphs', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/PrepSuite AI/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Traditional placement tools/i)).toBeInTheDocument();
  });
});

