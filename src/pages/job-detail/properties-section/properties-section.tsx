import _get from 'lodash/get';
import _debounce from 'lodash/debounce';
import React, { Suspense, lazy, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setEntityData } from 'pages/job-detail/job-detail-slice';
import { SectionLoader } from 'components/ui/placeholder';
import { ConfigurationIcon, DownIcon, UpIcon } from 'components/ui/icons'
import DefaultSection from 'components/properties/default-section';
import { RootState } from '../../../rootReducer';

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
          return <DefaultSection />;
      }
    },
    [selectedEntityType]
  );

  return (
    <div className="nodes-detail-section">
      <div className="nd-tabs">
        <ul className="tabs">
          <li className="active">
            <a href="#">
              <ConfigurationIcon/> General
            </a>
          </li>
        </ul>

        <span className="toggle-area-setting">
          <span className="up">
            <UpIcon/>
          </span>

          <span className="down" style={{display: 'none'}}>
            <DownIcon/>
          </span>
        </span>
      </div>

      <div className="target-node-info">

      </div>
      {/*<Suspense fallback={<SectionLoader />}>
        {renderProperties(selectedEntityType)}
      </Suspense>*/}
    </div>
  );
};

export default PropertiesSection;
