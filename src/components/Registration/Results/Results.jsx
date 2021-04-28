import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Translation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ResultsForm from './ResultsForm/ResultsForm';

import { useOvermind } from '../../../overmind';

import './Results.scss';

const Results = () => {
  const { state } = useOvermind();
  const { capturedImageUri } = state;
  const numberOfPicture = [capturedImageUri, capturedImageUri];

  return (
    <Container className="Results">
      <Row>
        <Col className="mx-auto" xs={12}>
          <h1 className="title text-left">
            <Translation>{(t) => t('Results.title')}</Translation>
          </h1>
          <Row>
            <Col className="mx-auto" xs={12}>
              <ScrollMenu
                className="mx-auto"
                alignCenter={false}
                wheel={false}
                data={numberOfPicture?.map((picture, index) => (
                  <div key={index} style={{ width: '200px' }}>
                    <img
                      src={picture}
                      style={{
                        display: 'flex',
                        width: '100%',
                        padding: '10px',
                        borderRadius: '15px',
                      }}
                    />
                  </div>
                ))}
              />
            </Col>
          </Row>
          <ResultsForm />
          <Row>
            <Col className="mx-auto btn-container" xs={12}>
              <Link to="/registration/selfie" className="btn btn-primary form-control">
                <Translation>{(t) => t('Results.next')}</Translation>
              </Link>
            </Col>
            <Col className="mx-auto btn-container" xs={12}>
              <Link to="/registration/id-capture" className="recapt-btn btn btn-grey form-control">
                <Translation>{(t) => t('ConfirmId.recapture')}</Translation>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
