import _get from 'lodash/get';
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { RouteComponentProps } from 'react-router-dom';
import { Alert } from 'components/ui';
import { Headline } from 'components/ui/typography';
import NDataIcon from 'assets/img/ndata-icon.svg';
import VerifyEmailForm from './verify-email-form';
import 'assets/css/auth.css';

interface Props extends RouteComponentProps {}

export const VerifyEmail: React.FC<Props> = props => {
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState();
  // const [success, setSuccess] = useState();
  const username = _get(props, 'location.state.username');

  useEffect(() => {
    if (!username) {
      props.history.replace('/login');
    }
  });

  const handleSubmit = (otp: string) => {
    setError(undefined);
    setLoading(true);

    Auth.confirmSignUp(username, otp, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true,
    })
      .then(() => {
        props.history.replace('/login');
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleResendOTP = () => {
    setError(undefined);
    setResendLoading(true);

    Auth.resendSignUp(username)
      .then(data => {
        console.log({ data });
        // setSuccess(data)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setResendLoading(false);
      });
  };

  return (
    <section className="auth-body">
      <div className="auth-wrapper auth-otp">
        <div className="auth-table">
          <div className="auth-table-cell">
            <div className="auth-content">
              <div className="logoIcon">
                <img src={NDataIcon} width={70} height={94} alt="Logo" />
              </div>
              <Headline tag="h4">Enter OTP to verify</Headline>
              <p className="text-center">
                We've sent you an OTP on your registered email ID.
              </p>
              {error && <Alert type="error" description={error.message} />}
              <VerifyEmailForm loading={loading} onSubmit={handleSubmit} />
              <div className="form-foot">
                <p>
                  OTP not received?{' '}
                  {resendLoading ? (
                    `sending...`
                  ) : (
                    <a onClick={handleResendOTP}>Request another OTP</a>
                  )}
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

export default VerifyEmail;
