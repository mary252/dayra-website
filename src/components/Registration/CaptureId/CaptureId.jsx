import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import CameraComponent from './CameraComponent/CameraComponent';
import Footer from '../../Footer/Footer';

import './CaptureId.scss';

const CaptureId = () => {
  return (
    <Container className="bg-dark CaptureId with-footer">
      <Row className="mt-2">
        <Col className="mx-auto" xs={12}>
          <CameraComponent
            redirectUrl="/registration/id-confirm"
            title="IdFront.title"
            subtitle="CaptureId.subtitle"
          />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default CaptureId;
