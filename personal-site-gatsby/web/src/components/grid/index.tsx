import { withMediaQueries } from '../../utils/style-helpers';

import { Children } from '../../types';

type Props = {
  devMode?: boolean;
  withRowGaps?: boolean;
  children: Children;
};

export const Grid = (props: Props) => {
  const { devMode, withRowGaps, children } = props;
  return (
    <div
      css={theme =>
        withMediaQueries(theme)({
          display: 'grid',
          gridTemplateRows: 'auto',
          columnGap: [
            theme.grid.alpha.gutter,
            theme.grid.bravo.gutter,
            theme.grid.charlie.gutter,
            theme.grid.delta.gutter,
            theme.grid.echo.gutter,
          ],
          rowGap: withRowGaps && [
            theme.grid.alpha.gutter,
            theme.grid.bravo.gutter,
            theme.grid.charlie.gutter,
            theme.grid.delta.gutter,
            theme.grid.echo.gutter,
          ],
          gridTemplateColumns: [
            `repeat(${theme.grid.alpha.cols}, minmax(0, 1fr))`,
            `repeat(${theme.grid.bravo.cols}, minmax(0, 1fr))`,
            `repeat(${theme.grid.charlie.cols}, minmax(0, 1fr))`,
            `repeat(${theme.grid.delta.cols}, minmax(0, 1fr))`,
            `repeat(${theme.grid.echo.cols}, minmax(0, 1fr))`,
          ],
          maxWidth: [
            theme.grid.alpha.maxWidth,
            theme.grid.bravo.maxWidth,
            theme.grid.charlie.maxWidth,
            theme.grid.delta.maxWidth,
            theme.grid.echo.maxWidth,
          ],
          width: '100%',
          zIndex: theme.zIndex.default,
          border: devMode && '1px dashed hsl(300, 100%, 50%)',
          '& > *': {
            border: devMode && '1px dashed hsl(300, 100%, 50%)',
          },
        })
      }
    >
      {children}
    </div>
  );
};
