import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useOvermind } from '../../../overmind';
import FactoringSliderForm from './FactoringSliderForm/FactoringSliderForm';
import './FactoringSliderPage.scss';

const FactoringSliderPage = () => {
  const { id } = useParams();

  const { state, actions } = useOvermind();
  useEffect(() => actions.loadTransaction(id), [actions, id]);

  const { transaction } = state;

  return (
    <Container className="FactoringSliderPage">
      <Row>
        <Col xs={12}>
          <h1 className="title text-center mb-3">
            <Translation>{(t) => t('FactoringSliderPage.title')}</Translation>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FactoringSliderForm transaction={transaction} />
        </Col>
      </Row>
    </Container>
  );
};

export default FactoringSliderPage;
