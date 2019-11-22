import cx from 'classnames';
import React from 'react';

interface Props {
  className?: string;
}

export const Content: React.FC<Props> = ({ className, children }) => {
  return <div className={cx('nd-content', className)}>{children}</div>;
};

export default Content;
