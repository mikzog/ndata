import * as Yup from 'yup';
import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Button, Checkbox, Col, Row } from 'components/ui';
import { InputField } from 'components/form';
import { InputGroup } from 'components/ui/input';
import { EmailIcon, LockIcon } from 'components/ui/icons';

export type TFormValues = {
  email: string;
  password: string;
};

interface LoginFormProps {
  loading?: boolean;
  onLogin: (values: TFormValues) => void;
  onChange?: (values: TFormValues) => void;
}

const DEFAULT_VALUES: TFormValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
});

export const LoginForm: React.FC<LoginFormProps> = ({ loading, onLogin }) => {
  return (
    <Formik
      initialValues={DEFAULT_VALUES}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        onLogin(values);
      }}
    >
      {(props: FormikProps<TFormValues>) => (
        <form className="auth-form" onSubmit={props.handleSubmit}>
          <InputField
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
            prefix={<EmailIcon />}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            prefix={<LockIcon />}
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
            <Button full color="blue" type="submit" loading={loading}>
              Login
            </Button>
          </InputGroup>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
