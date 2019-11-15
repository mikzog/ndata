import React from 'react';
import { Content } from 'components/layout';
import { Container, Row, Col } from 'components/ui';
import { PageLoader } from 'components/ui/placeholder';

interface SourceProps {}

export const Source: React.FC<SourceProps> = () => {
  return (
    <Content>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <PageLoader />
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Source;
