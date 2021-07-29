import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const StyledImage = styled(Img)(({ theme }) => ({
  borderRadius: theme.borderRadius.alpha,
}));
