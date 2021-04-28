import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../overmind';

import './ConfirmId.scss';

const ConfirmId = ({ title, subtitle, nextUrl }) => {
  const { state } = useOvermind();
  const { capturedImageUri } = state;
  const history = useHistory();

  return (
    <Container className="ConfirmId">
      <Row>
        <Col>
          <Row className="mt-2">
            <Col className="mx-auto" xs={12}>
              <div className="back-btn-container text-left">
                <button
                  className="btn"
                  onClick={() => {
                    goBack();
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </button>
              </div>
              <div className="top-container">
                <h1 className="primary-font title">
                  <Translation>{(t) => t(title)}</Translation>
                </h1>
              </div>
              <div className="mx-auto video-container">
                <img
                  className="mx-auto"
                  src={capturedImageUri}
                  style={{ display: 'flex', width: '80%' }}
                />
              </div>
              <div className="bottom-container">
                <h1 className="secondary-font subtitle">
                  <Translation>{(t) => t(subtitle)}</Translation>
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto btn-container" xs={12}>
              <Link to={nextUrl} className="btn btn-primary form-control">
                <Translation>{(t) => t('ConfirmId.confirm')}</Translation>
              </Link>
            </Col>
            <Col className="mx-auto btn-container" xs={12}>
              <button
                onClick={() => {
                  goBack();
                }}
                className="recapt-btn btn btn-light form-control"
              >
                <Translation>{(t) => t('ConfirmId.recapture')}</Translation>
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

  function goBack() {
    history.goBack();
  }
};

export default ConfirmId;
