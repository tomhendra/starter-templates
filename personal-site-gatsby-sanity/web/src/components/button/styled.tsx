import { Variants, ButtonSizes, Children } from 'types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type StyledButtonProps = {
  variant: Variants;
  size: ButtonSizes;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: Children;
};

export const StyledButton = (props: StyledButtonProps) => {
  const { size, variant, type, disabled, onClick, children } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      aria-label="Button"
      disabled={disabled}
      onClick={onClick}
      css={theme => {
        const sizeVariants = {
          alpha: '4.8rem',
          bravo: '6rem',
          charlie: '7.2rem',
        };
        const colorVariants = {
          primary: theme.colors.n300,
          secondary: theme.colors.n300,
          tertiary: theme.colors.n500,
        };

        return {
          height: sizeVariants[size],
          border: 0,
          cursor: 'pointer',
          position: 'relative',
          textDecoration: 'none',

          '&::after': {
            borderColor: colorVariants[variant],
            borderRadius: theme.borderRadius.bravo,
            borderStyle: 'solid',
            borderWidth: theme.borderWidth.charlie,
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            transformOrigin: 'top right',
            transition: `transform ${theme.transitions.default}`,
            zIndex: theme.zIndex.behind,
          },

          '&:hover, &:focus': {
            '&::after': {
              transition: `transform ${theme.transitions.springDefault}`,
              transform: 'translate(-7px, 7px)',
            },
          },

          '&:active': {
            '&::after': {
              transition: `transform ${theme.transitions.fast}`,
              transform: 'translate(0px, 0px)',
            },
          },

          '&:disabled': {
            opacity: 0.5,
            pointerStandardts: 'none',
            userSelectable: 'none',
            '&::after': {
              transition: `transform ${theme.transitions.default}`,
              transform: 'translate(0px, 0px)',
            },
          },
        };
      }}
    >
      {children}
    </button>
  );
};

type StyledSpanProps = {
  variant: Variants;
  size: ButtonSizes;
  children: Children;
};

export const StyledSpan = ({ variant, size, children }: StyledSpanProps) => (
  <span
    css={theme => {
      const colorVariants = {
        primary: {
          backgroundColor: theme.colors.p400,
          borderColor: theme.colors.n300,
          color: theme.colors.n100,
        },
        secondary: {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.n300,
          color: theme.colors.n300,
        },
        tertiary: {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.n500,
          color: theme.colors.n400,
        },
      };

      const sizeVariants = {
        alpha: {
          minWidth: theme.spacings.india,
          fontSize: theme.text.delta.fontSize,
          padding: `0 ${theme.spacings.delta}`,
        },
        bravo: {
          minWidth: theme.spacings.juliett,
          fontSize: theme.text.echo.fontSize,
          padding: `0 ${theme.spacings.echo}`,
        },
        charlie: {
          minWidth: theme.spacings.kilo,
          fontSize: theme.text.foxtrot.fontSize,
          padding: `0 ${theme.spacings.foxtrot}`,
        },
      };

      return {
        ...colorVariants[variant],
        ...sizeVariants[size],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.borderRadius.bravo,
        borderStyle: 'solid',
        borderWidth: theme.borderWidth.charlie,
        width: '100%',
        height: '100%',
        fontFamily: theme.fontStack.heading,
        fontWeight: theme.fontWeight.medium,
        lineHeight: 1,
        position: 'relative',
        textDecoration: 'none',
        textTransform: 'uppercase',
      };
    }}
  >
    {children}
  </span>
);

type StyledAnchorProps = {
  externalLink: string;
  children: Children;
};

export const StyledAnchor = (props: StyledAnchorProps) => {
  const { externalLink, children } = props;
  return (
    <a
      href={externalLink}
      target="blank"
      rel="noopener"
      css={{ textDecoration: 'none' }}
    >
      {children}
    </a>
  );
};

export const StyledLink = styled(Link)({
  textDecoration: 'none',
});
