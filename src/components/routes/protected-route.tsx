import React from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import { useAuth } from 'common/hooks/use-auth';
import Layout from 'components/layout';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: PageComponent,
  ...props
}) => {
  const { user = undefined } = useAuth();
  const location = useLocation();

  if (!user) {
    const loginPath = '/login';
    const redirectPath = location
      ? `${loginPath}?redirect=${location.pathname}${location.search}`
      : loginPath;
    return <Redirect to={redirectPath} />;
  }

  return (
    <Layout>
      <Route {...props}>
        <PageComponent />
      </Route>
    </Layout>
  );
};

export default ProtectedRoute;
