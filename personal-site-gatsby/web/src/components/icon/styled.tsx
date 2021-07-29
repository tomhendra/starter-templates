import { Children, IconSizes, Spacings } from 'types';

import { withMediaQueries, getSpacingValues } from 'utils';

type Props = {
  size: IconSizes;
  spacing?: Spacings;
  spacingTop?: Spacings;
  spacingRight?: Spacings;
  spacingBottom?: Spacings;
  spacingLeft?: Spacings;
  children: Children;
};

export const StyledContainer = (props: Props) => {
  const {
    size,
    spacing,
    spacingTop,
    spacingRight,
    spacingBottom,
    spacingLeft,
    children,
  } = props;

  return (
    <div
      role="img"
      css={theme =>
        withMediaQueries(theme)({
          height: theme.iconSizes[size],
          margin: spacing && getSpacingValues(spacing, theme),
          marginTop: spacingTop && getSpacingValues(spacingTop, theme),
          marginRight: spacingRight && getSpacingValues(spacingRight, theme),
          marginBottom: spacingBottom && getSpacingValues(spacingBottom, theme),
          marginLeft: spacingLeft && getSpacingValues(spacingLeft, theme),
        })
      }
    >
      {children}
    </div>
  );
};
