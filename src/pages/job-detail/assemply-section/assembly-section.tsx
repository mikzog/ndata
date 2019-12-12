import 'assets/css/scale-diagram.css';
import React from 'react';
import { LayerIcon } from 'components/ui/icons';
import AssemblyDroppable from './assembly-droppable';

interface Props {}

const AssemplySection: React.FC<Props> = () => {
  return (
    <div className="flow-section">
      <div className="nd-tabs">
        <ul className="tabs">
          <li className="active">
            <a>
              <LayerIcon height="14" /> Assembly are
            </a>
          </li>
        </ul>
      </div>
      <div className="nd-diagram-flow max-three-nodes-cover">
        <AssemblyDroppable />
      </div>
    </div>
  );
};

export default AssemplySection;
