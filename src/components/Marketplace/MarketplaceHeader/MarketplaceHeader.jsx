import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import './MarketplaceHeader.scss';

const MarketplaceHeader = () => {
  return (
    <Row className="MarketplaceHeader">
      <Col xs={12}>
        <h1 className="title text-center">
          <Translation>{(t) => t('marketplace.title')}</Translation>
        </h1>
      </Col>
    </Row>
  );
};

export default MarketplaceHeader;
