import cx from 'classnames';
import React, { useCallback } from 'react';
import {
  AggregateIcon,
  RDSIcon,
  S3Icon,
  RESTIcon,
  ScriptIcon,
  SAPIcon,
  IfThenIcon,
  RedShiftIcon,
  SplitIcon,
} from 'assets/img/widget';
import { WIDGET_CATEGORY } from 'common/constants';
import { ScriptIcon as ScriptSVG, CloneIcon } from 'components/ui/icons';

interface Props {
  active?: boolean;
  isFirst?: boolean;
  data: {
    id: string;
    name: string;
    type: string;
    category: string;
  };
  onSelect: (type: string) => void;
  onRemove: (type: string) => void;
}
const iconMapping: any = (type: string) => {
  switch (type) {
    case 's3':
      return S3Icon;
    case 'rest':
      return RESTIcon;
    case 'sap':
      return SAPIcon;
    case 'redshift':
      return RedShiftIcon;
    case 'rds':
      return RDSIcon;
    case 'script':
      return ScriptIcon;
    case 'split':
      return SplitIcon;
    case 'if':
      return IfThenIcon;
    case 'aggregate':
      return AggregateIcon;
  }
  return S3Icon
};
const ActionCard: React.FC<Props> = ({
  active,
  isFirst,
  data: { id, name, type, category },
  onSelect,
  onRemove,
}) => {
  const handleClick = useCallback(
    e => {
      e.preventDefault();
      onSelect(id);
    },
    [id]
  );
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className={
      cx('info-block block-yellow', {
        active: active,
        'first-child': isFirst
      })}
      onClick={handleClick}
      // className={cx(styles.card, styles[type], {
      //   [styles.active]: active,
      // })}
    >
      <div className="icon-block">
        <img src={iconMapping(type)} alt={name}/>
      </div>
      <div className="header-block">
        <span className="title">{name}</span>
        <span className="secondary-title">{category}</span>
      </div>
      <div className="footer-block">
        <span className="action-btn">
          <ScriptSVG/>
          Edit
        </span>
        <span
          className="action-btn"
          onClick={handleRemove}
        >
          {/*<CloneIcon/>*/}
          Delete
        </span>
      </div>
    </div>
  );
};

export default ActionCard;
