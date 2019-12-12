import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Container, Button } from 'components/ui';
import { Content, PageHead, PageContent } from 'components/layout';
import { RootState } from '../../rootReducer';
import { Job, setJobs } from './job-list-slice';
import JobListTable from './job-list-table';
import JobListEmpty from './job-list-empty';

interface Props {}

async function getJobs() {
  return new Promise<Job[]>(resolve => {
    const MOCK_JOBS = require('mocks/job-list.json');
    return resolve(MOCK_JOBS as Job[]);
  });
}

export const JobList: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { page, jobs } = useSelector((state: RootState) => state.jobList);

  useEffect(() => {
    getJobs().then((jobs: any) => {
      dispatch(setJobs(jobs));
    });
  }, [page, jobs, dispatch]);

  return (
    <Content>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <PageHead
              headline="Job List"
              subHeadline="list of all your jobs you can stop, delete or create a new jobs by
              clicking on CTAs"
              extra={
                <Button className="nd-trans" color="blue">
                  + Create New Job
                </Button>
              }
            />
            <PageContent>
              {jobs ? <JobListTable jobs={jobs} /> : <JobListEmpty />}
            </PageContent>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default JobList;
