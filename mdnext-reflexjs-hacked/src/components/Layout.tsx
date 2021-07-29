/** @jsxImportSource theme-ui */
import config from '@config';
import { Navbar } from '.';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        {config.site.copyright ? <p>{config.site.copyright}</p> : null}
      </footer>
    </>
  );
}
