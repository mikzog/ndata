import React from 'react';
import { useAuth } from 'hooks/auth';
import { Headline } from 'components/ui/typography';
import { Button } from 'components/ui';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Headline>Login Page</Headline>
      <main>
        <Button onClick={() => logout()}>Logout</Button>
      </main>
    </div>
  );
};

export default Home;
