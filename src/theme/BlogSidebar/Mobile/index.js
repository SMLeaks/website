import React from 'react';
import Link from '@docusaurus/Link';
import { NavbarSecondaryMenuFiller } from '@docusaurus/theme-common';
import useRouteContext from '@docusaurus/useRouteContext';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';

function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  const path = useLocation();
  const plugin = useRouteContext();
  const paths = usePluginData('docusaurus-smleaks-internal-plugin');
  return (
    <ul className="menu__list">
      <li key={paths[plugin.plugin.id]} className="menu__list-item">
        <Link
          isNavLink={path.pathname === paths[plugin.plugin.id]}
          to={paths[plugin.plugin.id]}
          className="menu__link"
          activeClassName="menu__link--active">
          All {sidebar.title.split(' ').at(-1)}
        </Link>
      </li>
      {sidebar.items.map((item) => (
        <li key={item.permalink} className="menu__list-item">
          <Link
            isNavLink
            to={item.permalink}
            className="menu__link"
            activeClassName="menu__link--active">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}
