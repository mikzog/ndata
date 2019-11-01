import React, { useState } from 'react';
import { Button } from 'components/ui';
import Input, { InputGroup } from 'components/ui/input';
import { KeyIcon } from 'components/ui/icons';

export type TFormField = {
  value: string;
  error?: string;
};

interface Props {
  loading?: boolean;
  onSubmit: (otp: string) => void;
}

// TODO: Implement form validation
function getValidation(fieldName: string, fieldValue: string) {
  return undefined;
}

const DEFAULT_FIELDS = {
  otp: {
    value: undefined,
    error: undefined,
  },
};

export const VerifyEmailForm: React.FC<Props> = ({ loading, onSubmit }) => {
  const [fields, setFields] = useState(DEFAULT_FIELDS);

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

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const otpCode = fields.otp.value;
    if (otpCode) {
      onSubmit(otpCode);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="otp"
        placeholder="Please enter 6 digit OTP"
        prefix={<KeyIcon />}
        defaultValue={fields.otp.value}
        onChange={handleFieldChange}
      />
      <InputGroup>
        <Button
          full
          color="blue"
          disabled={!fields.otp.value}
          loading={loading}
          onClick={handleSubmit}
        >
          Verify
        </Button>
      </InputGroup>
    </form>
  );
};

VerifyEmailForm.defaultProps = {
  loading: false,
};

export default VerifyEmailForm;
