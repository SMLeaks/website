import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
export default function FooterCopyright({copyright}) {
  let date = useDocusaurusContext().siteConfig.customFields.build.date;
  let year = new Date(date).getFullYear();
  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: copyright.replace(year, new Date().getFullYear())}}
    />
  );
}
