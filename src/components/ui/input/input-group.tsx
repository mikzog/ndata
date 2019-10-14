import React from 'react';

interface InputGroupProps {}

export const InputGroup: React.FC<InputGroupProps> = ({ children }) => {
  return <div className="nd-input-group">{children}</div>;
};

export default InputGroup;
