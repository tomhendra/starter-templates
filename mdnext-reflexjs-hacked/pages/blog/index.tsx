import * as React from 'react';
import { Layout, BlogTeaser, SearchBox } from '@components';
import { getMdxContent } from '@utils';
import config from '@config';
import { BlogPost } from 'types';
import { NextSeo } from 'next-seo';
import Fuse from 'fuse.js';

const fuse = new Fuse([], {
  minMatchCharLength: 1,
  useExtendedSearch: true,
  keys: ['data.title', 'data.excerpt'],
});

export interface BlogPageProps {
  posts: BlogPost[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  const [keywords, setKeywords] = React.useState('');
  const [blogPosts, setBlogPosts] = React.useState(posts);
  const queries = {
    $or: [{ 'data.excerpt': keywords }, { 'data.title': keywords }],
  };

  React.useEffect(() => fuse.setCollection(blogPosts), []);

  React.useEffect(() => {
    setBlogPosts(
      !keywords.length ? posts : fuse.search(queries).map(({ item }) => item)
    );
  }, [keywords]);

  return (
    <Layout>
      <NextSeo title="Blog" />
      <div>
        <SearchBox onChange={({ target }) => setKeywords(target.value)} />
        {blogPosts.length ? (
          blogPosts.map((blog) => <BlogTeaser key={blog.slug} blog={blog} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getMdxContent(
    config.blog.contentPath,
    undefined,
    '/blog'
  );

  return {
    props: {
      posts,
    },
  };
}
