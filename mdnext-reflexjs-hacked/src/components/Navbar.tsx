/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { ModeToggle, NavbarLink } from '.';
import config from '@config';
import { Flex } from 'theme-ui';

export function Navbar({ ...props }) {
  return (
    <header {...props}>
      <div>
        <Link href="/" passHref>
          <a>{config.site.name}</a>
        </Link>
        <Flex>
          <div>
            {config.links.map((link) => (
              <NavbarLink key={link.url} href={link.url}>
                {link.title}
              </NavbarLink>
            ))}
          </div>
          <ModeToggle />
        </Flex>
      </div>
    </header>
  );
}
