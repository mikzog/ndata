import React from 'react';
import { useAuth } from 'common/hooks/use-auth';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { getQueryParam } from 'common/utils/route';

export interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: PageComponent,
  ...props
}) => {
  const { user } = useAuth();
  let redirectPath = '/';

  if (props.location) {
    redirectPath = getQueryParam(props.location.search, 'redirect') as string;
  }

  if (user) return <Redirect to={redirectPath} />;

  return (
    <Route {...props}>
      <PageComponent />
    </Route>
  );
};

export default PublicRoute;
