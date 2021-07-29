import {
  Layout,
  SEO,
  Section,
  Grid,
  Item,
  Heading,
  Text,
  BlogPostPreview,
} from 'components';
import { usePosts } from 'hooks';
import { BlogPostHookData } from 'types';

function Blog() {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title="Blog" />
      <Section fullViewportHeight variant="secondary">
        <Grid>
          <Item gridColStart={1} gridColEnd={[9, 8, 9, 8, 6]}>
            <Heading as="h1" variant="secondary">
              Blog.
            </Heading>
            {posts.length > 0 && (
              <Text noSpacingBottom variant="secondary">
                Welcome to a mishmash of ramblings about all of my passions;
                tech, food, fitness and travel. I hope you find it useful, or at
                least a little interesting.
              </Text>
            )}
          </Item>
        </Grid>
        <Grid withRowGaps>
          {posts.length ? (
            posts.map((post: BlogPostHookData) => (
              <Item
                gridColSpan={[8, 4, 6, 4, 4]}
                key={post.id}
                spacingTop="hotel"
              >
                <BlogPostPreview post={post} />
              </Item>
            ))
          ) : (
            <Item
              gridColStart={1}
              gridColEnd={[9, 8, 10, 8, 6]}
              spacingBottom="golf"
            >
              <Text variant="secondary">
                There are currently no posts to display. Please check back soon
                once I have upped my blogging game. SMH!
              </Text>
            </Item>
          )}
        </Grid>
      </Section>
    </Layout>
  );
}

export default Blog;
