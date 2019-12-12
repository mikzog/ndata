import _find from 'lodash/find';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import { PlayIcon, TrashIcon } from 'components/ui/icons';
import { Col, Row, Container, Button } from 'components/ui';
import { Content, PageHead } from 'components/layout';
import { NoData } from 'components/common';

import MOCK_JOBS from 'mocks/job-list.json';

import WidgetsSection from './widgets-section';
import AssemblySection from './assemply-section';
import SettingSection from './setting-section';
import 'assets/css/job-page-start-node.css';
import './job-detail.css';

interface Props {}

function fetchJob(id?: string) {
  return new Promise((resolve, reject) => {
    const job = _find(MOCK_JOBS, { id });
    return job ? resolve(job) : reject('Job not found');
  });
}

const JobDetail: React.FC<Props> = props => {
  const { id } = useParams();
  const [job, setJob] = useState();

  useEffect(() => {
    fetchJob(id).then(setJob);
  }, [id]);

  if (!job) {
    return (
      <Content>
        <Container fluid>
          <NoData title="No Job Found!" />
        </Container>
      </Content>
    );
  }

  return (
    <DndProvider backend={Backend}>
      <Content className="nd-job-page-start-node">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <PageHead
                headline={job.name}
                subHeadline={
                  <>
                    <span className="status-color yellow" />
                    Status: {job.status}
                  </>
                }
                extra={
                  <>
                    <Button className="nd-trans" color="blue">
                      <PlayIcon /> Run Job
                    </Button>
                    <Button className="nd-trans" color="grey">
                      <TrashIcon height="14" /> Delete
                    </Button>
                  </>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <WidgetsSection />
            </Col>
            <Col xs={10}>
              <AssemblySection />
              <SettingSection />
            </Col>
          </Row>
        </Container>
      </Content>
    </DndProvider>
  );
};

export default JobDetail;
