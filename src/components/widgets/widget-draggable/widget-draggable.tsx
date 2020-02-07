import cx from 'classnames';
import React from 'react';
import { useDrag } from 'react-dnd';

interface Props {
  name: string;
  type: string;
  category: string;
  title: string;
  icon: any;
}

export const WidgetDraggable: React.FC<Props> =
  ({ type, name, category, title, icon }) => {
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
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <li
        className={cx('', { dragging: isDragging })}
        ref={drag}
      >
        <img src={icon} alt={name}/>
        <span title={title}>{name}</span>
      </li>
    );
  };

export default WidgetDraggable;
