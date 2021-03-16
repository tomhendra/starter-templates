/** @jsxImportSource theme-ui */
import { ModeToggle } from './components/ModeToggle';
import NextLink from 'next/link';
import { NavLink } from 'theme-ui';

export function Navbar() {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <NextLink href="/" passHref>
        <NavLink>tomhendra.dev</NavLink>
      </NextLink>
      <nav
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <NextLink href="/" passHref>
          <NavLink pr={3}>Home</NavLink>
        </NextLink>
        <NextLink href="/blog" passHref>
          <NavLink pr={3}>Blog</NavLink>
        </NextLink>
        <ModeToggle />
      </nav>
    </div>
  );
}
