import React from 'react';
import ContentLoader from 'react-content-loader';

const PageLoader = () => (
  <ContentLoader
    height={160}
    width={1000}
    speed={1}
    primaryColor="#e1e1e1"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="4" rx="4" ry="4" width="200" height="10" />
    <rect x="0" y="24" rx="4" ry="4" width="800" height="10" />
  </ContentLoader>
);

export default PageLoader;
