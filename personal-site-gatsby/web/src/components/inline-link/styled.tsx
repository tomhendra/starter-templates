import { Children } from 'types';

type Props = {
  children: Children;
};

export const StyledSpan = ({ children }: Props) => (
  <span
    css={theme => ({
      color: 'inherit',
      display: 'inline-block',
      position: 'relative',
      textDecoration: 'none',

      '&::before': {
        backgroundColor: theme.colors.l800,
        borderRadius: theme.borderRadius.alpha,
        bottom: -2,
        content: '""',
        height: '25%',
        left: 0,
        position: 'absolute',
        transition: `transform ${theme.transitions.default}`,
        width: '100%',
        willChange: 'transform',
        zIndex: theme.zIndex.behind,
      },

      '&:hover, &:focus': {
        '&::before': {
          transform: 'translateY(50%)',
          transition: `transform ${theme.transitions.springDefault}`,
        },
      },

      '&:active': {
        color: 'inherit',
      },

      '&:visited': {
        color: 'inherit',
      },
    })}
  >
    {children}
  </span>
);
