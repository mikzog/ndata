import cx from 'classnames';
import React, { useCallback } from 'react';
import { Card, Icon } from 'antd';
import styles from './action-card.module.less';

interface Props {
  active?: boolean;
  data: {
    id: string;
    name: string;
    type: string;
    category: string;
  };
  onSelect: (type: string) => void;
}

const ActionCard: React.FC<Props> = ({
  active,
  data: { id, name, type, category },
  onSelect,
}) => {
  const handleClick = useCallback(
    e => {
      e.preventDefault();
      onSelect(id);
    },
    [id]
  );

  return (
    <Card
      onClick={handleClick}
      className={cx(styles.card, styles[type], {
        [styles.active]: active,
      })}
      actions={
        active
          ? [
              <span>
                <Icon type="setting" key="Setting" /> Edit
              </span>,
              <span>
                <Icon type="copy" key="Clone" /> Clone
              </span>,
            ]
          : []
      }
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.type}>{category}</div>
    </Card>
  );
};

export default ActionCard;
