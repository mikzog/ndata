import cx from 'classnames';
import React from 'react';
import Spin from '../spin';

export type ButtonType = 'blue' | 'grey' | 'teal' | 'green' | 'red';

export interface ButtonProps {
  type?: ButtonType;
  outline?: boolean;
  loading?: boolean;
  full?: boolean;
}

export const Button: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = ({ children, onClick, type, outline, loading, full }) => {
  const buttonClasses = cx('nd-button', {
    blue: type === 'blue',
    grey: type === 'grey',
    teal: type === 'teal',
    green: type === 'green',
    red: type === 'red',
    [`${type}-outline`]: outline,
    full: full,
  });

  let component = (
    <button className={buttonClasses} onClick={onClick}>
      {children}
      {loading && <Spin small />}
    </button>
  );

  if (loading) {
    component = (
      <div className="nd-button-loading load-inline">{component}</div>
    );
  }

  return component;
};

Button.defaultProps = {
  loading: false,
  outline: false,
};

export default Button;
