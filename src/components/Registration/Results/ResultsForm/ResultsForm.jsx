import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../../overmind';

import './ResultsForm.scss';

const ResultsForm = () => {
  const { state, actions } = useOvermind();
  const { idResult } = state;

  useEffect(() => {
    actions.loadIdResult();
  }, []);

  return (
    <Container className="ResultsForm">
      <Row>
        <Col className="mx-auto" xs={12}>
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.name')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.name}</span>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: 'rgb(163, 162, 162)',
              height: '1px',
            }}
          />
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.idNumber')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.idNumber}</span>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: 'rgb(163, 162, 162)',
              height: '1px',
            }}
          />
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.birthDate')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.birthDate}</span>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: 'rgb(163, 162, 162)',
              height: '1px',
            }}
          />
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.address')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.address}</span>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: 'rgb(163, 162, 162)',
              height: '1px',
            }}
          />
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.gender')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.gender}</span>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: 'rgb(163, 162, 162)',
              height: '1px',
            }}
          />
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.maritalStatus')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.maritalStatus}</span>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: 'rgb(163, 162, 162)',
              height: '1px',
            }}
          />
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.job')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.job}</span>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: 'rgb(163, 162, 162)',
              height: '1px',
            }}
          />
          <Row style={{ padding: '5px' }}>
            <Col className="mx-auto text-left">
              <span className="subtitle text-left">
                <Translation>{(t) => t('Results.expiryDate')}</Translation> &nbsp;
              </span>
              <div className="float-right" style={{ paddingBottom: '2px' }}>
                <span className="secondary-font">{idResult?.expiryDate}</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ResultsForm;
