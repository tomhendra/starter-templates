import { Children } from 'types';
import { withMediaQueries } from 'utils';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Tooltip } from 'components';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={{
      position: 'relative',

      '&:hover': {
        // select StyledTooltip adn reveal on hover
        '& > :first-of-type': {
          visibility: 'visible',
        },
      },
    }}
  >
    {children}
  </div>
);

type StyledGridProps = {
  gridSize: 'alpha' | 'delta';
  noSpacingBottom?: boolean;
  children: Children;
};

export const StyledGrid = (props: StyledGridProps) => {
  const { gridSize, noSpacingBottom, children } = props;
  return (
    <div
      css={theme => {
        const baseStyles = {
          display: 'grid',
          marginBottom: !noSpacingBottom ? theme.spacings.foxtrot : 0,
          justifyItems: 'center',
          width: '100%',
        };

        const gridStyles = {
          alpha: {
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: theme.spacings.charlie,
          },
          delta: {
            gridTemplateColumns: [
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(6, 1fr)',
              'repeat(6, 1fr)',
            ],
            gap: [
              `${theme.spacings.golf} ${theme.spacings.foxtrot}`,
              `${theme.spacings.india} ${theme.spacings.hotel}`,
            ],
          },
        };

        const gridConfig = gridStyles[gridSize];

        return withMediaQueries(theme)({
          ...baseStyles,
          ...gridConfig,
        });
      }}
    >
      {children}
    </div>
  );
};

export const StyledImg = styled(Img)(({ theme }) => ({
  opacity: 0.85,
  transition: `opacity ${theme.transitions.slow}`,

  '&:hover': {
    opacity: 1,
  },
}));

export const StyledTooltip = ({ children, ...rest }: Props) => (
  <Tooltip
    variant="neutral"
    align="center"
    position="top"
    css={theme => ({
      marginBottom: theme.spacings.delta,
      visibility: 'hidden',
    })}
    {...rest}
  >
    {children}
  </Tooltip>
);
