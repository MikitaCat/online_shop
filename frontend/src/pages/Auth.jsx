import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/constants';

const stylesRow = {
  marginTop: '3px',
  paddingLeft: '3px',
  paddingRight: '3px',
};

function Auth() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-4" placeholder="Email" />
          <Form.Control className="mt-4" placeholder="Password" />
          <Row className="d-flex justify-content-between" style={stylesRow}>
            <div>
              Haven't an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
            </div>
            <Button
              style={{ width: '100px', marginTop: '10px', marginLeft: '6px' }}
              variant="outline-primary">
              Enter
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
