import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import Head from '@docusaurus/Head';

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <BlogPostPage {...props} />
    </>
  );
}
