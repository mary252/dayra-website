import React from 'react';
import { Translation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { formatNumber } from '../../../../../utils/formatNumber';
import { localizeNumber } from '../../../../../utils/localizeNumber';
import './TransactionEntry.scss';

const TransactionEntry = ({ transaction }) => {
  return (
    <>
      <tr className="TransactionEntry primary-border">
        <td className="text-left" colSpan="2">
          <Translation>
            {(t) => <span className="secondary-font">{t('TransactionEntry.date')}:&nbsp;</span>}
          </Translation>
          <span className="text-primary">{localizeNumber(transaction.date)}</span>
        </td>
        <td className="text-right" style={{ verticalAlign: 'bottom' }}>
          <Link to={`/factoring/${transaction.id}/amount`} className="btn btn-secondary">
            <Translation>{(t) => t('TransactionEntry.factor')}</Translation>
          </Link>
        </td>
      </tr>
      <tr className="TransactionEntry text-center hard-border">
        <td>
          <p className="secondary-font mb-2">
            <Translation>{(t) => t('TransactionEntry.invoices')}</Translation>
          </p>

          <p className="text-primary mb-0">
            {localizeNumber(formatNumber(transaction.invoicesCount))}
          </p>
        </td>
        <td>
          <p className="secondary-font mb-2">
            <Translation>{(t) => t('total')}</Translation>
          </p>

          <p className="text-primary mb-0">{localizeNumber(formatNumber(transaction.total))}</p>
        </td>
        <td>
          <p className="secondary-font mb-2">
            <Translation>{(t) => t('TransactionEntry.remainder')}</Translation>
          </p>

          <p className="text-primary mb-0">{localizeNumber(formatNumber(transaction.remainder))}</p>
        </td>
      </tr>
    </>
  );
};

export default TransactionEntry;
