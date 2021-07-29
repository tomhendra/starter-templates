import styled from '@emotion/styled';
import theme from 'theme';

export const StyledButton = styled.button({
  width: theme.sizes[8],
  height: theme.sizes[8],
  background: 'inherit',
  color: 'inherit',
  border: 'none',
  padding: theme.space[1],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
