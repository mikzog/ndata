import _map from 'lodash/map';
import React from 'react';
import cx from 'classnames';

import { WIDGETS } from 'common/constants';
import { ArrowMoveIcon } from 'components/ui/icons';
import { IEntity, IAction } from 'pages/job-detail/job-detail-slice';
import ActionCard from '../action-card';
import { action } from '@storybook/addon-actions';

interface Props {
  data: {};
  selectedEntityId?: string;
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
}

const ActionList: React.FC<Props> = (
  { selectedEntityId, data, onSelect, onRemove },
) => {
  const actionData = _map(data, (type, id) => {
    // TODO change find condition to use category as well
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
          ? <div
            className={cx("nd-diagram-container", {
              'max-three': actionData.length <= 3,
              'more-than-three': actionData.length > 3
            })}
            id="scaleDiagram"
          >
            {actionData.map(card => (
              <ActionCard
                key={card.id}
                isFirst={card === actionData[0]}
                active={selectedEntityId === card.id}
                data={card as any}
                onSelect={onSelect}
                onRemove={onRemove}
              />
            ))}
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
