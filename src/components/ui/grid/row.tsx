import React from 'react';

interface RowProps {
  className?: string;
}

const Row: React.FC<RowProps> = ({ className, children }) => {
  return <div className={`nd-row ${className}`}>{children}</div>;
};

export default Row;
