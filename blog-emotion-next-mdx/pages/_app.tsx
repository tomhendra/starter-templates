import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Global } from 'components';
import 'styles/reset.css';
import 'styles/colors.css';
import 'styles/fonts.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
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
    </>
  );
}

export default App;
