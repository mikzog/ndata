import cx from 'classnames';
import React from 'react';
import { useDrag } from 'react-dnd';
import WidgetCard from 'components/widgets/widget-card';
import './widget-draggable.css';

interface Props {
  name: string;
  type: string;
  category: string;
}

export const WidgetDraggable: React.FC<Props> = ({ type, name, category }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: category,
      data: {
        name,
        type,
        category,
      },
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
      <WidgetCard type={category} name={name} />
    </div>
  );
};

export default WidgetDraggable;
