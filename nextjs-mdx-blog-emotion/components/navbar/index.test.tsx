import { Navbar } from '@components/navbar';
import { render, screen } from '@test/test-utils';

test('renders with the default styles for the default colorMode', () => {
  render(<Navbar />, {
    colorMode: 'default',
  });
  const link = screen.getByText(/tomhendra.dev/i);
  expect(link).toMatchInlineSnapshot(`
    <a
      href="/"
    >
      tomhendra.dev
    </a>
  `);
});

test('renders with the dark styles for the dark colorMode', () => {
  render(<Navbar />, {
    colorMode: 'dark',
  });
  const link = screen.getByText(/tomhendra.dev/i);
  expect(link).toMatchInlineSnapshot(`
    <a
      href="/"
    >
      tomhendra.dev
    </a>
  `);
});
