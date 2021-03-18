import { PostPreview } from '@types';
import Link from 'next/link';
import { StyledContainer, StyledSpan } from './styled';

interface Props {
  blog: PostPreview;
}

export function BlogPostPreview({ blog }: Props) {
  return (
    <StyledContainer role="group">
      <Link href={`/blog/${blog.slug}`} passHref>
        <a>{blog.title}</a>
      </Link>
      <p>{blog.excerpt}</p>
      <div>
        {blog.tags &&
          blog.tags.map(tag => <StyledSpan key={tag}>#{tag}</StyledSpan>)}
      </div>
    </StyledContainer>
  );
}
