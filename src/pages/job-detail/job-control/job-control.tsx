import React from 'react';
import FlowSection from '../flow-section';
import NodeDetail from '../node-detail';

interface Props {}

const JobControl: React.FC<Props> = () => {
  return (
    <div className="nd-wrapper">
      <div className="nd-contentMain full">
        <FlowSection />
        <NodeDetail />
      </div>
    </div>
  );
};

export default JobControl;
