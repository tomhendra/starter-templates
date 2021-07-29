export const transitions = {
  property: {
    none: 'none',
    all: 'all',
    default:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  timingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '100ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
    default: '200ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
    slow: '300ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
    springDefault: '275ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  duration: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
};
