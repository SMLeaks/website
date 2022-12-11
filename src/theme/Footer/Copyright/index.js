import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
export default function FooterCopyright({copyright}) {
  let date = new Date(useDocusaurusContext().siteConfig.customFields.build.date);
  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: copyright.replace(date.getFullYear(), new Date().getFullYear())}}
    />
  );
}
