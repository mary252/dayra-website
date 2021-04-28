import React from 'react';
import { Translation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Cart4, CashStack } from 'react-bootstrap-icons';

import { formatNumber } from '../../../../../utils/formatNumber';
import { localizeNumber } from '../../../../../utils/localizeNumber';

import './UpcomingTransactionEntry.scss';

const UpcomingTransactionEntry = ({ key, transaction }) => {
  return (
    <>
      <div className="UpcomingTransactionEntry ">
        <tr>
          <td className="text-primary text-left date" colSpan="3">
            <span>{localizeNumber(transaction.date)}</span>
          </td>
        </tr>

        {transaction.transactions?.map((curtransaction) => (
          <tr className="upcoming-transaction no-border-top">
            <Link to={`/account/upcoming/${transaction.id}/${curtransaction.id}`}>
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
              <td className="amount changed-amount secondary-font text-dark text-center">
                <p className="mb-0">
                  <Translation>
                    {(t) =>
                      `${localizeNumber(formatNumber(curtransaction.changed_value))} ${t(
                        'egpShort',
                      )}`
                    }
                  </Translation>
                </p>
              </td>
              <td className="amount secondary-font">
                {curtransaction.type === 'incoming' ? (
                  <p className={'mb-0 text-secondary'}>
                    <Translation>
                      {(t) =>
                        `${localizeNumber(formatNumber(curtransaction.total))} ${t('egpShort')}`
                      }
                    </Translation>
                  </p>
                ) : (
                  <p className={' mb-0 amount-outgoing'}>
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

export default UpcomingTransactionEntry;
