import React from 'react';
import { PlayIcon } from 'components/ui/icons';

interface Props {}

export const SettingSection: React.FC<Props> = () => {
  return (
    <div className="nodes-detail-section">
      <div className="nd-tabs">
        <ul className="tabs">
          <li className="active">
            <a href="#">
              <PlayIcon /> Widget settings
            </a>
          </li>
        </ul>
      </div>
      <div className="target-node-info">yo!</div>
    </div>
  );
};

export default SettingSection;
