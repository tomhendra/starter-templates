import { Container, Navbar } from '@components';

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
        variant: 'layout.root',
      }}
    >
      <header
        css={{
          width: '100%',
          variant: 'layout.header',
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
          variant: 'layout.main',
        }}
      >
        <Container>{children}</Container>
      </main>
      <footer
        css={{
          width: '100%',
          variant: 'layout.footer',
        }}
      >
        <Container>
          <p>Footer Goes Here</p>
        </Container>
      </footer>
    </div>
  );
}
