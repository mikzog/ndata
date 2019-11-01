import _mapValues from 'lodash/mapValues';
import React, { useState } from 'react';
import { Button, Checkbox, Col, Row } from 'components/ui';
import Input, { InputGroup } from 'components/ui/input';
import { EmailIcon, LockIcon } from 'components/ui/icons';

export type TFormField = {
  value?: string;
  error?: string;
};

export type TFormFields = {
  email?: TFormField;
  password?: TFormField;
};

export type TFormValues = {
  email?: string;
  password?: string;
};

interface LoginFormProps {
  loading?: boolean;
  onLogin: (values: TFormValues) => void;
  onChange?: (values: TFormValues) => void;
}

// TODO: Implement form validation
function getValidation(fieldName: string, fieldValue: string) {
  return undefined;
}

function getFormValue(fields: TFormFields): TFormValues {
  return _mapValues(fields, (field: TFormField) => field.value);
}

export const LoginForm: React.FC<LoginFormProps> = ({
  loading,
  onLogin,
  onChange,
}) => {
  const [fields, setFields] = useState({});

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName) {
      setFields({
        ...fields,
        [fieldName]: {
          value: fieldValue,
          error: getValidation(fieldName, fieldValue),
        },
      });
    }
  };

  const handleLogin = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const formValue = getFormValue(fields);
    onLogin(formValue);
  };

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    if (onChange) {
      const formValue = getFormValue(fields);
      onChange(formValue);
    }
  };

  return (
    <form className="auth-form" method="post" onChange={handleChange}>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        autoComplete="email"
        prefix={<EmailIcon />}
        onChange={handleFieldChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="current-password"
        prefix={<LockIcon />}
        onChange={handleFieldChange}
      />
      <InputGroup>
        <Row>
          <Col sm={7} xs={7}>
            <Checkbox>Remember me</Checkbox>
          </Col>
          <Col sm={5} xs={5} className="text-right">
            <a href="forgot-password.html" className="forgot-password">
              Forgot password?
            </a>
          </Col>
        </Row>
      </InputGroup>
      <InputGroup>
        <Button full color="blue" loading={loading} onClick={handleLogin}>
          Login
        </Button>
      </InputGroup>
    </form>
  );
};

export default LoginForm;
