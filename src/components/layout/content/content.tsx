import React from 'react';

interface Props {}

export const Content: React.FC<Props> = ({ children }) => {
  return <div className="nd-content nd-rules-detail">{children}</div>;
};

export default Content;
