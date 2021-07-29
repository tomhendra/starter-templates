import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const StyledImg = styled(Img)(({ theme }) => ({
  borderRadius: theme.borderRadius.alpha,
  width: '100%',
}));
