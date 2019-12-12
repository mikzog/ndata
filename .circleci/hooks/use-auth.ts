import { useContext } from 'react';
import { AuthContext, AuthContextValue } from './node_modules/contexts/auth';

export const useAuth = () => {
  const context = useContext<AuthContextValue>(AuthContext);

  if (context === undefined) {
    throw new Error(
      '`useAuth` hook must be used within a `AuthProvider` component'
    );
  }
  return context;
};
