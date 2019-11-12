import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './protected-route';
import PublicRoute from './public-route';

const HomePage = lazy(() => import('pages/home'));
const LoginPage = lazy(() => import('pages/login'));
const SignUpPage = lazy(() => import('pages/signup'));
const VerifyEmailPage = lazy(() => import('pages/verify-email'));
const NotFoundPage = lazy(() => import('pages/not-found'));

export type TAppProps = {
  authenticated: boolean;
};

interface AppRoutesProps {
  appProps?: TAppProps;
}

export const Routes: React.FC<AppRoutesProps> = ({ appProps }) => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={HomePage} appProps={appProps} />
      <PublicRoute
        exact
        path="/login"
        component={LoginPage}
        appProps={appProps}
      />
      <PublicRoute
        exact
        path="/signup"
        component={SignUpPage}
        appProps={appProps}
      />
      <PublicRoute
        exact
        path="/verify-email"
        component={VerifyEmailPage}
        appProps={appProps}
      />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
