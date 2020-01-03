import React from 'react';
import Tabs from 'components/ui/tabs';
import RESTGeneralForm from './rest-general-form';

interface Props {}

const RESTSection: React.FC<Props> = () => {
  return (
    <Tabs
      data={[
        {
          key: 'general',
          title: 'General',
          content: <RESTGeneralForm />,
        },
        {
          key: 'connection',
          title: 'Connection',
          content: 'REST Connection goes here!',
        },
        {
          key: 'schema',
          title: 'Schema',
          content: '',
        },
      ]}
    />
  );
};

export default RESTSection;
