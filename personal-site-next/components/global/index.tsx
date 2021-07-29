import { Global as EmotionGlobal } from '@emotion/react';
import theme from 'theme';

export function Global() {
  return (
    <EmotionGlobal
      styles={{
        '::selection': {
          backgroundColor: theme.colors.muted,
          color: theme.colors.primary,
        },

        body: {
          background: theme.colors.background,
          color: theme.colors.text,
          textRendering: 'optimizeLegibility',
          margin: '0',
        },

        a: {
          color: theme.colors.primary,
          textDecoration: 'underline',
        },

        '.hidden': {
          display: 'none',
        },

        'span[aria-hidden="true"]': {
          display: 'none',
        },

        'span[aria-hidden="false"]': {
          display: 'block',
        },
      }}
    />
  );
}
