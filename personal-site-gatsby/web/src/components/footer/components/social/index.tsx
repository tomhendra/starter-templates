import { Icon } from 'components';

import { StyledContainer, StyledSpan, StyledAnchor } from './styled';

export const Social = () => (
  <StyledContainer>
    <StyledAnchor href="https://github.com/tomhendra">
      <StyledSpan>
        <Icon type="GitHub" color="neutral" size="bravo" spacingRight="bravo" />
        GitHub
      </StyledSpan>
    </StyledAnchor>
    <StyledAnchor href="https://www.linkedin.com/in/tom-hendra/">
      <StyledSpan>
        <Icon
          type="Linkedin"
          color="neutral"
          size="bravo"
          spacingRight="bravo"
        />
        LinkedIn
      </StyledSpan>
    </StyledAnchor>
    <StyledAnchor href="https://twitter.com/TomHendra">
      <StyledSpan>
        <Icon
          type="Twitter"
          color="neutral"
          size="bravo"
          spacingRight="bravo"
        />
        Twitter
      </StyledSpan>
    </StyledAnchor>
  </StyledContainer>
);

export default Social;
