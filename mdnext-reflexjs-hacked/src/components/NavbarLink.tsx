/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface NavbarLinkProps {
  href: string;
  activePathNames?: string[];
  children: React.ReactNode;
}

export function NavbarLink({
  href,
  activePathNames,
  children,
  ...props
}: NavbarLinkProps) {
  const { pathname } = useRouter();
  return (
    <Link href={href} passHref>
      <a {...props}>{children}</a>
    </Link>
  );
}
