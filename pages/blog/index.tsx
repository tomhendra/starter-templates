/** @jsxImportSource theme-ui */
import { POST_CONTENT_PATH, getMdxContent } from '@lib';
import { BlogPostPreview, Layout, SEO } from '@components';
import { MdxContent } from '@types';
import { GetStaticProps } from 'next';
import { Styled } from '@theme-ui/mdx';

interface BlogProps {
  posts: MdxContent[];
}

function Blog({ posts }: BlogProps) {
  return (
    <>
      <SEO title="Blog" description="Tom Hendra's blog." />
      <Layout>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Styled.h1>Blog</Styled.h1>
          {posts.map(post => (
            <BlogPostPreview key={post.slug} blog={post} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxPostContent = await getMdxContent(POST_CONTENT_PATH);
  const posts = mdxPostContent.map(post => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
