import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { TAppProps } from './routes';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  appProps: TAppProps;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: C,
  appProps,
  ...rest
}) => {
  return (
    <div>
      <header>HEADER GOES HERE!</header>
      <Route
        {...rest}
        render={props =>
          appProps.authenticated ? (
            <C {...props} {...appProps} />
          ) : (
            <Redirect
              to={`/login?redirect=${props.location.pathname}${props.location.search}`}
            />
          )
        }
      />
    </div>
  );
};

export default ProtectedRoute;
