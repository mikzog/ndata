import React from 'react';
import { List } from 'antd';
import { DesignAction } from 'pages/job-detail/job-detail-slice';
import ActionCard from '../action-card';

interface Props {
  data: DesignAction[];
  selectedAction?: string;
  onSelect: (code: string) => void;
}

const ActionList: React.FC<Props> = ({ selectedAction, data, onSelect }) => {
  return (
    <div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <ActionCard
              active={selectedAction === item.code}
              data={item}
              onSelect={onSelect}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ActionList;
