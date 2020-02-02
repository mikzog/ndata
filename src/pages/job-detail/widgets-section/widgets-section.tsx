import React from 'react';
import { WIDGET_CATEGORY, WIDGETS } from 'common/constants';
import WidgetDraggable from 'components/widgets/widget-draggable';

interface Props {}

export const WidgetsSection: React.FC<Props> = () => {
  return (
    <div className="nd-wrapper">
      <div className="widget widget-icons source">
        <h4>Source</h4>
        <ul>
          {WIDGETS.filter(widget => widget.category === WIDGET_CATEGORY.SOURCE)
            .map((widget, index) => (
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
      <div className="widget widget-icons transform">
        <h4>Transform</h4>
        <ul>
          {WIDGETS.filter(widget => widget.category === WIDGET_CATEGORY.TRANSFORM)
            .map((widget, index) => (
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
      <div className="widget widget-icons mapping">
        <h4>Mapping</h4>
        <ul>
          {WIDGETS.filter(widget => widget.category === WIDGET_CATEGORY.TARGET)
            .map((widget, index) => (
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
