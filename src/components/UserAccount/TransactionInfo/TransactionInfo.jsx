import React, { useEffect } from 'react';

import { Col, Row, Card, Table } from 'react-bootstrap';
import { Trans, Translation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ArrowRight, Cart4, CashStack } from 'react-bootstrap-icons';

import { useOvermind } from '../../../overmind';
import { localizeNumber } from '../../../utils/localizeNumber';
import { formatNumber } from '../../../utils/formatNumber';

import './TransactionInfo.scss';

const TransactionInfo = () => {
  const { state, actions } = useOvermind();
  let history = useHistory();

  useEffect(() => {
    let url = window.location.href.split('/');

    let data = {
      TransactionID: url[url.length - 2],
      EntryID: url[url.length - 1],
    };
    if (url[url.length - 3] === 'current') {
      actions.loadCurrentTransaction(data);
      actions.loadCurrentTransactionDate(url[url.length - 2]);
    } else {
      actions.loadUpcomingTransaction(data);
      actions.loadUpcomingTransactionDate(url[url.length - 2]);
    }
  }, [actions]);

  const { userTransactionInfo, userTransactionDate } = state;

  function handleClick() {
    history.push('/account');
  }

  return (
    <Row className="UserTransactionInfoPage">
      <Col className="mx-auto" xs={11}>
        <div className="header-link">
          <button className="back" onClick={handleClick}>
            <ArrowRight className="arrowIcon" />
            <Translation>{(t) => t('back')}</Translation>
          </button>
        </div>
      </Col>
      <Col className="card-container mx-auto" xs={10}>
        {userTransactionInfo ? (
          <Card>
            <Card.Body>
              <Table borderless className="table-sm">
                <tbody>
                  <tr className="transaction-data">
                    <td className="icon-container">
                      {userTransactionInfo.type === 'incoming' ? (
                        <CashStack className="icon" />
                      ) : (
                        <Cart4 className="icon" />
                      )}
                    </td>
                    <td className="secondary-font type">
                      <Translation>
                        {(t) =>
                          userTransactionInfo.type === 'incoming'
                            ? t('UserAccountTransactionList.incoming')
                            : t('UserAccountTransactionList.outgoing')
                        }
                      </Translation>
                    </td>
                    <td className="amount secondary-font text-secondary">
                      <Translation>
                        {(t) =>
                          userTransactionInfo.type === 'incoming'
                            ? `${localizeNumber(formatNumber(userTransactionInfo.total))} ${t(
                                'egpShort',
                              )}`
                            : `${localizeNumber(formatNumber(userTransactionInfo.total))} ${t(
                                'egpShort',
                              )}`
                        }
                      </Translation>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-primary text-left date" colSpan="3">
                      {localizeNumber(userTransactionDate)}
                    </td>
                  </tr>
                  <tr>
                    <td className="secondary-font description" colSpan="3">
                      <Translation>{(t) => t('UserAccountTransactionInfo.text')}</Translation>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        ) : null}
      </Col>
    </Row>
  );
};

export default TransactionInfo;
