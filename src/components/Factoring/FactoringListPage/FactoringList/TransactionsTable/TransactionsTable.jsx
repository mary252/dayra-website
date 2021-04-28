import React from 'react';
import { Table } from 'react-bootstrap';

import TransactionEntry from '../TransactionEntry/TransactionEntry';
import ReceivableEntry from '../ReceivableEntry/ReceivableEntry';
import HistoricalTransactionEntry from '../HistoricalTransactionEntry/HistoricalTransactionEntry';

import './TransactionsTable.scss';

const TransactionsTable = ({ transactions, tab }) => {
  return (
    <div className="TransactionsTable">
      <Table>
        <tbody>
          {tab === 'transactions'
            ? transactions?.map((transaction) => (
                <TransactionEntry key={transaction.id} transaction={transaction} />
              ))
            : tab === 'receivables'
            ? transactions?.map((transaction) => (
                <ReceivableEntry key={transaction.id} transaction={transaction} />
              ))
            : transactions?.map((transaction) => (
                <HistoricalTransactionEntry key={transaction.id} transaction={transaction} />
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
