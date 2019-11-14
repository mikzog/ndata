import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from 'hooks/auth';
import Layout from 'components/layout';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: PageComponent,
  location,
  ...rest
}) => {
  const { user } = useAuth();

  if (!user) {
    const loginPath = '/login';
    const redirectPath = location
      ? `${loginPath}?redirect=${location.pathname}${location.search}`
      : loginPath;
    return <Redirect to={redirectPath} />;
  }

  return (
    <Layout>
      <Route {...rest}>
        <PageComponent />
      </Route>
    </Layout>
  );
};

export default ProtectedRoute;
