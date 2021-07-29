/** @jsxImportSource theme-ui */

export function Container<P>(props: P) {
  return (
    <div
      {...props}
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
      }}
    />
  );
}
