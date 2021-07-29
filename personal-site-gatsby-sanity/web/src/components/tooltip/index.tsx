import { Interpolation } from '@emotion/react';

import { capitalize } from '../../utils/helpers';

import {
  FeedbackVariants,
  Positions,
  Alignments,
  Children,
  Theme,
} from '../../types';

type Props = {
  css?: Interpolation<Theme>; // fix for bug when reusing component & applying extra styles with css prop.
  variant: FeedbackVariants;
  position: Positions;
  align: Alignments;
  children: Children;
};

export const Tooltip = (props: Props) => {
  const {
    variant = 'neutral',
    position = 'top',
    align = 'center',
    children,
    ...rest
  } = props;

  return (
    <div
      css={theme => {
        const variantOptions = {
          neutral: {
            backgroundColor: theme.colors.n200,
            color: theme.colors.n900,
          },
          danger: {
            backgroundColor: theme.colors.r700,
            color: theme.colors.r000,
          },
          warning: {
            backgroundColor: theme.colors.warning,
            color: theme.colors.y000,
          },
          success: {
            backgroundColor: theme.colors.success,
            color: theme.colors.g000,
          },
        };

        // position styles
        const isPositionHorizontal =
          position === 'top' || position === 'bottom';

        const alignmentMap = {
          start: isPositionHorizontal ? 'left' : 'top',
          center: isPositionHorizontal ? 'left' : 'top',
          end: isPositionHorizontal ? 'right' : 'bottom',
        };

        const positionMap = {
          top: 'bottom',
          bottom: 'top',
          right: 'left',
          left: 'right',
        };

        const arrowTranslateMap = {
          start: '100%',
          center: '-50%',
          end: '-100%',
        };

        const absoluteAlignment = alignmentMap[align];
        const absolutePosition = positionMap[position];
        const translateValue = arrowTranslateMap[align];
        const translateDirection = isPositionHorizontal
          ? 'translateX'
          : 'translateY';
        // capitalize first letter of position to use in camelCase attribute
        const borderConfig = `border${capitalize(position)}Color`;

        return {
          borderRadius: theme.borderRadius.bravo,
          fontSize: theme.text.bravo.fontSize,
          maxWidth: theme.spacings.lima,
          minWidth: theme.spacings.india,
          padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
          position: 'absolute',
          textAlign: 'center',
          zIndex: theme.zIndex.tooltip,
          ...variantOptions[variant],
          // alignment of Tooltip start / center / end of edge on which it is positioned
          // if align === 'center', position element 50% from edge.
          // if align === 'start' or 'end', position element 0 from edge
          [absoluteAlignment]: align === 'center' ? '50%' : 0,
          // Positioning of Tooltip top / right / bottom / left of container + spacing
          [absolutePosition]: `calc(100% + ${theme.spacings.bravo})`,
          // if align === 'center', element moved by half its own width to center itself
          transform:
            align === 'center' ? `${translateDirection}(-50%)` : undefined,

          // arrow positioning based on where Tooltip is portioned & aligned
          '&::after': {
            // Tooltip arrow base styles
            border: `${theme.borderWidth.foxtrot} solid transparent`,
            content: '""',
            position: 'absolute',
            // Tooltip arrow positional styles
            [absoluteAlignment]: align === 'center' ? '50%' : 0,
            [borderConfig]: variantOptions[variant].backgroundColor,
            // position arrow 100% from top / right / bottom / left
            [position]: '100%',
            transform: `${translateDirection}(${translateValue})`,
          },
        };
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
