import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Translation } from 'react-i18next';

import './SelectId.scss';

const SelectIdPage = () => {
  return (
    <Container className="SelectIdPage">
      <Row className="main">
        <Col xs={12}>
          <Row className="select-id-header">
            <Col className="col" xs={12}>
              <h1 className="title text-left">
                <Translation>{(t) => t('SelectIdPage.title')}</Translation>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Link
                to="registration/identification"
                className="btn btn-light id-button float-left primary-font"
              >
                <div className="icon-container text-left">
                  <FontAwesomeIcon icon={faIdCard} className="id-card" />
                </div>
                <div className="id-text text-left">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Translation>{(t) => t('SelectIdPage.selectId')}</Translation>
                </div>
                <div className="arrow-container float-right">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectIdPage;
