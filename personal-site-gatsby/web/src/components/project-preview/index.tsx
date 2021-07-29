import { Button, Card, Heading, Text } from '..';
import { StyledContainer, StyledImg } from './styled';

import { toPlainText } from 'utils';
import { ProjectHookData } from 'types';

type Props = {
  project: ProjectHookData;
};

export const ProjectPreview = ({ project }: Props) => (
  <Card
    variant="primary"
    justifyContent="space-between"
    padding={['foxtrot', 'foxtrot', 'foxtrot', 'golf']}
    alignItems="stretch"
  >
    <StyledContainer>
      <StyledImg fluid={project.mainImage} alt={project.alt} />
      <Heading as="h3" variant="primary">
        {project.title}
      </Heading>
      <Text as="p" noSpacingBottom variant="primary">
        {toPlainText(project.description)}
      </Text>
    </StyledContainer>
    <Button variant="tertiary" size="alpha" internalLink={project.slug}>
      More Details
    </Button>
  </Card>
);

export default ProjectPreview;
