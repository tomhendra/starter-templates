import {
  Button,
  ButtonGroup,
  Layout,
  SEO,
  Section,
  Grid,
  Item,
  Heading,
  Text,
  InlineLink,
  ProjectPreview,
} from 'components';

import { useProjects } from 'web/src/hooks';
import { ProjectHookData } from 'types';

const Projects = () => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO title="Projects" />
      <Section variant="secondary">
        <Grid>
          <Item
            gridColStart={1}
            gridColEnd={[9, 8, 9, 8, 6]}
            spacingBottom="hotel"
          >
            <Heading as="h1" variant="secondary">
              My projects.
            </Heading>
            <Text variant="secondary">
              I specialize in front end development and have a bit of a thing
              for clean design & motion. I&apos;ve recently been focusing on
              building web apps with React.
            </Text>
            <Text noSpacingBottom variant="secondary">
              For my next journey into the unknown, I intend to explore 3D
              animated data visualizations, so you can expect to see some really
              fancy stuff appear on this page soon.
            </Text>
          </Item>
        </Grid>
        <Grid withRowGaps>
          {projects.length ? (
            projects.map((project: ProjectHookData) => (
              <Item gridColSpan={[8, 8, 6, 6, 4]} key={project.id}>
                <ProjectPreview project={project} />
              </Item>
            ))
          ) : (
            <Item
              gridColStart={1}
              gridColEnd={[9, 8, 10, 8, 6]}
              spacingBottom="golf"
            >
              <Heading as="h2" variant="secondary">
                There are no projects to display. Please check back soon!
              </Heading>
            </Item>
          )}
        </Grid>
      </Section>
      <Section
        centerContentVertically
        paddingTop={['juliett', 'lima']}
        paddingBottom={['juliett', 'lima', 'lima', 'mike']}
        variant="primary"
      >
        <Grid>
          <Item
            gridColStart={[1, 2, 3, 3, 4]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom="golf"
          >
            <Heading as="h2" variant="primary">
              Oh, but there’s more…
            </Heading>
            <Text feature noSpacingBottom variant="primary">
              I’ve started a blog! If you’d like to read about things I feel
              inspired enough to write about, check out the&nbsp;
              <InlineLink internalLink="/blog/">Blog Page</InlineLink>
              .&nbsp;Or if you’d rather get straight to business, just hit that
              contact button!
            </Text>
          </Item>
          <Item gridColStart={[2, 2, 3, 3, 4]} gridColEnd={[8, 8, 9, 9, 8]}>
            <ButtonGroup>
              <Button internalLink="/blog/" variant="secondary" size="bravo">
                Blog
              </Button>
              <Button internalLink="/contact/" variant="primary" size="bravo">
                Contact
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </Section>
    </Layout>
  );
};

export default Projects;
