/** @jsxImportSource theme-ui */
import { Icon } from '.';

export interface MiniCardProps {
  icon: string;
  iconColor?: string;
  heading: string;
  text: string;
}

export function MiniCard({
  icon,
  iconColor,
  heading,
  text,
  ...props
}: MiniCardProps) {
  return (
    <div {...props}>
      <div>
        <Icon />
      </div>
      <div>
        <p>{heading}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
