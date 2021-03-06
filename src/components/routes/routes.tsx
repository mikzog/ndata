import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './protected-route';
import PublicRoute from './public-route';

const HomePage = lazy(() => import('pages/home'));
const LoginPage = lazy(() => import('pages/login'));
const SignUpPage = lazy(() => import('pages/signup'));
const VerifyEmailPage = lazy(() => import('pages/verify-email'));
const NotFoundPage = lazy(() => import('pages/not-found'));
const JobListPage = lazy(() => import('pages/job-list'));
const JobDetailPage = lazy(() => import('pages/job-detail'));

export type TAppProps = {
  [key: string]: any;
};

interface AppRoutesProps {
  appProps?: TAppProps;
}

export const Routes: React.FC<AppRoutesProps> = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/jobs" component={JobListPage} />
      <ProtectedRoute exact path="/jobs/:id" component={JobDetailPage} />
      <PublicRoute exact path="/login" component={LoginPage} />
      <PublicRoute exact path="/signup" component={SignUpPage} />
      <PublicRoute exact path="/verify-email" component={VerifyEmailPage} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
