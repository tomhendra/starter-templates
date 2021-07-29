/** @jsxImportSource theme-ui */
export interface BioProps {
  heading: string;
  text?: React.ReactNode;
}

export function Bio({ heading, text, ...props }: BioProps) {
  return (
    <div {...props}>
      <h1>{heading}</h1>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
