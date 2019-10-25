import cx from 'classnames';
import React from 'react';
import Spin from '../spin';

export type TButtonColor = 'blue' | 'grey' | 'teal' | 'green' | 'red';

export interface ButtonProps {
  color?: TButtonColor;
  outline?: boolean;
  loading?: boolean;
  full?: boolean;
}

export const Button: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = ({ children, onClick, color, outline, loading, full }) => {
  const buttonClasses = cx('nd-button', {
    blue: color === 'blue',
    grey: color === 'grey',
    teal: color === 'teal',
    green: color === 'green',
    red: color === 'red',
    [`${color}-outline`]: outline,
    full: full,
  });

  let component = (
    <button className={buttonClasses} onClick={onClick}>
      {children}
      {loading && <Spin small />}
    </button>
  );

  if (loading) {
    component = <div className="nd-button-loading">{component}</div>;
  }

  return component;
};

Button.defaultProps = {
  loading: false,
  outline: false,
};

export default Button;
