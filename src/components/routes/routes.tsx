import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './protected-route';
import PublicRoute from './public-route';

const HomePage = lazy(() => import('pages/home'));
const LoginPage = lazy(() => import('pages/login'));
const NotFoundPage = lazy(() => import('pages/not-found'));

export type TAppProps = {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

interface AppRoutesProps {
  appProps: TAppProps;
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
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
