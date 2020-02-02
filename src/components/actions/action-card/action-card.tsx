import cx from 'classnames';
import React, { useCallback } from 'react';
import { S3Icon } from 'assets/img/widget';
import { ScriptIcon, CloneIcon } from 'components/ui/icons';

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
    <div className="info-block block-yellow active first-child"
      onClick={handleClick}
      // className={cx(styles.card, styles[type], {
      //   [styles.active]: active,
      // })}
    >
      <div className="icon-block">
        <img src={S3Icon} alt={name}/>
      </div>
      <div className="header-block">
        <span className="title">{name}</span>
        <span className="secondary-title">{category}</span>
      </div>
      {
        active
          ? <div className="footer-block">
            <span className="action-btn">
              <ScriptIcon/>
              Edit
            </span>
            <span className="action-btn">
              <CloneIcon/>
              Clone
            </span>
          </div>
          : null
      }
    </div>
  );
};

export default ActionCard;
