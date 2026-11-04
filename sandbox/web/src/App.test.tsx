import { render, screen } from '@testing-library/react';
import App from './App';

it('renders', () => {
  render(<App />);
  console.log('debug check'); // logs show in the test output
  screen.debug();             // prints the rendered HTML
  expect(screen.getByRole('heading')).toHaveTextContent('Sandbox');
});