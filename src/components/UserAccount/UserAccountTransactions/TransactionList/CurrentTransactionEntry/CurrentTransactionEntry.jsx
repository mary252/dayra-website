import React from 'react';
import { Translation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Cart4, CashStack } from 'react-bootstrap-icons';

import { formatNumber } from '../../../../../utils/formatNumber';
import { localizeNumber } from '../../../../../utils/localizeNumber';

import './CurrentTransactionEntry.scss';

const CurrentTransactionEntry = ({ key, transaction }) => {
  return (
    <>
      <div className="CurrentTransactionEntry ">
        <tr>
          <td className="text-primary text-left date" colSpan="3">
            <span>{localizeNumber(transaction.date)}</span>
          </td>
        </tr>

        {transaction.transactions?.map((curtransaction) => (
          <tr className="current-transaction no-border-top ">
            <Link to={`/account/current/${transaction.id}/${curtransaction.id}`}>
              <td className="icon-container">
                {curtransaction.type === 'incoming' ? (
                  <CashStack className="icon" />
                ) : (
                  <Cart4 className="icon" />
                )}
              </td>
              <td className="type secondary-font">
                <Translation>
                  {(t) =>
                    curtransaction.type === 'incoming'
                      ? t('UserAccountTransactionList.incoming')
                      : t('UserAccountTransactionList.outgoing')
                  }
                </Translation>
              </td>
              <td className="amount secondary-font">
                {curtransaction.type === 'incoming' ? (
                  <p className={'mb-0 text-secondary amount'}>
                    <Translation>
                      {(t) =>
                        `${localizeNumber(formatNumber(curtransaction.total))} ${t('egpShort')}`
                      }
                    </Translation>
                  </p>
                ) : (
                  <p className={' mb-0 amount-outgoing amount'}>
                    <Translation>
                      {(t) =>
                        `${localizeNumber(formatNumber(curtransaction.total))} ${t('egpShort')}`
                      }
                    </Translation>
                  </p>
                )}
              </td>
            </Link>
          </tr>
        ))}
      </div>
    </>
  );
};

export default CurrentTransactionEntry;
