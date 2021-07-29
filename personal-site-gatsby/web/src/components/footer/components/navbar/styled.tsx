import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { withMediaQueries } from 'utils';
import { Children } from 'types';

export const StyledNavLink = styled(Link)(({ theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n400,
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderWidth: theme.borderWidth.charlie,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: theme.borderRadius.bravo,
    fontSize: [
      theme.text.bravo.fontSize,
      theme.text.bravo.fontSize,
      theme.text.charlie.fontSize,
    ],
    padding: [
      `${theme.spacings.bravo} 0`,
      `${theme.spacings.bravo} 0`,
      `${theme.spacings.alpha} ${theme.spacings.charlie}`,
    ],

    '&:hover': {
      borderColor: ['transparent', 'transparent', theme.colors.n500],
    },
  }),
);

type StyledNavProps = {
  children: Children;
};

export const StyledNav = ({ children }: StyledNavProps) => (
  <nav
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: ['space-between', 'space-between', 'flex-end'],

        '& > :not(:last-of-type)': {
          marginRight: [
            0,
            0,
            theme.spacings.charlie,
            theme.spacings.charlie,
            theme.spacings.delta,
          ],
        },
      })
    }
  >
    {children}
  </nav>
);
