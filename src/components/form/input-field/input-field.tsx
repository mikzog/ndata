import React from 'react';
import { useField } from 'formik';
import Input, { InputProps } from 'components/ui/input/input';

interface OwnProps {
  name: string;
}
export const InputField: React.FC<InputProps & OwnProps> = props => {
  const [field, meta] = useField(props.name);

  return (
    <Input
      {...field}
      {...props}
      error={meta.touched && meta.error ? meta.error : undefined}
    />
  );
};

export default InputField;
