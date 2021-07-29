import { Logo } from 'components';

import { StyledHeader, StyledContainer, StyledLink } from './styled';

import { Navbar, MobileNav } from './components';

export const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <StyledLink to="/">
        <Logo size="foxtrot" color="neutral" />
      </StyledLink>
      <MobileNav />
      <Navbar />
    </StyledContainer>
  </StyledHeader>
);
