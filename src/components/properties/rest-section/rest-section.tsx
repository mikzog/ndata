import React from 'react';
import Tabs from 'components/ui/tabs';

interface Props {}

const RESTSection: React.FC<Props> = () => {
  return (
    <Tabs
      data={[
        {
          key: 'general',
          title: 'General',
          content: 'Hello world!',
        },
        {
          key: 'connection',
          title: 'Connection',
          content: 'Hello Connection!',
        },
        {
          key: 'schema',
          title: 'Schema',
          content: 'Hello Schema!',
        },
      ]}
    />
  );
};

export default RESTSection;
