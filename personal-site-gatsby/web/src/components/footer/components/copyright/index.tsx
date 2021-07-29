import { useSiteMetadata } from 'hooks';
import { Logo } from 'components';
import { StyledContainer, StyledSpan } from './styled';

export const Copyright = () => {
  const { siteMetadata } = useSiteMetadata();
  const date = new Date().getFullYear();
  return (
    <StyledContainer>
      <Logo color="neutral" size="echo" spacingRight="bravo" />
      <StyledSpan>
        {siteMetadata.author}&nbsp;&copy;&nbsp;{date}
      </StyledSpan>
    </StyledContainer>
  );
};
