import React from 'react';
import { useAuth } from 'hooks/auth';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { TAppProps } from './routes';

export interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  appProps?: TAppProps;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: C,
  appProps,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        !user ? <C {...props} {...appProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
