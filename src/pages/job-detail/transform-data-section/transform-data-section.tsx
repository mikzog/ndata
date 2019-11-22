import React from 'react';
import { PlayIcon } from 'components/ui/icons';

interface Props {}

const TransformDataSection: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div className="nd-tabs">
        <ul className="tabs">
          <li className="active">
            <a href="#">
              <PlayIcon /> Transform node
            </a>
          </li>
          <li className="">
            <a href="#">View output table</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default TransformDataSection;
