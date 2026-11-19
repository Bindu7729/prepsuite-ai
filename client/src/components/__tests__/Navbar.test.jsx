import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders brand heading and links to home', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const brandHeading = screen.getByText('InterviewPrep AI');
    expect(brandHeading).toBeInTheDocument();
    expect(brandHeading.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders navigation links for Login and Register', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toHaveAttribute('href', '/login');

    const registerLink = screen.getByRole('link', { name: /register/i });
    expect(registerLink).toHaveAttribute('href', '/register');
  });

  it('renders marketing section items', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
