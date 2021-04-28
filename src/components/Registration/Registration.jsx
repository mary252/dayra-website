import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

import RegistrationRoutes from './RegistrationRoutes';

import './Registration.scss';

const Registration = () => {
  const { path } = useRouteMatch();

  return (
    <Row className="Registration">
      <Col xs={12}>
        <RegistrationRoutes baseUrl={path} />
      </Col>
    </Row>
  );
};

export default Registration;
