import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetadata } from 'types';

export function useSiteMetadata(): SiteMetadata {
  const sanityData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  if (!sanityData) {
    console.warn('No metadata fetched...');
  }

  return sanityData.site;
}
