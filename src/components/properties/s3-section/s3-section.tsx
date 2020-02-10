import _get from 'lodash/get';
import _find from 'lodash/find';
import React, { lazy, useState } from 'react';
import Tabs from 'components/ui/tabs';
import {
  TabConnectionIcon,
  TabGeneralIcon,
  TabSchemaIcon,
} from 'components/ui/icons';
import { IProperty } from 'pages/job-detail/job-detail-slice';

const S3GeneralForm = lazy(() => import('./s3-general-form'));
const S3ConnectionForm = lazy(() => import('./s3-connection-form'));

interface Props {
  data: any;
  onChange?: (path: string, value: any) => void;
}

const S3Section: React.FC<Props> = ({ data, onChange }) => {
  const [activeTab, setActiveTab] = useState('general');
  const tabContent = () => {
    switch (activeTab) {
      case 'general':
        return <S3GeneralForm
          data={getProperties('General')}
          onChange={handleGeneralChange}
        />;
      case 'connection':
        return <S3ConnectionForm
          data={getProperties('Connection')}
          onChange={handleConnectionChange}
        />;
      case 'schema':
        return 'Schema';
    }
  };

  const getProperties = (area: string) => {
    const propertiesData =
      (_find(data.properties, { area }) as IProperty) || {};
    return _get(propertiesData, 'attributes', {});
  };

  const handleGeneralChange = (values: any) => {
    if (onChange) {
      onChange('properties.0.attributes', values);
    }
  };

  const handleConnectionChange = (values: any) => {
    if (onChange) {
      onChange('properties.1.attributes', values);
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
        ]}
      />
      <div className="target-node-info">
        {tabContent()}
      </div>
    </>
  );
};

export default S3Section;
