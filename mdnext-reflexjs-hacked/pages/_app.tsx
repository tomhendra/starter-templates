import { ThemeProvider } from 'theme-ui';
import { theme } from '../src/theme';

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
