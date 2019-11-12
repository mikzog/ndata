import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from 'hooks/auth';
import { TAppProps } from './routes';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  appProps?: TAppProps;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: C,
  appProps,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <div>
      <header>HEADER GOES HERE!</header>
      <Route
        {...rest}
        render={props =>
          user ? (
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
