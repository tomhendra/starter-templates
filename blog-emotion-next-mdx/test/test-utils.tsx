import { ReactElement } from 'react';
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from 'theme';
import { WithChildren } from 'types/type-utils';

// https://testing-library.com/docs/react-testing-library/setup/#custom-render
// https://epicreact.dev/modules/testing-react-apps/context-and-custom-render-method-extra-credit-solution-2

interface renderOptions {
  colorMode?: 'default' | 'dark';
  options?: Omit<RenderOptions, 'queries'>;
}

function render(ui: ReactElement, options: renderOptions = {}): RenderResult {
  function AllTheProviders({ children }: WithChildren): ReactElement {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return rtlRender(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { render };
