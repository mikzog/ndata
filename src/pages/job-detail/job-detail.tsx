import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import { Row, Col } from 'antd';
import { Container } from 'components/ui';
import { Content } from 'components/layout';

import { RootState } from '../../rootReducer';
import JobDetailHeader from './job-detail-header';
import DesignSection from './design-section';
import WidgetsSection from './widgets-section';
import PropertiesSection from './properties-section';
import 'assets/css/job-page-start-node.css';
import './job-detail.css';

interface Props {}

const JobDetail: React.FC<Props> = props => {
  const { name, state } = useSelector((state: RootState) => state.jobDetail);

  return (
    <DndProvider backend={Backend}>
      <Content className="nd-job-page-start-node">
        <Container fluid>
          <Row>
            <Col span={24}>
              <JobDetailHeader name={name} status={state} />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <WidgetsSection />
            </Col>
            <Col span={20}>
              <DesignSection />
              <PropertiesSection />
            </Col>
          </Row>
        </Container>
      </Content>
    </DndProvider>
  );
};

export default JobDetail;
