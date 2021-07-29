/** @jsxImportSource theme-ui */
import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from 'types';
import { BlogMeta, MdxComponents } from '.';

export interface BlogPageProps {
  blog: BlogPost;
}

export function BlogPage({ blog }: BlogPageProps) {
  const { mdx, data } = blog;
  const content = hydrate(mdx, {
    components: MdxComponents,
  });
  return (
    <div>
      <article>
        <h1>{blog.data.title}</h1>
        {data.excerpt ? <p>{data.excerpt}</p> : null}
        <BlogMeta blog={blog} />
        <hr />
        {data.image ? (
          <figure>
            <Image
              src={data.image}
              alt={data.caption || data.title}
              layout="fill"
            />
          </figure>
        ) : null}
        {data.caption ? <figcaption>{data.caption}</figcaption> : null}
        {content}
        <Link href="/" passHref>
          <a>Back to blog</a>
        </Link>
      </article>
    </div>
  );
}
