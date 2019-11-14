import React from 'react';
import NDataIconSVG from 'assets/img/ndata-icon.svg';
import './page-logo-loader.css';

interface Props {}

export const PageLogoLoader: React.FC<Props> = () => {
  return (
    <div className="PageLogoLoader">
      <img src={NDataIconSVG} alt="NData - loading..." />
    </div>
  );
};

export default PageLogoLoader;
