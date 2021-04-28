import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import CameraComponent from '../CaptureId/CameraComponent/CameraComponent';
import Footer from '../../Footer/Footer';

import './CaptureIdBack.scss';

const CaptureIdBack = () => {
  return (
    <Container className="bg-dark CaptureIdBack with-footer">
      <Row className="mt-2">
        <Col className="mx-auto" xs={12}>
          <CameraComponent
            redirectUrl="/registration/id-confirm-back"
            title="CaptureIdBack.title"
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

export default CaptureIdBack;
