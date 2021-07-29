import { graphql } from 'gatsby';

import { Layout, SEO, GraphQLErrors, BlogPost } from '../components';

// import { toPlainText } from '../utils/helpers';
import { BlogPostTemplateQuery } from '../types';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      _id
      title
      publishedAt
      mainImage {
        asset {
          fluid(maxHeight: 512) {
            ...GatsbySanityImageFluid
          }
        }
        alt
        caption
      }
      categories {
        _id
        title
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

type Props = {
  data: {
    post: BlogPostTemplateQuery;
  };
  errors: { message: string }[];
};

const BlogPostTemplate = ({ data, errors }: Props) => {
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          // description={toPlainText(post._rawExcerpt)}
          // image={post.mainImage}
        />
      )}
      {errors && <GraphQLErrors errors={errors} />}
      {post && <BlogPost post={post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
