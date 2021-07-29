import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_ES',
          url: 'https://tomhendra.dev/',
          site_name: 'Tom Hendra, Software Developer.',
        }}
        twitter={{
          handle: '@TomHendra',
          site: 'https://twitter.com/tomhendra',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
