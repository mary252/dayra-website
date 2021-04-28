import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

import MarketplaceRoutes from './MarketplaceRoutes';

import './Marketplace.scss';

const Marketplace = () => {
  const { path } = useRouteMatch();

  return (
    <Row className="Marketplace">
      <Col xs={12}>
        <MarketplaceRoutes baseUrl={path} />
      </Col>
    </Row>
  );
};

export default Marketplace;
