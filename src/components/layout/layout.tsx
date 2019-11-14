import React, { Suspense } from 'react';
import Header from 'components/layout/header';
import Content from 'components/layout/content';
import { PageLoader } from 'components/ui/placeholder';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
      </Content>
    </>
  );
};

export default Layout;
