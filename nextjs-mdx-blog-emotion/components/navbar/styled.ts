import styled from '@emotion/styled';
import theme from 'theme';

export const StyledContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledNav = styled.nav({
  display: 'flex',
  alignItems: 'center',
  '&& > * + *': {
    marginLeft: theme.space[2],
  },
});
