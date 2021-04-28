import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

import Footer from '../../Footer/Footer';

import './IdFront.scss';

const IdFront = () => {
  return (
    <Container className="bg-dark IdFront">
      <Row className="mt-2">
        <Col xs={12}>
          <Card>
            <Card.Body className="with-footer">
              <Row>
                <Col xs={12} className="points-container mx-auto">
                  <h1 className="card-title primary-font text-left">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faIdCard} className="id-card" />
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Translation>{(t) => t('IdFront.title')}</Translation>
                  </h1>
                  <h2 className="card-subtitle secondary-font text-left">
                    <Translation>{(t) => t('IdFront.subtitle')}</Translation>
                  </h2>
                  <div className="point-container">
                    <h1 className="point-title text-primary secondary-font text-left">
                      <Translation>{(t) => t('IdFront.firstPoint')}</Translation>
                    </h1>
                    <h2 className="point-subtitle secondary-font text-left">
                      <Translation>{(t) => t('IdFront.firstPointsub')}</Translation>
                    </h2>
                  </div>
                  <div className="point-container">
                    <h1 className="point-title text-primary secondary-font text-left">
                      <Translation>{(t) => t('IdFront.secondPoint')}</Translation>
                    </h1>
                    <h2 className="point-subtitle secondary-font text-left">
                      <Translation>{(t) => t('IdFront.secondPointsub')}</Translation>
                    </h2>
                  </div>
                  <div className="point-container">
                    <h1 className="point-title text-primary secondary-font text-left">
                      <Translation>{(t) => t('IdFront.thirdPoint')}</Translation>
                    </h1>
                    <h2 className="point-subtitle secondary-font text-left">
                      <Translation>{(t) => t('IdFront.thirdPointsub')}</Translation>
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mx-auto" xs={12}>
                  <Link to="/registration/id-capture" className="btn btn-primary form-control">
                    <Translation>{(t) => t('IdFront.capture')}</Translation>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Footer />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IdFront;
