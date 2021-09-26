import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi guys label', () => {
  window.HTMLElement.prototype.scrollIntoView = function() {};
  render(<App />);
  const lableElement = screen.getByText('Hi guys');
  expect(lableElement).toBeInTheDocument();
});
