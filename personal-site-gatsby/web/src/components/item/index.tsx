import {
  GridPositions,
  Spacings,
  FlexDirection,
  JustifyContent,
  AlignItems,
  AlignContent,
  Children,
} from '../../types';

import { getSpacingValues, withMediaQueries } from '../../utils/style-helpers';

type Props = {
  spacingTop?: Spacings | Spacings[];
  spacingRight?: Spacings | Spacings[];
  spacingBottom?: Spacings | Spacings[];
  spacingLeft?: Spacings | Spacings[];
  flexDirection?: FlexDirection | FlexDirection[];
  justifyContent?: JustifyContent | JustifyContent[];
  alignItems?: AlignItems | AlignItems[];
  alignContent?: AlignContent | AlignContent[];
  gridColStart?: GridPositions | GridPositions[];
  gridColEnd?: GridPositions | GridPositions[];
  gridColSpan?: GridPositions | GridPositions[];
  gridRowStart?: GridPositions | GridPositions[];
  gridRowEnd?: GridPositions | GridPositions[];
  gridRowSpan?: GridPositions | GridPositions[];
  children: Children;
};

export const Item = (props: Props) => {
  const {
    spacingTop,
    spacingRight,
    spacingBottom,
    spacingLeft,
    flexDirection = 'column',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    alignContent = 'stretch',
    gridColStart,
    gridColSpan,
    gridColEnd,
    gridRowStart,
    gridRowSpan,
    gridRowEnd,
    children,
  } = props;

  return (
    <div
      css={theme => {
        const baseStyles = {
          label: 'item',
          display: 'flex',
          flexWrap: 'wrap',
          zIndex: theme.zIndex.default,
        };

        const spacingStyles = {
          marginTop: spacingTop && getSpacingValues(spacingTop, theme),
          paddingRight: spacingRight && getSpacingValues(spacingRight, theme),
          marginBottom: spacingBottom && getSpacingValues(spacingBottom, theme),
          paddingLeft: spacingLeft && getSpacingValues(spacingLeft, theme),
        };

        const flexboxStyles = {
          flexDirection,
          justifyContent,
          alignItems,
          alignContent,
        };

        function getGridSpanValues(spanValue: GridPositions | GridPositions[]) {
          return Array.isArray(spanValue)
            ? spanValue.map(val => `span ${val}`)
            : `span ${spanValue}`;
        }

        const gridStyles = {
          gridColumnStart: gridColStart && gridColStart,
          gridRowStart: gridRowStart && gridRowStart,
          gridColumnEnd:
            gridColEnd || (gridColSpan && getGridSpanValues(gridColSpan)),
          gridRowEnd:
            gridRowEnd || (gridRowSpan && getGridSpanValues(gridRowSpan)),
        };

        return withMediaQueries(theme)({
          ...baseStyles,
          ...gridStyles,
          ...spacingStyles,
          ...flexboxStyles,
        });
      }}
    >
      {children}
    </div>
  );
};
