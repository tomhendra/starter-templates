import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './fonts';
import { borders, borderStyles, borderWidths } from './borders';
import { colors } from './colors';
import { opacities } from './opacities';
import { radii } from './radii';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { space } from './space';
import { zIndices } from './z-indices';
import { transitions } from './transitions';
import { transforms } from './transforms';

const breakpoints = ['640px', '768px', '1024px', '1280px'];

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
  xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
};

const theme = {
  borders,
  borderStyles,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacities,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
  transitions,
  transforms,
  breakpoints,
  mediaQueries,
};

// https://system-ui.com/theme/
// https://dev.theme-ui.com/theme-spec/
// https://dev.theme-ui.com/sx-prop

export { theme };
