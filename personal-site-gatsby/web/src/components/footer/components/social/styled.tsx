import { withMediaQueries } from 'utils';
import { Children } from 'types';

type StyledAnchorProps = {
  href: string;
  children: Children;
};

export const StyledAnchor = ({ href, children }: StyledAnchorProps) => (
  <a
    href={href}
    target="blank"
    rel="noopener"
    css={theme =>
      withMediaQueries(theme)({
        position: 'relative',
        textDecoration: 'none',

        '&::after': {
          borderWidth: theme.borderWidth.charlie,
          borderStyle: 'solid',
          borderColor: theme.colors.n500,
          borderRadius: theme.borderRadius.bravo,
          content: '""',
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: theme.zIndex.behind,
          transformOrigin: 'top right',
          transition: `transform ${theme.transitions.default}`,
        },

        '&:hover, &:focus': {
          '&::after': {
            transition: `transform ${theme.transitions.springDefault}`,
            transform: 'translate(-6px, 6px)',
          },
        },
      })
    }
  >
    {children}
  </a>
);

type StyledContainerProps = {
  children: Children;
};

export const StyledContainer = ({ children }: StyledContainerProps) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        justifyContent: [
          'flex-start',
          'flex-start',
          'flex-end',
          'flex-end',
          'flex-start',
        ],

        '& > :not(:last-of-type)': {
          marginRight: [
            theme.spacings.bravo,
            theme.spacings.bravo,
            theme.spacings.echo,
          ],
        },
      })
    }
  >
    {children}
  </div>
);

type StyledSpanProps = {
  children: Children;
};

export const StyledSpan = ({ children }: StyledSpanProps) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.n900,
        borderWidth: theme.borderWidth.charlie,
        borderStyle: 'solid',
        borderColor: theme.colors.n500,
        borderRadius: theme.borderRadius.bravo,
        color: theme.colors.n400,
        fontSize: [
          theme.text.bravo.fontSize,
          theme.text.bravo.fontSize,
          theme.text.charlie.fontSize,
        ],
        padding: [
          `${theme.spacings.alpha} ${theme.spacings.bravo}`,
          `${theme.spacings.alpha} ${theme.spacings.bravo}`,
          `${theme.spacings.alpha} ${theme.spacings.charlie}`,
        ],
        textTransform: 'uppercase',
        height: '100%',
        width: '100%',
      })
    }
  >
    {children}
  </div>
);
