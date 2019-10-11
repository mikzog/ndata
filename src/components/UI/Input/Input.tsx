import React from 'react';
import './Input.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  prefix?: any;
  suffix?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ prefix, ...props }) => {
  let component = <input className="nd-input" {...props} />;

  if (prefix) {
    component = (
      <div className="nd-input-group nd-input-icon">
        {component}
        <div className="nd-input-prefix">{prefix}</div>
      </div>
    );
  }

  return component;
};

export default Input;
