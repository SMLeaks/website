import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import { useHistory, useLocation } from '@docusaurus/router';
import useRouteContext from '@docusaurus/useRouteContext';
import registry from '@generated/docusaurus.config'
import { useAllPluginInstancesData, usePluginData } from '@docusaurus/useGlobalData';
export default function BlogSidebarDesktop({ sidebar }) {
  const path = useLocation();
  const plugin = useRouteContext();
  const paths = usePluginData('docusaurus-smleaks-internal-plugin')
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {path.pathname === paths[plugin.plugin.id] ? (
            <>{sidebar.title}</>
          ) : (
            <Link to={paths[plugin.plugin.id]}>
              {sidebar.title}
            </Link>
          )}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
