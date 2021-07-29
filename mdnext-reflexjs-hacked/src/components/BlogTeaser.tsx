/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { MdxBlogPost } from 'types';
import { BlogMeta } from '.';

export interface BlogTeaserProps {
  blog: MdxBlogPost;
}

export function BlogTeaser({ blog, ...props }: BlogTeaserProps) {
  return (
    <article {...props}>
      <hr />
      <BlogMeta blog={blog} />
      <h2>
        <Link href={blog.url} passHref>
          <a>{blog.data.title}</a>
        </Link>
      </h2>
      {blog.data.excerpt ? <p>{blog.data.excerpt}</p> : null}
      <Link href={blog.url} passHref>
        <a>Read more</a>
      </Link>
    </article>
  );
}
