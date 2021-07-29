import { colors } from './colors';
import { space } from './sizing';
import { fontWeights } from './fonts';
import { radii } from './radii';

const commonButtonStyles = {
  padding: `${space[2]} ${space[3]}`,
  cursor: 'pointer',
  fontSize: '100%',
  lineHeight: 'inherit',
};

export const buttons = {
  simple: {
    ...commonButtonStyles,
    backgroundColor: colors.primary,
    border: 'none',
    color: colors.white,
    fontWeight: fontWeights.bold,
    borderRadius: radii.default,
    '&:hover': {
      backgroundColor: colors.primaryHover,
    },
  },
  pill: {
    ...commonButtonStyles,
    backgroundColor: colors.primary,
    border: 'none',
    color: colors.white,
    fontWeight: fontWeights.bold,
    borderRadius: radii.full,
    '&:hover': {
      backgroundColor: colors.primaryHover,
    },
  },
  outline: {
    ...commonButtonStyles,
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.primary,
    color: colors.primary,
    fontWeight: fontWeights.semibold,
    borderRadius: radii.default,
    '&:hover': {
      backgroundColor: colors.primary,
      color: colors.white,
      borderColor: 'transparent',
    },
  },
  bordered: {
    ...commonButtonStyles,
    backgroundColor: colors.primary,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.primaryHover,
    color: colors.white,
    fontWeight: fontWeights.bold,
    borderRadius: radii.default,
    '&:hover': {
      backgroundColor: colors.primaryHover,
    },
  },
  disabled: {
    ...commonButtonStyles,
    backgroundColor: colors.primary,
    border: 'none',
    opacity: 0.5,
    cursor: 'not-allowed',
    color: colors.white,
    fontWeight: fontWeights.bold,
    borderRadius: radii.default,
  },
  '3D': {
    ...commonButtonStyles,
    backgroundColor: colors.primary,
    border: 'none',
    borderBottomWidth: '4px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.primaryHover,
    color: colors.white,
    fontWeight: fontWeights.bold,
    borderRadius: radii.default,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-1px)',
    },
  },
  elevated: {
    ...commonButtonStyles,
    backgroundColor: colors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.gray[4],
    color: colors.text,
    fontWeight: fontWeights.bold,
    borderRadius: radii.default,
    boxShadow: 'default',
    '&:hover': {
      backgroundColor: colors.gray[1],
    },
  },
};
