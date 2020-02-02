import _map from 'lodash/map';
import React from 'react';

import { WIDGETS } from 'common/constants';
import { ArrowMoveIcon } from 'components/ui/icons';
import { IEntity, IAction } from 'pages/job-detail/job-detail-slice';
import ActionCard from '../action-card';

interface Props {
  data: {};
  selectedEntityId?: string;
  onSelect: (id: string) => void;
}

const ActionList: React.FC<Props> = ({ selectedEntityId, data, onSelect }) => {
  const actionData = _map(data, (type, id) => {
    const action = WIDGETS.find(widgetItem => widgetItem.type === type);
    return {
      id,
      ...action,
    };
  });

  return (
    <>
      {
        actionData.length
          ? <div className="nd-diagram-container max-three" id="scaleDiagram">
            {actionData.map(row => (<ActionCard
              active={selectedEntityId === row.id}
              data={row as any}
              onSelect={onSelect}
            />))}
          </div>
          : <div className="info-block block-blue active first-child">
            <div className="icon-block">
              <ArrowMoveIcon/>
            </div>
            <div className="header-block">
              <span className="title">
                Drag the Source from<br/> widget tray to start the process
              </span>
              <span className="secondary-title"/>
            </div>
          </div>
      }
    </>
  );
};

export default ActionList;
