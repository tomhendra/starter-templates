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
import { sizes, space } from './sizing';
import { zIndices } from './z-indices';
import { transitions } from './transitions';
import { transforms } from './transforms';
import { styles } from './mdx';
import { layout } from './layout';
import { buttons } from './buttons';
import { forms } from './forms';

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
  styles,
  layout,
  buttons,
  forms,
};

// https://system-ui.com/theme/
// https://dev.theme-ui.com/theme-spec/
// https://dev.theme-ui.com/sx-prop

export default theme;
