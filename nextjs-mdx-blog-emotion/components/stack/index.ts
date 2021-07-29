import styled from '@emotion/styled';
import theme from 'theme';

export const Stack = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '&& > * + *': {
    marginTop: theme.space[3],
  },
});
