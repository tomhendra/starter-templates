/* eslint-disable react/display-name */
import { MdxComponents } from '@types';
import { ThemeProvider } from 'theme-ui';
import Prism from '@theme-ui/prism';

import theme from '../theme';

// Theme-ui with next-mdx-remote: https://github.com/hashicorp/next-mdx-remote/pull/35

export const components: MdxComponents = {
  wrapper: (props: unknown) => <ThemeProvider {...props} theme={theme} />,
  pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  code: Prism,
};
