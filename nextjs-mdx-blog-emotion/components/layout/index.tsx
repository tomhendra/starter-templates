import { Navbar } from 'components';
import { StyledContainer } from './styled';
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
      }}
    >
      <header
        css={{
          width: '100%',
          ...theme.layout.header,
        }}
      >
        <StyledContainer>
          <Navbar />
        </StyledContainer>
      </header>
      <main
        css={{
          width: '100%',
          flex: '1 1 auto',
          ...theme.layout.main,
        }}
      >
        <StyledContainer>{children}</StyledContainer>
      </main>
      <footer
        css={{
          width: '100%',
          ...theme.layout.footer,
        }}
      >
        <StyledContainer>
          <p>Footer Goes Here</p>
        </StyledContainer>
      </footer>
    </div>
  );
}
