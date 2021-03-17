import theme from 'theme';

export function Container<P>(props: P) {
  return (
    <div
      {...props}
      css={{
        maxWidth: theme.sizes.container,
        margin: 'auto',
      }}
    />
  );
}
