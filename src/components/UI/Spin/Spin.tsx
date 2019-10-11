import cx from 'classnames';
import React from 'react';

interface SpinProps {
  small?: boolean;
  show?: boolean;
}

export const Spin: React.FC<SpinProps> = ({ show, small }) => {
  const spinClasses = cx('nd-loader', {
    show: show,
    small: small,
  });

  return (
    <div className={spinClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

Spin.defaultProps = {
  show: true,
  small: false,
};

export default Spin;
