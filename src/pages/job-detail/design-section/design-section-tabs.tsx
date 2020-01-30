import React, { memo } from 'react';
import { DownIcon, LayerIcon, UpIcon } from 'components/ui/icons';

interface Props {}

const DesignSectionTabs: React.FC<Props> = () => {
  return (
    <div className="nd-tabs">
      <ul className="tabs">
        <li className="active">
          <a>
            <LayerIcon height="18" /> Design
          </a>
        </li>
      </ul>
      <span className="toggle-area-design">
        <span className="up">
          <UpIcon/>
        </span>

        <span className="down" style={{display: 'none'}}>
          <DownIcon/>
        </span>
      </span>
    </div>
  );
};

export default memo(DesignSectionTabs);
