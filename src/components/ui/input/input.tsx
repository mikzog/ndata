import cx from 'classnames';
import React from 'react';
import './input.css';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  prefix?: any;
  suffix?: any;
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, prefix, ...props }) => {
  let component = (
    <input
      className={cx('nd-input', {
        error,
      })}
      {...props}
    />
  );

  if (error) {
    component = (
      <>
        {component}
        <div className="error">{error}</div>
      </>
    );
  }

  if (prefix) {
    component = (
      <div className="nd-input-group">
        <div className="input-icon">
          <i className="nd-svg-icon">{prefix}</i>
        </div>
        {component}
      </div>
    );
  }

  return component;
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
