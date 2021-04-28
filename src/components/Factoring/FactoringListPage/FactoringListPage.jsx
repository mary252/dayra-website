import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../overmind';
import { formatNumber } from '../../../utils/formatNumber';
import { localizeNumber } from '../../../utils/localizeNumber';

import HeaderCard from '../../common/HeaderCard/HeaderCard';
import FactoringList from './FactoringList/FactoringList';
import './FactoringListPage.scss';

const FactoringListPage = () => {
  const { state } = useOvermind();
  const { transactions } = state;
  const total = transactions?.reduce((acc, transaction) => acc + transaction.remainder, 0) ?? 0;

  return (
    <Row className="FactoringListPage">
      <Col xs={12}>
        <h1 className="title">
          <Translation>{(t) => t('FactoringPage.title')}</Translation>
        </h1>
      </Col>
      <Col className="factoring-header-card-container" xs={12}>
        <HeaderCard
          title={<Translation>{(t) => t('FactoringHeaderCard.title')}</Translation>}
          subtitle={
            <Translation>{(t) => `${localizeNumber(formatNumber(total))} ${t('egp')}`}</Translation>
          }
          titleSecondary
        />
      </Col>
      <Col className="factoring-list-container" xs={12}>
        <FactoringList transactions={transactions} />
      </Col>
    </Row>
  );
};

export default FactoringListPage;
