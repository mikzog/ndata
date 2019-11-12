import React, { useEffect, useMemo } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';

export type AuthContextValue = {
  user: CognitoUser | null;
  login: (username: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
};

// originally the user is going to be `null`
export const AuthContext = React.createContext<AuthContextValue>(null as any);

interface Props {}

export const AuthProvider: React.FC<Props> = props => {
  const [user, setUser] = React.useState(null);

  // fetch the info of the user that may be already logged in
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => setUser(null));
  }, []);

  const login = (usernameOrEmail: string, password: string) =>
    Auth.signIn(usernameOrEmail, password).then(cognitoUser => {
      setUser(cognitoUser);
      return cognitoUser;
    });

  const logout = () =>
    Auth.signOut().then(data => {
      setUser(null);
      return data;
    });

  // make sure other components can read this value
  const values = useMemo(() => ({ user, login, logout }), [user]);

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
