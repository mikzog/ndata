import React from 'react';
import { useAuth } from 'common/hooks/use-auth';
import { Col, Row, Button, Container } from 'components/ui';
import { Content, PageHead } from 'components/layout';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { logout } = useAuth() || {};

  return (
    <Content>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <PageHead headline="Dashboard Page">
              <Button
                color="blue"
                className="nd-trans"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </PageHead>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Home;
