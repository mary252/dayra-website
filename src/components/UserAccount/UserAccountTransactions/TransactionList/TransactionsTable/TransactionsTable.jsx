import React from 'react';
import { Table } from 'react-bootstrap';

import CurrentTransactionEntry from '../CurrentTransactionEntry/CurrentTransactionEntry';
import UpcomingTransactionEntry from '../UpcomingTransactionEntry/UpcomingTransactionEntry';

const TransactionsTable = ({ transactions, type }) => {
  return (
    <div className="TransactionsTable">
      <Table>
        <tbody>
          {type === 'current'
            ? transactions?.map((transaction) => (
                <CurrentTransactionEntry key={transaction.id} transaction={transaction} />
              ))
            : transactions?.map((transaction) => (
                <UpcomingTransactionEntry key={transaction.id} transaction={transaction} />
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
