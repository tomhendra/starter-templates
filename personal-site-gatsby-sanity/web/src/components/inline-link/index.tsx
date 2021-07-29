import { Link } from 'gatsby';
import { Children } from 'types';
import { StyledSpan } from './styled';

type Props = {
  internalLink?: string;
  externalLink?: string;
  children: Children;
};

const linkStyles = {
  color: 'inherit',
  textDecoration: 'none',
  '&:visited, &:hover': {
    color: 'inherit',
  },
};

export const InlineLink = (props: Props) => {
  const { internalLink, externalLink, children } = props;

  return internalLink ? (
    <StyledSpan>
      <Link to={internalLink} css={linkStyles}>
        {children}
      </Link>
    </StyledSpan>
  ) : (
    <StyledSpan>
      <a target="blank" rel="noopener" href={externalLink} css={linkStyles}>
        {children}
      </a>
    </StyledSpan>
  );
};
