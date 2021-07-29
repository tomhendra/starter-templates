import { useTechStack } from '../../hooks';

import {
  StyledGrid,
  StyledContainer,
  StyledTooltip,
  StyledImg,
} from './styled';
import { TechStackHookData } from 'types';

type Props = {
  gridSize: 'alpha' | 'delta';
  stack?: string[];
  noSpacingBottom?: boolean;
};

// Component must be passed an array of techstack titles
export const TechStack = (props: Props) => {
  const { gridSize, stack, noSpacingBottom } = props;
  const allStack = useTechStack();

  // verify whether complete stack or filtered stack should be displayed
  const stackToDisplay = !stack
    ? allStack
    : allStack.filter((tech: TechStackHookData) => stack.includes(tech.title));
  // specify order of categories MANUALLY(!!) to display techstack grouped by category
  const orderToDisplay = [
    'Languages',
    'Libraries',
    'Frameworks',
    'CSS',
    'Testing',
    'Tools',
    'CMS',
    'Deployment',
    'Databases',
  ];
  // sort stack based on category
  const stackGroupedByCategory = stackToDisplay.sort(
    (a: TechStackHookData, b: TechStackHookData) => {
      const orderToDisplayA = orderToDisplay.indexOf(a.category);
      const orderToDisplayB = orderToDisplay.indexOf(b.category);

      return orderToDisplayA - orderToDisplayB;
    },
  );
  // verify which size image to use from useTechStack() based on value of gridSize
  // moved here for better performance over being inside map() below
  // as to not check the value of gridSize on every iteration!
  const logoSize = gridSize === 'alpha' ? 'logoMedium' : 'logoLarge';

  return (
    <StyledGrid gridSize={gridSize} noSpacingBottom={noSpacingBottom}>
      {stackGroupedByCategory.map((tech: TechStackHookData) => (
        <StyledContainer key={tech.id}>
          <StyledTooltip>{tech.title}</StyledTooltip>
          <StyledImg fixed={tech[logoSize]} alt={tech.alt} />
        </StyledContainer>
      ))}
    </StyledGrid>
  );
};
