import { Variants } from '../../../../types';

import { Text } from '../../..';
import {
  StyledContainer,
  StyledSvg,
  StyledCircleGrey,
  StyledCircleColor,
} from './styled';

type Props = {
  messageMaxLength: number;
  charsEntered: number;
  variant: Variants;
};

export const Counter = (props: Props) => {
  const { messageMaxLength, charsEntered, variant = 'secondary' } = props;
  const charsRemaining = messageMaxLength - charsEntered;
  return (
    <StyledContainer>
      <Text as="p" noSpacingBottom variant={variant}>
        {`Characters remaining: ${charsRemaining}`}
      </Text>
      <StyledSvg>
        <StyledCircleGrey />
        <StyledCircleColor
          messageMaxLength={messageMaxLength}
          charsRemaining={charsRemaining}
        />
      </StyledSvg>
    </StyledContainer>
  );
};
