import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Alert } from 'components/ui';
import { Headline } from 'components/ui/typography';
import NDataIcon from 'assets/img/ndata-icon.svg';
import SignUpForm, { TFormValues } from './signup-form';
import 'assets/css/auth.css';

interface SignUpProps extends RouteComponentProps {}

export const SignUp: React.FC<SignUpProps> = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  function handleSignUp(values: TFormValues) {
    setError(null);
    setLoading(true);

    Auth.signUp({
      username: values.email,
      password: values.password,
      attributes: {
        preferred_username: values.username,
        given_name: values.firstName,
        family_name: values.lastName,
        'custom:company_name': values.companyName,
      },
      validationData: [], //optional
    })
      .then(data => {
        if (data.userConfirmed) {
          props.history.replace('/login');
        } else {
          props.history.replace('/verify-email');
        }
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
      });
  }

  return (
    <section className="auth-body">
      <div className="auth-wrapper auth-signup">
        <div className="auth-table">
          <div className="auth-table-cell">
            <div className="auth-content">
              <div className="logoIcon">
                <img src={NDataIcon} width={70} height={94} alt="Logo" />
              </div>
              <Headline tag="h4">Get started with your account</Headline>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut.
              </p>
              {error && (
                <Alert
                  type="error"
                  message="Error"
                  description={error.message}
                />
              )}
              <SignUpForm loading={loading} onSignUp={handleSignUp} />
              <div className="form-foot">
                <p>
                  Already have an account? <Link to="/login">Log in</Link>
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

export default SignUp;
