import cx from 'classnames';
import React from 'react';
import './widget-card.css';

interface Props {
  type: string;
  name: string;
}

export const WidgetCard: React.FC<Props> = ({ type, name }) => {
  return <div className={cx('widget-card', type.toLowerCase())}>{name}</div>;
};

export default WidgetCard;
