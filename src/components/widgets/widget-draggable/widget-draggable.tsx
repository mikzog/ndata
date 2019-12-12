import cx from 'classnames';
import React from 'react';
import { useDrag } from 'react-dnd';
import WidgetCard from 'components/widgets/widget-card';
import './widget-draggable.css';

interface Props {
  type: string;
  name: string;
}

export const WidgetDraggable: React.FC<Props> = ({ type, name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type,
      name,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={cx('widget-draggable', { dragging: isDragging })}
      ref={drag}
    >
      <WidgetCard type={type} name={name} />
    </div>
  );
};

export default WidgetDraggable;
