import { Children } from 'types';
import { withMediaQueries } from 'utils';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type StyledContainerProps = {
  children: Children;
};

export const StyledContainer = ({ children }: StyledContainerProps) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        display: ['flex', 'flex', 'none', 'none', 'none'],
        alignItems: 'center',
        position: 'relative',
      })
    }
  >
    {children}
  </div>
);

interface StyledBurgerProps {
  open: boolean;
  onClick: () => void;
  children: Children;
}

export const StyledBurger = (props: StyledBurgerProps) => {
  const { open, onClick, children } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Burger icon button to open navigation menu"
      css={theme => ({
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '2.5rem',
        width: '2.5rem',
        padding: '0',
        zIndex: theme.zIndex.burger,

        '&:focus': {
          outline: 'none',
        },

        '& > span': {
          width: '2.5rem',
          height: '0.25rem',
          background: theme.colors.n400,
          borderRadius: theme.borderRadius.delta,
          transition: `all ${theme.transitions.slow}`,
          position: 'relative',
          transformOrigin: '1px',

          '&:first-of-type': {
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
          },

          '&:nth-of-type(2)': {
            opacity: open ? 0 : 1,
          },

          '&:nth-of-type(3)': {
            transform: open ? 'rotate(-45deg)' : 'rotate(0)',
          },
        },
      })}
    >
      {children}
    </button>
  );
};

export const StyledNavLink = styled(Link)(({ theme }) => ({
  color: theme.colors.n400,
  fontFamily: theme.fontStack.heading,
  fontSize: theme.headings.delta.fontSize,
  lineHeight: 0.85,
  textAlign: 'left',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: `all ${theme.transitions.default}`,
  position: 'relative',

  '&.currentPage,:hover': {
    color: theme.colors.n000,
  },

  '&.currentPage': {
    '&::before': {
      backgroundColor: theme.colors.p400,
      borderRadius: theme.borderRadius.alpha,
      content: '""',
      position: 'absolute',
      left: '-1.5rem',
      height: '100%',
      width: '0.5rem',
    },
  },
}));

interface StyledNavProps {
  open: boolean;
  children: Children;
}

export const StyledNav = ({ open, children }: StyledNavProps) => (
  <nav
    css={theme => ({
      display: 'flex',
      flexDirection: 'column',
      background: theme.colors.bodyBg,
      height: '100vh',
      paddingLeft: theme.spacings.india,
      paddingTop: theme.spacings.kilo,
      position: 'fixed',
      left: 0,
      top: 0,
      transform: !open ? 'translateX(100%)' : 'translateX(0)',
      transition: `transform ${theme.transitions.slow}`,
      width: '100vw',
      zIndex: theme.zIndex.drawer,

      '& > :not(:last-of-type)': {
        marginBottom: theme.spacings.foxtrot,
      },
    })}
  >
    {children}
  </nav>
);
