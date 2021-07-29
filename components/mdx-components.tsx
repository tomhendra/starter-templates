/* eslint-disable react/display-name */
import { MdxComponents } from 'types';
import { ThemeProvider } from '@emotion/react';

import theme from 'theme';

export const components: MdxComponents = {
  wrapper: (props: unknown) => <ThemeProvider {...props} theme={theme} />,
  pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
};
