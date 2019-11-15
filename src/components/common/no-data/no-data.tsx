import React from 'react';
import NoDetectionSVG from 'assets/img/no-detection.svg';

interface Props {
  thumbnail?: React.ReactElement;
  title?: string;
  description?: string;
}

export const NoData: React.FC<Props> = ({
  title,
  thumbnail,
  description,
  children,
}) => {
  return (
    <div className="nd-noData">
      {thumbnail}
      <h3>{title}</h3>
      <p>{description} </p>
      {children}
    </div>
  );
};

NoData.defaultProps = {
  thumbnail: <img alt="No data" src={NoDetectionSVG} />,
  title: 'No Data!',
};

export default NoData;
