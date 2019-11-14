import React from 'react';
import { useAuth } from 'hooks/auth';
import { Col, Row, Button, Headline, Container } from 'components/ui';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { logout } = useAuth();

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="nd-pageHead">
            <Headline>Dashboard Page</Headline>
          </div>
        </Col>
        <Col xs={12}>
          <Button onClick={() => logout()}>Logout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
