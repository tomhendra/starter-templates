/** @jsxImportSource theme-ui */
import { Icon } from '.';

export interface SearchBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchBox({ ...props }: SearchBoxProps) {
  return (
    <div>
      <input placeholder="Type to search..." {...props} />
      <div>
        <Icon />
      </div>
    </div>
  );
}
