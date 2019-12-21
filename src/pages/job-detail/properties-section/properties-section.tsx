import React, { Suspense, lazy, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SectionLoader } from 'components/ui/placeholder';
import { RootState } from '../../../rootReducer';

const DefaultSection = lazy(() =>
  import('components/properties/default-section')
);
const RESTSection = lazy(() => import('components/properties/rest-section'));
const S3Section = lazy(() => import('components/properties/s3-section'));

interface Props {}

export const PropertiesSection: React.FC<Props> = () => {
  const { selectedAction } = useSelector((state: RootState) => state.jobDetail);

  const renderProperties = useCallback(
    selectedAction => {
      switch (selectedAction) {
        case 's3':
          return <S3Section />;
        case 'rest':
          return <RESTSection />;
        default:
          return <DefaultSection />;
      }
    },
    [selectedAction]
  );

  return (
    <div className="nodes-detail-section">
      <Suspense fallback={<SectionLoader />}>
        {renderProperties(selectedAction)}
      </Suspense>
    </div>
  );
};

export default PropertiesSection;
