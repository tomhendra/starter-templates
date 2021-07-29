import { Heading, Section } from '..';

// TODO: --------> Look into type for errors from GraphQL

type Props = {
  errors: { message: string }[];
};

export const GraphQLErrors = ({ errors }: Props) => (
  <Section variant="primary">
    <Heading as="h2" variant="primary">
      GraphQL Error
    </Heading>
    {errors.map(error => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </Section>
);
