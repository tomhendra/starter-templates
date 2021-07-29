import { Grid, Item } from 'components';
import { StyledDivider, StyledFooter, StyledContainer } from './styled';
import { Copyright, Social, Navbar } from './components';

export function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <Grid>
          <Item
            gridColStart={[1, 1, 1, 1, 1]}
            gridColEnd={[9, 9, 5, 5, 3]}
            gridRowStart={[1, 1, 1, 1, 1]}
            gridRowEnd={[2, 2, 2, 2, 2]}
            spacingBottom={['delta', 'delta', 'foxtrot', 'foxtrot', 'charlie']}
            justifyContent="center"
          >
            <Copyright />
          </Item>
          <Item
            gridColStart={[1, 1, 1, 1, 1]}
            gridColEnd={[9, 9, 13, 13, 13]}
            gridRowStart={[3, 3, 2, 2, 2]}
            gridRowEnd={[4, 4, 3, 3, 3]}
            spacingBottom={['alpha', 'alpha', 'bravo', 'bravo', 'echo']}
          >
            <StyledDivider />
          </Item>
          <Item
            gridColStart={[1, 1, 5, 5, 1]}
            gridColEnd={[9, 9, 13, 13, 5]}
            gridRowStart={[2, 2, 1, 1, 3]}
            gridRowEnd={[3, 3, 2, 2, 4]}
            spacingBottom={['foxtrot', 'foxtrot', 'foxtrot', 'foxtrot', 0]}
          >
            <Social />
          </Item>
          <Item
            gridColStart={[1, 1, 2, 2, 6]}
            gridColEnd={[9, 9, 13, 13, 13]}
            gridRowStart={[4, 4, 3, 3, 3]}
            gridRowEnd={[5, 5, 4, 4, 4]}
          >
            <Navbar />
          </Item>
        </Grid>
      </StyledContainer>
    </StyledFooter>
  );
}
