import * as React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { StyledButton } from './styled';

export function ModeToggle() {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <StyledButton
      aria-label="Toggle colour mode"
      onClick={() => setTheme(nextTheme)}
    >
      {nextTheme === 'light' ? <FiMoon /> : <FiSun />}
    </StyledButton>
  );
}
