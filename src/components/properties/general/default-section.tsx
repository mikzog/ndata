import React from 'react';
import Tabs from 'components/ui/tabs';

interface Props {}

const DefaultSection: React.FC<Props> = () => {
  return (
    <Tabs
      active='general'
      data={[
        {
          key: 'general',
          title: 'General',
          content: 'Hello world!',
        },
      ]}
    />
  );
};

export default DefaultSection;
