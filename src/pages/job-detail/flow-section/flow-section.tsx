import React from 'react';
import { useToggle } from 'hooks';
import { Drawer } from 'components/ui';
import { ServicesLoader } from 'components/ui/placeholder';
import FlowTab from './flow-tab';
import FlowDiagram from './flow-diagram';

interface Props {}

const FlowSection: React.FC<Props> = () => {
  const [openDrawer, toggleDrawer] = useToggle(false);

  return (
    <div className="flow-section">
      <FlowTab onAddServiceClick={toggleDrawer} />
      <FlowDiagram />
      <Drawer
        width={560}
        showMask={false}
        open={openDrawer}
        title="Drag Services from here"
        onClose={toggleDrawer}
      >
        <ServicesLoader />
      </Drawer>
    </div>
  );
};

export default FlowSection;
