import cx from 'classnames';
import React from 'react';
import { ArrowDownIcon } from 'components/ui/icons';
import '../input/input.css';

export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  prefix,
  required,
  placeholder,
  children,
  ...props
}) => {
  console.log({ props });
  let component = (
    <>
      <select
        className={cx('nd-input', {
          error,
        })}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <div className="nd-caret">
        <ArrowDownIcon />
      </div>
    </>
  );

  if (error) {
    component = (
      <>
        {component}
        <div className="error">{error}</div>
      </>
    );
  }

  if (label) {
    component = (
      <div className="nd-input-group">
        {label && (
          <label className="nd-label">
            {label}
            {required && <span style={{ color: 'red' }}>{` `}*</span>}
          </label>
        )}
        <div className="nd-select-group">{component}</div>
      </div>
    );
  }

  return component;
};

Select.defaultProps = {
  type: 'text',
};

export default Select;
