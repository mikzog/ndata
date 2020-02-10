import _get from 'lodash/get';
import _find from 'lodash/find';
import React, { lazy } from 'react';
import Tabs from 'components/ui/tabs';
import { IProperty } from 'pages/job-detail/job-detail-slice';

const S3GeneralForm = lazy(() => import('./s3-general-form'));
const S3ConnectionForm = lazy(() => import('./s3-connection-form'));

interface Props {
  data: any;
  onChange?: (path: string, value: any) => void;
}

const S3Section: React.FC<Props> = ({ data, onChange }) => {
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
    <Tabs
      active='general'
      data={[
        {
          key: 'general',
          title: 'General',
          content: (
            <S3GeneralForm
              data={getProperties('General')}
              onChange={handleGeneralChange}
            />
          ),
        },
        {
          key: 'connection',
          title: 'Connection',
          content: (
            <S3ConnectionForm
              data={getProperties('Connection')}
              onChange={handleConnectionChange}
            />
          ),
        },
      ]}
    />
  );
};

export default S3Section;
