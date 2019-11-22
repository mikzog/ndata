import React from 'react';
import { PauseIcon, TrashIcon, ClockIcon, CodeIcon } from 'components/ui/icons';

interface Props {}

const JobRowActions: React.FC<Props> = () => {
  return (
    <div className="data actions">
      <a className="nd-trans button grey ">
        <PauseIcon />
      </a>
      <a className="nd-trans button grey ">
        <TrashIcon />
      </a>
      <a className="nd-trans button grey ">
        <ClockIcon />
      </a>
      <a className="nd-trans button grey ">
        <CodeIcon />
      </a>
    </div>
  );
};

export default JobRowActions;
