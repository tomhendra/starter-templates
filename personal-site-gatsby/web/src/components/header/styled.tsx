import { withMediaQueries, shadowStandardCharlie } from 'utils';
import { Children } from 'types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: [
          '100vw',
          '100vw',
          theme.grid.charlie.maxWidth,
          theme.grid.delta.maxWidth,
          theme.grid.echo.maxWidth,
        ],

        width: '100%',
      })
    }
  >
    {children}
  </div>
);

export const StyledHeader = ({ children }: Props) => (
  <header
    css={theme =>
      withMediaQueries(theme)({
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        display: 'flex',
        height: ['5rem', '5rem', '6rem', '6rem', '6rem'],
        padding: [
          `0 ${theme.grid.alpha.gutter}`,
          `0 ${theme.grid.bravo.gutter}`,
          `0 ${theme.grid.charlie.gutter}`,
          `0 ${theme.grid.delta.gutter}`,
          `0 ${theme.grid.echo.gutter}`,
        ],
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: theme.zIndex.header,
        ...shadowStandardCharlie('shadowNeutral', theme),
      })
    }
  >
    {children}
  </header>
);

export const StyledLink = styled(Link)({
  fontSize: 0,
  lineHeight: 0,
});
