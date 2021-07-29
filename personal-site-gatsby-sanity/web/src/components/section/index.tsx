import { Spacings, Variants, Children } from '../../types';

import { getSpacingValues, withMediaQueries } from '../../utils/style-helpers';

type Props = {
  paddingTop?: Spacings | Spacings[];
  paddingBottom?: Spacings | Spacings[];
  variant: Variants;
  centerContentVertically?: boolean;
  fullViewportHeight?: boolean;
  devMode?: boolean;
  children: Children;
};

export const Section = (props: Props) => {
  const {
    paddingTop,
    paddingBottom,
    variant = 'secondary',
    centerContentVertically,
    fullViewportHeight,
    devMode = false,
    children,
  } = props;

  return (
    <section
      css={theme => {
        // color variants must be matched child elements.
        // I.e.Text, Heading, Subheading must be of same variant.
        const colorVariants = {
          primary: {
            backgroundColor: theme.colors.white,
          },
          secondary: {
            backgroundColor: theme.colors.bodyBg,
          },
          tertiary: {
            backgroundColor: theme.colors.n100,
          },
        };

        return withMediaQueries(theme)({
          ...colorVariants[variant],
          // in case of not using Firefox devTools we have our own "devMode" :-)
          border: devMode && '1px dashed hsl(300, 100%, 50%)',
          '& > *': {
            border: devMode && '1px dashed hsl(200, 100%, 50%)',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: centerContentVertically && 'center',
          minHeight: fullViewportHeight && '100vh',
          // padding top and bottom standard values unless specified.
          // When using child elements within sections, spacing only needs to be added
          // to the bottom of each child element, except for the last child in each section,
          // which should have no bottom spacing applied to it.
          paddingTop: !paddingTop
            ? [
                theme.spacings.india,
                theme.spacings.india,
                theme.spacings.juliett,
                theme.spacings.juliett,
                theme.spacings.kilo,
              ]
            : getSpacingValues(paddingTop, theme),
          paddingBottom: !paddingBottom
            ? [
                theme.spacings.india,
                theme.spacings.india,
                theme.spacings.juliett,
                theme.spacings.juliett,
                theme.spacings.kilo,
              ]
            : getSpacingValues(paddingBottom, theme),
          paddingLeft: [
            theme.grid.alpha.gutter,
            theme.grid.bravo.gutter,
            theme.grid.charlie.gutter,
            theme.grid.delta.gutter,
            theme.grid.echo.gutter,
          ],
          paddingRight: [
            theme.grid.alpha.gutter,
            theme.grid.bravo.gutter,
            theme.grid.charlie.gutter,
            theme.grid.delta.gutter,
            theme.grid.echo.gutter,
          ],
          // position relative to allow for absolutely positioned background components
          position: 'relative',
          width: '100vw',
        });
      }}
    >
      {children}
    </section>
  );
};
