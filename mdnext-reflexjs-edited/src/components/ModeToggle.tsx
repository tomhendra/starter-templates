/** @jsxImportSource theme-ui */
import { Box, IconButton, useColorMode } from 'theme-ui';
import { Icon } from '.';

export interface ModeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ModeToggle({ ...props }: ModeToggleProps) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
      {...props}
    >
      <Icon />
      <Box>Toggle color mode</Box>
    </IconButton>
  );
}
