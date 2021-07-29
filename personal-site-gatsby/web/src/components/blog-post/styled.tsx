import styled from '@emotion/styled';

export const StyledList = styled.ul(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  marginTop: theme.spacings.foxtrot,

  '& li': {
    background: theme.colors.n700,
    borderRadius: theme.borderRadius.bravo,
    color: theme.colors.n400,
    fontSize: theme.text.bravo.fontSize,
    padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
    ':not(:first-of-type)': {
      marginLeft: theme.spacings.charlie,
    },
  },
}));
