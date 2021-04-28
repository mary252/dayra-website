import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import TransactionsTable from './TransactionsTable/TransactionsTable';

import './TransactionList.scss';

const TransactionList = ({ currentTransactions, upcomingTransactions }) => {
  return (
    <div className="UserAccountList">
      <Card className="no-border-radius-bottom">
        <Card.Body>
          <Translation>
            {(t) => (
              <Tabs defaultActiveKey="transactions" id="UserTabs">
                <Tab eventKey="transactions" title={t('UserAccountTransactionList.transactions')}>
                  <div className="transactions-tab text-primary">
                    <TransactionsTable transactions={currentTransactions} type={'current'} />
                  </div>
                </Tab>
                <Tab eventKey="receivables" title={t('UserAccountTransactionList.upcoming')}>
                  <div className="transactions-tab text-primary">
                    <TransactionsTable transactions={upcomingTransactions} type={'upcoming'} />
                  </div>
                </Tab>
              </Tabs>
            )}
          </Translation>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TransactionList;
