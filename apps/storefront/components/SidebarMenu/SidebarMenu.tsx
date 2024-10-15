'use client';
import { Button } from '@digdir/designsystemet-react';
import cl from 'clsx/lite';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { SiteConfig } from '../../siteConfig';
import type { PageMenuItemType } from '../../utils/menus/PageMenu';

import classes from './SidebarMenu.module.css';
interface SidebarMenuProps {
  routerPath: string;
}

/** Check if item path in menu is equal to the activeRouterPath */
const isItemActive = (path: string, activeRouterPath: string) => {
  return '/' + path === activeRouterPath;
};

const SidebarMenu = ({ routerPath }: SidebarMenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    findAndSetActiveIndex(routerPath);
  }, [routerPath]);

  /** Find at what index in the menu tree */
  const findAndSetActiveIndex = (path: string) => {
    path = path.replace("docs/", "").split("/")[1];
    for (let i = 0; i < SiteConfig.menu.length; i++) {
      if (SiteConfig.menu[i].url.replace("docs/", "") === path) {
        setActiveIndex(i);
      }
    }
  };

  if (activeIndex <= -1) {
    return null;
  }

  return (
    <div>
      <Button
        className={classes.toggleBtn}
        size='md'
        color='neutral'
        variant='secondary'
        onClick={() => setShowMenu(!showMenu)}
        aria-expanded={showMenu}
      >
        {showMenu ? 'Göm' : 'Visa'} sidemeny
      </Button>

      <div className={cl(classes.menu, showMenu && classes.activeMenu)}>
        <h3 className={cl(classes.title, 'ds-paragraph--md')}>
          {SiteConfig.menu[activeIndex].name}
        </h3>
        <ul className={classes.list}>
          {SiteConfig.menu[activeIndex].children.map(
            (item: PageMenuItemType, index) => (
              <li
                key={index}
                className={cl(classes.listGroup, {
                  [classes.listGroupCompact]: !item.children,
                })}
              >
                {item.children && (
                  <>
                    <div
                      className={cl(classes.innerTitle, 'ds-paragraph--md')}
                    >
                      {item.name}
                    </div>
                    <ul className={classes.innerList}>
                      {item.children.map(
                        (nestedMenuItem: PageMenuItemType, childIndex) => (
                          <li key={childIndex} className={classes.listItem}>
                            <Link
                              href={'/' + nestedMenuItem.url}
                              prefetch={false}
                              className={cl(
                                classes.link,
                                isItemActive(nestedMenuItem.url, routerPath) &&
                                classes.linkActive,
                                'ds-paragraph--sm',
                              )}
                            >
                              {nestedMenuItem.name}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </>
                )}
                {!item.children && (
                  <Link
                    href={'/' + item.url}
                    prefetch={false}
                    className={cl(
                      classes.link,
                      classes.linkCompact,
                      isItemActive(item.url, routerPath) &&
                      classes.linkActive,
                      'ds-paragraph--sm',
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export { SidebarMenu };
