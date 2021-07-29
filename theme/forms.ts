import { colors } from './colors';
import { shadows } from './shadows';
import { space } from './sizing';
import { radii } from './radii';
import { lineHeights } from './fonts';

const commonInputStyles = {
  padding: `${space[2]} ${space[3]}`,
  fontSize: '100%',
  borderRadius: radii.default,
  appearance: 'none',
  lineHeight: lineHeights.tight,
};

export const forms = {
  input: {
    shadow: {
      ...commonInputStyles,
      border: 'none',
      color: colors.gray[7],
      boxShadow: shadows.default,
      '&:focus': {
        outline: 'none',
        boxShadow: shadows.outline,
      },
    },
    inline: {
      ...commonInputStyles,
      backgroundColor: colors.gray[2],
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: colors.gray[2],
      color: colors.gray[7],
      '&:focus': {
        outline: 'none',
        borderColor: colors.primary,
        backgroundColor: colors.white,
      },
    },
    underline: {
      ...commonInputStyles,
      backgroundColor: 'transparent',
      border: 'none',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: colors.primary,
      borderRadius: '0px',
      color: colors.gray[7],
      '&:focus': {
        outline: 'none',
        borderColor: colors.primary,
        backgroundColor: colors.white,
      },
    },
  },
};
