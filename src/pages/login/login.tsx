import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Alert } from 'components/ui';
import { Headline } from 'components/ui/typography';
import NDataIcon from 'assets/img/ndata-icon.svg';
import LoginForm, { TFormValues } from './login-form';
import 'assets/css/auth.css';
import './login.css';
import { CognitoUser } from '@aws-amplify/auth';

type Error = {
  code: string;
  message?: string;
  name?: string;
};

interface LoginProps extends RouteComponentProps {}

export const Login: React.FC<LoginProps> = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleChange = () => {
    setError(undefined);
  };

  const handleLogin = async (values: TFormValues) => {
    const username = values.email || '';
    const password = values.password;

    setLoading(true);
    Auth.signIn(username, password)
      .then((user: CognitoUser) => {
        props.history.replace('/');
      })
      .catch((error: Error) => {
        if (error.code === 'UserNotConfirmedException') {
          props.history.push('/verify-email?redirect=/', {
            username,
          });
        } else {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log({ error });

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
              {error && (
                <Alert
                  type="error"
                  message="Error"
                  description={error.message}
                />
              )}
              <LoginForm
                loading={loading}
                onLogin={handleLogin}
                onChange={handleChange}
              />
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
