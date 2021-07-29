/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      sx={{
        width: 8,
        height: 8,
        background: 'inherit',
        color: 'inherit',
        border: 'none',
        p: 0,
      }}
      aria-label="Toggle dark mode"
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
    >
      {colorMode === 'default' ? <FiMoon /> : <FiSun />}
    </button>
  );
}
