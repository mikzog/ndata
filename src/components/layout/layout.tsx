import React, { Suspense } from 'react';
import Header from 'components/layout/header';
import { PageLoader } from 'components/ui/placeholder';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
