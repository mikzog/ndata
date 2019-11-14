import cx from 'classnames';
import React from 'react';

interface RowProps {
  className?: string;
}

const Row: React.FC<RowProps> = ({ className, children }) => {
  return <div className={cx(className, 'nd-row')}>{children}</div>;
};

export default Row;
