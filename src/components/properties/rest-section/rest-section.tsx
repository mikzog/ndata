import React, { useState } from 'react';
import Tabs from 'components/ui/tabs';
import {
  TabConnectionIcon,
  TabGeneralIcon,
  TabSchemaIcon,
} from 'components/ui/icons';
import RESTGeneralForm from './rest-general-form';
import RESTConnectionForm from './rest-connection-form';

interface Props {}

const RESTSection: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState('general');
  const tabContent = () => {
    switch (activeTab) {
      case 'general':
        return <RESTGeneralForm/>;
      case 'connection':
        return <RESTConnectionForm/>;
      case 'schema':
        return 'Schema';
    }
  };

  return (
    <>
      <Tabs
        onClick={setActiveTab}
        active={activeTab}
        data={[
          {
            key: 'general',
            title: 'General',
            icon: <TabGeneralIcon/>,
            // content: <RESTGeneralForm />,
          },
          {
            key: 'connection',
            title: 'Connection',
            icon: <TabConnectionIcon/>,
            content: 'REST Connection goes here!',
          },
          {
            key: 'schema',
            title: 'Schema',
            icon: <TabSchemaIcon/>,
            content: '',
          },
        ]}
      />
      <div className="target-node-info">
        {tabContent()}
      </div>
    </>
  );
};

export default RESTSection;
