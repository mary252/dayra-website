import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import HeaderCard from '../../common/HeaderCard/HeaderCard';
import TransactionList from './TransactionList/TransactionList';

import { useOvermind } from '../../../overmind';
import { localizeNumber } from '../../../utils/localizeNumber';
import { formatNumber } from '../../../utils/formatNumber';

import './UserAccountTransactionListPage.scss';

const UserAccountTransactionsListPage = () => {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.loadCurrentTransactions();
    actions.loadUpcomingTransactions();
  }, [actions]);

  const { balance, currentTransactions, UpcomingTransactions } = state;

  return (
    <Row className="UserAccountTransactionListPage">
      <Col className="header-card-container" xs={12}>
        <HeaderCard
          title={<Translation>{(t) => t('UserAccountHeaderCard.title')}</Translation>}
          subtitle={
            <Translation>
              {(t) => `${localizeNumber(formatNumber(balance))} ${t('egp')}`}
            </Translation>
          }
          titleFontSize={'14px'}
        />
      </Col>
      <Col className="list-container" xs={12}>
        <TransactionList
          currentTransactions={currentTransactions}
          upcomingTransactions={UpcomingTransactions}
        />
      </Col>
    </Row>
  );
};

export default UserAccountTransactionsListPage;
