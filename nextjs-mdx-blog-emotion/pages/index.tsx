import { Layout, SEO } from 'components';

function Home() {
  return (
    <>
      <SEO
        title="Tom Hendra"
        description="Software developer from the UK passionate about code and Spain."
      />
      <Layout>
        <section>
          <h1>Hello, I am Tom.</h1>
          <p>
            I’m a software developer from the UK currently located in sunny
            Spain.
          </p>
          <p>
            I perpetually learn, build web apps and write about what I discover.
          </p>
        </section>
      </Layout>
    </>
  );
}

export default Home;
