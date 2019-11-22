import React from 'react';
import ContentLoader from 'react-content-loader';

interface Props {
  width?: number;
  height?: number;
}

const SectionLoader: React.FC<Props> = ({ height, width }) => {
  return (
    <ContentLoader height={height} width={width}>
      <rect x="0" y="0" rx="3" ry="3" width="750" height="10" />
      <rect x="20" y="20" rx="3" ry="3" width="620" height="10" />
      <rect x="20" y="40" rx="3" ry="3" width="270" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="750" height="10" />
      <rect x="20" y="80" rx="3" ry="3" width="600" height="10" />
      <rect x="20" y="100" rx="3" ry="3" width="180" height="10" />
    </ContentLoader>
  );
};

SectionLoader.defaultProps = {
  height: 200,
  width: 800,
};

export default SectionLoader;
