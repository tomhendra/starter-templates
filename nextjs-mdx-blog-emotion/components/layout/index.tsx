import { Container, Navbar } from 'components';
import theme from 'theme';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        ...theme.layout.root,
      }}
    >
      <header
        css={{
          width: '100%',
          ...theme.layout.header,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </header>
      <main
        css={{
          width: '100%',
          flex: '1 1 auto',
          ...theme.layout.main,
        }}
      >
        <Container>{children}</Container>
      </main>
      <footer
        css={{
          width: '100%',
          ...theme.layout.footer,
        }}
      >
        <Container>
          <p>Footer Goes Here</p>
        </Container>
      </footer>
    </div>
  );
}
