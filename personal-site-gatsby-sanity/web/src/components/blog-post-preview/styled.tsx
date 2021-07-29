import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Card } from 'components';
import { Children } from 'types';
import { withMediaQueries } from 'utils';

export const StyledImg = styled(Img)(({ theme }) =>
  withMediaQueries(theme)({
    borderRadius: theme.borderRadius.charlie,
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
    ],
    transition: `filter ${theme.transitions.slow}`,
  }),
);

export const StyledLink = styled(Link)(({ theme }) =>
  withMediaQueries(theme)({
    position: 'relative',
    textDecoration: 'none',

    '&:hover, &:focus': {
      '& > :first-of-type': {
        '&::after': {
          transition: `transform ${theme.transitions.springDefault}`,
          transform: 'translate(-10px, 10px)',
        },
      },
    },

    '&:active': {
      '& > :first-of-type': {
        '&::after': {
          transition: `transform ${theme.transitions.fast}`,
          transform: 'translate(0px, 0px)',
        },
      },
    },
  }),
);

interface Props {
  children: Children;
}

export const StyledCard = ({ children, ...rest }: Props) => (
  <Card
    variant="primary"
    accent="accentCharlie"
    padding={['foxtrot', 'foxtrot', 'golf', 'foxtrot', 'golf']}
    // justifyContent="space-between"
    alignItems="stretch"
    css={theme => ({
      minHeight: [
        theme.spacings.november,
        theme.spacings.mike,
        theme.spacings.oscar,
        theme.spacings.november,
        theme.spacings.papa,
      ],

      '&::after': {
        backgroundColor: 'transparent',
        borderColor: theme.colors.accentCharlie,
        borderRadius: theme.borderRadius.bravo,
        borderStyle: 'solid',
        borderWidth: theme.borderWidth.echo,
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
    })}
    {...rest}
  >
    {children}
  </Card>
);
