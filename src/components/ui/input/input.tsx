import React from 'react';
import './input.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  prefix?: any;
  suffix?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ prefix, ...props }) => {
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

Input.defaultProps = {
  type: 'text',
};

export default Input;
