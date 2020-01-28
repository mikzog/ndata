import React from 'react';
import { WIDGETS } from 'common/constants';
import WidgetDraggable from 'components/widgets/widget-draggable';

interface Props {}

export const WidgetsSection: React.FC<Props> = () => {
  return (
    <div className="nd-wrapper">
      <div className="widget widget-icons source">
        <h4>Source</h4>
        <ul>
          {WIDGETS.map((widget, index) => (
            <WidgetDraggable
              key={index}
              title={widget.title}
              type={widget.type}
              name={widget.name}
              category={widget.category}
              icon={widget.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WidgetsSection;
