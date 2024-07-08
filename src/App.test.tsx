import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const firstItemElement = screen.getByText('Тестовое задание');
  expect(firstItemElement).toBeInTheDocument();
});
