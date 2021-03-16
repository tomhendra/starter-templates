import { Navbar } from '@components/navbar';
import { render, screen } from '@test/test-utils';

test('renders with the default styles for the default colorMode', () => {
  render(<Navbar />, {
    colorMode: 'default',
  });
  const link = screen.getByText(/tomhendra.dev/i);
  expect(link).toMatchInlineSnapshot(`
    .emotion-0 {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      display: inline-block;
    }

    .emotion-0:hover,
    .emotion-0:focus,
    .emotion-0.active {
      color: var(--theme-ui-colors-primary, #b83280);
    }

    <a
      class="emotion-0"
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
    .emotion-0 {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      display: inline-block;
    }

    .emotion-0:hover,
    .emotion-0:focus,
    .emotion-0.active {
      color: var(--theme-ui-colors-primary, #b83280);
    }

    <a
      class="emotion-0"
      href="/"
    >
      tomhendra.dev
    </a>
  `);
});
