import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Headline } from 'components/ui/typography';
import NDataIcon from 'assets/img/ndata-icon.svg';
import SignUpForm from './signup-form';
import 'assets/css/auth.css';
import './signup.css';

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = props => {
  function handleSignUp() {
    const username = 'quang@nclouds.com';
    const password = 'p@ssw0rd!';
    // const email = 'quang@nclouds.com';
    // const phone_number = '1234567890';

    Auth.signUp({
      username,
      password,
      attributes: {
        // email, // optional
        // phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      validationData: [], //optional
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
              <SignUpForm onSignUp={handleSignUp} />
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
