import React from 'react';
import './input-group.css';

interface InputGroupProps {
  title?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <div className="nd-input-group" {...props}>
      {title && <div className="nd-input-group__title">{title}</div>}
      {children}
    </div>
  );
};

export default InputGroup;
