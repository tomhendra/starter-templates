/** @jsxImportSource theme-ui */
import Slugger from 'github-slugger';

const slugger = new Slugger();

interface LinkedHeadingProps {
  is: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
}

export function LinkedHeading({
  is: Component,
  children,
  ...props
}: LinkedHeadingProps) {
  const id = slugger.slug(children);
  return (
    <Component id={id} {...props}>
      {children}
      <a href={`#${id}`} aria-label="anchor">
        #
      </a>
    </Component>
  );
}
