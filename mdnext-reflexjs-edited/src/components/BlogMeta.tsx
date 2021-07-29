/** @jsxImportSource theme-ui */
import { MdxBlogPost } from 'types';

export interface BlogMetaProps {
  blog: MdxBlogPost;
}

export function BlogMeta({ blog, ...props }: BlogMetaProps) {
  return (
    <div {...props}>
      {blog.data.author ? (
        <span>
          Posted by <strong>{blog.data.author}</strong>
        </span>
      ) : null}
      <span>
        <span>{blog.data.date}</span>
        {blog.readingTime ? <span> - {blog.readingTime}</span> : null}
      </span>
    </div>
  );
}
