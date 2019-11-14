import React from 'react';
import { useAuth } from 'hooks/auth';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { getQueryParam } from 'utils/route';

export interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: PageComponent,
  ...rest
}) => {
  const { user } = useAuth();
  let redirectPath = '/';

  if (rest.location) {
    redirectPath = getQueryParam(rest.location.search, 'redirect') as string;
  }

  if (user) return <Redirect to={redirectPath} />;

  return (
    <Route {...rest}>
      <PageComponent />
    </Route>
  );
};

export default PublicRoute;
