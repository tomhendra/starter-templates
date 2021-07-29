import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledForm = styled(Form)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
  zIndex: theme.zIndex.form,

  '& > *:not(:last-child)': {
    marginBottom: theme.spacings.echo,
  },
}));
