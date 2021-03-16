export function Container<P>(props: P) {
  return (
    <div
      {...props}
      css={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
      }}
    />
  );
}
