import React, { useState } from 'react';

import {
  StyledContainer,
  StyledBurger,
  StyledNav,
  StyledNavLink,
} from './styled';

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledContainer>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <StyledNav open={open}>
        <StyledNavLink to="/" activeClassName="currentPage">
          Home
        </StyledNavLink>
        <StyledNavLink to="/projects/" activeClassName="currentPage">
          Projects
        </StyledNavLink>
        <StyledNavLink to="/blog/" activeClassName="currentPage">
          Blog
        </StyledNavLink>
        <StyledNavLink to="/contact/" activeClassName="currentPage">
          Contact
        </StyledNavLink>
      </StyledNav>
    </StyledContainer>
  );
};

export default MobileNav;
