import Img from 'gatsby-image';
import { format, formatDistance, differenceInDays } from 'date-fns';
import { Section, Grid, Item, PortableText, Heading } from 'components';
import { StyledList } from './styled';
import { BlogPostTemplateQuery } from 'types';

interface Props {
  post: BlogPostTemplateQuery;
}

export function BlogPost({ post }: Props) {
  const { _rawBody, title, mainImage, publishedAt, categories } = post;
  return (
    <Section variant="primary">
      <article>
        <Grid>
          <Item gridColStart={[1, 1, 1, 3, 3]} gridColEnd={[9, 9, 12, 11, 10]}>
            <Heading as="h1" variant="primary">
              {title}
            </Heading>
            {publishedAt && (
              <Heading noSpacingBottom as="h5" variant="primary">
                Posted&nbsp;
                {differenceInDays(new Date(), new Date(publishedAt)) > 5
                  ? format(new Date(publishedAt), 'do MMMM, yyyy')
                  : formatDistance(new Date(publishedAt), new Date(), {
                      addSuffix: true,
                    })}
              </Heading>
            )}
            {mainImage && mainImage.asset && (
              <Img alt={mainImage.alt} fluid={mainImage.asset.fluid} />
            )}
          </Item>
          <Item gridColStart={[1, 1, 1, 3, 3]} gridColEnd={[9, 9, 11, 11, 10]}>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </Item>
          <Item gridColStart={[1, 1, 1, 3, 3]} gridColEnd={[9, 9, 11, 11, 10]}>
            <aside>
              {categories && (
                <StyledList>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </StyledList>
              )}
            </aside>
          </Item>
        </Grid>
      </article>
    </Section>
  );
}
