import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders application branding and attribution links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText('PrepSuite AI')).toBeDefined();
    expect(screen.getByText(/Smart Placement & Interview Preparation Platform/i)).toBeDefined();
    expect(screen.getByText('Bindu')).toBeDefined();
  });

  it('renders navigation links to core platform routes', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Home' })).toBeDefined();
    expect(screen.getByRole('link', { name: 'Questions' })).toBeDefined();
    expect(screen.getByRole('link', { name: 'About' })).toBeDefined();
  });
});
