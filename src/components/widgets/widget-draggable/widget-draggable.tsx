import cx from 'classnames';
import React from 'react';
import { useDrag } from 'react-dnd';
// import WidgetCard from 'components/widgets/widget-card';
// import './widget-draggable.css';

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
        className={cx('widget-draggable', { dragging: isDragging })}
        ref={drag}
      >
        <img src={icon} alt={name} width={50} height={50}/>
        <span title={title}>{name}</span>
        {/*<WidgetCard type={category} name={name} />*/}
      </li>
    );
  };

export default WidgetDraggable;
