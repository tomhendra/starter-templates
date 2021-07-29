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
  Card,
  Icon,
  TechStack,
} from 'components';

function Home() {
  return (
    <Layout>
      <SEO title="Software Developer" />
      <Section fullViewportHeight centerContentVertically variant="primary">
        <Grid>
          <Item
            gridColStart={[1, 2, 4, 4, 4]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom={['india', 'golf']}
          >
            <Heading as="h1" variant="primary">
              Hola, I am Tom.
            </Heading>
            <Text feature noSpacingBottom variant="primary">
              I’m a software developer from the UK living in Spain. I am
              passionate about code, design &amp; food!
            </Text>
          </Item>
          <Item gridColStart={[2, 2, 4, 4, 4]} gridColEnd={[8, 8, 10, 10, 8]}>
            <ButtonGroup>
              <Button
                internalLink="/projects/"
                variant="secondary"
                size="bravo"
              >
                Projects
              </Button>
              <Button internalLink="/contact/" variant="primary" size="bravo">
                Contact
              </Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </Section>
      <Section variant="secondary">
        <Grid>
          <Item
            gridColStart={1}
            gridColEnd={[9, 8, 9, 8, 6]}
            spacingBottom="hotel"
          >
            <Heading as="h2" variant="secondary">
              About me.
            </Heading>
            <Text variant="secondary">
              I am at my happiest when crafting buttery smooth web experiences.
              I take pride in continuously learning new skills from the experts
              who shape the modern web.
            </Text>
            <Text noSpacingBottom variant="secondary">
              When I am not in the land of code, I am either immersing myself in
              the wonderful culture & cuisine of Spain or lifting heavy things
              at the gym.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 2, 3, 4, 1]}
            gridColEnd={[9, 8, 11, 10, 5]}
            spacingBottom={['golf', 'golf', 'hotel', 'hotel', 0]}
          >
            {' '}
            <Card
              variant="primary"
              accent="accentAlpha"
              padding={['foxtrot', 'foxtrot', 'golf', 'golf', 'golf']}
              paddingTop={['hotel', 'hotel', 'india', 'hotel', 'india']}
              paddingBottom={['foxtrot', 'foxtrot', 'golf', 'golf', 'hotel']}
            >
              <Icon
                type="PenTool"
                color="accentAlpha"
                size="india"
                spacingBottom="delta"
              />
              <Heading as="h3" variant="primary">
                Design
              </Heading>
              <Text noSpacingBottom variant="primary">
                I have a keen eye for design and know my way around industry
                standard tools like Sketch & the Adobe Creative Suite. I am a
                coder who appreciates the designer things in life.
              </Text>
            </Card>
          </Item>
          <Item
            gridColStart={[1, 2, 3, 4, 5]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom={['golf', 'golf', 'hotel', 'hotel', 0]}
          >
            <Card
              variant="primary"
              accent="accentAlpha"
              padding={['foxtrot', 'foxtrot', 'golf', 'golf', 'golf']}
              paddingTop={['hotel', 'hotel', 'india', 'hotel', 'india']}
              paddingBottom={['foxtrot', 'foxtrot', 'golf', 'golf', 'hotel']}
            >
              <Icon
                type="Code"
                color="accentAlpha"
                size="india"
                spacingBottom="delta"
              />
              <Heading as="h3" variant="primary">
                Code
              </Heading>
              <Text noSpacingBottom variant="primary">
                My technical skill set is built upon the rich & diverse
                JavaScript ecosystem. My natural close attention to detail
                enhances my ability to write clean, well organized code.
              </Text>
            </Card>
          </Item>
          <Item gridColStart={[1, 2, 3, 4, 9]} gridColEnd={[9, 8, 11, 10, 13]}>
            <Card
              variant="primary"
              accent="accentAlpha"
              padding={['foxtrot', 'foxtrot', 'golf', 'golf', 'golf']}
              paddingTop={['hotel', 'hotel', 'india', 'hotel', 'india']}
              paddingBottom={['foxtrot', 'foxtrot', 'golf', 'golf', 'hotel']}
            >
              <Icon
                type="Briefcase"
                color="accentAlpha"
                size="india"
                spacingBottom="delta"
              />
              <Heading as="h3" variant="primary">
                Business
              </Heading>
              <Text noSpacingBottom variant="primary">
                I was a procurement professional before becoming a web
                developer, instilling stackable skills like business acumen,
                commercial awareness and project management prowess.
              </Text>
            </Card>
          </Item>
        </Grid>
      </Section>
      <Section variant="tertiary">
        <Grid>
          <Item gridColStart={1} gridColEnd={[9, 8, 9, 8, 6]}>
            <Heading as="h1" variant="tertiary">
              My skills.
            </Heading>
            <Text variant="tertiary">
              I get excited about using the latest technologies and strive to
              build websites & apps that are accessible, performant, scalable
              and lightning fast.
            </Text>
            <Text noSpacingBottom variant="tertiary">
              I enjoy a modern tech stack based around React.js, and am
              continuously adding new skills to my toolbox. A committed
              developer never stops learning, a challenge I embrace
              wholeheartedly.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 1, 1, 1]}
            gridColEnd={[9, 9, 13, 13, 13]}
            spacingTop={['golf', 'golf', 'india', 'india', 'india']}
          >
            <TechStack gridSize="delta" noSpacingBottom />
          </Item>
        </Grid>
      </Section>
      <Section
        centerContentVertically
        paddingTop={['juliett', 'juliett', 'lima', 'lima', 'lima']}
        paddingBottom={['juliett', 'juliett', 'lima', 'lima', 'mike']}
        variant="primary"
      >
        <Grid>
          <Item
            gridColStart={[1, 2, 3, 3, 4]}
            gridColEnd={[9, 8, 11, 10, 9]}
            spacingBottom="golf"
          >
            <Heading as="h2" variant="primary">
              Where to go from here?
            </Heading>
            <Text feature noSpacingBottom variant="primary">
              I’ve been building stuff. You can see what I have been up to on
              my&nbsp;
              <InlineLink internalLink="/projects/">projects page</InlineLink>
              .&nbsp;Or&nbsp;
              <InlineLink internalLink="/contact/">let’s connect</InlineLink>
              &nbsp;if you have seen enough already!
            </Text>
          </Item>
          <Item gridColStart={[2, 2, 3, 3, 4]} gridColEnd={[8, 8, 9, 9, 8]}>
            <ButtonGroup>
              <Button
                internalLink="/projects/"
                variant="secondary"
                size="bravo"
              >
                Projects
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
}

export default Home;
