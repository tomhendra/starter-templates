import { spacing } from './sizes';
import { shadows } from './shadows';

export const layout = {
  root: {},
  header: {
    background: 'inherit',
    boxShadow: shadows.sm,
    padding: spacing[10],
  },
  main: {
    paddingTop: spacing[10],
  },
  footer: {},
};
