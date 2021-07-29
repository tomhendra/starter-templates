import {
  Layout,
  SEO,
  Section,
  Grid,
  Item,
  Heading,
  Text,
  InlineLink,
} from 'components';

function NotFound() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Section variant="primary" fullViewportHeight>
        <Grid>
          <Item
            gridColStart={[1, 2, 3, 4, 4]}
            gridColEnd={[9, 8, 10, 10, 9]}
            spacingBottom="golf"
          >
            <Heading variant="primary" as="h1">
              404: Uh oh, something went wrong!
            </Heading>
            <Text variant="primary" noSpacingBottom>
              The page you requested could not be found. Sorry about that!
              Nobody likes to be lost, but do not fear, there is&nbsp;
              <InlineLink internalLink="/">a way back home</InlineLink>
              ...
            </Text>
          </Item>
        </Grid>
      </Section>
    </Layout>
  );
}

export default NotFound;
