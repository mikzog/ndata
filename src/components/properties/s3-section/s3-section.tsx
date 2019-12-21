import React from 'react';
import Tabs from 'components/ui/tabs';

interface Props {}

const S3Section: React.FC<Props> = () => {
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
      ]}
    />
  );
};

export default S3Section;
