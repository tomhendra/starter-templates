/** @jsxImportSource theme-ui */
import { PostPreview } from '@types';
import Link from 'next/link';
import { Styled, Text } from 'theme-ui';

interface Props {
  blog: PostPreview;
}

export function BlogPostPreview({ blog }: Props) {
  return (
    <div
      role="group"
      sx={{
        border: '1px solid',
        borderColor: 'text',
        borderRadius: 4,
        mt: 4,
        p: 4,
      }}
    >
      <Link href={`/blog/${blog.slug}`} passHref>
        <Styled.a>{blog.title}</Styled.a>
      </Link>
      <Styled.p>{blog.excerpt}</Styled.p>
      <div>
        {blog.tags && blog.tags.map(tag => <Text key={tag}>#{tag}</Text>)}
      </div>
    </div>
  );
}
