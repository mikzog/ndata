import cx from 'classnames';
import React, { useCallback } from 'react';
import { Card, Icon } from 'antd';
import { DesignAction } from 'pages/job-detail/job-detail-slice';
import styles from './action-card.module.less';

interface Props {
  active?: boolean;
  data: DesignAction;
  onSelect: (code: string) => void;
}

const ActionCard: React.FC<Props> = ({
  active,
  data: { name, type, code },
  onSelect,
}) => {
  const handleClick = useCallback(
    e => {
      e.preventDefault();
      onSelect(code);
    },
    [code]
  );

  return (
    <Card
      onClick={handleClick}
      className={cx(styles.card, styles[code], {
        [styles.active]: active,
      })}
      actions={[
        <Icon type="setting" key="Setting" />,
        <Icon type="copy" key="Clone" />,
      ]}
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.type}>{type}</div>
    </Card>
  );
};

export default ActionCard;
