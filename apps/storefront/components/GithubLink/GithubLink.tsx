'use client';
import { Link } from '@digdir/designsystemet-react';
import { Github } from '@repo/components';
import { usePathname } from 'next/navigation';
import type { HTMLAttributes } from 'react';

import cl from 'clsx/lite';
import classes from './GithubLink.module.css';

const GithubLink = ({
  className,
  ...rest
}: Omit<HTMLAttributes<HTMLAnchorElement>, 'color'>) => {
  const pathName = usePathname();
  const href = `https://github.com/linus-jansson/designsystemet/tree/main/apps/storefront/app${pathName}/page.mdx`;

  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      {...rest}
      data-unstyled
      className={cl(classes.githubLink, className)}
    >
      <Github />
      Redigera denna sida på Github. (Öppnas i ny flik)
    </Link>
  );
};

export { GithubLink };
