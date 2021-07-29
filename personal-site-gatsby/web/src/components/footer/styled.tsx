import { Children } from 'types';
import { withMediaQueries } from 'utils';

type StyledContainerProps = {
  children: Children;
};

export const StyledContainer = ({ children }: StyledContainerProps) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: [
          '100vw',
          '100vw',
          theme.grid.charlie.maxWidth,
          theme.grid.delta.maxWidth,
          theme.grid.echo.maxWidth,
        ],
      })
    }
  >
    {children}
  </div>
);

export const StyledDivider = () => (
  <div
    css={theme => ({
      backgroundColor: theme.colors.n500,
      height: theme.borderWidth.delta,
    })}
  />
);

type StyledFooterProps = {
  children: Children;
};

export const StyledFooter = ({ children }: StyledFooterProps) => (
  <footer
    css={theme =>
      withMediaQueries(theme)({
        color: theme.colors.n400,
        paddingTop: [
          theme.spacings.hotel,
          theme.spacings.hotel,
          theme.spacings.india,
          theme.spacings.india,
          theme.spacings.juliett,
        ],
        paddingRight: [
          theme.grid.alpha.gutter,
          theme.grid.bravo.gutter,
          theme.grid.charlie.gutter,
          theme.grid.delta.gutter,
          theme.grid.echo.gutter,
        ],
        paddingBottom: [
          theme.spacings.golf,
          theme.spacings.golf,
          theme.spacings.hotel,
          theme.spacings.hotel,
          theme.spacings.hotel,
        ],
        paddingLeft: [
          theme.grid.alpha.gutter,
          theme.grid.bravo.gutter,
          theme.grid.charlie.gutter,
          theme.grid.delta.gutter,
          theme.grid.echo.gutter,
        ],
        width: '100vw',
        zIndex: theme.zIndex.footer,
      })
    }
  >
    {children}
  </footer>
);
