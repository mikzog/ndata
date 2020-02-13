import _get from 'lodash/get';
import _debounce from 'lodash/debounce';
import React, { Suspense, lazy, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setEntityData } from 'pages/job-detail/job-detail-slice';
import { RootState } from '../../../rootReducer';
import { SectionLoader } from 'components/ui/placeholder';
import { ConfigurationIcon, DownIcon, UpIcon } from 'components/ui/icons'
import DefaultSection from 'components/properties/default-section';
import S3_META from 'meta/s3.json';
import REST_META from 'meta/s3.json';
import TRANSFORM_META from 'meta/s3.json';

const DEFAULT_ENTITY_DATA: any = {
  s3: S3_META,
  rest: REST_META,
  transform: TRANSFORM_META,
};

const RESTSection = lazy(() => import('components/properties/rest-section'));
const S3Section = lazy(() => import('components/properties/s3-section'));

interface Props {}

export const PropertiesSection: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { selectedEntityType, selectedEntityData } = useSelector(
    ({ jobDetail: { selectedEntityId, entities, data } }: RootState) => {
      return {
        selectedEntityType:
          selectedEntityId && _get(entities, selectedEntityId),
        selectedEntityData: selectedEntityId && _get(data, selectedEntityId),
      };
    }
  );

  const handleChangeData = (path: string, value: any) => {
    dispatch(setEntityData({ path, value }));
  };

  const debounceHandleChange = useCallback(
    _debounce(handleChangeData, 300),
    []
  );

  const renderProperties = useCallback(
    selectedEntityType => {
      const dataProps = {
        data: selectedEntityData,
        onChange: debounceHandleChange,
      };

      switch (selectedEntityType) {
        case 's3':
          return <S3Section {...dataProps} />;
        case 'rest':
          return <RESTSection />;
        default:
          return null;
      }
    },
    [selectedEntityType]
  );

  return (
    selectedEntityType
      ? <div className="nodes-detail-section">
        <Suspense fallback={<SectionLoader/>}>
          {renderProperties(selectedEntityType)}
        </Suspense>
      </div>
      : null
  );
};

export default PropertiesSection;
