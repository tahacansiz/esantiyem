import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/what service do you need\?/i);
  expect(inputElement).toBeInTheDocument();
});
