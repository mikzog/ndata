import React from 'react';
import { useToggle } from 'hooks';
import { Col, Row, Container, Button, Drawer } from 'components/ui';
import { Content, PageHead, PageContent } from 'components/layout';
import { NoData } from 'components/common';
import CreateJob from './create-job';

interface Props {}

export const JobList: React.FC<Props> = () => {
  const [openDrawer, toggleDrawer] = useToggle(true);

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
                <Button
                  className="nd-trans"
                  color="blue"
                  onClick={toggleDrawer}
                >
                  + Create New Job
                </Button>
              }
            />
            <PageContent>
              <NoData
                title="No Job!"
                description="You haven’t created any job yet! Please click on the button below to start a new job"
              >
                <Button color="blue" className="light" onClick={toggleDrawer}>
                  + Create New Job
                </Button>
              </NoData>
            </PageContent>
            <Drawer
              open={openDrawer}
              title="Create New Job"
              onClose={toggleDrawer}
            >
              <CreateJob />
            </Drawer>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default JobList;
