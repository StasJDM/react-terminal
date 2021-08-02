import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi guys label', () => {
  render(<App />);
  const lableElement = screen.getByText(/Hi guys/i);
  expect(lableElement).toBeInTheDocument();
});
