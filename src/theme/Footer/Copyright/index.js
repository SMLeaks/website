import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
export default function FooterCopyright({ copyright }) {
  let context = useDocusaurusContext();
  let date = new Date(context.siteConfig.customFields.build.date);
  return (
    <>
      <span className="footer__copyright">
        {copyright.replace(date.getFullYear(), new Date().getFullYear())}
      </span>
      {' | '}
      <a href={`https://github.com/${context.siteConfig.organizationName}/${context.siteConfig.projectName}/releases/tag/v${context.siteMetadata.siteVersion}`}>
        v{context.siteMetadata.siteVersion}
        {context.siteConfig.customFields.build.branch ? `-${context.siteConfig.customFields.build.branch}` : ''}
        {context.siteConfig.customFields.build.commit ? `+${context.siteConfig.customFields.build.commit}` : ''}
      </a>
    </>
  );
}
