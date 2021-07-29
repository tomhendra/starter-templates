import { Navbar } from '@components/navbar';
import { render, screen } from '@testing-library/react';

test('renders as expected', () => {
  render(<Navbar />);
  const link = screen.getByText(/tomhendra.dev/i);
  expect(link).toMatchInlineSnapshot(`
    <a
      href="/"
    >
      tomhendra.dev
    </a>
  `);
});
