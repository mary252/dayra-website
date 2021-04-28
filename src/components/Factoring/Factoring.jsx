import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

import FactoringRoutes from './FactoringRoutes';

import './Factoring.scss';

const Factoring = () => {
  const { path } = useRouteMatch();

  return (
    <Row className="Factoring">
      <Col xs={12}>
        <FactoringRoutes baseUrl={path} />
      </Col>
    </Row>
  );
};

export default Factoring;
