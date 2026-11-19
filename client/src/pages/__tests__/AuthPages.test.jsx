import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Login from '../Login';
import Register from '../Register';

describe('Auth Pages (Login & Register)', () => {
  describe('Login Component', () => {
    it('renders login form with email and password inputs', () => {
      const { container } = render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument();
      expect(screen.getByPlaceholderText('name@example.com')).toBeInTheDocument();
      expect(container.querySelector('input[name="password"]')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('updates input values when typing', () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      const emailInput = screen.getByPlaceholderText('name@example.com');
      fireEvent.change(emailInput, { target: { name: 'email', value: 'candidate@test.com' } });
      expect(emailInput.value).toBe('candidate@test.com');
    });

    it('contains link redirecting to Register', () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      const regLink = screen.getByRole('link', { name: /register/i });
      expect(regLink).toHaveAttribute('href', '/register');
    });
  });

  describe('Register Component', () => {
    it('renders registration form with username, email, and password inputs', () => {
      const { container } = render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      );

      expect(screen.getByRole('heading', { name: /create your account/i })).toBeInTheDocument();
      expect(screen.getByPlaceholderText('e.g., Bindu')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('name@example.com')).toBeInTheDocument();
      expect(container.querySelector('input[name="password"]')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /register account/i })).toBeInTheDocument();
    });

    it('updates input values when typing in registration form', () => {
      render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      );

      const userInput = screen.getByPlaceholderText('e.g., Bindu');
      fireEvent.change(userInput, { target: { name: 'username', value: 'Bindu' } });
      expect(userInput.value).toBe('Bindu');
    });

    it('contains link redirecting to Login', () => {
      render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      );

      const loginLink = screen.getByRole('link', { name: /sign in/i });
      expect(loginLink).toHaveAttribute('href', '/login');
    });
  });
});