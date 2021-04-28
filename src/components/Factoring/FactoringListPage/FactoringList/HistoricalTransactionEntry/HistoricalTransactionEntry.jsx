import React from 'react';
import { Translation } from 'react-i18next';

import { formatNumber } from '../../../../../utils/formatNumber';
import { localizeNumber } from '../../../../../utils/localizeNumber';

const HistoricalTransactionEntry = ({ transaction }) => {
  return (
    <>
      <tr className="TransactionEntry primary-border">
        <td className="text-left" colSpan="2">
          <Translation>
            {(t) => (
              <span className="secondary-font">{t('HistoricalTransactionEntry.date')}:&nbsp;</span>
            )}
          </Translation>
          <span className="text-primary">{localizeNumber(transaction.date)}</span>
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
            <Translation>{(t) => t('HistoricalTransactionEntry.factoredAmount')}</Translation>
          </p>

          <p className="text-primary mb-0">{localizeNumber(formatNumber(transaction.remainder))}</p>
        </td>
      </tr>
    </>
  );
};

export default HistoricalTransactionEntry;
