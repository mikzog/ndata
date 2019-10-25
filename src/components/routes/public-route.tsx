import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { TAppProps } from './routes';

export interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  appProps: TAppProps;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: C,
  appProps,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !appProps.authenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PublicRoute;
