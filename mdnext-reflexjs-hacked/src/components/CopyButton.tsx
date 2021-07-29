/** @jsxImportSource theme-ui */
import * as React from 'react';
import copy from 'copy-to-clipboard';
import { Icon } from '.';

interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  label?: string;
  iconSize?: number | number[] | string | string[];
  children?: React.ReactNode;
}

export const CopyButton = ({
  value,
  label,
  iconSize = [4, 5],
  children,
  ...props
}: CopyButtonProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleClicked = () => {
    copy(value);
    setHasCopied(true);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <button onClick={handleClicked} {...props}>
      {children ? (
        children
      ) : hasCopied ? (
        <>
          <Icon /> {label && <span>Copied</span>}
        </>
      ) : (
        <>
          <Icon /> {label && <span>Copy {label}</span>}
        </>
      )}
      {/* <VisuallyHidden>Copy</VisuallyHidden> */}
    </button>
  );
};
