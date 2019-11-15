import React from 'react';
import { useToggle } from 'hooks';
import { Col, Row, Container, Button, Drawer } from 'components/ui';
import { Content, PageHead, PageContent } from 'components/layout';
import { NoData } from 'components/common';

interface Props {}

export const JobList: React.FC<Props> = () => {
  const [openDrawer, toggleDrawer] = useToggle(true);

  const handleCloseDrawer = (value: any) => {
    console.log({ value });
  };

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
                <Button color="blue" className="light">
                  + Create New Job
                </Button>
              </NoData>
            </PageContent>
            <Drawer
              open={openDrawer}
              title={`"flights_data" Job`}
              onClose={() => toggleDrawer()}
            >
              Hello World!
            </Drawer>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default JobList;
