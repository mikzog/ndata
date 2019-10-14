import React from 'react';
import { Headline } from 'components/ui/typography';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Headline>Login Page</Headline>
    </div>
  );
};

export default Home;
