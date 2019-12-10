import cx from 'classnames';
import React from 'react';
import './col.css';

interface ColProps {
  className?: string;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  span?: number;
}

const Row: React.FC<ColProps> = ({ className, children, lg, md, sm, xs }) => {
  const colClasses = cx('nd-col', className, {
    [`ndlg-${lg}`]: lg,
    [`ndmd-${md}`]: md,
    [`ndsm-${sm}`]: sm,
    [`ndxs-${xs}`]: xs,
  });
  return <div className={colClasses}>{children}</div>;
};

Row.defaultProps = {};

export default Row;
