import { POST_CONTENT_PATH, getMdxContent } from '@lib';
import { BlogPostPreview, Layout, SEO, Stack } from '@components';
import { MdxContent } from 'types';
import { GetStaticProps } from 'next';

interface BlogProps {
  posts: MdxContent[];
}

function Blog({ posts }: BlogProps) {
  return (
    <>
      <SEO title="Blog" description="Tom Hendra's blog." />
      <Layout>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1>Blog</h1>
          <Stack>
            {posts.map(post => (
              <BlogPostPreview key={post.slug} blog={post} />
            ))}
          </Stack>
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
