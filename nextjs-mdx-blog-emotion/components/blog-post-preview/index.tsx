import { PostPreview } from '@types';
import Link from 'next/link';

interface Props {
  blog: PostPreview;
}

export function BlogPostPreview({ blog }: Props) {
  return (
    <div
      role="group"
      css={{
        border: '1px solid',
        borderColor: 'text',
        borderRadius: 4,
        mt: 4,
        p: 4,
      }}
    >
      <Link href={`/blog/${blog.slug}`} passHref>
        <a>{blog.title}</a>
      </Link>
      <p>{blog.excerpt}</p>
      <div>{blog.tags && blog.tags.map(tag => <p key={tag}>#{tag}</p>)}</div>
    </div>
  );
}
