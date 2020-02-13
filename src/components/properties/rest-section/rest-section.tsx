import React, { useState } from 'react';
import Tabs from 'components/ui/tabs';
import {
  TabConnectionIcon,
  TabGeneralIcon,
  TabSchemaIcon,
} from 'components/ui/icons';
import RESTGeneralForm from './rest-general-form';
import RESTConnectionForm from './rest-connection-form';
import RESTSchema from './rest-schema';

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
        return <RESTSchema/>;
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
          },
          {
            key: 'connection',
            title: 'Connection',
            icon: <TabConnectionIcon/>,
          },
          {
            key: 'schema',
            title: 'Schema',
            icon: <TabSchemaIcon/>,
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
