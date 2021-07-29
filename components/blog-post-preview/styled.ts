import styled from '@emotion/styled';
import theme from 'theme';

export const StyledContainer = styled.div({
  border: '1px solid',
  borderColor: 'text',
  borderRadius: theme.radii.sm,
  padding: theme.space[4],
});

export const StyledSpan = styled.span({
  marginRight: '0.5rem',
  fontSize: theme.fontSizes[0],
});
