import { ModeToggle } from './components/ModeToggle';
import NextLink from 'next/link';
import { StyledContainer, StyledNav } from './styled';

export function Navbar() {
  return (
    <StyledContainer>
      <NextLink href="/" passHref>
        <a>tomhendra.dev</a>
      </NextLink>
      <StyledNav>
        <NextLink href="/" passHref>
          <a>Home</a>
        </NextLink>
        <NextLink href="/blog" passHref>
          <a>Blog</a>
        </NextLink>
        <ModeToggle />
      </StyledNav>
    </StyledContainer>
  );
}
