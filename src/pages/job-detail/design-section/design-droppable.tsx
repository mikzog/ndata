import cx from 'classnames';
import React from 'react';
import { useDrop } from 'react-dnd';
import { WIDGET_TYPE } from 'common/constants';
import { DesignAction } from 'pages/job-detail/job-detail-slice';
import './design-droppable.css';

interface Props {
  onDropped: (action: DesignAction) => void;
}

export const DesignDroppable: React.FC<Props> = ({ onDropped, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: [WIDGET_TYPE.SOURCE, WIDGET_TYPE.TRANSFORM, WIDGET_TYPE.TARGET],
    drop: onDropped,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={cx('design-droppable', { dropping: isOver })}>
      {children}
    </div>
  );
};

export default DesignDroppable;
