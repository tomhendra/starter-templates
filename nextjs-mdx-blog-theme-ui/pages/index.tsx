import { Layout, SEO } from '@components';
import { Styled } from 'theme-ui';

function Home() {
  return (
    <>
      <SEO
        title="Tom Hendra"
        description="Software developer from the UK passionate about code and Spain."
      />
      <Layout>
        <section>
          <Styled.h1>Hello, I am Tom.</Styled.h1>
          <Styled.p>
            I’m a software developer from the UK currently located in sunny
            Spain.
          </Styled.p>
          <Styled.p>
            I perpetually learn, build web apps and write about what I discover.
          </Styled.p>
        </section>
      </Layout>
    </>
  );
}

export default Home;
