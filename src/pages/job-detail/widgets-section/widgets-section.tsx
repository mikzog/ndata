import React from 'react';
import { WIDGETS } from 'common/constants';
import WidgetDraggable from 'components/widgets/widget-draggable';
import './widgets-section.css';

// interface Widget {
//   id: number;
//   name: string;
//   type: string;
//   category: 'SOURCE' | 'TARGET' | 'TRANSFORM';
// }

interface Props {}

export const WidgetsSection: React.FC<Props> = () => {
  return (
    <div className="widgets-section">
      <div className="widgets-list">
        {WIDGETS.map((widget, index) => (
          <WidgetDraggable key={index} type={widget.type} name={widget.name} />
        ))}
      </div>
    </div>
  );
};

export default WidgetsSection;
