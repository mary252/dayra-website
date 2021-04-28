import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import ConfirmId from '../ConfirmId/ConfirmId';

import './ConfirmIdBack.scss';

const ConfirmIdBack = () => {
  return (
    <Container className="ConfirmIdBack">
      <Row>
        <Col>
          <ConfirmId
            title="ConfirmIdBack.title"
            subtitle="ConfirmIdBack.subtitle"
            nextUrl="/registration/results"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmIdBack;
