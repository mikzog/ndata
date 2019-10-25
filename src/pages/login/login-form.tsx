import React from 'react';
import { Button, Checkbox, Col, Row } from 'components/ui';
import Input, { InputGroup } from 'components/ui/input';
import { EmailIcon, LockIcon } from 'components/ui/icons';

interface LoginFormProps {
  loading?: boolean;
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ loading, onLogin }) => {
  const handleLogin = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form className="auth-form" method="post">
      <Input prefix={<EmailIcon />} type="text" placeholder="Email" />
      <Input
        prefix={<LockIcon />}
        type="current-password"
        placeholder="Password"
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
