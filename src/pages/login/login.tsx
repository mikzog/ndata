import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { Headline } from 'components/ui/typography';
import NDataIcon from 'assets/img/ndata-icon.svg';
import LoginForm from './login-form';
import 'assets/css/auth.css';
import './login.css';

interface LoginProps {}

export const Login: React.FC<LoginProps> = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleLogin() {
    const username = 'quang@nclouds.com';
    const password = 'p@ssw0rd!';

    setLoading(true);
    Auth.signIn(username, password)
      .then(value => {
        console.log({ value });
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // To verify attribute with the code
    // const code = '071685';
    // Auth.confirmSignUp(username, code, {
    //   // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    //   forceAliasCreation: true,
    // })
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }

  return (
    <section className="auth-body">
      <div className="auth-wrapper">
        <div className="auth-table">
          <div className="auth-table-cell">
            <div className="auth-content">
              <div className="logoIcon">
                <img src={NDataIcon} width={70} height={94} alt="Logo" />
              </div>
              <Headline tag="h4">Log in to nData</Headline>
              <LoginForm loading={loading} onLogin={handleLogin} />
              <div className="form-foot">
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup">Create Account</Link>
                </p>
              </div>
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
