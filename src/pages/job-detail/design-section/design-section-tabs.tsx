import React, { memo } from 'react';
import { LayerIcon } from 'components/ui/icons';

interface Props {}

const DesignSectionTabs: React.FC<Props> = () => {
  return (
    <div className="nd-tabs">
      <ul className="tabs">
        <li className="active">
          <a>
            <LayerIcon height="14" /> Design
          </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(DesignSectionTabs);
