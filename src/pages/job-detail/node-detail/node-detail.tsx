import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionLoader } from 'components/ui/placeholder';

const SectionPlaceholer = () => (
  <div className="target-node-info">
    <SectionLoader width={800} />
  </div>
);
const LinkSourceSection = lazy(() => import('../link-source-section'));
const TransformDataSection = lazy(() => import('../transform-data-section'));

interface Props {}

const NodeDetail: React.FC<Props> = () => {
  const location = useLocation();
  let item;

  switch (location.hash) {
    case '#target':
      item = <SectionPlaceholer />;
      break;
    case '#transform-data':
      item = <TransformDataSection />;
      break;
    case '#link-source':
    default:
      item = <LinkSourceSection />;
      break;
  }

  return (
    <div className="nodes-detail-section">
      <Suspense fallback={<SectionPlaceholer />}>{item}</Suspense>
    </div>
  );
};

export default NodeDetail;
