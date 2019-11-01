import _mapValues from 'lodash/mapValues';
import React, { useState } from 'react';
import { Button, Col, Row } from 'components/ui';
import Input, { InputGroup } from 'components/ui/input';
import {
  CompanyIcon,
  EmailIcon,
  LockIcon,
  UserIcon,
} from 'components/ui/icons';

export type TFormField = {
  value?: string;
  error?: string;
};

export type TFormFields = {
  [key: string]: TFormField;
};

export type TFormValues = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
  companyName?: string;
  firstName?: string;
  lastName?: string;
};

interface Props {
  onSignUp: (formValue: TFormValues) => void;
}

// TODO: Implement form validation
function getValidation(fieldName: string, fieldValue: string) {
  return undefined;
}

function getFormValue(fields: TFormFields): TFormValues {
  return _mapValues(fields, (field: TFormField) => field.value);
}

export const SignUpForm: React.FC<Props> = props => {
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

  const handleSignUp = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const formValue = getFormValue(fields);
    props.onSignUp(formValue);
  };

  return (
    <form className="auth-form" method="post" onSubmit={handleSignUp}>
      <Row>
        <Col sm={12} xs={12}>
          <Input
            type="email"
            name="email"
            prefix={<EmailIcon />}
            placeholder="Email"
            onChange={handleFieldChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} xs={12}>
          <Input
            name="companyName"
            prefix={<CompanyIcon />}
            placeholder="Company name"
            onChange={handleFieldChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} xs={12}>
          <Input
            name="username"
            autoComplete="username"
            prefix={<UserIcon />}
            placeholder="Username"
            onChange={handleFieldChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <Input
            name="firstName"
            autoComplete="given-name"
            prefix={<UserIcon />}
            placeholder="First name"
            onChange={handleFieldChange}
          />
        </Col>
        <Col sm={6} xs={12}>
          <Input
            name="lastName"
            autoComplete="family-name"
            prefix={<UserIcon />}
            placeholder="Last name"
            onChange={handleFieldChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <Input
            type="password"
            name="password"
            autoComplete="new-password"
            prefix={<LockIcon />}
            placeholder="Enter password"
            onChange={handleFieldChange}
          />
        </Col>
        <Col sm={6} xs={12}>
          <Input
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            prefix={<LockIcon />}
            placeholder="Confirm password"
            onChange={handleFieldChange}
          />
        </Col>
      </Row>

      <InputGroup>
        <p>
          By signing up, you agree to the <a href="login.html">Terms of Use</a>.
        </p>
      </InputGroup>

      <InputGroup>
        <Button full color="blue" onClick={handleSignUp}>
          Create my account
        </Button>
      </InputGroup>
    </form>
  );
};

export default SignUpForm;
