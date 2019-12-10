import React from 'react';
import { LayerIcon, PlusIcon } from 'components/ui/icons';
import './flow-tab.css';

interface Props {
  onAddServiceClick?: () => void;
}

const FlowTab: React.FC<Props> = ({ onAddServiceClick }) => {
  return (
    <div className="nd-tabs">
      <ul className="tabs">
        <li className="active">
          <a>
            <LayerIcon height="14" /> Diagram
          </a>
        </li>
      </ul>

      <ul className="regualar-tabs">
        <li className="active">
          <a type="button" onClick={onAddServiceClick}>
            <PlusIcon width="14" height="14" /> Add services
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FlowTab;
