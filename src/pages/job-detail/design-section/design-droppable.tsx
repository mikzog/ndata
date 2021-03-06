import cx from 'classnames';
import React from 'react';
import { useDrop } from 'react-dnd';
import { WIDGET_CATEGORY } from 'common/constants';
import { IEntity } from 'pages/job-detail/job-detail-slice';
import './design-droppable.css';

interface Props {
  onDropped: (target: ITarget) => void;
}

export interface ITarget {
  type: string;
  data: IEntity | any;
}

export const DesignDroppable: React.FC<Props> = ({ onDropped, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: [
      WIDGET_CATEGORY.SOURCE,
      WIDGET_CATEGORY.TRANSFORM,
      WIDGET_CATEGORY.MAPPING,
    ],
    drop: onDropped,
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      id="scaleDiagram"
      ref={drop}
      className={cx('nd-diagram-container max-three', { dropping: isOver })}
    >
      {children}
    </div>
  );
};

export default DesignDroppable;
