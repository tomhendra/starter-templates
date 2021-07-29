import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { withMediaQueries } from 'utils';

import { Children } from 'types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={theme =>
      withMediaQueries(theme)({
        marginBottom: [
          theme.spacings.foxtrot,
          theme.spacings.foxtrot,
          theme.spacings.foxtrot,
          theme.spacings.golf,
          theme.spacings.golf,
        ],
      })
    }
  >
    {children}
  </div>
);

export const StyledImg = styled(Img)(({ theme }) =>
  withMediaQueries(theme)({
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
    ],
  }),
);
