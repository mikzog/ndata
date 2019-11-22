import React from 'react';
import FlowTab from './flow-tab';
import FlowDiagram from './flow-diagram';

interface Props {}

const FlowSection: React.FC<Props> = () => {
  return (
    <div className="flow-section">
      <FlowTab />
      <FlowDiagram />
    </div>
  );
};

export default FlowSection;
