import React from 'react';
import { useField } from 'formik';
import Select, { SelectProps } from 'components/ui/select/select';

interface OwnProps {
  name: string;
}
export const SelectField: React.FC<SelectProps & OwnProps> = props => {
  const [field, meta] = useField(props.name);

  return (
    <Select
      {...field}
      {...props}
      error={meta.touched && meta.error ? meta.error : undefined}
    />
  );
};

export default SelectField;
