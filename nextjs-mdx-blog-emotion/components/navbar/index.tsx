// import { ModeToggle } from './components/ModeToggle';
import NextLink from 'next/link';

export function Navbar() {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <NextLink href="/" passHref>
        <a>tomhendra.dev</a>
      </NextLink>
      <nav
        css={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <NextLink href="/" passHref>
          <a>Home</a>
        </NextLink>
        <NextLink href="/blog" passHref>
          <a>Blog</a>
        </NextLink>
        {/* <ModeToggle /> */}
      </nav>
    </div>
  );
}
