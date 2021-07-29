import { Children } from 'types';

interface Props {
  children: Children;
}

export function Wrapper({ children }: Props) {
  return (
    <div
      css={{
        minHeight: '100vh',
        minWidth: '100vw',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}
