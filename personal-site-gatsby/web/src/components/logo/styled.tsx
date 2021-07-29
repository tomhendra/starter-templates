import { withMediaQueries, getSpacingValues } from 'utils';
import { Spacings, IconSizes, Children } from 'types';

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
      aria-label="Stylized robot used as the brand logo for Tom Hendra."
      css={theme =>
        withMediaQueries(theme)({
          height: size && getSpacingValues(size, theme),
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
