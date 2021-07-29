import { NextSeo } from 'next-seo';
import { Layout } from '@components';
import { Box, Text } from 'theme-ui';

export default function HomePage() {
  return (
    <Layout>
      <NextSeo
        title="Tom Hendra"
        description="Software developer from the UK passionate about code and Spain."
      />
      <Box>
        <Text variant="lead">Hello!</Text>
      </Box>
    </Layout>
  );
}
