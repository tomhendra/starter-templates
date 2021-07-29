import { graphql, useStaticQuery } from 'gatsby';
import { TechStackHookQuery, TechStackHookData } from 'types';

export function useTechStack(): TechStackHookData[] {
  const sanityData = useStaticQuery(graphql`
    query {
      techStack: allSanityTechnology(sort: { fields: title, order: ASC }) {
        edges {
          node {
            _id
            title
            category {
              title
            }
            logo {
              asset {
                logoUrl: url
                small: fixed(width: 24) {
                  ...GatsbySanityImageFixed
                }
                medium: fixed(width: 32) {
                  ...GatsbySanityImageFixed
                }
                large: fixed(width: 64) {
                  ...GatsbySanityImageFixed
                }
              }
              alt
            }
          }
        }
      }
    }
  `);

  if (!sanityData) {
    console.error('No tech stack data fetched...');
  }

  return sanityData.techStack.edges.map(
    ({ node }: { node: TechStackHookQuery }) =>
      node && {
        id: node._id,
        title: node.title,
        category: node.category.title,
        logoSmall: node.logo.asset.small,
        logoMedium: node.logo.asset.medium,
        logoLarge: node.logo.asset.large,
        logoUrl: node.logo.asset.logoUrl,
        alt: node.logo.alt,
      },
  );
}

export default useTechStack;
