import React from 'react';
import { Button, Col, Row } from 'components/ui';
import Input, { InputGroup } from 'components/ui/input';
import {
  CompanyIcon,
  EmailIcon,
  LockIcon,
  UserIcon,
} from 'components/ui/icons';

interface Props {
  onSignUp: () => void;
}

export const SignUpForm: React.FC<Props> = props => {
  const handleSignUp = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    props.onSignUp();
  };

  return (
    <form className="auth-form" method="post" onSubmit={handleSignUp}>
      <Row>
        <Col sm={12} xs={12}>
          <Input type="email" prefix={<EmailIcon />} placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} xs={12}>
          <Input prefix={<CompanyIcon />} placeholder="Company name" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} xs={12}>
          <Input prefix={<UserIcon />} placeholder="Username" />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <Input prefix={<UserIcon />} placeholder="First name" />
        </Col>
        <Col sm={6} xs={12}>
          <Input prefix={<UserIcon />} placeholder="Last name" />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <Input
            type="new-password"
            prefix={<LockIcon />}
            placeholder="Enter password"
          />
        </Col>
        <Col sm={6} xs={12}>
          <Input
            type="new-password"
            prefix={<LockIcon />}
            placeholder="Confirm password"
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
