import React from 'react';
import { WIDGETS } from 'common/constants';
import WidgetDraggable from 'components/widgets/widget-draggable';
import styles from './widgets-section.module.less';

interface Props {}

export const WidgetsSection: React.FC<Props> = () => {
  return (
    <div className={styles.section}>
      <div className={styles.list}>
        {WIDGETS.map((widget, index) => (
          <WidgetDraggable
            key={index}
            type={widget.type}
            name={widget.name}
            code={widget.code}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetsSection;
