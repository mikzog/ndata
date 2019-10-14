import React from 'react';
import { Headline } from 'components/ui/typography';
import LoginForm from './login-form';
import logo from './ndata-icon.svg';
import 'assets/css/auth.css';

interface LoginProps {
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: React.FC<LoginProps> = props => {
  function handleLogin() {
    props.userHasAuthenticated(true);
  }

  return (
    <section className="auth-body">
      <div className="auth-wrapper">
        <div className="auth-table">
          <div className="auth-table-cell">
            <div className="auth-content">
              <div className="logoIcon">
                <img src={logo} alt="Logo" />
              </div>
              <Headline tag="h4">Log in to nData</Headline>
              <LoginForm onLogin={handleLogin} />
              <div className="auth-content-foot">
                <p>© 2019 nData, Inc. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
