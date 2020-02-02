import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import { Container } from 'components/ui';
import { Content } from 'components/layout';

import { RootState } from '../../rootReducer';
import JobDetailHeader from './job-detail-header';
import DesignSection from './design-section';
import WidgetsSection from './widgets-section';
import PropertiesSection from './properties-section';
import 'assets/css/job-page-start-node.css';

interface Props {}

const JobDetail: React.FC<Props> = props => {
  const { name, state } = useSelector((state: RootState) => state.jobDetail);

  return (
    <DndProvider backend={Backend}>
      <Content className="nd-content nd-job-page-start-node">
        <Container fluid>
          <div className="nd-row">
            <div className="nd-widget-aside">
              <span className="toggle-sidenav">
                <svg x="0px" y="0px" viewBox="0 0 240.823 240.823" width="14px"
                     height="14px">
                  <g>
                    <path id="Chevron_Right"
                          d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179   l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816   C52.942,116.507,52.942,124.327,57.633,129.007z"/>
                  </g>
                </svg>
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
