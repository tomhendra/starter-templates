import { Children } from 'types';
import { withMediaQueries } from 'utils';

type StyledSpanProps = {
  children: Children;
};

export const StyledSpan = ({ children }: StyledSpanProps) => (
  <span
    css={theme =>
      withMediaQueries(theme)({
        color: theme.colors.n400,
        fontFamily: theme.fontStack.heading,
        fontSize: [theme.text.bravo.fontSize, theme.text.charlie.fontSize],
        fontWeight: theme.fontWeight.regular,
        letterSpacing: 0.75,
        textTransform: 'uppercase',
      })
    }
  >
    {children}
  </span>
);

type StyledContainerProps = {
  children: Children;
};

export const StyledContainer = ({ children }: StyledContainerProps) => (
  <div
    css={{
      alignItems: 'center',
      display: 'flex',
    }}
  >
    {children}
  </div>
);
