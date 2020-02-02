import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import cx from 'classnames';

import { Container } from 'components/ui';
import { Content } from 'components/layout';
import { ArrowLeftIcon } from 'components/ui/icons'
import { RootState } from '../../rootReducer';
import JobDetailHeader from './job-detail-header';
import DesignSection from './design-section';
import WidgetsSection from './widgets-section';
import PropertiesSection from './properties-section';
import 'assets/css/job-page-start-node.css';

interface Props {}

const JobDetail: React.FC<Props> = props => {
  const { name, state } = useSelector((state: RootState) => state.jobDetail);
  const [ collapsed, setCollapsed ] = useState(false);

  const toggleSide = () => {
    setCollapsed(!collapsed)
  };

  return (
    <DndProvider backend={Backend}>
      <Content className={
        cx('nd-content nd-job-page-start-node nd-start-job', {
          'minimize-nd-widget-aside': collapsed
        })
      }
      >
        <Container fluid>
          <div className="nd-row">
            <div className="nd-widget-aside">
              <span className="toggle-sidenav" onClick={toggleSide}>
                <ArrowLeftIcon/>
              </span>
              <WidgetsSection/>
            </div>
            <div className="nd-main-area">
              <div className="nd-wrapper">
                <div className="ndxs-12">
                  <JobDetailHeader name={name} status={state} />
                </div>
                <div className="ndxs-12">
                  <div className="nd-wrapper">
                    <div className="nd-contentMain full">
                      <DesignSection/>
                      <PropertiesSection/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Content>
    </DndProvider>
  );
};

export default JobDetail;
