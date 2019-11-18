import cx from 'classnames';
import React from 'react';
import './input.css';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  prefix?: any;
  suffix?: any;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  prefix,
  required,
  ...props
}) => {
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

  if (prefix || label) {
    component = (
      <div className="nd-input-group">
        {label && (
          <label className="nd-label">
            {label}
            {required && <span style={{ color: 'red' }}>{` `}*</span>}
          </label>
        )}
        {prefix && (
          <div className="input-icon">
            <i className="nd-svg-icon">{prefix}</i>
          </div>
        )}
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
