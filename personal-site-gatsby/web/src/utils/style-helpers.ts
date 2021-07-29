import facepaint from 'facepaint';
import { transparentize } from 'polished';

import {
  Spacings,
  HeadingSizes,
  SubHeadingSizes,
  TextSizes,
  Colors,
  CSSObject,
  Theme,
} from '../types';

// ....................media queries....................

/*
withMediaQueries HOF generates media queries
by returning facepaint (https://github.com/emotion-js/facepaint).
To use, curry the function with first argument as theme,
and second argument as styles object with arrays of values
to be used at each incremental breakpoint.
example usage:
const styles = theme => {
  return withMediaQueries(theme)({
    margin: '0 auto',
    maxWidth: [320px, 756px, 960px, 1200px]
  });
};
*/
export function withMediaQueries(
  theme: Theme,
): import('facepaint').DynamicStyleFunction {
  return facepaint(
    theme.breakpoints.map(bp => `@media only screen and (min-width: ${bp})`),
  );
}

// ....................spacings....................

/*
withMediaQueries() takes an array of values for use with facepaint.

Problem:
    Values need to be derived from theme using dot notation. e.g. passing
    [ALPHA, BRAVO] to component when ['0.8rem, '1.2rem] is required by facepaint,
    derived from theme.spacings[ALPHA], theme.spacings[BRAVO].

    Values do not always need to be an array if
    variations are not required between breakpoints.
    However there appears to be potential for user error...

    E.g. When passing an array of values for padding, & only a
    single padding value for paddingTop, the paddingTop value
    is only applied to the first breakpoint, and is not applied
    to subsequent breakpoints, therefore is overridden by padding for
    larger breakpoints.

    This is likely intended behaviour of facepaint, and could be overcome by
    passing values manually for each breakpoint, but this could clutter markup
    with something like [ALPHA, ALPHA, ALPHA, ALPHA, ALPHA], which hurts the eyes.

    And what if we want to mix enums and 0's such as [ALPHA, 0, BRAVO, 0, ECHO] ?

Solution:
    Generate values for all breakpoints using Array.fill if fewer
    prop values are passed than what facepaint expects.
*/

export function getSpacingValues(
  size: Spacings | Spacings[],
  theme: Theme,
): (string | 0)[] {
  const { spacings, breakpoints } = theme;
  const facepaintArrayLength = breakpoints.length + 1;

  if (Array.isArray(size)) {
    const sizeArr = size;
    // if length of array in size parameter is less than what facepaint expects
    // i.e. number of breakpoints + 1, populate new array with last element in
    // size array, and concat new array with size array.
    if (sizeArr.length < facepaintArrayLength) {
      return (
        sizeArr
          .concat(
            Array(facepaintArrayLength - sizeArr.length).fill(
              sizeArr[sizeArr.length - 1],
            ),
          )
          // map over size array & grab values from theme.
          // handles arrays with mix of strings & numbers e.g. [ALPHA, BRAVO, 0, 0, BRAVO]
          .map((value: 0 | Spacings) =>
            typeof value === 'number' ? value : spacings[value],
          )
      );
    }
    if (sizeArr.length === facepaintArrayLength) {
      return sizeArr.map((value: 0 | Spacings) =>
        typeof value === 'number' ? value : spacings[value],
      );
    }
  }
  // handle values of single enum, & populate new array with same value for each breakpoint
  if (typeof size === 'string') {
    return Array(facepaintArrayLength).fill(spacings[size]);
  }
  // handle values of single numbers, as only other prop value permitted.
  // & populate new array with same value for each breakpoint
  return Array(facepaintArrayLength).fill(size);
}

// ....................typography....................

// should only be used for text elements, since line height is returned.
// i.e. not for buttons or standalone links for navigation etc.

export function getTextDeclarations(
  size: TextSizes | TextSizes[],
  theme: Theme,
): CSSObject {
  const typographyType = theme.text;

  function generateValues(property: 'fontSize' | 'lineHeight') {
    if (Array.isArray(size)) {
      return size.map((val: TextSizes) => typographyType[val][property]);
    }
    return typographyType[size][property];
  }

  return {
    fontSize: generateValues('fontSize'),
    lineHeight: generateValues('lineHeight'),
  };
}

