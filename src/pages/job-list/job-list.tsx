import React from 'react';
import { Col, Row, Headline, Container, Button } from 'components/ui';

interface Props {}

export const JobList: React.FC<Props> = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="nd-pageHead">
            <Headline>Job List</Headline>
            <Button className="nd-trans" color="blue">
              + Create New Job
            </Button>
            <p>
              list of all your jobs you can stop, delete or create a new jobs by
              clicking on CTAs
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobList;
