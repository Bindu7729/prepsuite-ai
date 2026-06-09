import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Features from '../Features';

describe('Features Page View', () => {
  it('renders features header and platform capabilities', () => {
    render(
      <MemoryRouter>
        <Features />
      </MemoryRouter>
    );

    expect(screen.getByText('Platform Capabilities')).toBeDefined();
    expect(screen.getByText('Monaco Code Sandbox Workspace')).toBeDefined();
  });
});
