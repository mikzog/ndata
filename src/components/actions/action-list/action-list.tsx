import _map from 'lodash/map';
import React from 'react';
import { List } from 'antd';
import { WIDGETS } from 'common/constants';
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
    <div>
      {/* TODO replace with normal horizontal list */}
      {/*<List
        grid={{ gutter: 16, column: 4 }}
        dataSource={actionData}
        renderItem={item => (
          <List.Item>
            <ActionCard
              active={selectedEntityId === item.id}
              data={item as any}
              onSelect={onSelect}
            />
          </List.Item>
        )}
      />*/}
    </div>
  );
};

export default ActionList;
