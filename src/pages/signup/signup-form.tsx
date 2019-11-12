import * as Yup from 'yup';
import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Button, Col, Row } from 'components/ui';
import { InputField } from 'components/form';
import { InputGroup } from 'components/ui/input';
import {
  CompanyIcon,
  EmailIcon,
  LockIcon,
  UserIcon,
} from 'components/ui/icons';

export type TFormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  username?: string;
  companyName?: string;
  firstName?: string;
  lastName?: string;
};

interface Props {
  loading?: boolean;
  onSignUp: (values: TFormValues) => void;
}

const DEFAULT_VALUES: TFormValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
  username: '',
  companyName: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
});

export const SignUpForm: React.FC<Props> = ({ loading, onSignUp }) => {
  return (
    <Formik
      initialValues={DEFAULT_VALUES}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log({ actions });
        onSignUp(values);
      }}
      render={(props: FormikProps<TFormValues>) => (
        <form className="auth-form" method="post" onSubmit={props.handleSubmit}>
          <Row>
            <Col sm={12} xs={12}>
              <InputField
                type="email"
                name="email"
                autoComplete="email"
                prefix={<EmailIcon />}
                placeholder="Email"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12}>
              <InputField
                name="companyName"
                prefix={<CompanyIcon />}
                placeholder="Company name"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12}>
              <InputField
                name="username"
                autoComplete="username"
                prefix={<UserIcon />}
                placeholder="Username"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6} xs={12}>
              <InputField
                name="firstName"
                autoComplete="given-name"
                prefix={<UserIcon />}
                placeholder="First name"
              />
            </Col>
            <Col sm={6} xs={12}>
              <InputField
                name="lastName"
                autoComplete="family-name"
                prefix={<UserIcon />}
                placeholder="Last name"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6} xs={12}>
              <InputField
                type="password"
                name="password"
                autoComplete="new-password"
                prefix={<LockIcon />}
                placeholder="Enter password"
              />
            </Col>
            <Col sm={6} xs={12}>
              <InputField
                type="password"
                name="passwordConfirm"
                autoComplete="new-password"
                prefix={<LockIcon />}
                placeholder="Confirm password"
              />
            </Col>
          </Row>

          <InputGroup>
            <p>
              By signing up, you agree to the{' '}
              <a href="login.html">Terms of Use</a>.
            </p>
          </InputGroup>

          <InputGroup>
            <Button
              full
              color="blue"
              type="submit"
              loading={loading}
              disabled={props.isSubmitting}
            >
              Create my account
            </Button>
          </InputGroup>
        </form>
      )}
    ></Formik>
  );
};

export default SignUpForm;
