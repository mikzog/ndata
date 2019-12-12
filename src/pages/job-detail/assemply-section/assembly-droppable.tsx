import cx from 'classnames';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { WIDGET_TYPE } from 'common/constants';
import './assembly-droppable.css';

interface Props {}

export const AssemblyDroppable: React.FC<Props> = () => {
  const [widgets, setWidget] = useState([]);
  const handleDrop = (item: any) => {
    setWidget(widgets.concat(item));
  };

  const [{ isOver }, drop] = useDrop({
    accept: [WIDGET_TYPE.SOURCE, WIDGET_TYPE.TRANSFORM, WIDGET_TYPE.TARGET],
    drop: handleDrop,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={cx('assembly-droppable', { dropping: isOver })}>
      <div style={{ minHeight: 60 }}>
        {widgets.length ? `Count: ${widgets.length}` : `Drop here`}
      </div>
      <hr />
      <div>
        <code>{JSON.stringify(widgets)}</code>
      </div>
    </div>
  );
};

export default AssemblyDroppable;
