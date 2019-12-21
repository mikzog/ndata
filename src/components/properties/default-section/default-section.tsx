import React from 'react';
import Tabs from 'components/ui/tabs';

interface Props {}

const DefaultSection: React.FC<Props> = () => {
  return (
    <Tabs
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
