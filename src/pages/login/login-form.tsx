import React from 'react';
import Input, { InputGroup } from 'components/ui/input';
import { Button } from 'components/ui';
import { EmailIcon, LockIcon } from 'components/ui/icons';

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  return (
    <>
      <form className="auth-form" method="post">
        <Input prefix={<EmailIcon />} type="text" placeholder="Email" />
        <Input
          prefix={<LockIcon />}
          type="current-password"
          placeholder="Password"
        />

        <div className="nd-input-group">
          <div className="nd-row">
            <div className="ndsm-7 ndxs-7">
              <div className="nd-check">
                <input id="nd-check" type="checkbox" />
                <label className="nd-check-label">
                  <svg
                    aria-hidden="true"
                    width="13"
                    height="13"
                    version="1.1"
                    viewBox="0 0 26 26"
                  >
                    <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"></path>
                  </svg>
                </label>
              </div>

              <label>Remember me</label>
            </div>

            <div className="ndsm-5 ndxs-5 text-right">
              <a href="forgot-password.html" className="forgot-password">
                Forgot password?
              </a>
            </div>
          </div>
        </div>

        <InputGroup>
          <Button full type="blue" onClick={onLogin}>
            Login
          </Button>
        </InputGroup>
      </form>
      <div className="form-foot">
        <p>
          Don't have an account? <a href="signup.html">Create Account</a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