export function getHeadingDeclarations(
  size: HeadingSizes | HeadingSizes[],
  theme: Theme,
): CSSObject {
  const typographyType = theme.headings;

  function generateValues(property: 'fontSize' | 'lineHeight') {
    if (Array.isArray(size)) {
      return size.map((val: HeadingSizes) => typographyType[val][property]);
    }
    return typographyType[size][property];
  }

  return {
    fontSize: generateValues('fontSize'),
    lineHeight: generateValues('lineHeight'),
  };
}

export function getSubheadingDeclarations(
  size: SubHeadingSizes | SubHeadingSizes[],
  theme: Theme,
): CSSObject {
  const typographyType = theme.subHeadingSizes;

  function generateValues(property: 'fontSize' | 'lineHeight') {
    if (Array.isArray(size)) {
      return size.map((val: SubHeadingSizes) => typographyType[val][property]);
    }
    return typographyType[size][property];
  }

  return {
    fontSize: generateValues('fontSize'),
    lineHeight: generateValues('lineHeight'),
  };
}

/*
TODO: --------> Work out how to get TypesScript to allow
mixed Union types for breaking out logic to helper function...

function typographyHelper(
  variant: 'text' | 'headings' | 'subHeadingSizes',
  size: TextSizes | HeadingSizes | SubHeadingSizes | (TextSizes | HeadingSizes | SubHeadingSizes)[],
  theme: Theme,
) {
  const typographyType: TextIndex | HeadingSizesIndex | SubHeadingSizesIndex =
    theme[variant];

  function generateValues(property: 'fontSize' | 'lineHeight') {
    if (Array.isArray(size)) {
      return size.map(
        (val: TextSizes | HeadingSizes | SubHeadingSizes) => typographyType[val][property],
      );
    }
    return typographyType[size][property];
  }

  return {
    fontSize: generateValues('fontSize'),
    lineHeight: generateValues('lineHeight'),
  };
}

export const getTextDeclarations = (size: TextSizes | TextSizes[], theme: Theme) =>
  typographyHelper('text', size, theme);

export const getHeadingDeclarations = (
  size: HeadingSizes | HeadingSizes[],
  theme: Theme,
) => typographyHelper('headings', size, theme);

export const getSubheadingDeclarations = (
  size: SubHeadingSizes | SubHeadingSizes[],
  theme: Theme,
) => typographyHelper('subHeadingSizes', size, theme);

*/

// ....................shadows....................

export const shadowStandardAlpha = (
  color: Colors,
  theme: Theme,
): CSSObject => ({
  boxShadow: `0 1px 3px ${transparentize(0.8, theme.colors[color])}`,
});

export const shadowStandardBravo = (
  color: Colors,
  theme: Theme,
): CSSObject => ({
  boxShadow: `0 4px 6px ${transparentize(0.8, theme.colors[color])}`,
});

export const shadowStandardCharlie = (
  color: Colors,
  theme: Theme,
): CSSObject => ({
  boxShadow: `0 5px 15px ${transparentize(0.8, theme.colors[color])}`,
});

export const shadowStandardDelta = (
  color: Colors,
  theme: Theme,
): CSSObject => ({
  boxShadow: `0 10px 24px ${transparentize(0.8, theme.colors[color])}`,
});

export const shadowStandardEcho = (color: Colors, theme: Theme): CSSObject => ({
  boxShadow: `0 15px 35px ${transparentize(0.8, theme.colors[color])}`,
});

export const shadowOffsetAlpha = (color: Colors, theme: Theme): CSSObject => ({
  boxShadow: `0 1px 3px ${transparentize(0.88, theme.colors[color])},
              0 1px 2px ${transparentize(0.76, theme.colors[color])}`,
});

export const shadowOffsetBravo = (color: Colors, theme: Theme): CSSObject => ({
  boxShadow: `0 3px 6px ${transparentize(0.85, theme.colors[color])},
              0 2px 4px ${transparentize(0.88, theme.colors[color])}`,
});

export const shadowOffsetCharlie = (
  color: Colors,
  theme: Theme,
): CSSObject => ({
  boxShadow: `0 10px 20px ${transparentize(0.85, theme.colors[color])},
              0 3px 6px ${transparentize(0.9, theme.colors[color])}`,
});

export const shadowOffsetDelta = (color: Colors, theme: Theme): CSSObject => ({
  boxShadow: `0 15px 25px ${transparentize(0.85, theme.colors[color])},
              0 5px 10px ${transparentize(0.95, theme.colors[color])}`,
});

export const shadowOffsetEcho = (color: Colors, theme: Theme): CSSObject => ({
  boxShadow: `0 20px 40px ${transparentize(0.8, theme.colors[color])}`,
});
