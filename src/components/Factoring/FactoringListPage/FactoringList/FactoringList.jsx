import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import TransactionsTable from './TransactionsTable/TransactionsTable';

import './FactoringList.scss';

const FactoringList = ({ transactions }) => {
  return (
    <div className="FactoringList">
      <Card>
        <Card.Body>
          <Translation>
            {(t) => (
              <Tabs defaultActiveKey="transactions" id="factoringTabs">
                <Tab eventKey="transactions" title={t('FactoringList.transactions')}>
                  <div className="transactions-tab text-secondary">
                    <TransactionsTable tab="transactions" transactions={transactions} />
                  </div>
                </Tab>
                <Tab eventKey="receivables" title={t('FactoringList.receivable')}>
                  <div className="receivables-tab">
                    <TransactionsTable tab="receivables" transactions={transactions} />
                  </div>
                </Tab>
                <Tab
                  eventKey="previous-transactions"
                  title={t('FactoringList.previousTransactions')}
                >
                  <div className="previous-transactions-tab">
                    <TransactionsTable tab="history" transactions={transactions} />
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

export default FactoringList;
