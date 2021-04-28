import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { Translation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './ConfirmationPage.scss';

const ConfirmationPage = () => {
  return (
    <Row className="ConfirmationPage">
      <Col className="mx-auto" xs={10}>
        <Row className="pb-5">
          <Col className="card-col" xs={12}>
            <Card>
              <Card.Body>
                <h1 className="text-center title">
                  <Translation>{(t) => t('ConfirmationPage.title')}</Translation>
                </h1>
                <div className="text-center mt-3 mb-0">
                  <CheckCircleFill color={'#54C9A7'} size={40} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <Link
              to="/landing"
              style={{ backgroundColor: '#8D8D8D' }}
              className="btn btn-grey form-control"
              variant="grey"
            >
              <Translation>{(t) => t('back')}</Translation>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ConfirmationPage;
