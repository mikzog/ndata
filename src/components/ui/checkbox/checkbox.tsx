import _uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, children }) => {
  const [id] = useState(_uniqueId('nd-checkbox-'));
  const [checkedState, setCheckedState] = useState(checked);

  function handleChange() {
    const newValue = !checkedState;
    setCheckedState(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }

  return (
    <>
      <div className="nd-check">
        <input
          id={id}
          type="checkbox"
          defaultChecked={checkedState}
          onChange={handleChange}
        />
        <label htmlFor={id} className="nd-check-label">
          <svg
            aria-hidden="true"
            width="13"
            height="13"
            version="1.1"
            viewBox="0 0 26 26"
          >
            <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"></path>
          </svg>
        </label>
      </div>
      <label>{children}</label>
    </>
  );
};

export default Checkbox;
