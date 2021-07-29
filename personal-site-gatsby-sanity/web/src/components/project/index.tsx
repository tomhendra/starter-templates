import {
  Button,
  ButtonGroup,
  Section,
  Grid,
  Item,
  Heading,
  PortableText,
  TechStack,
} from '..';

import { StyledImg } from './styled';

import { ProjectTemplateQuery } from 'types';

type Props = {
  project: ProjectTemplateQuery;
};

export const Project = ({ project }: Props) => {
  const {
    title,
    mainImage,
    _rawPurpose,
    _rawObjective,
    _rawApproach,
    _rawTechstack,
    _rawRole,
    _rawCredits,
    repo,
    url,
  } = project;
  return (
    <Section variant="primary">
      <article>
        <Grid>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 9, 12, 7, 6]}
            spacingBottom={['echo', 'golf']}
          >
            <Heading noSpacingBottom as="h1" variant="primary">
              {title}
            </Heading>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 11]}
            gridRowStart={[2, 2, 2, 1, 1]}
            gridRowSpan={[1, 1, 1, 3, 3]}
            spacingBottom={['golf', 'golf', 'golf', 0, 0]}
          >
            {mainImage && mainImage.asset && (
              <StyledImg alt={mainImage.alt} fluid={mainImage.asset.fluid} />
            )}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 8, 10, 7, 6]}
            spacingBottom="foxtrot"
          >
            <Heading as="h2" variant="primary">
              Purpose.
            </Heading>
            {_rawPurpose && <PortableText blocks={_rawPurpose} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 8, 10, 7, 6]}
            spacingBottom="foxtrot"
          >
            <Heading as="h2" variant="primary">
              Objective.
            </Heading>
            {_rawObjective && <PortableText blocks={_rawObjective} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 1, 1]}
            gridColEnd={[9, 8, 10, 7, 6]}
            gridRowSpan={4}
            spacingBottom={[
              'foxtrot',
              'foxtrot',
              'foxtrot',
              'india',
              'foxtrot',
            ]}
          >
            <Heading as="h2" variant="primary">
              Approach.
            </Heading>
            {_rawApproach && <PortableText blocks={_rawApproach} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 12]}
            spacingBottom="foxtrot"
          >
            <Heading as="h2" variant="primary">
              Tech stack.
            </Heading>
            <TechStack
              gridSize="alpha"
              stack={_rawTechstack.map(item => item.title)}
            />
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 12]}
            spacingBottom="foxtrot"
          >
            <Heading as="h2" variant="primary">
              Role.
            </Heading>
            {_rawRole && <PortableText blocks={_rawRole} />}
          </Item>
          <Item
            gridColStart={[1, 1, 2, 8, 7]}
            gridColEnd={[9, 8, 10, 13, 12]}
            spacingBottom="foxtrot"
          >
            <Heading as="h2" variant="primary">
              Credits.
            </Heading>
            {_rawCredits && <PortableText blocks={_rawCredits} />}
          </Item>
          <Item gridColStart={[2, 1, 2, 1, 1]} gridColEnd={[8, 10, 11, 8, 6]}>
            <ButtonGroup>
              <Button variant="tertiary" size="alpha" internalLink="/projects/">
                Back to Projects
              </Button>
              <Button variant="secondary" size="alpha" externalLink={repo}>
                View Source
              </Button>
              <Button variant="primary" size="alpha" externalLink={url}>
                Launch App
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </article>
    </Section>
  );
};
