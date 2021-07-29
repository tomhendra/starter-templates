import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import { FigureType } from 'types';
import * as sanityConfig from '../../../sanity-config';
import { Text } from 'components';
import { StyledImage } from './styled';

// const sanityConfig = require('/sanity-config');

export const Figure = ({ node }: FigureType) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 675 },
    sanityConfig,
  );

  return (
    <figure css={theme => ({ margin: `${theme.spacings.golf} 0` })}>
      <StyledImage fluid={fluidProps} alt={node.alt} />
      <Text
        variant="secondary"
        as="figcaption"
        css={theme => ({ marginTop: theme.spacings.charlie })}
      >
        <figcaption>{node.caption}</figcaption>
      </Text>
    </figure>
  );
};
