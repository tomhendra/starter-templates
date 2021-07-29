import { Layout, BlogPage } from '@components';
import { getMdxPaths, getMdxContent } from '@utils';
import config from '@config';
import { MdxBlogPost } from 'types';
import { NextSeo } from 'next-seo';

export interface BlogPostPageProps {
  blog: MdxBlogPost;
}

export default function BlogPostPage({ blog }: BlogPostPageProps) {
  return (
    <Layout>
      <NextSeo
        title={blog.data.title}
        description={blog.data.excerpt}
        openGraph={{
          images: [
            {
              url: blog.data.image,
            },
          ],
        }}
      />
      <BlogPage blog={blog} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const mdxPaths = await getMdxPaths(config.blog.contentPath);
  const paths = mdxPaths.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const [blog] = await getMdxContent(
    config.blog.contentPath,
    [slug.join('/')],
    '/blog'
  );

  return {
    props: {
      blog,
    },
  };
}
