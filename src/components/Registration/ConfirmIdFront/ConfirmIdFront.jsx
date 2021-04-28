import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import ConfirmId from '../ConfirmId/ConfirmId';

import './ConfirmIdFront.scss';

const ConfirmIdFront = () => {
  return (
    <Container className="ConfirmIdFront">
      <Row>
        <Col>
          <ConfirmId
            title="ConfirmId.title"
            subtitle="ConfirmId.subtitle"
            nextUrl="/registration/id-capture-back"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmIdFront;
